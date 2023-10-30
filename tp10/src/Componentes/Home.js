import "./Home.css";
import { Carousel, Card, Nav, Container, Row, Col } from "react-bootstrap";
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from "./Constants";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function Project({ proyecto, onDrop }) {
    const navigate = useNavigate();
    const [{ isDragging }, ref] = useDrag(() => ({
        type: 'Proyecto',
        item: { id: proyecto.Id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }))
    return (
        <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <Card className="card text-center" style={{ width: '18rem' }}>
                <Card.Img className="fotoCard" variant="top" src={proyecto.Foto} />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="tituloCard">{proyecto.Titulo}</Card.Title>
                    <Card.Text className="descCard">{proyecto.Descripcion}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

function ListaProyectos({ Categoria, proyectosAMostrar, proyectos, setProyectos, setProyectosFavoritos }) {
    const handleDrop = (draggedId) => {
        const draggedProject = proyectos.find(proyecto => proyecto.Id === draggedId);

        console.log("Categoria", Categoria);
        console.log("draggedId", draggedId);
        console.log("proyectos", proyectos);
        console.log("draggedProject", draggedProject);
        if (typeof draggedProject !== "undefined") {
            // Cambiar el valor Favoritos a true
            draggedProject.Favorito = true;
            // Mover el proyecto a la lista de proyectos favoritos
            setProyectos((proyectos) => {
                const state = proyectos.filter(proyecto => proyecto.Id !== draggedId);
                return state;
            });
            setProyectosFavoritos((proyectosFavoritos) => {
                const state = [...proyectosFavoritos, draggedProject];
                return state;
            });
        } else {
            draggedProject.Favorito = false;

            setProyectosFavoritos((proyectosFavoritos) => {
                const state = proyectosFavoritos.filter(proyecto => proyecto.Id !== draggedId);
                return state;
            });
            setProyectos((proyectos) => {
                const state = [...proyectos, draggedProject];
                return state;
            });
            // Lógica para otro destino (por ejemplo, la sección original)
        }
    };


    const [, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'Proyecto',
        // Props to collect
        drop: (item) => handleDrop(item.id),
    }))

    return (
        <Container ref={drop} role={"Lista"}>
            <h1>{Categoria}</h1>
            <Row>
                {proyectosAMostrar.map(proyecto => (
                    <Col key={proyecto.id} xs={12} sm={6} md={6}>
                        <Project proyecto={proyecto} onDrop={() => handleDrop(proyecto.Id)} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

function Home() {

    const [proyectos, setProyectos] = useState([]);
    const [proyectosFavoritos, setProyectosFavoritos] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchProyectos();
    }, []);

    useEffect(() => {
        console.log("proyectos useeffect", proyectos);
    }, [proyectos]);

    const fetchProyectos = () => {
        axios.get('Proyectos.json')
            .then(response => {
                const proyectosResponse = response.data.Proyectos;
                const first6Proyectos = proyectosResponse.slice(0, 6);
                console.log("proyectos:", proyectosResponse);
                setProyectos([...first6Proyectos]);
            })
            .catch(error => {
                console.error(error);
            });
    };

    if (proyectos.length === 0) return (<></>);

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Container style={{ display: "flex", flexDirection: "row" }}>
                    <ListaProyectos Categoria={"Proyectos Destacados"} proyectosAMostrar={proyectos} proyectos={proyectos} setProyectos={setProyectos} setProyectosFavoritos={setProyectosFavoritos} ></ListaProyectos>
                    <ListaProyectos Categoria={"Proyectos favoritos"} proyectosAMostrar={proyectosFavoritos} proyectos={proyectos} setProyectos={setProyectos} setProyectosFavoritos={setProyectosFavoritos}></ListaProyectos>
                </Container>
            </DndProvider>

            <div className="about-section">
                <h1>Sobre nosotros</h1>
                <p>Some text about who we are and what we do.</p>
            </div>

            <h2 style={{ textAlign: 'center' }}>Nuestro Equipo</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="/martin.jpg" style={{ width: '20%' }} />
                        <div className="container">
                            <h2>Martín Perez</h2>
                            <p className="title">CEO y Founder de MarCo</p>
                            <p>La clave del éxito es la constancia.</p>
                            <p>martinp10105@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="/vegetta.jpg" alt="Mike" style={{ width: '20%' }} />
                        <div className="container">
                            <h2>Alexis Bursztyn</h2>
                            <p className="title">Founder de DePhishing</p>
                            <p>Nada llega por sí solo.</p>
                            <p>alebur10@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
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
        </>
    );



}

export default Home;