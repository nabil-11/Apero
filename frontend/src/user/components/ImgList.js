import React,{useState,useEffect} from 'react'
import {Row,Col,Container, Button} from "react-bootstrap"
import axios from "axios"
import { LineHeightOutlined } from '@ant-design/icons/lib/icons'


export const ImgList = () => {
    const [itemData,setItemData]=useState([])
   
  
    useEffect(() => {
        async function fetchProducts() {
            try{
               let res = await axios.post(`http://localhost:3001/produit/?category=&page=${1*6}`)
             
           setItemData(res.data.produits)
            }catch(err){
                console.log(err)
            }
             }
             fetchProducts()
    }, [""])
    
  return (
       <>
       <Row md={3} xs={1} className="w-100 my-3" >
           {itemData.map(item =>
           <Col className="p-1">
        
           <Container
          
           
           style={{
               backgroundImage:`url("http://localhost:3001/produits/${item.ImageProduit}")`
               ,height:'500px',
               backgroundSize:"contain",
               backgroundRepeat:"no-repeat",
               boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
             backgroundPosition:"center"
            }}
           >
 
           </Container>
           </Col>
           
           )
           
           }

       </Row>
       <Button className=" my-3 d-flex text-bold" variant="outline-primary" style={{margin:"auto"}}>DECOUVRIR PLUS</Button>
       
       </>
  )
}
