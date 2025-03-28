import React from 'react'
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Task from './Pages/Task.jsx';
import Counter from './Pages/Counter.jsx';
import About from './pages/About.jsx';



const App = () => {

  
  return (
    <>
      
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/About" element={<About />} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App