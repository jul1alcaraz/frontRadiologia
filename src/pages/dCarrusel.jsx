import React from "react";
import Slider from "react-slick";
import { Box, Card, CardMedia } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Datos para el carrusel
const images = [
  { url: "https://continuum.aeped.es/img/pantallas/imagensemana/img247/247_Fig_1.jpg", title: "Mano de frente" },
  { url: "https://picsum.photos/800/300?random=2", title: "Imagen 2" },
  { url: "https://picsum.photos/800/300?random=3", title: "Imagen 3" },
];

// Componentes estilizados para la tabla
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Función para crear datos de la tabla
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

// Datos de la tabla
const rows = [
  createData( 159, 6.0, 24, 'Frozen yoghurt'),
  
];

// Componente principal que incluye tanto el carrusel como la tabla
export default function Carrusel() {
  const settings = {
    dots: true,        // Muestra indicadores
    infinite: true,    // Carrusel infinito
    speed: 500,        // Velocidad de transición
    slidesToShow: 1,   // Número de slides a mostrar
    slidesToScroll: 1, // Número de slides a scrollear
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      {/* Carrusel de imágenes */}
      <h1>Mano</h1>
      <Slider {...settings}>
        {images.map((img, i) => (
          <Card 
            key={i} 
            sx={{ 
              borderRadius: 2, 
              overflow: "hidden", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center" 
            }}
          >
            <CardMedia
              component="img"
              image={img.url}
              alt={img.title}
              sx={{ 
                width: "100%", 
                height: "auto", 
                maxHeight: 500,   // altura moderada
                objectFit: "contain" 
              }}
            />
          </Card>
        ))}
      </Slider>

      {/* Tabla personalizada */}
      <Box sx={{ mt: 4 }}>
        <h2>Información de la radiografia.</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                
                <StyledTableCell align="right">Categoria</StyledTableCell>
                <StyledTableCell align="right">Tecnica</StyledTableCell>
                <StyledTableCell align="right">Año de publicación</StyledTableCell>
                <StyledTableCell align="right">Autor</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}