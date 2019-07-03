import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/reducers/authReducer'

class Account extends Component {
    constructor(props){
        super(props);

        this.state = {
            businesses: [],
            owner_id: 0
        };
    }

    componentDidMount() {
        axios.get(`/auth/user/businesses?businesses=${this.props.match.params.owner_id}`) 
        .then(res => {
            this.setState({
                businesses: res.data
            })
        })
    }



    render() {
        const mappedBusinesses = this.state.businesses.map((business) => {
            return(
                <div>{business.name}</div>
            )
        })
        return(
            <div>
                {!this.props.user &&
                    <div>
                        <div></div>
                        <button>Manage Favorites</button>
                        <Link to='/account/createBusiness'>Register Business</Link>
                        <button>Delete Account</button>
                        {mappedBusinesses}
                    </div>
                }
            </div>
            
        )
    }
}

// Make it so only the user that the business is registered to can make changes 

let mapStateToProps = state => {
    return {
        user: state.authReducer.user_id
    }
}

export default connect(mapStateToProps, {updateUser})(Account)