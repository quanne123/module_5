import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as SongService from "../service/SongService";
import {Field, Form, Formik} from "formik";

function EditSong() {
    const [songUpdate, setSongUpdate] = useState();
    const param = useParams();
    let navigate = useNavigate()
    useEffect(() => {
        async function songDetail() {
            const detail = await SongService.findById(param.id);
            // console.log(detail);
            setSongUpdate(detail.data);
        }
        songDetail();
    }, [param.id]);
    if (!songUpdate) {
        return null
    }
    return (
        <div>
            <Formik initialValues={{
                id: songUpdate?.id,
                name: songUpdate?.name,
                author: songUpdate?.author,
                type: songUpdate?.type
            }}
                    onSubmit={(values, {resetForm}) => {
                        const update = async () => {
                            await SongService.edit(values);
                            resetForm()
                            navigate("/")
                        };
                        update();
                    }
                    }

            >
                <Form>
                    <h1>Chỉnh Sửa</h1>
                    <input type={'hidden'} name={'id'}/>
                    <div>
                        <div>
                            <label htmlFor={"name"}>Tên Bài Hát</label>
                            <Field
                                type ="text"
                                class = "form-control"
                                id = "name"
                                name = "name"
                            />
                        </div>
                        <div>
                            <label htmlFor={"author"}>Ca Sĩ</label>
                            <Field
                                type ="text"
                                class = "form-control"
                                id = "author"
                                name = "author"
                            />
                        </div>
                        <div>
                            <label htmlFor={"type"}>Tên Bài Hát</label>
                            <Field
                                type ="text"
                                class = "form-control"
                                id = "type"
                                name = "type"
                            />
                        </div>
                    </div>
                    <button type={"submit"}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default EditSong;