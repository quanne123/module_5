import {Axios as axios} from "axios";

const URLCUSTYPE = `http://localhost:8080/customerTypes/`

export const findAll = async () => {
    try {
        let result = await axios.get(URLCUSTYPE);
        return result.data
    }catch (e) {
        console.log(e)
    }
}