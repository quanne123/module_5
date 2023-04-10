import React, {useEffect, useState} from "react";
import * as CustomerService from "../../service/customer/CustomerService";
import {Link} from "react-router-dom";

function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [typeList, setTypeList] = useState([]);

    useEffect(() => {
        const listCustomer = async () => {
            let result = await CustomerService.findAll();
            setCustomerList(result)
            return customerList
        };
        const listCustomerType = async () => {
            let result = await CustomerService.findAllType();
            setTypeList(result)
            return typeList
        }
        listCustomer()
        listCustomerType()
    }, []);

    const handleDelete = async (id) => {
        await CustomerService.deleteCustomer(id);
        let result = await CustomerService.findAll();
        setCustomerList(result);
    };
    return (
        <div style={{marginBottom: "-80px"}}>
            <br/>
            <br/>
            <div className="row">
                <h1 style={{textAlign: "center"}}>Danh Sách Khách Hàng</h1>
            </div>
            <Link className={"btn btn-primary"} to="/FormCreateCustomer" >Add new Customer</Link>
            <br/>
            <br/>
            <div id="checkTable">
                <table
                    className="table"
                    style={{
                        backdropFilter: "blur(10px)",
                        color: "black",
                        fontWeight: "bold"
                    }}
                >
                    <thead>
                    <tr>
                        {/*<th>ID</th>*/}
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
                    {customerList.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.identityNumb}</td>
                            <td>{customer.phoneNumb}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>
                                {typeList?.filter(ct => ct.id == customer.typeId)[0]?.name}
                            </td>
                            <td>
                                <Link
                                    className="btn btn-danger"
                                    to={`/EditCustomer/${customer.id}`}
                                >
                                    Sửa
                                </Link>
                            </td>
                            <td>
                                <a
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(customer.id)}
                                >
                                    Xóa
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <center>
                    <a className="btn btn-light" id="pre">
                        Previous
                    </a>
                    <button id="pagez" className="btn btn-outline-light">
                        1
                    </button>
                    <a className="btn btn-light" id="nex">
                        Next
                    </a>
                </center>
                <br/>
                <br/>
            </div>
            <div className="row footer" style={{background: "darkcyan"}}>
                <div className="col-12 col-md-1 col-sm-1"/>
                <div className="col 12 col-sm-5 col-md-3 text-bg-light p-3 ">
                    <h2 className="d-flex align-self-center fw-light text-warning pt-2">
                        Hướng Dẫn Di Chuyển
                    </h2>
                    <p>
                        Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong những điểm
                        đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái xe ngắn là bốn
                        Di sản Văn hóa Thế giới được UNESCO công nhận
                    </p>
                    <h3 className="text-decoration-none fw-light">
                        <a href="https://www.google.com/maps/place/Furama+Resort+Danang/@16.0399456,108.2510681,17z/data=!3m1!4b1!4m8!3m7!1s0x31420fdbc8cc38ef:0x9a6a3e31121225d2!5...l=vi-VNl">
                            Xem trên bản đồ
                        </a>
                    </h3>
                    <h4>Địa Điểm</h4>
                    <table className="table tab-content">
                        <tbody>
                        <tr>
                            <td>1.Cố đô Huế</td>
                            <td>2 tiếng</td>
                        </tr>
                        <tr>
                            <td>2.Phố cổ Hội An</td>
                            <td>30 phút</td>
                        </tr>
                        <tr>
                            <td>3. Thánh địa Mỹ Sơn</td>
                            <td>90 phút</td>
                        </tr>
                        <tr>
                            <td>4. Động Phong Nha</td>
                            <td>3 tiếng</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-12 col-md-6 col-sm-8 row">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-12 text-white p-3">
                            <p>Giá công bố</p>
                            <p>Tuyển dụng</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-12 text-white p-3 ">
                            <p>Liên hệ</p>
                            <p className="fs-9 fst-italic">
                                103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                                District, Danang City, Vietnam Tel.: 84-236-3847 333/888 * Fax:
                                84-236-3847 666 Email: reservation@furamavietnam.com *
                                www.furamavietnam.com GDS Codes: Amadeus-GD DADFUR,
                                Galileo/Apollo-GD 16236, Sabre-GD 032771, Worldspan- GD DADFU
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12 row text-white p-3  ">
                        <p> © 2018 Furama Resort Danang</p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CustomerList;