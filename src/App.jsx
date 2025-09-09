import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import CategoriasCart from "./componentes/CategoriasCart";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<CategoriasCart />} />
      </Routes>
      <Footer />
    </>
    
  );
};

export default App;
