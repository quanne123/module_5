import React, {useEffect, useState} from "react";
import * as StudentService from "../service/StudentsService";
import {Field, Form, Formik} from "formik";
import {type} from "@testing-library/user-event/dist/type";
import {Oval} from "react-loader-spinner";
import {useNavigate} from "react-router";

function AddStudent() {
const [studentAdd,setStudentAdd] = useState([]);
    const [classes,setClasses] = useState();

    let navigate = useNavigate();
    const getClass = async () => {
        const classData = await StudentService.findAllClass();
        setClasses(classData)
    };
    useEffect(() => {
        getClass();
    },[]);
    if (!classes){
        return null;
    }
    return (
        <div>
            <Formik initialValues={{name : '', age : '', class : classes[0]?.id}}
                    onSubmit={(values,{setSubmitting}) => {
                        const addStudent = async () => {
                            console.log(values);
                            try {
                                await StudentService.saveStudent(values);
                                setStudentAdd(values)
                                navigate ("/")
                            }catch (e) {
                                console.log(e)
                            }
                            setSubmitting(false);
                        };
                        addStudent()
                    }} >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Add new Student</h1>
                        <div>
                            <label htmlFor={"name"}>Name</label>
                            <Field
                            type = "text"
                            className = "form-control"
                            id = "name"
                            name = "name"
                            />
                        </div>
                        <div>
                            <label htmlFor={"age"}>Age</label>
                            <Field
                                type = "number"
                                className = "form-control"
                                id = "age"
                                name = "age"
                            />
                        </div>
                        <div>
                            <label htmlFor={"address"}>Address</label>
                            <Field
                                type = "text"
                                className = "form-control"
                                id = "address"
                                name = "address"
                            />
                        </div>
                        <div className={"item"}>
                            <label htmlFor={"class"}>Class</label>
                            <Field as={"select"} name="classId">
                                {classes.map((type) => (
                                    <option key={type.id} value={type.id}>
                                        {type.name}
                                    </option>
                                ))}
                            </Field>
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
                        ): (
                            <button type={"submit"}>Submit</button>

                        )}
                    </Form>
                )}
            </Formik>

        </div>
    )
}
export default AddStudent;