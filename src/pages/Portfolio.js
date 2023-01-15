import React, { Component } from 'react';
import { Grid, Typography, CardContent, CardActions, Button } from '@mui/material';
import tesla from "../assets/images/tesla.jpg"
import block27 from "../assets/images/block27.jpg"
import building3 from "../assets/images/building3.jpg"
import rio from "../assets/images/rio.png"
import { Card } from 'react-bootstrap'

// const isSmallScreen = useMediaQuery({ maxWidth: 600 })

class PortfolioPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          name: "Tesla Gigafactory - Austin, Texas",
          description: "One key takeaway from working on an industrial construction project is the importance of effective communication and coordination among all team members, including engineers, contractors, and tradespeople. This ensures that the project stays on schedule and within budget, and that all necessary safety protocols are being followed to protect workers and the surrounding community. Additionally, understanding and being familiar with industry standards and regulations is crucial in ensuring a successful outcome of the project.",
          image: tesla,
          link: "https://www.tesla.com/en_eu/giga-texas"
        },
        {
          id: 2,
          name: "Block 27",
          description: "We pride ourselves on providing expert fire alarm service to our customers. Our team of highly skilled and experienced professionals have the knowledge and expertise necessary to design, install, maintain, and repair fire alarm systems that are compliant with all local and national codes and standards.",
          image: block27,
          link: "https://www.loopnet.com/Listing/501-S-Austin-Ave-Georgetown-TX/27150163/"
        },
        {
          id: 3,
          name: "Austin United States Courthouse",
          description: "Value engineering: In order to achieve the best outcome for a project within the constraints of budget and time, it is important to evaluate different options and alternatives for materials, systems and methods.",
          image: building3,
          link: "https://courtsweb.gsa.gov/courthouse/austin-united-states-courthouse"
        },
        {
          id: 4,
          name: "RIO Austin",
          description: "We offer a wide range of fire alarm services, including installation, inspection, and maintenance of fire alarms. Our team of certified and experienced technicians are available 24/7 to respond to any emergencies. We use state-of-the-art technology and equipment to ensure that your fire alarms are always in proper working condition. Additionally, we offer competitive pricing and flexible scheduling to fit your needs. Trust us to keep your property safe.",
          image: rio,
          link: "https://6street.com/listing/rio-austin/"
        },
      ]
    };
  }


  
  render() {

    
    return (
      <Grid container spacing={1}>
        {this.state.projects.map((project) => (
          <Grid item xs={12} sm={6} md={6} key={project.id} align="center">
            <Card className="w-100 h-100">
              <Card.Img variant="top" src={project.image} alt={'Tesla Giga Factory Texas'} />
              <CardContent className=''>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default PortfolioPage;