import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div id='first'>
    <div  style={{display:'flex',gap:'200px',paddingLeft:'40px',paddingTop:'30px'}}>    
    <div style={{color:'white'}}>
        <h5>FIND A STORE</h5>
        <h5>BECOME A MEMBER</h5>
        <h5>Send Us Feedback</h5> 
    </div>
        {/* <div className="app">
      <a href="#" className="custom-link">Hover over me</a>
    </div> */}
    <div>
    <h5 style={{color:'white'}}>Help</h5>
    <div className="app">
      <a href="#" className="custom-link">Get Help</a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Order status</a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Delivery</a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Returns</a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Payment options</a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Contact Us on Nike.com Inquiries </a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Contact Us on All other Inquiries </a>
    </div>
    </div>
    <div>
    <h5 style={{color:'white'}}>COMPANY</h5>
    <div className="app">
      <a href="#" className="custom-link">About Nike</a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">News </a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Careers</a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Investors</a>
    </div>
    <div className="app">
      <a href="#" className="custom-link">Sustainability</a>
    </div>

    </div>
    <div style={{display:'flex',gap:'10px',paddingLeft:'300px'}}>
     <div className="app">
    <i class="fa-brands fa-twitter" id="custom-link"></i>
    </div>
    <div className="app">
    <i class="fa-brands fa-facebook" id="custom-link"></i>
    </div>
    <div className="app">
    <i class="fa-brands fa-youtube" id="custom-link"></i>
   </div>
   <div className="app">
   <i class="fa-brands fa-instagram" id="custom-link"></i>
   </div> 
   </div>
   
   
    </div>
    <div style={{display:'flex',gap:'50px'}}>
    <div style={{color:'white'}}><i class="fa-solid fa-location-dot"></i></div>
    <h5 style={{color:'white'}}>India</h5>
    <h6 style={{color:'grey'}}>&copy; 2024 Nike,Inc. All rights reserved</h6>
    <div style={{marginLeft:'600px'}}>
      <a href="#" className="custom-link">Guides</a>
      <a href="#" className="custom-link">Term of Sale</a>
      <a href="#" className="custom-link">Term of use</a>
      <a href="#" className="custom-link">Nike privacy policy</a>
    </div>
    </div>
    </div>
  )
}

export default Footer