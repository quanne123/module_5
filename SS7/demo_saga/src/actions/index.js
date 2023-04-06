import axios from "axios";
import {DELETE_USER_SUCCESS, GET_USERS_SUCCESS} from "./types";


// Action để lấy danh sách user
export const getUsers = () => {
    return (dispatch) => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error("Error getting users:", error);
            });
    };
};

// Action để xóa user
export const deleteUser = (userId) => {
    return (dispatch) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => {
                dispatch({
                    type: DELETE_USER_SUCCESS,
                    payload: userId,
                });
                alert(`User with ID ${userId} has been deleted successfully!`);
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    };
};
