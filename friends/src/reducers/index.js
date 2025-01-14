import { GET_TOKEN, GET_FRIENDS,SUCCESS, LOADING, CLEAR, UPDATE_FRIEND, ERROR } from "../actions";

const initState={
    friends: null,
    username:'Lambda School',
    token:false,
    logging:false,
    error:null,
    loading:false,
    editing:null
}

export default (state=initState, action)=>{
    switch (action.type) {
        case GET_TOKEN:
            return {...state,logging:true,error:null}
        case SUCCESS:
            return {...state,logging:false,token:action.payload}
        case GET_FRIENDS:
            return {...state,friends:action.payload, loading:false, editing:null}
        case UPDATE_FRIEND:
            return {...state,editing:action.payload}
        case LOADING:
            return {...state,loading:true}
        case CLEAR:
            return {...state,editing:null}
        case ERROR:
            return {...state,logging:false,error:action.payload}
        default:
            return state
    }
}