// import logo from './logo.svg';
// import './App.css';

// import FormCreateCustomer from "./component/FormCreateCustomer";

import Home from "./component/Home";
import FacilityList from "./component/facility/FacilityList";
import Customer from "./component/customer/Customer";
import React from "react";
import {Route, Routes } from "react-router-dom";

import Contract from "./component/contract/Contract";
import CustomerAddForm from "./component/customer/FormCreateCustomer";
import CustomerList from "./component/customer/CustomerList";
import CustomerEditForm from "./component/customer/EditCustomer";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CustomerList/>}></Route>
        <Route path='/FormCreateCustomer' element={<CustomerAddForm/>}></Route>
        <Route path='/EditCustomer/:id' element={<CustomerEditForm/>}></Route>
      </Routes>
      </>
  );
}

export default App;
