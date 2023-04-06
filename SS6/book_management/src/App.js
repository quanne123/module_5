import React from "react";
import {   Routes, Route  } from "react-router-dom";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";

const App = () => {
    return (
        <Routes>
                <Route exact path="/" component={BookList} />
                <Route exact path="/add" component={AddBookForm} />
                <Route exact path="/edit/:id" component={EditBookForm} />

        </Routes>
    );
};

export default App;
