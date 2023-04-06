import logo from "./logo.svg";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";
import React from "react";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/addNewBook" element={<AddBookForm />} />
                <Route path="/editBook/:id" element={<EditBookForm />} />
            </Routes>
        </>
    );
}

export default App;