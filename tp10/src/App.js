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


function App() {

  const [listFavs, setListFavs] = useState([]);
  
  useEffect(() => {
      localStorage.setItem("favoritos", JSON.stringify(listFavs));
  },[listFavs]);

  useEffect(() => {
    let favs = localStorage.getItem("favoritos");

    if (favs) {
      setListFavs(JSON.parse(favs));
    }
  },[]);

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Favoritos" element={<Favoritos />}></Route>
        <Route path="/NuestrasCreaciones" element={<NuestrasCreaciones />}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
