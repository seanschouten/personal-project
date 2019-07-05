import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/reducers/authReducer'
import EditBusiness from './EditBusiness'

class Account extends Component {
    constructor(props){
        super(props);

        this.state = {
            businesses: [],
            owner_id: 0,
            business_id: 0
        };
    }

    componentDidMount() {
        axios
            .get(`/api/user/businesses?businesses=${this.props.match.params.owner_id}`) 
            .then(res => {
        this.setState({
                businesses: res.data
            })
        })
    }

    handleClick = (e) => {
        this.setState({
            business_id: +e.target.name
        })
    }



    render() {
        const mappedBusinesses = this.state.businesses.map((business) => {
            return(
                <div>
                    {business.name}
                    <button name={business.business_id} onClick={this.handleClick}>Edit</button>
                    <EditBusiness />
                </div>
                )
            })
            return(
            <div>
                {!this.props.user &&
                    <div>
                        <div>
                            {mappedBusinesses}
                        </div>
                        <div>
                            <button>Manage Favorites</button>
                        </div>
                        <div>
                            <Link to='/account/createBusiness'>Register Business</Link>
                        </div>
                         <button>Delete Account</button>
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