import axios from 'axios';

export const TODODATA = `http://localhost:8080/toDO`

export const findAll = async () => {

    try{
        const result = await axios.get(TODODATA);
        return result.data;
    }
    catch(err){
        console.log(err);

    }
}

export const save = async (values) =>{
    try{
        await axios.post(TODODATA, {...values})
    }
    catch(e){
        console.log(e);
    }
}