import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as BookService from "../service/BookService";
import {Field, Form, Formik} from "formik";

function EditBook() {
    const [bookUpdate, setBookUpdate] = useState();
    const param = useParams();
    let navigate = useNavigate()
    useEffect(() => {
        async function bookDetail() {
            const detail = await BookService.findById(param.id);
            // console.log(detail)
            setBookUpdate(detail.data);
        }
        bookDetail();
    }, [param.id]);
    if (!bookUpdate) {
        return null
    }
    return (
        <div>
            <Formik initialValues={{
                id:bookUpdate?.id,
                title : bookUpdate?.title,
                quantity : bookUpdate?.quantity
            }}
                    onSubmit={(values  ,{resetForm}) => {
                        const update = async () => {
                            await BookService.editBook(values);
                            resetForm()
                            navigate("/")
                        };
                        update();
                    }}

                    >
                <Form>
                    <h1>Edit</h1>
                    <input type={'hidden'} name={'id'}/>
                    <div>
                        <div>
                            <label htmlFor="title">Title</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                            />
                        </div>
                        <div>
                            <label htmlFor="title">Quantity</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="quantity"
                                name="quantity"
                            />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default EditBook;