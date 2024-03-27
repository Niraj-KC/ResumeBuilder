import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Template_rb from './Components/Template_rb/Template_rb';
import Form from './Components/Form/Form';
import { Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
// import { Router } from 'express';

function App() {
  const PrivateRoute = () => {
    const isLoggedIn = localStorage.getItem("AppUser");
    console.log("#isLoggedIn", isLoggedIn);
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      {/* <Router> */}
      {/* <Fragment> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Route exact path='/' element={<PrivateRoute />}> */}
        <Route exact path='/' element={<HomePage />} />
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
