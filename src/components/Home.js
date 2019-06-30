// import React, {Component} from 'react'
// import axios from 'axios'
// import store from './../redux/store'
// // import {Link, Redirect} from 'react-router-dom'
// import {clearUser} from './../redux/reducers/authReducer'



// class Home extends Component {

//     logout = () => {
//         axios.post('auth/logout').then(res => {
//             store.dispatch({
//                 type: clearUser
//             });
//             this.props.history.push('/')
//         })
//     };



//     render(){
//         return(
//             <div>
//                 <nav>
                    
//                     <button onClick={this.logout}>Logout</button>
//                 </nav>
//             </div>
//         )
//     }
// }

// export default Home;