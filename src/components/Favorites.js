import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {addFavorite, clearFavorite} from './../redux/reducers/favsReducer'

export default class Favorites extends Component {
    render(){
        return(
            <div>Favorites</div>
        )
    }
}