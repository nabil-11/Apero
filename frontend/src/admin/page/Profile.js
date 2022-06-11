import React,{useState} from 'react';
import { Container,Col,Row,Button,Modal,Form } from 'react-bootstrap';
import  moment from "moment"

export default function Profile() {
    const [show, setShow] = useState(false);
    const nom = localStorage.getItem("nom")
    const email = localStorage.getItem("email")
    const tel = localStorage.getItem("tel")
    const dateCreation = localStorage.getItem("dateCreation")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (<>
  <Row md={2} xs={1}  className="w-100" >
    <Container className="col-md-4 ">
      <img src="https://i.pinimg.com/564x/57/f0/c7/57f0c74a5b6b0f78e565f9d268a6bba7.jpg"
      style={{
        width:"100%",
        backgroudSize:"cover"
      }}
      />
    </Container>
  <Container className=" col-md-8 text-left p-3">
      <hr />
      <p className="font-weight-bold ">Nom</p>
      <p className="text-secondary ml-3">{nom}</p>
      <p className="font-weight-bold ">Email</p>
      <p className="text-secondary ml-3">{email}</p>
      <p className="font-weight-bold ">Telephone</p>
      <p className="text-secondary ml-3">{tel}</p>
    
      <p className="font-weight-bold ">mot de passe :</p>
      <p className="text-secondary ml-3">***********</p>
      <p className="font-weight-bold ">Date Creation :</p>
      <p className="text-secondary ml-3">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
      <hr />
      <Row>
    <Button className="ms-auto w-auto mr-3" onClick={handleShow}>changer les informations</Button>
    </Row>
  </Container>
  </Row>
  
  <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <h3>Informations personnel</h3>
                <hr/>
                <Form>
  <Form.Group className="mb-3" controlId="formBasictext">
    <Form.Label>nom</Form.Label>
    <Form.Control type="text" placeholder={nom} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasictext">
    <Form.Label>telephone</Form.Label>
    <Form.Control type="number" placeholder={tel} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder={email} />
  </Form.Group>
  <h5>Mot de passe</h5>
  <hr />
  <Form.Group className="mb-3" controlId="formBasictext">
    <Form.Label>mot de passe actuel</Form.Label>
    <Form.Control type="text" placeholder="mot de passe actuel" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasictext">
    <Form.Label>nouveau mot de passe </Form.Label>
    <Form.Control type="text" placeholder="mot de passe nouveau" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasictext">
    <Form.Label>Repetez nouveau mot de passe </Form.Label>
    <Form.Control type="text" placeholder="nouveau mot de passe " />
  </Form.Group>
  </Form>

                
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
  </>);
}
