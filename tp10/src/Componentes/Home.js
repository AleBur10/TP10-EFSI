import "./Home.css";
import { Carousel, Card, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Footer } from 'flowbite-react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {

    return (
        <>
            <button className="proyectos">Proyectos</button>
            <button className="sobre-nosotros">Sobre nosotros</button>
            <Footer container>
                <Footer.Copyright
                    href="#"
                    year={2023}
                ></Footer.Copyright>
            </Footer>
        </>
    );


}

export default Home;