import React, {Component} from 'react'

export default class Account extends Component {
    render() {
        return(
            <div>Account
                <button>Register Business</button>
                <button>Manage Favorites</button>
                <button>Delete Account </button>
            </div>
            
        )
    }
}


// On front end, when logged in, user can create a business
// click 'register business'
// a form comes up, asking business name, address, and city dropdown.
// add a description
// handle events including typing
// a submit form sits at the bottom and submits business into 
// db owner_id referencing user_id 