import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Audio } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useEffect } from 'react';
import * as TodoService from './service/TodoService'
import { useNavigate } from 'react-router-dom';

export default function TodoList() {
    let navigate = useNavigate()

    const [todo, setTodo] = useState([])

    useEffect(() => {

        const listTodo = async () => {
            const result = await TodoService.findAll()
            setTodo(result)
        }
        listTodo()
    }, [])

    return (
        <>

            <Formik
                initialValues={{ name: '' }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {

                        const  createTodo = async () => {
                            await TodoService.save(values)
                            setSubmitting(false)
                            toast("thêm mới thành công")
                            navigate('/')

                        }
                        createTodo()

                    }, 500)


                }}
            >

                {({ isSubmitting }) => (

                    <Form>
                        <h1>To do List</h1>
                        <div>
                            <Field type='text' name="name" className="form-control" />
                        </div>
                        {
                            isSubmitting ?
                                <Audio
                                    height="80"
                                    width="80"
                                    radius="9"
                                    color="green"
                                    ariaLabel="loading"
                                    wrapperStyle
                                    wrapperClass
                                />
                                : <button type="submit">  Submit  </button>

                        }
                    </Form>
                )
                }

            </Formik>
            <ToastContainer />


            <table>
                <thead>
                <tr>
                    <th>*</th>
                </tr>
                </thead>
                <tbody>
                {
                    todo.map((todoList, index) => (
                        <tr key={index}>
                            <td>{todoList.name}</td>
                        </tr>

                    ))


                }

                </tbody>
            </table>
        </>
    )
}
