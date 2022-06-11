import React,{useEffect,useState} from 'react';
import {Container,Button} from "react-bootstrap"
import { ImgList } from './components/ImgList';
import font from "../assets/img/font.jpeg"
import axios from "axios"
import YouTube from 'react-youtube';




export default function Home() {
/******youtube params */
const opts = {
  height: '500',
  width: '900',
  playerVars: {
    autoplay: 1,
  },
};


/***************** */

  const [prod,setProd]=useState([])
  const [category,setCategory]=useState([])
  const[tcategory,setTcategory]=useState(false)
  useEffect(() => {
      
        async function fetchProducts() {
       try{
          let res = await axios.post(`http://localhost:3001/produit/?category=${tcategory.nameCategory ? tcategory.nameCategory :""  }&page=${1*4}`)
           setProd(res.data.produits)
       }catch(err){
           console.log(err)
       }
        }
  
        async function fetchMyAPI() {
          let response = await axios.get('http://localhost:3001/category/')
         
          setCategory(response.data.category)
        }
        fetchMyAPI()
    
        fetchProducts()
  }, [tcategory])
  return (<>
<Container fluid
className="d-flex align-items-center justify-content-center"
style={{
  backgroundImage: `url("https://images.alphacoders.com/438/438979.jpg")`
  , width:"100%",
  height:"100vh",
  backgroundSize:"cover",
 backgroundRepeat:"no-repeat",
 backgroundAttachment:"fixed",
 backgroundPosition:"center",
}}
>
  <div>
<h1 className='text-white bg-black p-2 animate__animated animate__lightSpeedInRight' 
 >BIENVENUE CHEZ</h1> 
<h1 className="text-center text-bold bg-white p-2 animate__animated animate__lightSpeedInLeft">APERO</h1>
<hr/>
<Button className="d-flex m-auto text-bold animate__animated  animate__fadeInUpBig" variant="outline-light" >DECOUVRIR</Button></div>
</Container>
  <Container fluid className='bg-white p-3' style={{
    height:"auto"
  }}>
    <h1 className='text-center'>SERVICE</h1>
    <Container className='d-flex flex-column flex-lg-row justify-content-around'>
      <Container
      className="m-lg-2 my-2"
      style={{
        borderRadius:"20px",
        border:"1px solid black",
        height:"40vh"
        
      }}>

      </Container>
      <Container
      className="m-lg-2 my-2"
      style={{
        borderRadius:"20px",
        border:"1px solid black",
        height:"40vh"
        
      }}>

      </Container>
      <Container
      className="m-lg-2 my-2"
      style={{
        borderRadius:"20px",
        border:"1px solid black",
        height:"40vh"
        
      }}>

      </Container>
      <Container
      className="m-lg-2 my-2"
      style={{
        borderRadius:"20px",
        border:"1px solid black",
        height:"40vh"
        
      }}>

      </Container>

    </Container>
    

  </Container>
 
    
 <Container fluid
 className=" d-flex align-items-center"
 style={{
  backgroundImage: `url("https://images.alphacoders.com/438/438979.jpg")`
  , width:"100%",
  height:"100vh",
  backgroundSize:"cover",
 backgroundRepeat:"no-repeat",
 backgroundAttachment:"fixed",
 backgroundPosition:"center",
}}
 >
   <Container className="d-flex align-items-center justify-content-center p-2"
   style={{
     borderRadius:"10px",
     backgroundColor:"rgba(255, 255, 255, 0.705)"
   }}
   >
<YouTube videoId="HQbPja7wU9o" opts={opts} onReady={(e)=>e.target.pauseVideo()} />;
</Container>
 </Container>
    <Container  fluid
    className='bg-white'
   
 
    >
      <h1 className='text-center my-3'>EXPLOREZ NOTRE GALERIE</h1>
    <div  className="categoryIconC"  >
    {
        category.map(c=>
     
    <div className="d-flex flex-column mx-3 text-center">
     
           <img 
         alt ="iconCatgory"
         src={`http://localhost:3001/categoryIcon/${c.iconCategory}`}
               className="rounded-circle m-1 p-2 bg-red"
               style={{width:"100px",height:"100px",
               boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"            }}
               role="button"
              
               />
               <h6>{c.nameCategory}</h6>
               </div>
               )
              }
               

  

    </div>
    <Container className="w-75 m-auto">
      <ImgList/>
    </Container>
 
    </Container>
 
    <Container  fluid
    className='bg-white'
    style={{
height:"400px",

    }}
    >
      <h1 className='text-center my-3'>A PROPOS DE NOUS</h1>

    </Container>
  </>);
}
