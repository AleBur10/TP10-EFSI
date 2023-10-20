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
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {

    const [proyectos, setProyectos] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchProyectos();
    }, []);

    const fetchProyectos = () => {
        axios.get('Proyectos.json')
            .then(response => {
                const proyectosResponse = response.data;
                setProyectos(proyectosResponse);
                console.log("proyectos:", proyectosResponse);
            })
            .catch(error => {
                console.error(error);
            });
    };
    //const destacados = proyectosResponse.filter((proyecto) => proyecto.Destacado === true);


    const fetchProyectoInfo = (id) => {
        axios.get(`Proyectos.json${id}`)
            .then(response => {
                console.log(response.data);
                navigate(`/proyecto/${id}`);
            })
            .catch(error => {
                console.error(error);
            });

    };

    /*<ul className="proyect-list">
                {proyectos && proyectos.map(proyecto => (
                    <li key={proyecto.id} className="proyect-item">
                        <b className="proyect-title">{proyecto.titulo}</b>
                        <img src={proyecto.imagen[0]} className="proyect-image" alt={proyecto.titulo}></img>
                        <button className="detail-button" onClick={() => fetchProyectoInfo(proyecto.id)}>
                            Más info
                        </button>
                    </li>
                ))}
            </ul>*/

    return (
        <>
            <h1 className="tituloHome">Proyectos</h1>
            <Container>
                <Row>
                    {Array.isArray(proyectos) && proyectos.map(proyecto => (
                        <Col key={proyecto.id} xs={12} sm={6} md={4}>
                            <Card className="card" style={{ width: '18rem' }}>
                                <Card.Img className="fotoCard" variant="top" src={proyecto.imagen[0]} />
                                <Card.Body>
                                    <Card.Title className="tituloCard">{proyecto.titulo}</Card.Title>
                                    <Card.Text className="descCard">{proyecto.descripcion}</Card.Text>
                                    <button className="detail-button" onClick={() => fetchProyectoInfo(proyecto.id)}>
                                            Más info
                                    </button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    );


}

export default Home;