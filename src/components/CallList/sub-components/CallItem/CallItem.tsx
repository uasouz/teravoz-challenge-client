import React from 'react'
import "./CallItem.css"
import {Call} from "../../../../models/Call";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        width: "90%",
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const CallItem = ({call}: { call: Call }) => {
    const classes = useStyles();
    return (<Grid item className="call">
        <Paper className={classes.paper}>
            <Typography>{`Call ID: ${call.aggregate_id}`}</Typography>
            <Typography>{`State: ${call.state}`}</Typography>
        </Paper>
    </Grid>)
};

export default CallItem