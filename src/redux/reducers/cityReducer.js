// import axios from 'axios'

// const GET_CITIES = 'GET_CITIES'
// const GET_CITIES_FULFILLED = 'GET_CITIES_FULFILLED'
// const GET_CITIES_PENDING = 'GET_CITIES_PENDING'

// const GET_CITY = 'GET_CITY'
// const GET_CITY_FULFILLED = 'GET_CITY_FULFILLED'
// const GET_CITY_PENDING = 'GET_CITY_PENDING'

// let initialState = {
//     data: [],
//     loading: false,
//     selected: null
// }

// export default function(state = initialState, action) {
//     switch(action.type) {
//         case GET_CITIES_PENDING:
//             return {...state, loading: true}
//         case GET_CITIES_FULFILLED:
//             return {...state, lading: false, selected: action.payload.data}

//         case GET_CITY_PENDING:
//             return {...state, loading: true}
//         case GET_CITY_FULFILLED:
//             return {...state, loading: false, selected: action.payload.data}
        
//         default:
//             return state
//     }
// }