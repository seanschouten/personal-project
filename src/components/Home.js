import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'


export default class Home extends Component {
    render(){
        return(
            <div>
                <div>Home</div>
                <Link>Logout</Link>
            </div>
        )
    }
}