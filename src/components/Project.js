import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import booking from "../assets/img/booking1.jpeg";
import chatting from "../assets/img/HeyHI.jpg";
import pizza from "../assets/img/PIZZA.jpg";
import contact from "../assets/img/ContactManager.jpeg";

const projects = [
  {
    title: "Hotel Booking",
    description: "Hotel Booking app using MERN STACK",
    imgUrl: booking,
  },
  {
    title: "Online Chatting App",
    description: "Chatting App using MERN STACK and SOCKET.IO",
    imgUrl: chatting,
  },
  {
    title: "Pizza Order App",
    description: "Pizza Ordering App using MERN STACK",
    imgUrl: pizza,
  },
];

const projects1 = [
  {
    title: "Contact Manager",
    description: "Contact Manager app using JAVA SPRINGBOOT",
    imgUrl: contact,
  },
  
];

export const Project = () => {
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, blanditiis. Vero ratione eveniet harum deleniti alias at odit placeat. Maiores pariatur voluptas dolorem quod asperiores beatae nam in perferendis! Natus.</p>
          <Tab.Container id="projects-tab" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home" className='nav-pills mb-5 justify-content align-items-center' id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">MERN STACK</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">JAVA SPRINGBOOT</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="third" >
                  Third
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
             <Tab.Content >
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project,index) => {
                     return (
                       <ProjectCard 
                        key={index}
                        {...project}
                     />
                     )
                  })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <Row >
                  {projects1.map((project,index) => {
                     return (
                       <ProjectCard 
                        key={index}
                        {...project}
                     />
                     )
                  })
                  }
                </Row>
              </Tab.Pane>
            </Tab.Content> 
            
          </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  )
}
