import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg" className="navbar" variant="light">
      <Container className="container">
        <Navbar.Brand href="#home" style={{color:"white"}}>GPT-3</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto nav-items">
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>What is GPT?</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Open AI</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Case Studies</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Library</Nav.Link>
          </Nav>
        <Button variant="dark" size="lg" className="navbar--buttons">Sign In</Button>{' '}
        <Button variant="danger" size="lg" className="navbar--buttons">Sign Out</Button>{' '}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Navbar1;