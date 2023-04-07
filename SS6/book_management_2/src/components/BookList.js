import {useEffect, useState} from "react";
import * as BookService from "../service/BookService";
import {Link} from "react-router-dom";

function BookList() {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const listBook = async () => {
            let result = await BookService.findAll();
            setBookList(result)

            return bookList
        };
        listBook()
    }, []);
    const handleDelete = async (id) => {
        await BookService.deleteBook(id);
        let result = await BookService.findAll();
        setBookList(result);
    };
    return (
        <div>
            <div>
                <h1>Library</h1>
                <Link className="btn btn-primary" to="/AddBook">
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
                                <a
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Delete
                                </a>
                            </th>
                            <th>
                                <Link className="btn btn-primary" to={`/EditBook/${book.id}`}>
                                    Edit Book
                                </Link>
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