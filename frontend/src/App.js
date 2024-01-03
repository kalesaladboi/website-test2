import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar'
import Register from './pages/Register'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  const [currentUser, setCurrentUser] = useState();

  if (currentUser){
    return (
      <div>
        <Navbar></Navbar>
        <Login></Login>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Login></Login>
      <p></p>
      <Register></Register>
      <p></p>
      <Home></Home>
    </div>
  );
}

export default App;
