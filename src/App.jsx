import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Template_rb from './Components/Template_rb/Template_rb';
import Form from './Components/Form/Form';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<HomePage />} />
        <Route path='/Template_rb' element={<Template_rb />} />
        <Route path='/Form' element={<Form />} />
      </Routes>
      {/* <HomePage /> */}
      
    </div>
  );
}
export default App;
