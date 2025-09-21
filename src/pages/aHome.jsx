import * as React from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const [alertShown, setAlertShown] = useState(false);

  const handleMouseEnterSimple  = () => {
    if (!alertShown) {
      alert(
        "Esta página está en desarrollo. Con esta entrega espero ejemplificar aproximadamente cómo será el diseño y el manejo de las rutas."
      );
      setAlertShown(true);
    }
  };

 return (
  <>
    <h1 className="radiology-title">Radiología 1</h1>

    <div className="radiology-home-container">
      <div className="radiology-subtitle2">
        <p>
          Sitio web desarrollado para los estudiantes de la cátedra{" "}
          <strong>Radiología 1</strong>, perteneciente a la carrera de
          Licenciatura en Bioimágenes de la Universidad Nacional de La Rioja.
          <br />
          Su propósito es servir como recurso de apoyo académico, permitiendo
          a los alumnos estudiar clase a clase y practicar la interpretación
          de placas radiológicas con miras al examen final.
          <br />
          El objetivo principal es ofrecer una interfaz moderna, intuitiva y
          accesible que facilite la navegación entre categorías, la
          visualización de imágenes y el acceso a información clave para el
          aprendizaje y la preparación académica.
        </p>
      </div>

      <div className="radiology-home-button">
        <Button
          component={Link}
          to="/categoria"
          variant="contained"
          className="radiology-button-primary"
          onMouseEnter={handleMouseEnterSimple}
        >
          Ver Categorías
        </Button>
      </div>
    </div>
  </>
);

};

export default Home;
