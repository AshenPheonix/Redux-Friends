import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../actions'
import '../sass/loginForm.scss'

function Login(props) {
    const dispatch=useDispatch()
    const token=useSelector(state=>state.token)

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const error=useSelector(state=>state.error)

    useEffect(()=>{
        if(localStorage.getItem('token') && token===''){
    
        }
    })


    const Log=e=>{
        e.preventDefault()
        dispatch(login({
            username,
            password
        }))
    }

    if(token){
        props.history.push('/')
    }

    return (
        <form onSubmit={Log}>
            <div className='loginForm'>
                <label htmlFor="username">Username: <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/></label>
                <label htmlFor="password">Password: <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/></label>
                <button onClick={Log}>Login</button>
            </div>
        </form>
    )
}

export default Login
