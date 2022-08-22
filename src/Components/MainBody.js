import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import possibility from "../assets/possibility.png"
import Button from "react-bootstrap/Button"

export default function MainBody() {
  return (
    <div className="main--body">
        <Container>
        <Row>
        <Col>
            <Row><h1>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1></Row>
            <Row><p className="request--early">Request Early Access to Get Started</p></Row>
        </Col>
        <Col>
            <Row>
            <Col><h3>Improving end distrusts instantly</h3></Col>
            <Col><p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p></Col>
            </Row>
            <Row>
            <Col><h3>Become the tended active </h3></Col>
            <Col><p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p></Col>
            </Row>
            <Row>
            <Col><h3>Message or am nothing </h3></Col>
            <Col><p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p></Col>
            </Row>
            <Row>
            <Col><h3>Really boy law county </h3></Col>
            <Col><p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p></Col>
            </Row>

            </Col>
        </Row>
        </Container>

            <div style={{display:"flex",width:"90%",margin:"auto"}}>
            <img src={possibility} style={{width:"600px",marginRight:"80px"}}/>
            <div style={{display:"flex",flexDirection:"column",margin:"auto"}}>
                <p>Request Early Access to get started</p>
                <h1>The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p>Request Early Access to get started</p>
                </div>
            </div>



            <div className="mainBody--footer" style={{display:"flex"}}>
            <div>
            <p>Request Early Access to Get Started </p>
            <h5>Register today & start exploring the endless possiblities.</h5>
            </div>
            <div>
            <Button variant="dark" size ="lg">Get Started</Button>
            </div>
            </div>





        
    </div>
  )
}

