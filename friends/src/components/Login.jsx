import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../actions'

function Login(props) {
    const dispatch=useDispatch()
    const token=useSelector(state=>state.token)

    const Log=e=>{
        dispatch(login())
    }

    if(token){
        props.history.push('/')
    }
    return (
        <div>
            <button onClick={Log}>Login</button>
        </div>
    )
}

export default Login
