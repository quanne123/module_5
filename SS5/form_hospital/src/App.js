import logo from './logo.svg';
import './App.css';
import Form from "./components/FormHospital";
import FormHospital from "./components/FormHospital";
import React from "react";
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";


function App() {
  return (
      <>
        <NavLink to={'/create'} className={'ms-3'}>Create</NavLink>
        <Routes>
          <Route path={'/create'} element={<FormHospital />} />
        </Routes>
        {/*<ToastContainer />*/}
      </>
  );
}

export default App;
