import React from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import bookService from "../service_API/bookService";
import bookTypeService from "../service_API/bookTypeService";

function BookCreate() {
    let navigate = useNavigate();
    const [bookTypes, setBookTypes] = useState([]);
    useEffect(() => {
        const getBookTypes = async () => {
            const bookTypesResponse= await bookTypeService.findAll();
            setBookTypes(bookTypesResponse.data);
        };
        getBookTypes();
    }, []);
    return (
        <>
            <h1 className="mb-3 text-center">Tạo mới sách</h1>
            <Formik
                initialValues={{
                    id: "",
                    name: "",
                    bookTypeDTO: "",
                    startDate: "",
                    number: "",
                }}
                validationSchema={Yup.object({
                    id: Yup.string()
                        .required("Trường này yêu cầu nhập")
                        .matches("^BO-[0-9]{4}$", "Mã sách có định dạng BO-XXXX (X là số)"),
                    name: Yup.string()
                        .required("Trường này yêu cầu nhập")
                        .max(100, "Tên sách không dài quá 100 ký tự"),
                    number: Yup.string()
                        .required("Trường này yêu cầu nhập")
                        .matches("^[1-9][\\d]*$", "Số lượng sách phải là số nguyên dương"),
                })}
                onSubmit={async (values) => {
                    let newValues = {
                        ...values,
                        bookTypeDTO: { id: +values.bookTypeDTO },
                    };
                    try {
                        await bookService.save(newValues);
                        toast("Thêm mới thành công");
                        navigate("/");
                    } catch (error) {
                        console.log(error);
                        toast("Thêm mới thất bại");
                    }
                }}
            >
                <Form className="col-3" style={{ margin: "auto" }}>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">
                            Nhập mã sách
                        </label>
                        <Field type="text" className="form-control" id="id" name="id" />
                    </div>
                    <ErrorMessage component="div" className="text-danger" name="id" />
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Nhập tên sách
                        </label>
                        <Field type="text" className="form-control" id="name" name="name" />
                        <ErrorMessage component="div" className="text-danger" name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="startDate" className="form-label">
                            Chọn ngày nhập sách
                        </label>
                        <Field
                            type="date"
                            className="form-control"
                            id="startDate"
                            name="startDate"
                        />
                        <ErrorMessage
                            component="div"
                            className="text-danger"
                            name="startDate"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">
                            Số lượng sách
                        </label>
                        <Field
                            type="number"
                            className="form-control"
                            id="number"
                            name="number"
                        />
                        <ErrorMessage
                            component="div"
                            className="text-danger"
                            name="number"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bookTypeDTO" className="form-label">
                            Thể loại sách
                        </label>
                        <Field
                            as="select"
                            className="form-control"
                            id="bookTypeDTO"
                            name="bookTypeDTO"
                        >
                            <option value={0}>--- Hãy chọn thể loại sách ---</option>
                            {bookTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage
                            component="div"
                            className="text-danger"
                            name="importedDate"
                        />
                    </div>
                    <button type="submit" className="btn btn-success me-3">
                        Tạo mới
                    </button>
                    <Link to="/" className="btn btn-primary">
                        Thoát
                    </Link>
                </Form>
            </Formik>
        </>
    );
}

export default BookCreate;