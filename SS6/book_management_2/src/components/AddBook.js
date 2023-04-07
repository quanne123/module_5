import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import * as BookService from "../service/BookService";
import {useNavigate} from "react-router";
import { Oval } from "react-loader-spinner";


function AddNewBook() {
    const [bookAdd,setBookAdd] = useState([]);
    let navigate = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{title: '', quantity: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    const createBook = async () => {
                        console.log(values);
                        try {
                            await BookService.save(values);
                            setBookAdd(values)
                            navigate("/")

                        } catch (e) {
                            console.log(e)
                        }
                        setSubmitting(false);

                    };
                    createBook()
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Add new Book</h1>
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
                        {isSubmitting ? (
                            <Oval
                                height={80}
                                width={80}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#4fa94d"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        ) : (
                            <button type="submit">Submit</button>)}

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddNewBook;