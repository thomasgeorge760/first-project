import { authConstants } from '../actions/constants'

const initState = {
    adminToken: 'null',
    admin: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false
};

export default (state = initState, action) => {

    console.log(action)

    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                admin: action.payload.admin,
                adminToken: action.payload.adminToken,
                authenticating: false,
                authenticate: true
            }
            break;
    }
    return state;
};