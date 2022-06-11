import React,{useState,useEffect,useContext} from "react"
import {Container,Row,Col,Modal,Form,Button,Card,Offcanvas} from "react-bootstrap"
import axios from "axios"
import { Upload,  Space } from 'antd';
import {Notification} from "../../context/notification"
import { AiFillFileAdd } from 'react-icons/ai';
import moment from "moment"


import 'antd/dist/antd.css';
  const Categories =()=>{
      const{ ShowNotifications} = useContext(Notification)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [nom,setnom]=useState("");
    const [Tcategory,setTcategory]=useState(false);
    console.log("zdzdzz",Tcategory)
    const [isfile,setIsFile]=useState("");
    /********** */

    const [category,setCategory]=useState([""]); 
    console.log("ezeze",isfile,nom)
    /*******offercanves */
    const [showOff, setShowOff] = useState(false);

    const handleCloseOff = () => setShowOff(false);
    const handleShowOff = () => setShowOff(true);

    //********produits */
    const [produits,setProd]=useState([])
     const [prodApi,setProdApi]=useState({
         nomProduit:"",
         DescProduit:"",
         prix:false,
         ImageProd:false
     })
     const [page,setPage]=useState(1)
     const[limit,setLimit]=useState(0)
    console.log("gggggggggggggg",prodApi)
useEffect(() => {
    async function fetchMyAPI() {
        let response = await axios.get('http://localhost:3001/category/')
       
        setCategory(response.data.category)
      }
      async function fetchProducts() {
     try{
        let res = await axios.post(`http://localhost:3001/produit/?category=${Tcategory.nameCategory ? Tcategory.nameCategory :""  }&page=${page*4}`)
      
        if (res.data.produits){
            setProd(res.data.produits)
            console.log("ressssssssssssssssssss",produits)
        }
     }catch(err){
         console.log(err)
     }
      }

  
      fetchMyAPI()
      fetchProducts()
}, [Tcategory,page])


console.log("ccccccccccc",category)

 const toggleSupCategories = async() => {
      try{
 let res = await axios.delete(`http://localhost:3001/category/delete/${Tcategory.id}`)
 if(res.data.success){
     ShowNotifications({type:"success",message:res.data.success ,title:"supprimer categorie"})
     setTimeout(() => {
        window.location.href="/categories"
   }, 2000);
    }      
}catch(err){
          console.log(err)
      }
 }
 
    const toggleAjoutCtagory = async (e) =>{
        e.preventDefault()
        let data = new FormData()
        data.append("nom",nom)
        data.append("CIcon",isfile)
        let  res = await axios.post("http://localhost:3001/category/add",data)
  try{
  if(res.data.nameCategory){
    ShowNotifications({type:"info", message:res.data.nameCategory,title:"connecter"})

  }    
    if (res.data.msg){
        ShowNotifications({type:"success", message:res.data.msg ,title:"connecter"})
        setTimeout(() => {
             window.location.href="/categories"
        }, 2000);
  
    }
        
  
}
  catch(err){
      console.log(err)
  }
    }

    //* function  produit*/
    const AddProd = async(e)=>{
      e.preventDefault()
     let dataProd = new FormData()
     dataProd.append("nomProd",prodApi.nomProduit)
     dataProd.append("DescProd",prodApi.DescProduit)
     dataProd.append("ImageProd",prodApi.ImageProd)
     dataProd.append("Prix",prodApi.prix)
     dataProd.append("Cnom",Tcategory.nameCategory)
     let AddProdApi = await axios.post("http://localhost:3001/produit/add",dataProd)
    if(AddProdApi.data.success){
      ShowNotifications({type:"success", message:AddProdApi.data.success ,title:"connecter"})
      setTimeout(() => {
           window.location.href="/categories"
      }, 2000);
    }
    }

     return(
         <Container>
           
           <div  className="categoryIconC" >
           <div className="d-flex flex-column mx-3 text-center">
           <img 
         src="https://img2.freepng.fr/20180716/lec/kisspng-camp-infinity-computer-icons-font-mas-simbolo-5b4c6dd4a6e435.3056623515317355086836.jpg"
         alt ="iconCatgory"
               className="rounded-circle m-1 p-2"
               style={{width:"100px",
               boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"            }}
               role="button"
               onClick={handleShow}
               />
               <h6>Ajout Categories</h6>
               </div>
          
               {category.map(cc=> 
                <div className="d-flex flex-column mx-3 text-center">
               <img 
               src={`http://localhost:3001/categoryIcon/${cc.iconCategory}`}
               alt ="iconCatgory"
               className="rounded-circle m-1"
               style={{width:"100px",height:"100px",
               boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                border: Tcategory.nameCategory=== cc.nameCategory ? "2px solid green" : "0px"
            }}
               role="button"
               onClick={()=>
            setTcategory(cc) || setPage(1)
            
            }
               />
               <p>{cc.nameCategory}</p>
               </div>
                )}
        
              
           
           
           </div>
           <hr/>
           {Tcategory ? 
           <Container className="bg-white d-flex flex-column p-2 px-5"
           style={{
               borderRadius:"20px",
               boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"
         
           }}
           >
       <h5 className="m-auto  " style={{
         letterSpacing:"5px solid gris",
        
       }} >{Tcategory.nameCategory.toUpperCase()}</h5>
       <hr/>
      <div className=" m-auto" style={{
        width:"200px",
        height:"200px",
        borderRadius:"20px",
        backgroundColor:"whitesmoke" ,
        boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"

      }}>
       <h3 className="text-center">Nombre Produits</h3>
       <h3 className="m-auto rounded-circle bg-black p-3 " style={{
         width:"fit-content"
       }}>{Tcategory.Produits.length}</h3>
        </div>
       <Button className="my-3" variant="secondary" style={{width:"fit-content",margin:"auto"}} onClick={handleShowOff}>Ajouter produit</Button>
       <Offcanvas show={showOff} onHide={handleCloseOff} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Ajout Nouveau Produit</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
         <Container>
          <h5> Informations Genérale </h5>  
             <hr/>
             <p>categories de produit</p>
             <p>desc de categories</p>
             <p>nbr de produit</p>

         </Container>
         <Container>
             <h5>nouveau produit</h5>
             <hr/>
             <Form>
                 <Form.Group>
                     <Form.Label>Nom de Produit</Form.Label>
                     <Form.Control type="text" placeholder="exemple :(planche apero ..)"  onChange={(e)=>setProdApi({...prodApi,nomProduit:e.target.value})} value={prodApi.nomProduit}  />
                 </Form.Group>
                 <Form.Group className="my-3">
                     <Form.Label>Description de produit</Form.Label>
                     <Form.Control as="textarea" rows={3} onChange={(e)=>setProdApi({...prodApi,DescProduit:e.target.value})} value={prodApi.DescProduit}  />
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Prix</Form.Label>
                     <Form.Control type="number" placeholder="exemple :(50  ..)"  onChange={(e)=>setProdApi({...prodApi,prix:e.target.value})} value={prodApi.prix}  />
                 </Form.Group>
                 <Space direction="vertical" style={{ width: '100%' }} size="large" className="text-center my-3">
   
   <Upload
     listType="picture"
     maxCount={1}
   onChange={(e)=>setProdApi({...prodApi,ImageProd:e.file.originFileObj}) }

   >
 <AiFillFileAdd size={50}/>
 
   </Upload>
   </Space>
             </Form>
             <hr/>
             <Button onClick={AddProd}>confirmer</Button>
         </Container>
        </Offcanvas.Body>
      </Offcanvas>
<hr/>
       <div className="ms-auto">
            <Button className="mx-2" variant="success">modifier</Button>
       <Button  variant="danger" onClick={toggleSupCategories}>Supprimer</Button>
       </div>
      
        
           </Container> :""
           
        }
           
               
         
             <Row className="w-100">
               { Tcategory && Tcategory.Produits.length===0  ?
               <Container className=" w-75 m-auto text-center" style={{
                 borderRadius:"20px",
                 height:"300px",
                 paddingTop:"100px",
                 
               }}>
                 <h5 className="text-muted">Aucun Produit exist merci d'ajouter nouveau produit</h5>
               </Container>
               :
 
              
            <Container className="w-100 m-auto">
                 <Row md={2} xs={1} >
                     {  produits.map(p =>
                             <Col>
                             
                <Card className="cardproduit my-3" style={{ width:'75%',margin:"auto",borderRadius:"20px" }}>
 <Container  style={{
   backgroundImage:`url("http://localhost:3001/produits/${p.ImageProduit}")`,
   height:"400px",
   backgroundSize: "contain",
   backgroundRepeat: "no-repeat",
   backgroundPosition:"center"
   
 }} >
   

 </Container>
  <Card.Body>
    <Card.Title>
      <h6>titre:</h6>
     <p>{p.nomProduit}</p> 
      </Card.Title>
    <Card.Text>
      <h6>Description :</h6>
     <p>{p.DescProduit}</p>  
     <h6> Date de Creation:</h6>
     <p>{moment(p.createdAt).startOf('hour').fromNow()}</p>
    </Card.Text>
    <Button variant="primary" className="d-flex ms-auto" >plus d'infomations</Button>
  </Card.Body>
</Card>
                </Col>
                          )
                     }
                
              
               
                 </Row>
                 <Row>
                   <Button style={{
                     width:"fit-content",
                     margin:"auto"
                   }}
                   onClick={()=>setPage(page+1)}
                   >Plus</Button>
                 </Row>
          </Container> 
          }
          </Row>
          <Modal  show={show} onHide={handleClose}>
         <Modal.Body>
             <div className="d-flex flex-column py-3 text-center">
             <h3 className="text-center">Ajouter Nouveau Categorie</h3>
             <hr />
             <Form>
                 <Form.Group className="my-3">
                     <Form.Label>
                         Nom Categories
                     </Form.Label>
                     <Form.Control type="text" placeholder="nom de categories"
                     onChange={(e)=>setnom(e.target.value)}
                     value={nom}
                     />
                 </Form.Group>
                 <Space direction="vertical" style={{ width: '100%' }} size="large">
   
    <Upload
      listType="picture"
      maxCount={1}
    onChange={(e)=>setIsFile(e.file.originFileObj) }
    >
      <Button   >Upload</Button>
    </Upload>
    </Space>
             </Form>
            <Button onClick={toggleAjoutCtagory} className="btn my-3">
                Ajout categories
            </Button>
            </div>
         </Modal.Body>
    </Modal>
         </Container>
     )
 }
 export default Categories