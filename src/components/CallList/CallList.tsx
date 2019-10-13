import React, {Component} from 'react'
import {connect} from 'react-redux';
import "./CallList.css"
import CallItem from "./sub-components/CallItem";
import {wsConnect} from "../../modules/websocket";

class CallList extends Component<{ calls: any, dispatch: any }> {
    componentDidMount(): void {
        const { dispatch } = this.props;
        const host = `ws://127.0.0.1:4000`;
        dispatch(wsConnect(host));
    }

    render() {
        let {calls} = this.props;
        return (<div className="callList">
            {
                calls.list.map((value: any, index: string | number | undefined) => {
                    return <CallItem call={value} key={value.id}/>
                })
            }
        </div>)
    }
}

const mapStateToProps = (state: any) => ({calls: state.calls});


export default connect(mapStateToProps)(CallList);