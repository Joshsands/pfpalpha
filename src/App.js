import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Estimator from "./pages/Estimator";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/login";
import Navigation from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <AuthProvider>
            <Navigation />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/dashboard" element={
<PrivateRoute>
                <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/shop" element={<Shop />} />
              <Route path="/estimator" element={<Estimator />} />
              <Route path="/service" element={<Service />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Routes>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
