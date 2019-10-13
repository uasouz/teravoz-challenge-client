import { combineReducers } from 'redux';
import { websocketReducer } from './websocket';
import {callsReducer} from "./calls";

const rootReducer = combineReducers({
    calls: callsReducer,
    websocket: websocketReducer,
});

export default rootReducer;