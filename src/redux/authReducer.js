const initialState = {
    name: '',
    email: '',
    id: 0
};

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}