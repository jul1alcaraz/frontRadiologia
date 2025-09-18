import { Routes, Route } from "react-router-dom";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Home from "./pages/aHome";
import CategoriasCart from "./pages/bCategorias";
import SubCategorias from "./pages/cSubCategorias";
import Carrusel from "./pages/dCarrusel";
import Contacto from "./pages/eContacto";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria" element={<CategoriasCart />} />
          <Route path="/categoria/:categoriaId/subcategorias" element={<SubCategorias />} />
          <Route path="/subcategorias" element={<SubCategorias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      <Footer/>
    </>
  );
};

export default App;