import React from 'react';
import Header from '../Header';
import  {customerList}  from './CustomerData';
function Customer() {
    return (
        <div style={{marginBottom: '-80px'}}>
            <br/><br/>
            <div className="row"><h1 style={{textAlign: 'center'}}>Danh Sách Khách Hàng</h1></div>
            <br/><br/>
            <div id="checkTable">
                <table className="table" style={{backdropFilter: 'blur(10px)', color: 'black', fontWeight: 'bold'}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ Tên</th>
                        <th>Ngày Sinh</th>
                        <th>Giới Tính</th>
                        <th>CMND</th>
                        <th>Số Điện Thoại</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                        <th>Loại Khách</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customerList.map((customer) => (
                        <tr key={customer.id}>
                            <th scope="row">{customer.id}</th>
                            <td>{customer.name}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.identityNumb}</td>
                            <td>{customer.phoneNumb}</td>
                            <td>{customer.email}</td>
                            <td>{customer.type}</td>
                            <td>{customer.address}</td>
                            <td>
                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="btn btn-danger me-2"*/}
                                {/*    data-toggle="modal"*/}
                                {/*    data-target="#exampleModal"*/}
                                {/*>*/}
                                {/*    <i className="fas fa-trash-alt"></i>*/}
                                {/*</button>*/}
                                {/*<a*/}
                                {/*    className="btn btn-primary btn-sm edit"*/}
                                {/*    href="edit-form-customer.html"*/}
                                {/*>*/}
                                {/*    <i className="fas fa-edit"></i>*/}
                                {/*</a>*/}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <center>
                    <a className="btn btn-light" id="pre">Previous</a>
                    <button id="pagez" className="btn btn-outline-light">1</button>
                    <a className="btn btn-light" id="nex">Next</a>
                </center>
            </div>
        </div>
    );
}

export default Customer;