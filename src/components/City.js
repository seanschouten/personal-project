import React, {Component} from 'react'
import axios from 'axios'


export default class City extends Component {
    constructor(props){
        super(props)

        this.state = {
            businesses: [],
            city: []
        }
    }


    componentDidMount() {
        axios.get(`/api/city?city=${this.props.match.params.city}`).then(res => {
            this.setState({
                businesses: res.data
            });
        })

    }



    render(){
        const mappedBusinesses = this.state.businesses.map((business) => {
            return(
                <div key={business.business_id}>
                    <div>{business.name} {business.address}</div> 
                    {/* turn this button into a div then create a favorite button */}
                </div>
            )
        })

        return(
            <div>
                {mappedBusinesses}
            </div>
        )
    }

}