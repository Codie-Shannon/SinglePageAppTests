import { Link } from "@solidjs/router";
import { Container, Nav, Navbar } from 'solid-bootstrap';

export const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">MT International</Navbar.Brand>
          <Nav class="me-auto">
            <Link class='nav-link' href="/home">Home</Link>
            <Link class='nav-link' href="/trucks">Trucks</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}