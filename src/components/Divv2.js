import React from "react";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import  nike7 from "../img/nike7.png";
import  nike4 from "../img/nike4.png";
import  nike5 from "../img/nike5.png";
import  nike6 from "../img/nike6.png";
import  nike2 from "../img/img2.png";
import './Divv.css';


function card1() {
    return (
      <div>
          <Container>
        <Row className='scroll-row'>
        <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={nike4} />
        <Card.Body>
        </Card.Body>
      </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={nike5} />
        <Card.Body>
        </Card.Body>
      </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={nike6} />
        <Card.Body>
        </Card.Body>
      </Card>
      </Col>
       <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={nike7} />
        <Card.Body>
        </Card.Body>
      </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={nike2} />
        <Card.Body>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
      <Container>
      <Row>
      <Col xl={10}><p style={{fontSize:'20px',marginTop:"70px"}}>Shop by Sport</p>
      </Col>
      <Col xl={2}><p style={{marginTop:"70px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-less-than"></i></Button>
      &nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-greater-than"></i></Button></p>
      </Col>
      </Row>
      </Container>
      </div>
      
     
    );
  }
  
  export default card1;
  
   
  
  