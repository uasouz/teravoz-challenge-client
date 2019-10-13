
export const listCallsResponse = (data: any) => ({ type: 'LIST_CALLS_RESPONSE', data: data });

const callsList = {list: []};

export const listCalls = (state = "ONGOING") => {
    return {type: "LIST_CALLS", data: {params: {state: state}}}
};

export const callsReducer = (state = { ...callsList }, action: any) => {
    // console.log("callsReducer",action);
    switch (action.type) {
        case 'LIST_CALLS_RESPONSE':
            return { ...state, list: action.data };
        case 'LIST_CALL_EVENTS_RESPONSE':
            return { ...state, list: action.data };
        default:
            return state;
    }
};