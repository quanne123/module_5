import React, { useState } from "react";
import axios from "axios";

const AddBookForm = () => {
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:3000/books", { title, quantity })
            .then(() => {
                alert("Create successfully");
                setTitle("");
                setQuantity("");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h2>Add a new Book</h2>
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
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default AddBookForm;
