import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Estimator from './pages/Estimator';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Login from './pages/login';
import Navigation from './components/Nav';

function App() {
  return (
    <div className="App">
 <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/Estimator" element={<Estimator/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
