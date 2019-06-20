import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter as Router,Route,withRouter} from 'react-router-dom'
import withAuth from './auth/withAuth'
import FriendsList from './components/Container'
import Login from './components/Login'


const PrivateRoute=withRouter(withAuth)

function App(props) {

  const logging=useSelector(state=>state.logging)
  const error=useSelector(state=>state.error)

  if(logging){
    return(<h2 className="login">Logging in</h2>)
  }
  return (
    <div className="app">
      <Router>
        {error && <h2 className="error">Error: {error}</h2>}
        <PrivateRoute exact path='/' comp={FriendsList} />
        <Route path="/login" component={Login}/>
      </Router>
    </div>
  );
}

export default App;
