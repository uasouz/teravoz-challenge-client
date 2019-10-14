export const listCallsResponse = (data: any) => ({type: 'LIST_CALLS_RESPONSE', data: data});

const calls = {list: [], eventsMap: {}};

export const listCalls = (state = "ONGOING") => {
    return {type: "LIST_CALLS", data: {params: {state: state}}}
};

export const listCallEvents = (call_id: string) => {
    return {type: "LIST_CALL_EVENTS", data: {call_id: call_id}}
};

export const callsReducer = (state = {...calls}, action: any) => {
    switch (action.type) {
        case 'LIST_CALLS_RESPONSE':
            return {...state, list: action.data};
        case 'LIST_CALL_EVENTS_RESPONSE':
            const aggregate_id = action.data[0] ? action.data[0].aggregate_id : 0;
            if (aggregate_id!==0){
                return {...state, eventsMap: {...state.eventsMap, ...{[aggregate_id]: action.data}}};
            }
            return {... state};
        default:
            return state;
    }
};