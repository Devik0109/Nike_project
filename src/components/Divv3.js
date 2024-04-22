import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import sports0 from '../img/sports0.png';
import sports1 from '../img/sports1.png';

import sports3 from '../img/sports3.png';
import sports11 from '../img/sports11.png';
import sports14 from '../img/sports14.png';

import Container from 'react-bootstrap/Container';
import './Divv.css';
function Divv3() {
  return (
    <div>
         <Container>
      <Row className='scroll-row'>
      <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sports0} />
      <Card.Body>
        <Card.Title>Nike Basketball
        </Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Styles made for your game.</p>
          <b><u>Shop</u></b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sports1} />
      <Card.Body>
        <Card.Title>Nike Golf



</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Conquer any course in style.</p>
          <b><u>Shop</u></b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
     <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sports3} />
      <Card.Body>
        <Card.Title>Nike Trail
</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Gear that leads to wild places.</p>
          <b><u>Shop</u></b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sports14} />
      <Card.Body>
        <Card.Title>Nike Golf


</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Conquer any course in style.</p>
          <b>Shop</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sports11} />
      <Card.Body>
        <Card.Title>
Nike Tennis


</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Serve up in style.</p>
          <b><u>Shop</u></b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
    
   
    
  )
}

export default Divv3