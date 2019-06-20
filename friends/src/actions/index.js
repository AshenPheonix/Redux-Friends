import axios from 'axios'
import { LOGIN, ALL, ONE } from '../support/endpoints'

export const GET_FRIENDS="GET_FRIENDS"
export const GET_TOKEN="GET_TOKEN"
export const GET_FRIEND="GET_FRIEND"
export const ADD_FRIEND="ADD_FRIEND"
export const UPDATE_FRIEND="UPDATE_FRIEND"
export const REMOVE_FRIEND="REMOVE_FRIEND"
export const ERROR="ERROR"
export const SUCCESS="SUCCESS"
export const LOADING='LOADING'
export const CLEAR='CLEAR'

export const login=creds=>dispatch=>{
    dispatch({type:GET_TOKEN})
    
    let request = axios.post(LOGIN,{username:creds.username, password:creds.password})
    request.then(data=>{
        localStorage.setItem('token',data.data.payload)
        axios.defaults.headers.common['Authorization']=data.data.payload;
        dispatch({type:SUCCESS,payload:data.data.payload})
    }).catch(err=>{
        dispatch({type:ERROR,payload:err.response.data.error})
    })
}

export const getFriends=()=>dispatch=>{
    dispatch({type:LOADING})
    let request=axios.get(ALL)
    request.then(data=>{
        dispatch({type:GET_FRIENDS,payload:data.data})
    }).catch(err=>{
        dispatch({type:ERROR,payload:err.response.data.error})
    })
}

export const removeFriend=id=>dispatch=>{
    dispatch({type:LOADING})
    let request=axios.delete(`${ONE}${id}`)
    request.then(data=>{
        dispatch({type:GET_FRIENDS,payload:data.data})
    }).catch(err=>{
        dispatch({type:ERROR,payload:err.response.data.error})
    })
}

export const clear=e=>{
    return {type:CLEAR}
}

export const addFriend=e=>dispatch=>{
    dispatch({type:LOADING})
    let request=axios.post(ALL,e)
    request.then(data=>{
        dispatch({type:GET_FRIENDS,payload:data.data})
    }).catch(err=>{
        dispatch({type:ERROR,payload:err.response.data.error})
    })
}

export const editFriend=e=>dispatch=>{
    dispatch({type:LOADING})
    let request=axios.put(`${ONE}${e.id}`,e)
    request.then(data=>{
        dispatch({type:GET_FRIENDS,payload:data.data})
    }).catch(err=>{
        dispatch({type:ERROR,payload:err.response.data.error})
    })
}

export const updateFriend=e=>{
    return{type:UPDATE_FRIEND,payload:e}
}