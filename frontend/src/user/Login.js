import React ,{useState,useContext} from 'react';
import {Notification} from "../context/notification"
import {Form,Button,Container,Row} from "react-bootstrap"
import axios from "axios"
import font from "../assets/img/font.jpeg"

export default function Login() {
  const {ShowNotifications } = useContext(Notification)
  const [user,setUser]=useState({
    email:"",
    password:"",
    error:false 
  });
 const handleLogin =async(e)=>{

   e.preventDefault();
   let response = await axios.post("http://localhost:3001/api/login",{email:user.email,password:user.password}) ;
    console.log("response:",response.data);
    if (response.data.email){
setUser({...user,error:{email:response.data.email}})
return console.log(response.data.email)
    }
    if(response.data.password){
      setUser({...user,error:{password:response.data.password}})
      
      return console.log(response.data.password)
    }
    if (response.data.isUser){
     localStorage.setItem("token",response.data.accesstoken)
     localStorage.setItem("role",response.data.isUser.role)
     localStorage.setItem("nom",response.data.isUser.nom)
     localStorage.setItem("email",response.data.isUser.email)
     localStorage.setItem("dateCreation",response.data.isUser.dateCreated)
     localStorage.setItem("tel",response.data.isUser.tel)
     ShowNotifications({type:"success", message:"vous avez connecter",title:"connecter"})
     setTimeout(() => {
        window.location.href="/"
     }, 2000);
    
     
    }
    
 }
const handleForgotMyPassword=()=>{

}
  return (
    <div className="hold-transition login-page" style={{
      backgroundImage: `url(${font})`
      , width:"100%",
      height:"90vh",
      backgroundSize:"cover",
     backgroundRepeat:"no-repeat",
     backgroundAttachment:"fixed",
     backgroundPosition:"center",
    }}>
 <div className="login-box" style={{
    boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
 }}>
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="../../index2.html" className="h1"><b>APERO</b></a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <Container className="text-left">
      <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    onChange={(e)=>setUser({...user,email:e.target.value,error:false})}
    value={user.email}
    isInvalid ={user.error.email}
    />
    <Form.Control.Feedback type="invalid">
 {user.error.email}
  </Form.Control.Feedback>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"
     onChange={(e)=>setUser({...user,password:e.target.value,error:false})}
     value={user.password}
     isInvalid ={user.error.password}
    />
        <Form.Control.Feedback type="invalid">
 {user.error.password}
  </Form.Control.Feedback>
  </Form.Group>
  <Row>
     <Button variant="primary" type="submit" className='ms-auto'>Submit </Button>
  </Row>

 
    
 
</Form>
 </Container>
      <div className="social-auth-links text-center mt-2 mb-3">
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
  
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>

     </div>
  );
}
