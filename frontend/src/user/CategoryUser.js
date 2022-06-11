import React from 'react'
import {Container} from "react-bootstrap"
import { CategoryContainer } from './components/CategoryContainer'
import font from "../assets/img/font.jpeg"

 export const CategoryUser = () => {
  return (
      <>
   <Container fluid 
   className='d-flex align-items-center '
   style={{
       
    backgroundImage:`url(${font})`
    , width:"100%",
    height:"50vh",
    backgroundSize:"cover",
   backgroundRepeat:"no-repeat",
   backgroundAttachment:"fixed",
   backgroundPosition:"center",
   }}>
       <h1 className='m-auto text-white bg-black p-2 rounded-2 animate__animated animate__bounceInDown'>APERO PRODUITS</h1>

   </Container>
   <CategoryContainer/>
</>
  )
}
