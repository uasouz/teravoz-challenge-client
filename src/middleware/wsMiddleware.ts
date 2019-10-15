import * as actions from '../modules/websocket';
import {listCalls, listCallsResponse} from "../modules/calls";

const socketMiddleware = () => {
    let websocket: WebSocket | null;

    const onOpen = (store: any) => (event: any) => {
        store.dispatch(actions.wsConnected(event.target.url));
        store.dispatch(listCalls("FINISHED"))
    };

    const onClose = (store: any) => () => {
        store.dispatch(actions.wsDisconnected(""));
    };

    const onMessage = (store: any) => (event: any) => {
        const payload = JSON.parse(event.data);
        switch (payload.event) {
            case 'ListCalls':
                store.dispatch(listCallsResponse(payload.data));
                break;
            case 'DataChanged':
                store.dispatch(listCalls());
                break;
            case 'ListCallEvents':
                store.dispatch({type: "LIST_CALL_EVENTS_RESPONSE",data: payload.data});
                break;
            default:
                console.log(payload);
                break;
        }
    };

    return (store: any) => (next: any) => (action: any) => {
        console.log(action);
        switch (action.type) {
            case 'WS_CONNECT':
                if (websocket !== null && websocket !== undefined) {
                    websocket.close();
                }

                // connect to the remote host
                websocket = new WebSocket(action.host);

                // websocket handlers
                websocket.onmessage = onMessage(store);
                websocket.onclose = onClose(store);
                websocket.onopen = onOpen(store);

                break;
            case 'WS_DISCONNECT':
                if (websocket !== null && websocket !== undefined) {
                    websocket.close();
                }
                websocket = null;
                break;
            case 'LIST_CALLS':
                websocket!!.send(JSON.stringify({
                    "event": "ListCalls",
                    "data": {
                        "params": {
                            // "state": action.data.params.state
                        }
                    }
                }));
                break;
            case 'LIST_CALL_EVENTS':
                websocket!!.send(
                    JSON.stringify({
                        event: 'ListCallEvents',
                        data: {
                            call_id: action.data.call_id
                        },
                    }),
                );
                break;
            default:
                return next(action);
        }
    };
};

export default socketMiddleware();