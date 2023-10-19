import "./Layout.css";
import { Button, Container, Form, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";


function Layout() {
    return (
        <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Collapse id="navbarScroll">
                <header>
                    <h1>Mi Portafolio</h1>
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/NuestrasCreaciones">Proyectos</Nav.Link>
                        <Nav.Link as={Link} to="/QuienesSomos">Acerca de nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/Favoritos">Favoritos</Nav.Link>
                    </Nav>
                </header>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        <footer>
            <p>Derechos de autor © 2023 - Martín Perez y Alexis Bursztyn</p>
        </footer>
        </>
    );
}

export default Layout;