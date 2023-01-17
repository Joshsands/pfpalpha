import * as React from "react";
import Appointment from "../components/Appointment"
import { Card } from 'react-bootstrap'

const Service = () => {
  return (
    <>
      <Card className="align-items-center m-3">
      <h1>Book Your Appointment</h1>
      <Appointment />
      </Card>
    </>
  );
};

export default Service;