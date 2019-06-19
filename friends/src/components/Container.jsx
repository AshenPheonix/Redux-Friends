import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getFriends} from '../actions'
import Friend from './Friend'
import Form from './Form'
import '../sass/list.scss'

function FriendsList() {
    const friends=useSelector(state=>state.friends)
    const username=useSelector(state=>state.username)
    const loading=useSelector(state=>state.loading)
    const dispatch=useDispatch()

    
    useEffect(()=>{
        if(!friends && !loading){
            console.log('running');
            dispatch(getFriends())
        }
    })

    return (
        <div>
            <h2>Hello {username}</h2>
            <section className="container">
                {!loading &&
                    <section className="friends">
                        {(loading && <h2>Loading</h2>)}
                        {friends && friends.map(friend=>(
                            <Friend
                                key={friend.id}
                                {...friend}
                            />
                        ))}

                    </section>
                }
                {loading && <h2 className="friends">Loading, please wait</h2>}
                    <section className="form">
                        <Form/>
                    </section>
            </section>
        </div>
    )
}

export default FriendsList
