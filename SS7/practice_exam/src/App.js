import logo from './logo.svg';
import './App.css';
import {Route, Routes } from "react-router-dom";
import React from "react";
import SongList from "./components/SongList";
import AddNewSong from "./components/AddNewSong";
import EditSong from "./components/EditSong";

function App() {
  return (
  <>
<Routes>
    <Route path='/' element={<SongList/>}/>
    <Route path='/AddNewSong' element={<AddNewSong/>}/>
    <Route path='/EditSong/:id' element={<EditSong/>}/>
</Routes>
    </>
  );
}

export default App;
