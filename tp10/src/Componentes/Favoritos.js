import "./Favoritos.css"
import { useContext } from "react";
import FavoritosContext from "../context/FavoritosContext";
import { Table } from "react-bootstrap";
import { useState } from "react";


function Favoritos() {

  const listFavs = getFavoritosLocalStorage();

  function getFavoritosLocalStorage() {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }


  return (
    <Table striped bordered hover>
      <tbody>
        {listFavs.map((proyecto) => (
          <tr key={proyecto.id}>
            <td>
              {proyecto.Foto && (
                <img
                  style={{ maxWidth: "100%", maxHeight: "150px" }}
                  src={proyecto.Foto}
                  alt={proyecto.Titulo}
                />
              )}
            </td>
            <td>{proyecto.Titulo}</td>
            <td>{proyecto.Descripcion}</td>
          </tr>
        ))}
      </tbody>
    </Table>

  );
}

export default Favoritos;