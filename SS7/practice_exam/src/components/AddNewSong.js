import React, {useState} from "react";
import {useNavigate} from "react-router";
import {Field, Form, Formik} from "formik";
import * as SongService from "../service/SongService";
import { InfinitySpin } from "react-loader-spinner";



function AddNewSong() {
    const [songAdd, setSongAdd] = useState([]);
    let navigate = useNavigate();
    return (
        <div>
            <Formik initialValues={{name: '', author: '', type: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        const creatSong = async () => {
                            console.log(values)
                            try {
                                await SongService.save(values);
                                setSongAdd(values)
                                navigate("/")
                            } catch (e) {
                                console.log(e)
                            }
                            setSubmitting(false);
                        };
                        creatSong()
                    }}>
                {({isSubmitting }) => (
                    <Form>
                        <h1>Thêm mới bài hát</h1>
                        <div>
                            <label htmlFor={"name"}>Tên Bài Hát</label>
                            <Field
                            type = "text"
                            className = "form-control"
                            id = "name"
                            name = "name"
                            />
                        </div>
                        <div>
                            <label htmlFor={"name"}>Ca sĩ</label>
                            <Field
                                type = "text"
                                className = "form-control"
                                id = "author"
                                name = "author"
                            />
                        </div>
                        <div>
                            <label htmlFor={"name"}>Thể Loại</label>
                            <Field
                                type = "text"
                                className = "form-control"
                                id = "type"
                                name = "type"
                            />
                        </div>
                        {isSubmitting ? (
                            <InfinitySpin
                                width='200'
                                color="#4fa94d"
                            />
                        ) : (
                            <button type={"submit"}>Submit</button>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default AddNewSong;