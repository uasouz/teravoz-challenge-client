import React from 'react'
import "./CallItem.css"
import {connect} from 'react-redux';
import {Call} from "../../../../models/Call";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import {listCallEvents} from "../../../../modules/calls";


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        maxHeight: "65%",
        top: `${top}%`,
        left: `${left}%`,
        overflow: "scroll",
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    modalPaper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const CallItem = ({call, events, dispatch}: { call: Call, events: any[], dispatch: any }) => {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        dispatch(listCallEvents(call.aggregate_id));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<Grid item className="call">
        <Paper className={classes.paper} onClick={handleOpen}>
            <Typography>{`Call ID: ${call.aggregate_id}`}</Typography>
            <Typography>{`State: ${call.state}`}</Typography>
        </Paper>
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div style={modalStyle} className={classes.modalPaper}>
                <Typography variant={"h5"}>{`Call ${call.aggregate_id} Events`}</Typography>
                {events
                    .map((value: any, index: string | number | undefined) => {
                        const event = Object.entries(value.event).map((innerValue: any, index: string | number | undefined) => {
                            return <Typography>{`Event ${innerValue[0]}: ${innerValue[1]}`}</Typography>
                        });
                        return <Paper className={classes.paper} key={value.uuid}>
                            <Typography>{`Event UUID: ${value.uuid}`}</Typography>
                            {event}
                        </Paper>
                    })}
            </div>
        </Modal>
    </Grid>)
};

const mapStateToProps = (state: any, ownProps: any) => {
    const {call} = ownProps;
    const callEvents = state.calls.eventsMap[call.aggregate_id] ? state.calls.eventsMap[call.aggregate_id] : [];
    return ({
        events: callEvents
    });
};

export default connect(mapStateToProps)(CallItem)