import "./Layout.css";
import { Button, Container, Form, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { Link, Outlet } from "react-router-dom";


function Layout() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };

    return (
        <>
            <Navbar className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="NavegadorPrincipal">
                <Container fluid>
                    <Navbar.Collapse id="navbarScroll">
                        <header>
                            <h1>Mi Portafolio</h1>
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/NuestrasCreaciones">Proyectos</Nav.Link>
                                <Nav.Link as={Link} to="/Favoritos">Favoritos</Nav.Link>
                            </Nav>
                        </header>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default Layout;