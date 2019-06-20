import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {clear,addFriend,editFriend} from '../actions'
import '../sass/friendForm.scss'

function FriendForm() {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')
    const [id,setId]=useState(null)
    const editing=useSelector(state=>state.editing)

    if(editing && id!=editing.id){
        setName(editing.name)
        setAge(editing.age)
        setEmail(editing.email)
        setId(editing.id)
    }

    const dispatch=useDispatch();

    const submit=e=>{
        e.preventDefault()
        let temp={
            name,
            age,
            email
        }

        if(id){
            dispatch(editFriend({...temp,id}))
        }else if(name!=='',age!=='',email!==''){
            dispatch(addFriend(temp))
        }else
            return;
        empty();
    }

    const empty=e=>{
        setName('')
        setAge('')
        setEmail('')
        setId(null)
        dispatch(clear())
    }

    return (
        <form onSubmit={submit} className="friendForm">
            {editing && <h2>Editing {editing.name}</h2>}
            <label htmlFor="name">Name: <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/></label>
            <label htmlFor="age">Age: <input type="number" name="age" value={age} onChange={e=>setAge(e.target.value)} placeholder="Age"/></label>
            <label htmlFor="email">Email: <input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/></label>
            <button type="submit">Submit</button>
            <button onClick={empty}>Clear</button>
        </form>
    )
}

export default FriendForm
