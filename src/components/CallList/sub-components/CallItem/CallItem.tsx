import React from 'react'
import "./CallItem.css"
import {Call} from "../../../../models/Call";

const CallItem = ({call}: {call: Call}) => {
    return (<div className="call">
        <p>{call.aggregate_id}</p>
        <p>{call.state}</p>
        <p>{call.id}</p>
    </div>)
};

export default CallItem