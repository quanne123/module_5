import React from "react";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";

const App = () => {
    return (
        <Router>
                <Route exact path="/" component={BookList} />
                <Route exact path="/add" component={AddBookForm} />
                <Route exact path="/edit/:id" component={EditBookForm} />

        </Router>
    );
};

export default App;
