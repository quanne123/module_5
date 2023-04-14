import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddFormStudent from "./components/AddFormStudent";
import AddStudent from "./components/AddFormStudent";

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<StudentList/>}/>
          <Route path='/AddFormStudent' element={<AddStudent/>}/>
      </Routes>
      </>
  );
}

export default App;
