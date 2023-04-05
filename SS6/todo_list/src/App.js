import logo from './logo.svg';
import './App.css';
import {NavLink} from "react-router-dom";
import React from "react";
import {Route, Routes} from "react-router";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import {ToastContainer} from 'react-toastify' ;

function App() {
  return (
    <>
      <NavLink to='/'>Todo List</NavLink>
      <NavLink to='/create' className='ms-3'>Create</NavLink>
      <Routes>
        <Route path='/' element={<TodoList/>} />
        <Route path='/create' element={<TodoCreate/>} />
      </Routes>
      <ToastContainer />
      </>
  );
}

export default App;
