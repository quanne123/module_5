import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as bookService from "../service/bookService";

function AddBookForm() {
    return (
        <div>
            <Formik
                initialValues={{ title: "", quantity: "" }}
                onSubmit={(values, { resetForm }) => {
                    const create = async () => {
                        await bookService.save(values);
                        resetForm();

                    };
                    create();
                }}
            >
                <Form>
                    <h1>Add a new Book</h1>
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
    );
}

export default AddBookForm;