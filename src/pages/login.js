import React, { useState } from 'react';
import Register from '../components/Register';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext'


const Login = () => {
 


  return (

    <AuthProvider>

    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
      <Register />
      </div>
    </Container>
    </AuthProvider>


  );
}

export default Login;