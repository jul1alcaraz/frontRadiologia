import { Routes, Route } from "react-router-dom";
import Home from "./pages/aHome";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import CategoriasCart from "./pages/categorias";
import LibrosCarts from "./pages/cSubCategoria";
import Contacto from "./pages/eContacto";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria" element={<CategoriasCart />} />
          <Route path="/subcategoria" element={<LibrosCarts />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
