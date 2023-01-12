import React, { useState } from 'react';
import Register from '../components/Register';
import Signin from '../components/Signin';

import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Form, Button, Card, Alert } from 'react-bootstrap'

const Login = () => {
 
  const [component, setComponent] = useState("componentA");


  return (

<>
    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >

      <div className="w-100" style={{ maxWidth: '400px' }}>
      {component === "componentA" && <Register />}
      {component === "componentB" && <Signin />}
      </div>
    </Container>

    <div className="w-100 text-center mt-2">
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>

    <div className="w-100 text-center mt-2">
            Already have an account?
            <Button onClick={() => setComponent("componentB")}>Login</Button>
            Don't have an account?
            <Button onClick={() => setComponent("componentA")}>Signup</Button>
        </div>

        </>
  );
}

export default Login;