import React,{useState,useEffect} from 'react'
import {AiFillShopping,AiFillDelete} from "react-icons/ai"
import { Offcanvas,Card,Button, FormControl,Container} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { getTotals,removeFromCart,clearCart,decreaseCart } from '../../context/cartSlice'

export const ShopIcon = () => {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
      <>
   <div 
   className='rounded-circle p-2 m-5'
   role="button"
   onClick={handleShow}
   style={{
  backgroundColor:"white",
  zIndex:"500",
  position:"fixed",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
   }}>
        <span className="bg-primary rounded-circle position-absolute p-1 px-2 " style={{
          zIndex:"999"
        }}>{cart.cartTotalQuantity}</span>

   <AiFillShopping size={50} className="categoryIcon" />
   </div>
   <Offcanvas show={show} onHide={handleClose}
   style={{
width:"500px"
   }}
   >
        <Offcanvas.Header closeButton>
          <h3 className="text-center m-auto">Panier </h3>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
       {
         cart.cartItems == false ? 
         <h6 className='text-muted text-center mt-5'>liste vide</h6>
         :
         cart.cartItems.map(c =>
          <>
          <hr/>

          <Card className="d-flex flex-row" style={{ height: 'auto' }} >
<Container style={{
    backgroundImage: `url("http://localhost:3001/produits/${c.ImageProduit}")`,
    height:"200px",
    maxWidth:"50%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    alignSelf:"center"
}}>

</Container>
  <Card.Body>
  <Button variant="outline-danger" className="mt-5 d-flex ms-auto rounded-circle p-2" onClick={(e)=> dispatch(removeFromCart(c))} ><AiFillDelete/></Button>

    <Card.Title>{c.nomProduit}</Card.Title>
    <Card.Text>
    <p className='pl-2'> {c.DescProduit} </p>
     <h6 className='text-right'>{c.prixProduit} TND</h6>
    </Card.Text>
    <FormControl type="number" max={3}  min={0}  value={c.cartQuantity}/>
    <p>  Prix unite Total: </p>
    <h5 className="text-right mr-2 bg-primary p-2">{c.cartQuantity *c.prixProduit } TND</h5>
   
  </Card.Body>
</Card>
</>
          )
         
       }
       {
         cart.cartItems==false ? "":
         <>
          <h6 role="button" className='text-red ms-auto' 
          onClick={()=>dispatch(clearCart())}
          style={{
            borderBottom:"1px solid",
            width:"fit-content"
          }} >effacer tout</h6>
         <hr/>
        <h6>remarque :</h6> 
        <p>
          <li> pour passer commande il veux un commande 21 TND  au moins </li>
          <li>pour profiter un laivrison gratuit  il veux un commande de 56 TND au  moins</li>
        </p>
         <hr/>
         <ul>
         <li><p>nombre total des produits :<h6 className='text-right mr-3'>{cart.cartTotalQuantity}</h6> </p></li>
         <li> <p>prix total: <h5 className="text-right mr-3 p-2 bg-success" >{cart.cartTotalAmount } TND</h5> </p> </li>

       </ul>  
       <hr/>
         <Button className='d-flex ms-auto' variant="outline-primary">commander</Button>
         </>
       }

        </Offcanvas.Body>
      </Offcanvas>
   </>
  )
}
