import "./Favoritos.css"
import { useContext } from "react";
import FavoritosContext from "../context/FavoritosContext";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { Row }  from "react-bootstrap";
import  { Card }  from "react-bootstrap";
import { Col } from "react-bootstrap";


function Favoritos() {

  const context = useContext(FavoritosContext);
  

  console.log("FavoritosEnFavoritos", context.listFavs);

  return (

    <div className="container text-center" style={{ marginTop: "15%", marginBottom: "5%" }}>
      <Row xs={1} md={2} className="g-4">
        {context.listFavs.map((proyecto) => (
          <Col md={3} key={proyecto.Id}>
            <Card className="card text-center">
              <Card.Img className="fotoCard" variant="top" src={proyecto.Foto} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="tituloCard">{proyecto.Titulo}</Card.Title>
                <Card.Text className="descCard">{proyecto.Descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

  );
}

export default Favoritos;