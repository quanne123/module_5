import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/books")
            .then((response) => setBooks(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:3000/books/${id}`)
            .then(() => {
                alert("Delete successfully");
                setBooks(books.filter((book) => book.id !== id));
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h1>Library</h1>
            <Link to="/add">Add a new Book</Link>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link to={`/edit/${book.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
