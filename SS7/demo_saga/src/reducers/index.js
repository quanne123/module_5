// src/reducers/index.js

import {DELETE_USER_SUCCESS, GET_USERS_SUCCESS} from "../actions/types";

const initialState = {
    users: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        default:
            return state;
    }
};

export default rootReducer;
