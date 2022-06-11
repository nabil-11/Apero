import React from 'react';
import {Modal,Container} from "react-bootstrap"
import {Spinner} from "react-bootstrap"
import logo from "../../assets/img/logo.jpeg"
import 'animate.css';
 const loading = () => {
    
  return (
      <>
      <div className="loadingBg">
      <Container className="loadingContainer text-center">
    <img src={logo} className="w-50 animate__animated animate__lightSpeedInLeft animate__faster	2s" /> 
     </Container> 
    </div>
     </>
  );
};
export default loading;