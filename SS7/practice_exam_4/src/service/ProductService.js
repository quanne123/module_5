import axios from "axios";

const PRODUCT_URL = ` http://localhost:8080/product/`
const PRODUCT_TYPE_URL = `   http://localhost:8080/typeProduct/`

export const findAll = async (query) => {
    try {
        let result = await axios.get(PRODUCT_URL);
        if (query){
            result.data = result.data.filter(item => {
                return item.name.toLowerCase().includes(query.toLowerCase());
            });
        }
        return result.data
    }catch (e) {
        console.log(e);
    }
}
export const findAllType = async () => {
    try {
        let result = await axios.get(PRODUCT_TYPE_URL);
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const deleteProduct = async (id) => {
    try {
        await axios.delete(PRODUCT_URL + id)
    }catch (e) {
        console.log(e)
    }
}