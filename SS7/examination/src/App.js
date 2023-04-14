import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import React from "react";
import BookList from "./components/BookList";
import FormAddBook from "./components/AddBooks";
import BookEdit from "./components/EditBook";
import BookCreate from "./components/AddBooks";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<BookList/>}/>
      <Route path={'/AddBooks'} element={<BookCreate/>}/>
      <Route path={'/EditBook:id'} element={<BookEdit/>}/>
    </Routes>
  );
}

export default App;
