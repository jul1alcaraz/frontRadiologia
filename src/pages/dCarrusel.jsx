import React from "react";
import Slider from "react-slick";
import { Box, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    url: "https://continuum.aeped.es/img/pantallas/imagensemana/img247/247_Fig_1.jpg",
    title: "Mano de frente",
  },
  {
    url: "https://thumbs.dreamstime.com/b/radiografia-della-mano-umana-94157219.jpg",
    title: "Mano Oblicua",
  },
  {
    url: "https://userscontent2.emaze.com/images/11805a27-b9ca-47f0-b4dd-8f6fd942eca7/47efff4a-1a7b-4073-ad1c-48c9b6b4762cimage33.jpeg",
    title: "Mano de perfil",
  },
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Función para crear datos de la tabla
function createData(categoria, tecnica, ano, autor) {
  return { categoria, tecnica, ano, autor };
}

// Datos de la tabla
const rows = [createData("MMSS", "Mano", 2020, "Dr. Smith")];

// Componente principal que incluye tanto el carrusel como la tabla
function Carrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
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
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={img.url}
              alt={img.title}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 500,
                objectFit: "contain",
              }}
            />
          </Card>
        ))}
      </Slider>

      <Box sx={{ mt: 4 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >Categoria</StyledTableCell>
                <StyledTableCell >Tecnica</StyledTableCell>
                <StyledTableCell >
                  Año de publicación
                </StyledTableCell>
                <StyledTableCell>Autor</StyledTableCell>
              </TableRow>
            </TableHead>  
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.categoria}>
                  <StyledTableCell>{row.categoria}</StyledTableCell>
                  <StyledTableCell >{row.tecnica}</StyledTableCell>
                  <StyledTableCell >{row.ano}</StyledTableCell>
                  <StyledTableCell >{row.autor}</StyledTableCell>
                 
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
export default Carrusel;
