import React from 'react'
import {useDispatch} from 'react-redux'
import {removeFriend, updateFriend} from '../actions'
import '../sass/friend.scss'

function Friend(props) {
    const dispatch=useDispatch()

    const kill=e=>{
        dispatch(removeFriend(props.id))
    }

    const update=e=>{
        dispatch(updateFriend({
            ...props
        }))
    }

    return (
        <div className="friendCard">
            <section>
                <h2>{props.name}</h2>
                <ul>
                    <li className="none">Age: {props.age}</li>
                    <li className="none">Email: {props.email}</li>
                </ul>
            </section>
            <section>
                <button onClick={kill}>Delete</button>
                <button onClick={update}>Edit</button>
            </section>
        </div>
    )
}

export default Friend
