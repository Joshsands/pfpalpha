import * as React from "react";
import { Card, Container } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <>
  

    <Container className="d-flex align-items-center justify-content-center">
      <Card className='w-50 align-center'>

        <Card.Body>
          <h2 className="text-center mb-4">OUR PROJECT HISTORY</h2>
</Card.Body>

</Card>


</Container>

    <Container className="d-flex align-items-center justify-content-center">
      <Card className='w-50 align-center'>

        <Card.Body>
          <h2 className="text-center mb-4">PROJECT 1</h2>
          <div>
          <img src={'project1'} alt="project 1" />
          <p>
            Tesla
          </p>
          </div>
        
        </Card.Body>
 
      </Card>

      <Card className='w-50 align-center'>

<Card.Body>
  <h2 className="text-center mb-4">PROJECT 1</h2>
  <div>
  <img src={'project1'} alt="project 1" />
  <p>
    Tesla
  </p>
  </div>

</Card.Body>

</Card>


</Container>

<Container className="d-flex align-items-center justify-content-center">
      <Card className='w-50 align-center'>

        <Card.Body>
          <h2 className="text-center mb-4">PROJECT 1</h2>
          <div>
          <img src={'project1'} alt="project 1" />
          <p>
            Tesla
          </p>
          </div>
        
        </Card.Body>
 
      </Card>

      <Card className='w-50 align-center'>

<Card.Body>
  <h2 className="text-center mb-4">PROJECT 1</h2>
  <div>
  <img src={'project1'} alt="project 1" />
  <p>
    Tesla
  </p>
  </div>

</Card.Body>

</Card>

</Container>
</>
  );
};

export default Portfolio;