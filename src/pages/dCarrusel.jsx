import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import {
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  LocalHospital as LocalHospitalIcon,
} from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const radiologyImages = [
  {
    id: 1,
    url: "https://continuum.aeped.es/img/pantallas/imagensemana/img247/247_Fig_1.jpg",
    title: "Radiografía de Mano AP",
    description:
      "Proyección anteroposterior de mano derecha en paciente adulto",
    detailedInfo: {
      projection: "Anteroposterior (AP)",
      anatomy: "Mano derecha completa",
      technique: "70 kVp, 5 mAs",
      findings: "Estructuras óseas normales, espacios articulares conservados",
      indication: "Control postoperatorio",
      date: "15/03/2024",
      radiologist: "Dr. María González",
      quality: "Excelente",
    },
  },
  {
    id: 2,
    url: "https://thumbs.dreamstime.com/b/radiografia-della-mano-umana-94157219.jpg",
    title: "Radiografía de Mano Oblicua",
    description:
      "Proyección oblicua que permite mejor visualización de metacarpianos",
    detailedInfo: {
      projection: "Oblicua 45°",
      anatomy: "Mano izquierda",
      technique: "65 kVp, 8 mAs",
      findings: "Metacarpianos y falanges sin alteraciones aparentes",
      indication: "Dolor postraumático",
      date: "12/03/2024",
      radiologist: "Dr. Carlos Mendoza",
      quality: "Buena",
    },
  },
  {
    id: 3,
    url: "https://userscontent2.emaze.com/images/11805a27-b9ca-47f0-b4dd-8f6fd942eca7/47efff4a-1a7b-4073-ad1c-48c9b6b4762cimage33.jpeg",
    title: "Radiografía de Mano Lateral",
    description:
      "Proyección lateral para evaluación de desplazamientos y alineación",
    detailedInfo: {
      projection: "Lateral verdadero",
      anatomy: "Mano derecha",
      technique: "60 kVp, 10 mAs",
      findings: "Alineación ósea conservada, tejidos blandos normales",
      indication: "Sospecha de fractura",
      date: "10/03/2024",
      radiologist: "Dra. Ana Rodríguez",
      quality: "Excelente",
    },
  },
];

function CarruselRadiologia() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(null);
  };

  // Teclado: flechas para navegar y ESC para cerrar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open || selectedIndex === null) return;

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % radiologyImages.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (prev) => (prev - 1 + radiologyImages.length) % radiologyImages.length
        );
      }
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, selectedIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
  };

  const currentImageInfo =
    selectedIndex !== null
      ? radiologyImages[selectedIndex]
      : radiologyImages[0];

  return (
    <Box className="carrusel-container">
      {/* Título principal */}
      <Box className="carrusel-title">
        <Typography variant="h3" className="carrusel-title">
          <LocalHospitalIcon className="title-icon" />
          Radiografías de Mano
        </Typography>
      </Box>

      {/* Carrusel */}
      <Box className="carrusel-slider-container">
        <Slider {...settings}>
          {radiologyImages.map((img, index) => (
            <Box key={img.id}>
              <Card
                className="image-card"
                onClick={() => handleImageClick(index)}
              >
                <CardMedia
                  component="img"
                  image={img.url}
                  alt={img.title}
                  className="card-media"
                />

                {/* Overlay con información */}
                <Box className="image-overlay">
                  <Typography variant="h5">{img.title}</Typography>
                  <Box className="click-indicator">
                    <ZoomInIcon className="zoom-icon" />
                    <Typography variant="caption" className="click-text">
                      Clic para pantalla completa
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Tabla técnica */}
      <Paper>
        <Grid container className="info-grid">
          <Grid item>
            <Box className="technical-details-table">
              <Typography variant="h3" className="radiology-subtitle2">
                Información Técnica
              </Typography>
              <table className="technical-details">
                <thead>
                  <tr className="table-header-row">
                    <th className="details-list">Anatomía</th>
                    <th className="details-list">Técnica</th>
                    <th className="details-list">Indicación</th>
                    <th className="details-list">Fecha</th>
                    <th className="details-list">Radiólogo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-data-row">
                    <td className="table-data">
                      {currentImageInfo.detailedInfo.anatomy}
                    </td>
                    <td className="table-data">
                      {currentImageInfo.detailedInfo.technique}
                    </td>
                    <td className="table-data">
                      {currentImageInfo.detailedInfo.indication}
                    </td>
                    <td className="table-data">
                      {currentImageInfo.detailedInfo.date}
                    </td>
                    <td className="table-data">
                      {currentImageInfo.detailedInfo.radiologist}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Modal de pantalla completa */}
      <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <DialogContent className="modal-content">
          {selectedIndex !== null && (
            <Box className="modal-image-container">
              {/* Botón cerrar arriba a la derecha */}
              <IconButton onClick={handleClose} className="close-button">
                <CloseIcon />
              </IconButton>

              <img
                src={radiologyImages[selectedIndex].url}
                alt={radiologyImages[selectedIndex].title}
                className="modal-image"
              />

              {/* Descripción */}
              <Box className="modal-overlay">
                <Typography variant="h6" className="modal-overlay-title">
                  {radiologyImages[selectedIndex].title}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default CarruselRadiologia;
