import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blog01 from "../assets/blog01.png"
import blog02 from "../assets/blog02.png"
import blog03 from "../assets/blog03.png"
import blog04 from "../assets/blog04.png"
import blog05 from "../assets/blog05.png"




export default function Cards() {
    return (
        <div className="cards">
        <h1 className="cards--header">A lot is happening, We are blogging about it.</h1>



        <Container fluid>

        <Row>
        <Col className="blog-01"> <img src={blog01} className="cards--image" style={{width:"417.03px",height:"287.73"}}/>
            <div style={{backgroundColor:"#042C54",width:"417.03px",height:"407.27px",color:"#FFF"}}>
            <h6 style={{marginBottom:"30px"}}>Sep 26, 2021</h6>
            <h2>GPT-3 and Open  AI is the future. Let us explore how it is?</h2>
            <div style={{marginTop:"200px"}}><h6>Read Full Article</h6></div>
            </div>
            </Col>
        <Col>
           <Row>


           <Col>
            <img src={blog02} className="cards--image" style={{width:"327.34px",height:"130.47px"}}/>
            <div style={{backgroundColor:"#042C54",width:"327.34px",color:"#FFF"}}>
            <h6 style={{marginBottom:"30px"}}>Sep 26, 2021</h6>
            <h2>GPT-3 and Open  AI is the future. Let us explore how it is?</h2>
            <div style={{marginTop:"auto"}}><h6>Read Full Article</h6></div>
            </div>
           </Col>


           <Col> <img src={blog03} className="cards--image" style={{width:"327.34px",height:"130.47px"}}/>
            <div style={{backgroundColor:"#042C54",width:"327.34px",color:"#FFF"}}>
            <h6 style={{marginBottom:"30px"}}>Sep 26, 2021</h6>
            <h2>GPT-3 and Open  AI is the future. Let us explore how it is?</h2>
            <div style={{marginTop:"auto"}}><h6>Read Full Article</h6></div>
            </div></Col>
           </Row> 
           <Row>
           <Col> <img src={blog04} className="cards--image" style={{width:"327.34px",height:"130.47px"}}/>
            <div style={{backgroundColor:"#042C54",width:"327.34px",color:"#FFF"}}>
            <h6 style={{marginBottom:"30px"}}>Sep 26, 2021</h6>
            <h2>GPT-3 and Open  AI is the future. Let us explore how it is?</h2>
            <div style={{marginTop:"auto"}}><h6>Read Full Article</h6></div>
            </div></Col>
           <Col> <img src={blog05} className="cards--image" style={{width:"327.34px",height:"130.47px"}}/>
            <div style={{backgroundColor:"#042C54",width:"327.34px",color:"#FFF"}}>
            <h6 style={{marginBottom:"30px"}}>Sep 26, 2021</h6>
            <h2>GPT-3 and Open  AI is the future. Let us explore how it is?</h2>
            <div style={{marginTop:"auto"}}><h6>Read Full Article</h6></div>
            </div></Col>
           </Row> 
        </Col>

        </Row>
        </Container>



        </div>
    )
}