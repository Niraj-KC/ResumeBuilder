import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Template_rb from './Components/Template_rb/Template_rb';
import Form from './Components/Form/Form';
import { Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
// import { Router } from 'express';
import Form1 from './Components/Form1/Form1';
import PersonalDetails from './Components/Form/PersonalDetails/PersonalDetails';
import Education from './Components/Form/Education/Education';

function App() {
  const PrivateRoute = () => {
    const user = JSON.parse(localStorage.getItem("AppUser"));
    console.log("#user", user);
    return user ? <Outlet /> : <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      {/* <Router> */}
      {/* <Fragment> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Route exact path='/' element={<PrivateRoute />}> */}
        <Route exact path='/' element={<Education />} />
        {/* </Route> */}  
        <Route path='/Template_rb' element={<Template_rb />} />
        <Route path='/Form' element={<Form />} />
      </Routes>
      {/* </Fragment> */}
      {/* </Router> */}
    </div >
  );
}

export default App;
