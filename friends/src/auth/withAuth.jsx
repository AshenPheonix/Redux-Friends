import React,{Component} from 'react'
import {Redirect,Route} from 'react-router-dom'
import { connect } from 'react-redux'

class withAuth extends Component{
    constructor({props,}) {
        super(props)
    }
    
    render(){
        let Comp=this.props.comp
        return(
            <Route
                {...this.props}
                render={ props=>{
                    if(this.props.token!==false){
                        return <Comp />
                    }
                    else{
                        return (
                            <Redirect to={{
                                pathname:'/login',
                                state:{from:props.location}
                            }} />
                        )
                    }
                }}
            />
            // <div></div>
        )
    }
}

const mapStateToProps = state => ({
    token:state.token
})


export default connect(mapStateToProps, {})(withAuth)