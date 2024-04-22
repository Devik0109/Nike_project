import React from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons/fa
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nike from './img/nike.jpg';
import nike2 from './img/nike2.png';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel component
import { useState, useEffect } from 'react';
import shoe from './img/shoe.png';
import Button from 'react-bootstrap/button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Divv from './components/Divv';
import Divv1 from './components/Divv1';
import Divv2 from './components/Divv2';
import Divv3 from './components/Divv3';
import Footer from './components/Footer';
// import img2 from './img/img2.png';
// import img3 from './img/img3.png';
// import img4 from './img/img4.png';
// import img5 from './img/img5.png';
// import img6 from './img/img6.png';




// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function App() {
  const [texts, setTexts] = useState([
    "Move, Shop, Customise & Celebrate With Us. No matter what you feel like doing today, It’s better as a Member. Join Us",
    "Save Up to 40%. Shop All Our New Markdowns"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className='container'>
      <Navbar bg="light" data-bs-theme="light" style={{ height: '35px' }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={nike} alt='Logo' width='30px' height='30px' style={{ marginRight: "1px" }} />
          </Navbar.Brand>
          <Nav className="ms-auto" style={{ fontSize: '12px', fontFamily: 'Helvetica', color: 'black' }}>
            <Nav.Link href="#">Find a store&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#">Help&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#">Join Us&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#">Sign In </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar data-bs-theme="light" style={{ height: '35px', padding: "30px" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={nike2} alt='Logo' width='70px' height='30px' style={{ marginRight: "1px" }} />
          </Navbar.Brand>
          <Nav className="ms-auto " style={{ fontSize: '20px', fontFamily: 'Helvetica', color: 'black' }}>
            <Nav.Link href="#"><b>New & Featured&nbsp;&nbsp;</b></Nav.Link>
            <Nav.Link href="#"><b>Men&nbsp;&nbsp;</b></Nav.Link>
            <Nav.Link href="#"><b>Women&nbsp;&nbsp;</b></Nav.Link>
            <Nav.Link href="#"><b>Kids&nbsp;&nbsp;</b></Nav.Link>
            <Nav.Link href="#"><b>Sale&nbsp;&nbsp;</b></Nav.Link>
            <Nav.Link href="#"><b>Customise&nbsp;&nbsp;</b></Nav.Link>
            <Nav.Link href="#"><b>SNKRS&nbsp;&nbsp;</b></Nav.Link>
            <div className="wrapper">
              <div className="searchBar" style={{ position: 'relative' }}>
                <input  className="bg-light" id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" style={{ borderRadius: "100px", paddingLeft: "40px",width:"150px"}} />
                <FaSearch className="search-icon" style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", }} />&nbsp;&nbsp;
                 <i  class="fa-regular fa-heart"></i>&nbsp;&nbsp;
                 <i class="bi bi-bag"></i>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <div className='carousel bg-light' style={{fontSize:'15px'}}>
      <Carousel controls={false} indicators={false} interval={3000} pause={false} >
        {texts.map((text, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item-text text-center">
              {text.split('.').map((sentence, idx) => (
                <p key={idx}>{sentence.trim()}</p>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      <div>
        <img src={shoe} width='1320px' height='600px'></img>
      </div>
      <div className='text-center'>
        <h6 style={{marginTop:"50px"}}>Feel the Unreal</h6>
        <p style={{fontSize:"50px",color:"black",fontFamily:"inherit",letterSpacing:"-4px"}}><b>AIR MAX DN</b></p>
        <h6>The next generation of Air technology is here.</h6>
        <Button variant="dark" style={{ height:"40px", width:"110px",borderRadius:"20px"}}>Shop Now</Button>
        </div>
       
       <Container>
      <Row>
      <Col xl={10}><p style={{fontSize:'20px'}}>New Arrivals Just Landed.</p>
      </Col>
      <Col xl={2}><p>Shop&nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-less-than"></i></Button>
      &nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-greater-than"></i></Button></p>
      </Col>
      </Row>
      </Container>
      <Divv/>
      <Divv1/>
      <Divv2/>
      <Divv3/>
      <Footer/>
      <h5 style={{marginTop:'50px'}}>Member Benefits</h5> 
    </div>
    
   
  );
}

export default App;
