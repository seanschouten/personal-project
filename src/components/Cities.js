import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Cities extends Component {
    render() {
        return(
            <div>
                <Link>Salt Lake City</Link>
                <Link>Minneapolis</Link>
                <Link>Seattle</Link>
            </div>
        )
    }
}