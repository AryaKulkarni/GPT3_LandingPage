import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import people from "../assets/people.png"
import ai from "../assets/ai.png"





export default function Header() {
    return (
        <div className="header">
        <Container fluid>
        <Row>
        <Col md={true} className="info--col">
            <Row style={{marginBottom:"30px"}}><h1 className="header--title">Let’s Build Something amazing with GPT-3 OpenAI</h1></Row>
            <Row style={{marginBottom:"30px"}}><p className="header--text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p></Row>
            <Row style={{marginBottom:"30px"}}>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{display:"flex"}}>
                <Form.Control type="email" placeholder="Your Email Address" className="header--form"/>
                <Button variant="danger" type="submit" className="form--button">Get Started</Button>
                </Form.Group>
                </Form>
            </Row>
            <Row><div style={{display:"flex",height:"40px"}}><img src={people} style={{width:"250px",marginRight:"20px"}}/>
            <p style={{color:"white"}}>1,600 people requested access a visit in last 24 hours</p></div></Row>
        </Col>
        <Col md={false}><img src={ai} style={{width:"600px",marginLeft:"40px"}} className="ai-img"/></Col>
        </Row>
        </Container>
        </div>
    )
}