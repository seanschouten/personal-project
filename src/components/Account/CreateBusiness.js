import React, {Component} from 'react'
import axios from 'axios'

export default class CreateBusiness extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '', 
            description: ''
        }
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    register = (e) => {
        const {name, address, city} = this.state

        axios
            .post('/auth/createBusiness', {name, address, city})
            .then(res => {
                console.log(res.data)
                // this.props.create(res.data)
            })
    }

    render(){
        return(
            <div>
                <h1>Register Your Business!</h1>
                <input 
                    type='text'
                    placeholder='Business Name'
                    name='name'
                    onChange={this.handleInput}
                    value={this.state.name}
                />
                <input 
                    type='text'
                    placeholder='Address'
                    name='address'
                    onChange={this.handleInput}
                    value={this.state.address}
                />
                <select
                    name='city'
                    onChange={this.handleInput}
                    value={this.state.city}
                 >
                    <option value='Salt Lake City'>Salt Lake City</option>
                    <option value='Minneapolis'>Minneapolis</option>
                    <option value='Seattle'>Seattle</option>
                </select>
                <input 
                    type='text'
                    placeholder='Description'
                    name='description'
                />
                <input 
                    type='submit'
                    onClick={this.register}
                />


            </div>
        )
    }
}




