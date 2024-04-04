import React, { useEffect } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Template_rb from './Components/Template_rb/Template_rb';
import Form from './Components/Form/Form';
import { Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'

import { BASE_URL } from "./Utils/config/config"
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from './state/action-creator/actions';

function App() {


  const PrivateRoute = () => {
    const user = JSON.parse(localStorage.getItem("AppUser"));
    console.log("#PR1 :user", user);
    return user ? <Outlet /> : <Navigate to="/login" replace />;
  };

  // const PrivateRoute2 = () => {
  //   const user = JSON.parse(localStorage.getItem("AppUser"));
  //   console.log("#PR2 :user", user);
   
  //   useEffect(() => {
  //     if (user) {
  //       fetchData(user.id);
  //     }
  //   }, [user]);

  //   return user ? <Outlet /> : <Navigate to="/login" replace />;
  // };

  return (
    <div className="App">
      {/* <Router> */}
      {/* <Fragment> */}
      <Routes>
          <Route path='/login' element={<Login />} />
        <Route exact path='/' element={<PrivateRoute />}>
          <Route exact path='/' element={<HomePage />} />
        </Route>

        <Route path='/Template_rb' element={<Template_rb />} />

        {/* <Route exact path='/Form' element={<PrivateRoute2 />}> */}
          <Route path='/Form' element={<Form />} />
        {/* </Route> */}

      </Routes>
      {/* </Fragment> */}
      {/* </Router> */}
    </div >
  );
}

export default App;
