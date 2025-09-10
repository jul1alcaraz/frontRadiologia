import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import CategoriasCart from "./componentes/categoriasCart";
import LibrosCarts from "../src/componentes/librosCarts";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <CategoriasCart />
      <LibrosCarts />
      <Footer />
    </>
    
  );
};

export default App;