import logo from './logo.svg';
import './App.css';
import Favoritos from "./Componentes/Favoritos";
import NuestrasCreaciones from "./Componentes/NuestrasCreaciones";
import Home from './Componentes/Home';
import Layout from './Componentes/Layout';
import { Route, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoritosContext from './context/FavoritosContext';


function App() {

  const [listFavs, setListFavs] = useState([]);

  useEffect(() => {
    // if (listFavs.length === 0) return;
    console.log("ListaFavs", listFavs);
    localStorage.setItem("favoritos", JSON.stringify(listFavs));
  }, [listFavs]);

  useEffect(() => {
    let favs = JSON.parse(localStorage.getItem("favoritos"));

    if (favs) {
      setListFavs([...favs]);
    }
  }, []);

  return (
    <BrowserRouter>
      <FavoritosContext.Provider value={{ listFavs, setListFavs }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/Favoritos" element={<Favoritos />}></Route>
            <Route path="/NuestrasCreaciones" element={<NuestrasCreaciones />}></Route>
          </Route>
        </Routes>
      </FavoritosContext.Provider>
    </BrowserRouter>
  );
}

export default App;
