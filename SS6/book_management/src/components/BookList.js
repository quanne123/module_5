import {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {Link} from "react-router-dom";

function BookList() {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        const fetchBook = async () => {
            let result = await bookService.findAll();
            setBookList(result);
        };
        fetchBook()
    },[]);

    const handleDelete = async (id) => {
        await bookService.deleteBook(id);
        let result = await bookService.findAll()
        setBookList(result);
    };

    return(
        <div>
            <div>
                <h1>Book Management</h1>
                <Link className="btn btn-primary" to="/addNewBook">
                    Add new Book
                </Link>
            </div>

            <div>
                <table className="table table-border table-striped">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookList.map((book, index) => (
                        <tr key={index}>
                            <th>{book.title}</th>
                            <th>{book.quantity}</th>
                            <th>
                                <Link
                                    className="btn btn-primary"
                                    to={`/editBook/${book.id}`}
                                >
                                    Edit
                                </Link>
                            </th>
                            <th>
                                <a
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Delete
                                </a>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookList;
