import React,{useEffect,useState} from 'react'
import {Container,Row,Col,Form,FormControl,Button,Card,Offcanvas,OverlayTrigger,Tooltip} from "react-bootstrap"
import {BiSearchAlt2} from "react-icons/bi"
import {BsFillFilterCircleFill} from "react-icons/bs"
import font from "../../assets/img/font.jpeg"
import axios from "axios"
import moment from "moment"
import { useSelector,useDispatch } from 'react-redux'
import {addToCart} from "../../context/cartSlice"


export const CategoryContainer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch =useDispatch()

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
  return (
   <Container className='my-5 p-3'
   style={{
       height:"auto",
       backgroundImage:`url(${font})`
       , width:"100%",
      
       backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
   }}
   >
    
      
      <BsFillFilterCircleFill size={70} role="button" className='categoryIcon bg-white p-2 d-flex ms-auto rounded-circle' onClick={handleShow} />
    <>
     

      <Offcanvas show={show} onHide={handleClose}   
      
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
          <Offcanvas.Title className="d-flex m-auto">CATEGORIES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row md={1} xs={1} >
    
    {
      category.map( c =>
          <Col>
              <OverlayTrigger
      key="right"
      placement="right"
      overlay={
        <Tooltip id={`tooltip-right}`}>
       {c.nameCategory.toUpperCase()}
        </Tooltip>
      }
    >
     
  
          
    <Container
    className='categoryIcon'
        style={{
             backgroundColor:"white",    
          backgroundImage:`url("http://localhost:3001/categoryIcon/${c.iconCategory}")`,
          width:"150px",
          height:"150px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"center",
          borderRadius:"20px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

      }}
    
      role="button"
     onClick={()=>setTcategory(c) || handleClose()}
    >

    </Container>
    </OverlayTrigger>
  
    <hr/>
    </Col>
        )
    }
  
          </Row>
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
     <Row lg={3} md={2} xs={1} className="g-4" >
       {
        tcategory && tcategory.Produits.length === 0 ? 
        <Container className=" w-75 m-auto text-center" style={{
          borderRadius:"20px",
          height:"300px",
          paddingTop:"100px",
          
        }}>
          <h5 className="text-muted">Aucun Produit exist ici </h5>
        </Container>
         :
      
             prod.map(p =>
              
          
         <Col>
               <Card className="cardproduit m-2" style={{ width:'auto',margin:"auto",borderRadius:"20px" }}>
 <Container  style={{
   backgroundImage:`url("http://localhost:3001/produits/${p.ImageProduit}")`,
   height:"300px",
   backgroundSize: "contain",
   backgroundRepeat: "no-repeat",
   backgroundPosition:"center"
   
 }} >
   

 </Container>
  <Card.Body>
    <Card.Title>
     <h5>{p.nomProduit.toUpperCase()}</h5>
      </Card.Title>
    <Card.Text>
      <h5 className="text-right" >{p.prixProduit} TND</h5>
      
    
    </Card.Text>
    <Button variant="outline-primary" className="d-flex m-auto " >plus d'infomations</Button>
  <Button  className="d-flex my-2" style={{
    margin:"auto"
  }} onClick={()=>dispatch(addToCart(p))}>add cart</Button>
  </Card.Body>
</Card>
         </Col>
               )
            }
       
         
     </Row>
       

   </Container>
  )
}
