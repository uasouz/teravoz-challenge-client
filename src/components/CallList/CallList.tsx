import React from 'react'
import {connect} from 'react-redux';
import "./CallList.css"
import CallItem from "./sub-components/CallItem";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {Call} from "../../models/Call";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }, paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const CallList = ({calls, filteredState = "ONGOING", dispatch}: { calls: any, filteredState: string, dispatch: any }) => {
    const classes = useStyles();
    const callListBody = () => {
        if (calls.length === 0) {
            return <Typography>Empty List</Typography>
        } else {
            return <Grid className={"callList"}
                         spacing={2}
                         container
                         direction="column"
                         justify="center"
                         alignItems="center">
                {calls}
            </Grid>
        }
    };
    return (
        <Paper className={classes.root}>
            <Typography>{filteredState} Calls</Typography>
            {
                callListBody()
            }
        </Paper>)
};

const mapStateToProps = (state: any, ownProps: any) => {
    const {filteredState} = ownProps;
    return ({
        calls: state.calls.list
            .filter((call: Call) => {
                return call.state === filteredState
            })
            .map((value: any, index: string | number | undefined) => {
                return <CallItem call={value} key={value.id}/>
            })
    });
};


export default connect(mapStateToProps)(CallList);