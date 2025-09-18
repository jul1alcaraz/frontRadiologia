import * as React from "react";
import { useState } from "react";
import { Box, Button, Alert } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const [alertShown, setAlertShown] = useState(false);

  const handleMouseEnterSimple = () => {
    if (!alertShown) {
      alert(
        "Esta pagina esta en desarrollo, con esta entrega espero ejemplificar aproxiamadamente como sera el diseño y en manejo de las rutas."
      );
      setAlertShown(true);
    }
  };

  return (
    <>
      <h1>Radiología 1</h1>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={2}
      >
        <div>
          <Box flex="0 0 40%" pr={2}>
            <h2>Nuestra finalidad</h2>
            <p>
              Esta página web pertenece a la cátedra anteriormente nombrada de
              la Universidad Nacional de La Rioja. <br />
              Su utilidad es optativa y está diseñada con el objetivo de mejorar
              la visualización en los alumnos, ayudándolos a obtener un mejor
              desempeño en el examen final. En este sitio, mediante las imágenes
              radiológicas disponibles, podrás comparar las imágenes que
              realizaste con los ejemplos propuestos.
            </p>
          </Box>
        </div>
        <Box flex="0 0 40%" pl={2}>
          <Box textAlign="center" mt={2}>
            <Button
              component={Link}
              to="/categoria"
              variant="contained"
              color="primary"
              onMouseEnter={handleMouseEnterSimple}
            >
              Ver Categorías
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
