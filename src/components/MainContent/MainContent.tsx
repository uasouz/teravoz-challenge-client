import React from "react"
import "./MainContent.css"
import CallList from "../CallList";
import store from "../../modules/store";

const MainContent = () => {
    console.log("State",store.getState());
    return (
        <main className="Main">
            <CallList/>
        </main>
    )
};

export default MainContent