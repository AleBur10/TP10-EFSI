import "./Home.css";
import { Carousel, Card, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
import { Footer } from 'flowbite-react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Home() {

    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:3000/Proyectos.json')
            .then((response) => {
                const proyectosResponse = response.data.proyectos;
                setProyectos(proyectosResponse);
                const destacados = proyectosResponse.filter((proyecto) => proyecto.Destacado === true);
                setProyectos(destacados);
            });
    }, []);




    return (
        <div>
            <div className="sobre-mi">
                <h2>SOBRE MÍ</h2>
                <h3>Martín Perez</h3>
                <p>Tengo hablidad inhumana para programar en cualquier tipo de lenguaje.</p>
            </div>
        </div>
    );


}

export default Home;