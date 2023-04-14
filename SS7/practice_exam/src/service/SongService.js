import axios from "axios";
const SONGURL = `http://localhost:8080/songs/`
export const findAll = async ()=> {
    try {
        let result = await axios.get(SONGURL);
        return result.data
    }catch (e) {
        console.log(e);
    }
}

export const save = async (song) => {
    try {
        await  axios.post(SONGURL, {...song});
    }catch (e) {
        console.log(e);
    }
}

export const deleteBook = async (id) => {
    try {
        await axios.delete(SONGURL + id);
    }catch (e) {
        console.log(e)
    }
}
export const edit = async (song) => {
    try {
        await axios.put(SONGURL + `${song.id}`,{ ...song });
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
       const song = await axios.get(SONGURL + id);
       console.log(song)
        return song
    }catch (e) {
        console.log(e)
    }
}

