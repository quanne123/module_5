import {useParams} from "react-router";
import {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {  Field, Formik, Form } from "formik";

function EditBookForm() {
    const [bookData,setBookData] = useState();
    const param = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            let result = await bookService.findById(param.id);
            setBookData(result);
        };
        fetchBook();
    },[]);
    if (!bookData){return null}

    return (
        <div>
            <Formik
                initialValues={{ title: bookData?.title, quantity: bookData?.quantity }}
                onSubmit={(values, { resetForm }) => {
                    const update = async () => {
                        await bookService.editBook(bookData?.id, values);
                        resetForm();
                    };
                    update();
                }}
            >
                <Form>
                    <h1>Edit</h1>
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
                        <label htmlFor="quantity">Quantity</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="quantity"
                            name="quantity"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default EditBookForm;

