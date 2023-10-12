import logo from './logo.svg';
import './App.css';
import Favoritos from "./Componentes/Favoritos";
import NuestrasCreaciones from "./Componentes/NuestrasCreaciones";
import QuienesSomos from "./Componentes/QuienesSomos";
import Home from './Componentes/Home';
import Layout from './Componentes/Layout';
import { Route, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Layout />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favoritos" element={<Favoritos />}></Route>
          <Route path="/NuestrasCreaciones" element={<NuestrasCreaciones />}></Route>
          <Route path="/QuienesSomos" element={<QuienesSomos />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
