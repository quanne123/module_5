// src/components/UserList.js
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUsers, deleteUser} from "../actions";

const UserList = ({users, getUsers, deleteUser}) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            deleteUser(userId);
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <button onClick={getUsers}>Get Users</button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        deleteUser: (userId) => dispatch(deleteUser(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
