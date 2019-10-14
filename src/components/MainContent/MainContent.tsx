import React from "react"
import "./MainContent.css"
import CallList from "../CallList";
import store from "../../modules/store";
import {Grid, Typography} from "@material-ui/core";

const MainContent = () => {
    console.log("State", store.getState());
    return (
        <main className="Main">
            <Typography variant={"h4"}>Click on a call to see its Events</Typography>
            <Grid className={"dashboard"}
                  spacing={2}
                  container
                  direction="row"
                  justify={"center"}
                  alignItems="stretch">
                <CallList filteredState={"NEW"}/>
                <CallList filteredState={"STANDBY"}/>
                <CallList filteredState={"WAITING"}/>
                <CallList filteredState={"ONGOING"}/>
                <CallList filteredState={"FINISHED"}/>
            </Grid>
        </main>
    )
};

export default MainContent