import {useEffect, useState} from "react";
import * as StudentService from "../service/StudentsService";
import {Link} from "react-router-dom";

function StudentList() {
    const [studentList,setStudentList] = useState([])
    const [classList,setClassList] = useState([])

    useEffect(() => {
        const listStudent = async () => {
            let result = await StudentService.findAll();
            setStudentList(result)
            return  studentList
        };
        const listClass = async () => {
            let result = await StudentService.findAllClass();
            setClassList(result)
            return classList
        }
        listStudent()
        listClass()
    },[])

    const handleDelete = async (id) => {
        await StudentService.deleteStudent(id);
        let result = await StudentService.findAll()
        setStudentList(result)
    };
    if (!studentList){
        return <p>Loading ...</p>
    }

    return (
        <div>
            <div>
                <h1>Student List</h1>
                <Link className={"btn btn-primary"} to={"/AddFormStudent"}>
                    Add new Student
                </Link>
            </div>
            <div>
                <table className={"table table-border table stripped"}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Class</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList.map((student,index) => (
                        <tr key={index}>
                            <th>{student.name}</th>
                            <th>{student.age}</th>
                            <th>{student.address}</th>
                            <th>{classList?.filter(st => st.id == student.classId)[0]?.name}</th>
                            <th>
                                <a className={"btn btn-danger"}
                                   onClick={() => handleDelete(student.id)}>Delete</a>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default StudentList