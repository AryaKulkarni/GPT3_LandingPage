import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function InformationBox() {
    return (
        <div className="information--box">
        <Container>
        <Row style={{marginBottom:"50px"}}>
        <Col xs={3}><h3 className="infoBox--heading">What is GPT-3?</h3></Col>
        <Col xs={1}></Col>
        <Col><p className="infoBox--header--text">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p></Col>
        </Row>

        <Row style={{marginBottom:"50px"}}>
        <Col xs={6}><h1 className="infoBox--text">The possibilities are beyond your imagination</h1></Col>
        <Col></Col>
        <Col><p className="infoBox--smallText">Explore the library</p></Col>
        </Row>

        <Row style={{marginBottom:"10px"}}>
        <Col><h3 className="infoBox--footer--heading">Chatbots</h3><p className="infoBox--footer--text"> We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p></Col>
        <Col><h3 className="infoBox--footer--heading">Knowledgeable</h3><p className="infoBox--footer--text"> We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p></Col>
        <Col><h3 className="infoBox--footer--heading">Education</h3><p className="infoBox--footer--text"> We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p></Col>
        </Row>



        </Container>
        </div>
    )
}