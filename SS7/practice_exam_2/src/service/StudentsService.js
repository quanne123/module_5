import axios from "axios";

const STUDENTS_URL = `  http://localhost:8080/students/`
const CLASS_URL = `  http://localhost:8080/class/`

export const findAll = async () => {
    try {
        let result = await axios.get(STUDENTS_URL);
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const findAllClass = async () => {
    try {
        let result = await axios.get(CLASS_URL)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const saveStudent = async (student) => {
    try {
        await axios.post(STUDENTS_URL, {...student})
        alert("Add Success")
        return student
    } catch (e) {
        console.log(e)
    }
}
export const deleteStudent = async (id) => {
    try {
        await axios.delete(STUDENTS_URL + id)
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const student = await axios.get(STUDENTS_URL + id);
        console.log(student)
        return student
    }catch (e) {
        console.log(e)
    }
}

export const editStudent = async (student) => {
    try {
        await axios.put(STUDENTS_URL + `${student.id}`, { ...student})
    }catch (e) {
        console.log(e)
    }
}