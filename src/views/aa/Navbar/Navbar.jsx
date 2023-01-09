

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarAl() {
  return (
    <>
  
      
      <Navbar style={{'position':'sticky'}} bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">alfaniti</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/indent">Indent</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavbarAl;