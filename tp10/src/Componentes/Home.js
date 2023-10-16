import "./Home.css";
import { Carousel, Card, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Footer } from 'flowbite-react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {

    return (
        <div>
            <header>
                <h1>Mi Portafolio</h1>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/NuestrasCreaciones">Proyectos</a></li>
                    <li><a href="QuienesSomos">Acerca de mí</a></li>
                    <li><a href="/Contacto">Contacto</a></li>
                </ul>
            </header>

            <div className="sobre-mi">
                <h2>SOBRE MÍ</h2>
                <h3>Martín Perez</h3>
                <p>Tengo hablidad inhumana para programar en cualquier tipo de lenguaje.</p>
            </div>

            <footer>
                <p>Derechos de autor © 2023 - Martín Perez y Alexis Bursztyn</p>
            </footer>
        </div>
    );


}

export default Home;