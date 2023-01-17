import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button, Alert, Card } from 'react-bootstrap'
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns'

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  function scheduleAppointment() {
    setAlertMessage(format(selectedDate, 'dd/yyyy'));
    setShowAlert(true);
  }

  function removeAlert() {
    setShowAlert(false);
  }

  return (
    <>
    <Card className='align-items-center' onChange={removeAlert}>
      <Calendar 
        onChange={setSelectedDate}
        value={selectedDate}
        onClick={removeAlert}
      />

      <Button variant='success' className='m-2 w-100' onClick={scheduleAppointment}>
        Schedule Appointment
      </Button>
    </Card>
    {showAlert && <Alert variant="danger">Your appointment has been scheduled for {alertMessage}</Alert>}
    </>
  );
};

export default Appointment;