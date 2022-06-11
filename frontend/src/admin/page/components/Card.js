import React from 'react'
import {Container,Button} from 'react-bootstrap'

const Card = () => {
  return (
 <Container className="d-flex flex-column text-center m-3">
     <img src="https://img2.freepng.fr/20180320/xqq/kisspng-orange-juice-cocktail-tequila-sunrise-apple-juice-fruit-cocktail-juice-png-5ab1ad107fcb19.7928163415215936165235.jpg" alt="produitimage"/>
   <div>
         <Button className="my-3  ">View</Button>
   
   </div>
 </Container>
  )
}
export default Card ;