import React from 'react'
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Task from './Pages/Task.jsx';


const App = () => {

  
  return (
    <>
      
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App