import logo from './logo.svg';
import './App.css';
import BookList from "./components/BookList";
import AddNewBook from "./components/AddBook";
import React from "react";
import {Route, Routes } from "react-router-dom";
import EditBook from "./components/EditBook";


function App() {
  return (
<>
<Routes>
<Route path='/' element={<BookList/>}/>
<Route path='/AddBook' element={<AddNewBook/>}/>
<Route path='/EditBook/:id' element={<EditBook/>}/>
</Routes>
  </>
  );
}

export default App;
