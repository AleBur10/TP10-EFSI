import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardGroup, Container, Modal, Button, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer";

function NuestrasCreaciones() {

    const [proyectos, setProyectos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetchProyectos();
    }, []);

    const fetchProyectos = () => {
        axios.get('Proyectos.json')
            .then(response => {
                const proyectosResponse = response.data.Proyectos;
                console.log("proyectos:", proyectosResponse);
                setProyectos([...proyectosResponse]);
            })
            .catch(error => {
                console.error(error);
            });
    };

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
    const openModal = (proyecto) => {
        setProyectoSeleccionado(proyecto);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="container text-center" style={{ marginTop: "12%" }}>
                <Row xs={1} md={2} className="g-4">
                    {proyectos.map((proyecto) => (
                        <Col md={3} key={proyecto.Id}>
                            <Card className="card text-center">
                                <Card.Img className="fotoCard" variant="top" src={proyecto.Foto} />
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <Card.Title className="tituloCard">{proyecto.Titulo}</Card.Title>
                                    <Card.Text className="descCard">{proyecto.Descripcion}</Card.Text>
                                    <button className="detail-button" onClick={() => openModal(proyecto)}>
                                        Más info
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "gray" }}>
                    {proyectoSeleccionado && (
                        <div style={{ color: "white" }}>
                            <h4>Nombre: {proyectoSeleccionado.Titulo}</h4>
                            <p>Descripción: {proyectoSeleccionado.Descripcion}</p>
                            <p>Año de creación: {proyectoSeleccionado.AñoCreacion}</p>
                        </div>
                    )}
                </Modal.Body>
            </Modal>

                        <Footer></Footer>
        </>
    )
}

export default NuestrasCreaciones;
