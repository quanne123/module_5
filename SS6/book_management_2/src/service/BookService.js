import axios from "axios";
const URLAPI = `http://localhost:3000/books/`
export const findAll = async () => {


    try{
        let result = await axios.get(URLAPI);
        return result.data
    }catch (e) {
        console.log(e);
    }
}

export const save = async (book) => {
    try{
        await axios.post(URLAPI, {...book});
        alert("Add success");
        return book
    }catch (e){
        console.log(e);
    }
}

export const deleteBook = async (id) => {
    try {
        await axios.delete(URLAPI + id );
    }catch (e) {
        console.log(e)
    }
}

export const editBook = async (book) => {
    try {
        await axios.put(URLAPI + `${book.id}`,{ ...book });
    }catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
      const book =  await axios.get(URLAPI +id);
      console.log(book)
        return book
    }catch (e) {
        console.log(e)
    }
}