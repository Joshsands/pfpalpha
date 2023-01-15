import React, { useState } from 'react';
import Register from '../components/Register';
import Signin from '../components/Signin';
import { Grid, Typography, CardContent, CardActions } from '@mui/material';

import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Form, Button, Card, Alert } from 'react-bootstrap'

const Login = () => {

  const [component, setComponent] = useState("componentA");


  return (

<>
      <Grid align="center">
        <Grid item sx={{ width: { xs: '100%', md: '50%', lg: '50%' } }}>

            <div className="w-100">
              {component === "componentA" && <Register />}
              {component === "componentB" && <Signin />}
            </div>


            <div className="w-100 text-center mt-2">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>


            <div className="w-100 text-center mt-2">
              Already have an account?
              <Button className="m-2" onClick={() => setComponent("componentB")}>Login</Button>
            </div>

            <div className="w-100 text-center mt-2">

              Don't have an account?
              <Button variant="success" className="m-2" onClick={() => setComponent("componentA")}> Signup</Button>
            </div>



        </Grid>
        </Grid>

      </>
      );
}

      export default Login;