import React, {Component} from 'react'
import axios from 'axios'

export default class Cities extends Component {
    constructor(props){
        super(props);

        this.state = {
            // businesses:[],
            // city:[],
            cities: []
        }
    };
        handleClick = (city) => {
            this.props.history.push(`/city/${city}`)
        }
    // handles a function
    // have function redirect to 'city' view
    // handleClick() 
    
    componentDidMount(){
        //This will be for when cities mounts
        // make an axios call to get all cities
        // once it comes back save cities to cities array on state

        axios.get('/api/cities').then(res => {
            this.setState({
                cities: res.data
            })
        })
    } 
    
    render(){
        console.log(this.state.cities)
        const cities = this.state.cities.map((city,index) => {
            return(
                <div key={index}>
                    <button onClick={() => this.handleClick(city.city)}>{city.city}</button>
                </div>
            )
        })
        return (
            <div>
                {cities}
            </div>
        )
    }

}
