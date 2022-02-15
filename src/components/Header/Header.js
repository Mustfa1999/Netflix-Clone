import "./Header.css"
import React from 'react'
import { Container, Navbar } from 'react-bootstrap';

export default function Header() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                {/* <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav> */}
            </Container>
        </Navbar>

      </div>
    );
}

