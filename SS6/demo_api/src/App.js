import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null,
        };
    }
    componentDidMount() {
        axios
            .get("http://localhost:4000/api/users")
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(err => {
                throw err;
            });
    }

    render() {
        const { users, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
                <h1>User List</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}
export default App;