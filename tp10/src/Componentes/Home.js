import "./Home.css";
import { Carousel, Card, Nav, Container, Row, Col } from "react-bootstrap";
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import FavoritosContext from "../context/FavoritosContext";
import Footer from "./Footer";


function Home() {

    const [proyectos, setProyectos] = useState([]);
    const { listFavs, setListFavs } = useContext(FavoritosContext);
    //const [fav, setFav] = useState('☆')
    const navigate = useNavigate();
    useEffect(() => {
        fetchProyectos();
    }, []);

    const fetchProyectos = () => {
        axios.get('Proyectos.json')
            .then(response => {
                const proyectosResponse = response.data.Proyectos;
                const first6Proyectos = proyectosResponse.slice(0, 6).map(proyecto => ({ ...proyecto }));
                console.log("proyectos:", proyectosResponse);
                setProyectos([...first6Proyectos]);
            })
            .catch(error => {
                console.error(error);
            });
    };

    if (proyectos.length === 0) return (<></>);

    const cambiarFav = (proyecto) => {
        proyecto.Favorito = !proyecto.Favorito;

        if (proyecto.Favorito) {
            setListFavs([...listFavs, proyecto]);
        } else {
            setListFavs(listFavs.filter(f => f.Id !== proyecto.Id))
        }
    }

    return (
        <>

            <div class="container text-center" style={{ marginTop: "12%", marginBottom: "5%" }}>
                <Row xs={1} md={2} className="g-4">
                    {proyectos.map((proyecto) => (
                        <Col md={3} key={proyecto.Id}>
                            <Card className="card text-center">
                                <Card.Img className="fotoCard" variant="top" src={proyecto.Foto} />
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <Card.Title className="tituloCard">{proyecto.Titulo}</Card.Title>
                                    <Card.Text className="descCard">{proyecto.Descripcion}</Card.Text>
                                    <p onClick={() => cambiarFav(proyecto)} className="favorito">
                                        {listFavs.some(f => f.Id === proyecto.Id) ? '★' : '☆'}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="about-section">
                <h1>Sobre nosotros</h1>
            </div>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <img className="FotoSobreNos" src="/martin.jpg" style={{ width: '20%' }} />
                        <div className="container">
                            <h2>Martín Perez</h2>
                            <p className="title">CEO y Founder de MarCo</p>
                            <p>La clave del éxito es la constancia.</p>
                            <p>martinp10105@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="FotoSobreNos" src="/Alexis.jpg" alt="Mike" style={{ width: '20%' }} />
                        <div className="container">
                            <h2>Alexis Bursztyn</h2>
                            <p className="title">Founder de DePhished</p>
                            <p>Nada llega por sí solo.</p>
                            <p>alexis.bursztyn@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <h1>¡Contáctanos!</h1>
            </div>

            <div className="contact-form-container">
                <h2>Contacto</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="4" />
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
            <Footer></Footer>
        </>
    );



}

export default Home;