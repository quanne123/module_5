import React, { useState, useEffect } from "react";
import axios from "axios";

const EditBookForm = ({ match, history }) => {
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:3000/books/${match.params.id}`)
            .then((response) => {
                setTitle(response.data.title);
                setQuantity(response.data.quantity);
            })
            .catch((error) => console.log(error));
    }, [match.params.id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`http://localhost:3000/books/${match.params.id}`, { title, quantity })
            .then(() => {
                alert("Update successfully");
                history.push("/");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditBookForm;