import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import Container from 'react-bootstrap/Container';
import './Divv.css';
function Divv() {
  return (
    <div>
         <Container>
      <Row className='scroll-row'>
      <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
     <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
    
   
    
  )
}

export default Divv