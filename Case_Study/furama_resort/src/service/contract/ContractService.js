import axios from "axios";
const CONTRACT_URL = `http://localhost:8080/contract/`
export const findAll = async () => {
    try {
        let result = await axios.get(CONTRACT_URL)
        return  result.data
    }catch (e) {
        console.log(e);
    }
}
// export const findAllType = async () => {
//     try {
//         let result = await axios.get(URLCUSTYPE);
//         return result.data
//     }catch (e) {
//         console.log(e)
//     }
// }

export const save = async (contract) => {
    try {
        await axios.post(CONTRACT_URL,{...contract});
        alert("Add success")
        return contract
    }catch (e) {
        console.log(e)
    }
}
export const deleteContract = async (id) => {
    try {
        await axios.delete(CONTRACT_URL + id);
    }catch (e) {
        console.log(e)
    }
}
export const editContract = async (contract) => {
    try {
        await axios.put(CONTRACT_URL + `${contract.id}`,{ ...contract });
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        const contract = await axios.get(CONTRACT_URL + id);
        console.log(contract)
        return   contract
    }catch (e) {
        console.log(e)
    }
}