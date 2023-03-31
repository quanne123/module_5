import React, { Component } from 'react';

class StudentInfoComponent extends Component {
    render() {
        const { name, age, address } = this.props;
        return (
            <table style={{ border: '1px solid black' }}>
                <thead>
                <tr>
                    <th style={{border : '1px solid black'}}>ID</th>
                    <th style={{border : '1px solid black'}}>Name</th>
                    <th style={{border : '1px solid black'}}>Age</th>
                    <th style={{border : '1px solid black'}}>Address</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{border : '1px solid black'}}>1</td>
                    <td style={{border : '1px solid black'}}>{name}</td>
                    <td style={{border : '1px solid black'}}>{age}</td>
                    <td style={{border : '1px solid black'}}>{address}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default StudentInfoComponent;
