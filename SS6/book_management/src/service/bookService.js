import axios from 'axios';

export const findAll = async () => {
    try {
        const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books');
        return result.data;
    } catch (error){
        console.log(error);
    }
}

export const save = async (book) => {
    try{
        await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', {...book});
        alert("Add success");
    }catch (e){
        console.log(e);
    }
}

export const deleteBook = async (id) => {
    try{
        await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
        alert("Delete success")
    }catch (e){
        console.log(e);
    }
}

export const editBook = async (id,book) => {
    try{
        await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
        alert("Edit success")
    }catch (e){
        console.log(e);
    }
}

export const findById = async (id) => {
    try{
        const book= await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
        return book.data;
    }catch (e){
        console.log(e);
    }
}