import "./Favoritos.css"
import { useContext } from "react";
import FavoritosContext from "../context/FavoritosContext";
import { Table } from "react-bootstrap";


function Favoritos(){

    const { listFavs, setListFavs } = useContext(FavoritosContext);

    const eliminarProyecto = (proyectoId) => {
        setListFavs(
            listFavs.filter((proyecto) => proyecto.id !== proyectoId),
        ); //filtra la lista para que aparezcan todos los productos que tengan un id distinto al que se le pasa
    };

    return(
        <Table striped bordered hover>
        <tbody>
          {listFavs.map((proyecto) => (
            <tr key={proyecto.id}>
              <td>
                {proyecto.foto[0] && (
                  <img
                    style={{ maxWidth: "100%", maxHeight: "150px" }}
                    src={proyecto.foto[0]}
                    alt={proyecto.titulo}
                  />
                )}
              </td>
              <td>{proyecto.titulo}</td>
              <td>{proyecto.descripcion}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarProyecto(proyecto.id)}
                >
                  Eliminar de favoritos
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    );
}

export default Favoritos;