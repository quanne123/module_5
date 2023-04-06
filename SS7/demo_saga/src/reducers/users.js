// src/reducers/users.js

import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
} from '../actions/types';

const initialState = {
    users: [],
    error: null,
    loading: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
        case DELETE_USER_REQUEST:
            return { ...state, loading: true };
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload, error: null, loading: false };
        case GET_USERS_FAILURE:
        case DELETE_USER_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                error: null,
                loading: false
            };
        default:
            return state;
    }
};

export default usersReducer;
