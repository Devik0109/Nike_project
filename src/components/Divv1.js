import React from 'react';
import nike3 from "../img/nike3.png";
import Button from 'react-bootstrap/Button';


function Divv1() {
  return (
    <div>
      <h1 style={{textAlign:"center",letterSpacing:"-9px",fontSize:"80px",fontFamily:"inherit",color:"black",marginTop:"20px"}}><b>NIKE SB DAY ONE</b></h1>
      <div style={{textAlign:"center"}}>Made to skate.Designed to support you from the start.</div>
      <div className='text-center'><Button variant="dark" style={{ height:"40px", width:"70px",borderRadius:"20px",textAlign:"center",marginTop:"30px",marginBottom:"60px"}}>Shop</Button></div>
           
           
           
        

   <div className='container text-center'>
      <h5 style={{textAlign:"left"}}>The Latest</h5>
      <img src={nike3} alt='img' style={{width:"100%"}}/>
      <h1 style={{textAlign:"center",letterSpacing:"-7px",fontSize:"80px",fontFamily:"inherit",color:"black",marginTop:"20px"}}><b>CLASSIC REFRESH</b></h1>
      <p style={{fontSize:"20px"}}>Featuring a modern interpretation of classic pieces, this collection</p>
      <p style={{fontSize:"20px" , marginTop:"-20px"}}>introduces refined streetwear styles in a clean, minimal palette.</p> 
      <Button variant='dark' style={{borderRadius:"20px"}}>Shop</Button>
   </div>

   <div className='container text-center'>
   <h5 style={{textAlign:"left",marginTop:"50px"}}>Classics Spotlight</h5>
   </div>
  </div>
  )
}

export default Divv1