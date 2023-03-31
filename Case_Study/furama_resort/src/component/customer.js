import React from 'react';
import Header from './Header';

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
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>
                            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal">Sửa</button>
                        </td>
                        <td>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
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