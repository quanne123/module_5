import axios from "axios";

const URLCUSTOMER = `http://localhost:8080/customerList/`

export const findAll = async () => {
    try {
        let result = await axios.get(URLCUSTOMER)
        return  result.data
    }catch (e) {
        console.log(e);
    }
}

export const save = async (customer) => {
    try {
        await axios.post(URLCUSTOMER,{...customer});
        alert("Add success")
        return customer
    }catch (e) {
        console.log(e)
    }
}
export const deleteCustomer = async (id) => {
    try {
        await axios.delete(URLCUSTOMER + id);
    }catch (e) {
        console.log(e)
    }
}
export const editCustomer = async (customer) => {
    try {
        await axios.put(URLCUSTOMER + `${customer.id}`,{ ...customer });
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        const customer = await axios.get(URLCUSTOMER + id);
        console.log(customer)
        return   customer
    }catch (e) {
        console.log(e)
    }
}