import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import {Row , Col } from 'react-bootstrap';


function NuestrasCreaciones() {

    const [proyectos, setProyectos] = useState([]);
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


    return (
        <>
            <div class="container text-center">
                <Row xs={1} md={3} className="g-4" style={{ width: '18rem' }}>
                        {proyectos.map((proyecto, idx) => (
                            <Col key={idx} style={{width: "100%"}}>
                                <Card className="card text-center" style={{width: "100%"}}>
                                    <Card.Img className="fotoCard" variant="top" src={proyecto.Foto} />
                                    <Card.Body className="d-flex flex-column align-items-center">
                                        <Card.Title className="tituloCard">{proyecto.Titulo}</Card.Title>
                                        <Card.Text className="descCard">{proyecto.Descripcion}</Card.Text>
                                        <button className="detail-button" onClick={() => fetchProyectoInfo(proyecto.Id)}>
                                            Más info
                                        </button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>


        </>
    )
}

export default NuestrasCreaciones;
