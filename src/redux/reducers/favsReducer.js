const initialState = {
    favorite: false,
    id: 0 
}

const ADD_FAVORITE = 'ADD_FAVORITE'
const CLEAR_FAVORITE = 'CLEAR_FAVORITE'

export function addFavorite(favorite){
    return{
        type: ADD_FAVORITE,
        payload: favorite
    };
}

export function clearFavorite(){
    return{
        type: CLEAR_FAVORITE
    };
}

export default function favsReducer(state = initialState, action) {
    switch(action.type){
        case ADD_FAVORITE:
            const {favorite, id} = action.payload
            return {...state, favorite:true, id}//:??
        case CLEAR_FAVORITE:
            return {...state, initialState}
        default:
            return state;
    }
}