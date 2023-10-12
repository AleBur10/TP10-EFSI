import "./Home.css";
import { Carousel, Card, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Home() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/search?q=')
            .then((response) => {
                const productosResponse = response.data.products;
                setProductos(productosResponse);
            });
    }, []);

    if (productos.length === 0) return (<></>);

    function ProductoAleatorio() {
        let rand = Math.floor(Math.random() * productos.length);
        return productos[rand];
    }

    let productosRandom = Array.from({ length: 6 }, () => ProductoAleatorio());

    return (
        <>
            <Container fluid>
                <Carousel className="my-5">
                    {productosRandom.map((producto, index) => (
                        <Carousel.Item key={index}>
                            <img
                                style={{ width: "100%", height: "450px" }}
                                src={producto.images[0]}
                                alt={`Slide ${index}`}
                            />
                            <Carousel.Caption>
                                <h3 className="text-warning">{producto.title}</h3>
                                <p className="text-warning">{producto.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

            <Container className="ofertas">
                <h4 >Ofertas</h4>
                <Nav.Link as={Link} to="/Productos">Ver todas</Nav.Link>

            </Container>
            <Container>
                <Row className="mb-5">
                    {productos.slice(0, 6).map((producto, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card>
                                <img src={producto.images[0]} className="card-img-top" style={{ width: "100%", height: "150px" }} alt={producto.title} />
                                <Card.Body>
                                    <h5 className="card-title">{producto.title}</h5>
                                    <p className="card-text">{producto.description}</p>
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