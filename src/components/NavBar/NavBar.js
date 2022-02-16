import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"> Home Page </Navbar.Brand>
                <Nav className="me-auto"> 
                    <Nav.Link href="/favorite">Favorite Movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </div>
    );
}

