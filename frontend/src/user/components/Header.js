import React from 'react'
import{Navbar,Nav,Form,Container,Offcanvas,NavDropdown,FormControl,Button,Row,Col,Tooltip,OverlayTrigger} from "react-bootstrap"
import logo from "../../assets/img/logo.jpeg"
import font from "../../assets/img/font.jpeg"
import {AiFillHome} from "react-icons/ai"
import {BiCategoryAlt,BiLogInCircle} from "react-icons/bi"
export const Header = () => {
  return (
    <Navbar bg="white" expand={false}  style={{
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
   , height:"20vh"
   }}>
    <Container fluid className="px-5">
    <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="70"
          height="70"
          className="categoryIcon d-inline-block align-top"
        />{' '}
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        className="bg-white"
           
      style={{
        height:"auto",
        backgroundSize:"cover",
       backgroundRepeat:"no-repeat",
       backgroundAttachment:"fixed",
       backgroundPosition:"center",
       width:"min-content"
      }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel" className="m-auto">MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Row md={1} xs={1}  >
           <Col>
           <OverlayTrigger
      key="left"
      placement="left"
      overlay={
        <Tooltip id={`tooltip-left`}>
         Home
        </Tooltip>
      }
    >
      <Container className="categoryIcon bg-white d-flex justify-content-center align-items-center m-2 " style={{
             width:"150px",
             height:"150px",
             borderRadius:"20px",
             boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"

           }} >
             <a href ="/">
             <AiFillHome size={70} role ="button"  />
              </a>
           </Container>
    </OverlayTrigger>
          
           <hr/>
           </Col>
           <Col>
           <OverlayTrigger
      key="left"
      placement="left"
      overlay={
        <Tooltip id={`tooltip-left`}>
        categories
        </Tooltip>
      }
    >
           <Container className=" categoryIcon bg-white d-flex justify-content-center align-items-center m-2 " style={{
             width:"150px",
             height:"150px",
             borderRadius:"20px",
             boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"

           }} >
             <a href="/categories">
             <BiCategoryAlt size={70} />
            </a>
           </Container>
           </OverlayTrigger>
           <hr/>
           </Col>
       
           <Col>
           <OverlayTrigger
      key="left"
      placement="left"
      overlay={
        <Tooltip id={`tooltip-left`}>
         Login
        </Tooltip>
      }
    >
           <Container className="categoryIcon bg-white d-flex justify-content-center align-items-center m-2 " style={{
             width:"150px",
             height:"150px",
             borderRadius:"20px",
             boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"

           }} >
             <a href="/login">
             <BiLogInCircle size={70} />
</a>
           </Container>
           </OverlayTrigger>
           <hr/>
           </Col>
             
         </Row>
         
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}
