import * as React from "react";
import { Box, Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <h1>Radiología 1</h1>
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        m={2}
      >
        <Box flex="0 0 40%" pr={2}>
          <h2>Nuestra finalidad</h2>
          <p>
Esta página web pertenece a la cátedra anteriormente nombrada de la Universidad Nacional de La Rioja. <br/>
Su utilidad es optativa y está diseñada con el objetivo de mejorar la visualización en los alumnos, ayudándolos a obtener un mejor desempeño en el examen final. 
En este sitio, mediante las imágenes radiológicas disponibles, podrás comparar las imágenes que realizaste con los ejemplos propuestos.          </p>
        </Box>
        <Button 
            variant="contained" color="primary" alignItems="center"
          >
            Ver Categorías
          </Button>
      </Box>
    </>
  );
};

export default Home;
