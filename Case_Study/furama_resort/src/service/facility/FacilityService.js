import axios from "axios";

const FACILITY_URL = `http://localhost:8080/facility/`
const FACILITY_TYPE_URL = `http://localhost:8080/facilityType`

export const findAll = async () => {
    try {
        let result = await axios.get(FACILITY_URL);
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async () => {
    try {

        let result = await axios.get(FACILITY_TYPE_URL);
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (facility) => {
    try {
        await axios.post(FACILITY_URL, {...facility});
        return facility
    }catch (e) {
        console.log(e)
    }
}

export const deleteFacility = async (id) => {
    try {
        await axios.delete(FACILITY_URL + id);
    }catch (e) {
        console.log(e)
    }
}
export const editFacility = async (facility) => {
    try {
        await axios.put(FACILITY_URL + `${facility.id}`, { ...facility });
    }catch (e) {
        console.log(e)
    }
}