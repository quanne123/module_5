import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {InfinitySpin, Oval} from "react-loader-spinner";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as CustomerService from "../../service/customer/CustomerService";


function CustomerAddForm() {
    let navigate = useNavigate();

    const [customerType, setCustomerType] = useState([]);
    const [customerAdd, setCustomerAdd] = useState([]);

    const getCustomerTypeList = async () => {
        const customerTypeData = await CustomerService.findAllType();
        setCustomerType(customerTypeData);
    };

    useEffect(() => {
        getCustomerTypeList();
    }, []);

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    dateOfBirth: "",
                    gender: "",
                    identityNumb: "",
                    phoneNumb: "",
                    email: "",
                    typeId: customerType[0]?.name,
                    address: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Trường này bắt buộc nhập")
                        .matches(
                            "^[A-Z][a-z]+(\\s[A-Z][a-z]+)*$",
                            "Tên không được chứa số. Và các kí tự đầu tiên của mỗi từ phải viết hoa"
                        ),
                    email: Yup.string()
                        .required("Trường này bắt buộc nhập")
                        .email("Sai format email"),
                    phoneNumb: Yup.string()
                        .required("Trường này bắt buộc nhập")
                        .matches(
                            "^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[\\d]{7}$",
                            "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx."
                        ),
                    identityNumb: Yup.string()
                        .required("Trường này bắt buộc nhập")
                        .matches(
                            "^\\d{9}$",
                            "Số CMND phải đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX"
                        ),
                })}
                onSubmit={(values, {setSubmitting}) => {

                    const createCustomer = async () => {
                        console.log(values)
                        try {
                            await CustomerService.save(values);
                            setCustomerAdd(values)
                            navigate("/")
                        } catch (error) {
                            console.log(error)
                        }
                        setSubmitting(false);
                    };
                    createCustomer()

                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className="testbox" style={{marginTop: "70px"}}>
                            <div className="">
                                <h1>Thêm mới Khách hàng</h1>
                                <div className="item">
                                    <label htmlFor="name">Họ tên</label>
                                    <Field type="text" name="name" id="name"/>
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="dateOfBirth">Ngày sinh</label>
                                    <Field
                                        type="date"
                                        name="dateOfBirth"
                                        id="dateOfBirth"
                                        required
                                    />
                                    <ErrorMessage
                                        name="dateOfBirth"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="gender">Giới tính</label>
                                    <div className="col-md-12">
                                        <Field
                                            type="radio"
                                            className="gender"
                                            id="men"
                                            name="gender"
                                            value="0"
                                        />
                                        <label htmlFor="men">Nam</label>
                                        <Field
                                            type="radio"
                                            className="gender"
                                            id="women"
                                            name="gender"
                                            value="1"
                                        />
                                        <label htmlFor="women">Nữ</label>
                                    </div>
                                </div>
                                <div className="item">
                                    <label htmlFor="identityNumb">Số CMND</label>
                                    <Field type="text" name="identityNumb" id="identityNumb"/>
                                    <ErrorMessage
                                        name="identityNumb"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="phoneNumb">Số Điện Thoại</label>
                                    <Field type="text" name="phoneNumb" id="phoneNumb"/>
                                    <ErrorMessage
                                        name="phoneNumb"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" name="email" id="email"/>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="typeId">Loại khách</label>
                                    <Field component="select" name="typeId">
                                        {customerType.map((type) => (
                                            <option key={type.id} value={type.id}>
                                                {type.name}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="item">
                                    <label htmlFor="address">Địa chỉ</label>
                                    <Field type="text" name="address" id="address"/>
                                </div>
                                <div className="btn-block">
                                    {isSubmitting ? (
                                        <InfinitySpin
                                            width='200'
                                            color="#4fa94d"
                                        />
                                    ) : (
                                        <>
                                            <button
                                                type="submit"
                                                style={{marginRight: "10px"}}
                                                className="btn btn-success"
                                            >
                                                Thêm
                                            </button>
                                            <Link to="/" className="btn btn-primary">
                                                Thoát
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CustomerAddForm;