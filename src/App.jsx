import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Login from "./componentes/cLogin";
import Footer from "./componentes/Footer";
import FnInicio from "./componentes/Inicio.jsx";
import FnContacto from "./componentes/Contacto.jsx";
import FnDescripcion from "./componentes/Descripcion.jsx";

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element= { <FnInicio /> } />
          <Route path="/Log" element={ <Login /> } />
          <Route path="/Cont" element = { <FnContacto /> } />
          <Route path="/Descrip" element = { <FnDescripcion /> } />
        </Routes>

        <Footer />
      </BrowserRouter>
  );
}