import React from "react"
import "./MainContent.css"
import CallList from "../CallList";
import store from "../../modules/store";
import {Grid} from "@material-ui/core";

const MainContent = () => {
    console.log("State", store.getState());
    return (
        <main className="Main">
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