import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Card, CardMedia, Dialog, DialogContent, DialogTitle, IconButton, Typography, Paper, Grid, Chip, Divider } from "@mui/material";
import { Close as CloseIcon, ZoomIn as ZoomInIcon, Info as InfoIcon, LocalHospital as LocalHospitalIcon } from "@mui/icons-material";

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div className={`carousel-dot ${i === currentSlide ? "active" : ""}`} />
    ),
  };

  const currentImageInfo = radiologyImages[currentSlide];

  return (
    <Box className="carrusel-container">
      {/* Título principal */}
      <Box className="carrusel-title ">
        <Typography variant="h3" className="carrusel-title">
          <LocalHospitalIcon className="title-icon" />
          Radiografías de Mano
        </Typography>
      </Box>

      {/* Carrusel */}
      <Box className="carrusel-slider-container">
        <Slider {...settings}>
          {radiologyImages.map((img) => (
            <Box key={img.id} >
              <Card
                className="image-card"
                onClick={() => handleImageClick(img)}
              >
                <CardMedia
                  component="img"
                  image={img.url}
                  alt={img.title}
                  className="card-media"
                />

                {/* Overlay con información */}
                <Box className="image-overlay">
                  <Typography variant="h5" className="radiology-subtitle">
                    {img.title}
                  </Typography>
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

     <Paper className="info-panel">
  <Box className="info-header">
    <InfoIcon className="info-icon" />
    <Typography variant="h4" className="info-title">
      Información Técnica
    </Typography>
  </Box>

  <Grid container spacing={3} className="info-grid">
    
    <Grid item xs={12}>
      <Box className="technical-details-table">
        <Typography variant="h6" className="details-title">
          Detalles del Estudio
        </Typography>
        
        <table className="technical-details">
          <thead>
            <tr className="table-header-row">
              <th className="table-header">Anatomía</th>
              <th className="table-header">Técnica</th>
              <th className="table-header">Indicación</th>
              <th className="table-header">Fecha</th>
              <th className="table-header">Radiólogo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-data-row">
              <td className="table-data">{currentImageInfo.detailedInfo.anatomy}</td>
              <td className="table-data">{currentImageInfo.detailedInfo.technique}</td>
              <td className="table-data">{currentImageInfo.detailedInfo.indication}</td>
              <td className="table-data">{currentImageInfo.detailedInfo.date}</td>
              <td className="table-data">{currentImageInfo.detailedInfo.radiologist}</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Grid>
  </Grid>
</Paper>

      {/* Modal de pantalla completa */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        PaperProps={{
          className: "fullscreen-modal",
        }}
      >
        <DialogTitle className="modal-header">
          <Typography variant="h6" className="modal-title">
            {selectedImage?.title}
          </Typography>
          <IconButton onClick={handleClose} className="close-button">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className="modal-content">
          {selectedImage && (
            <Box className="modal-image-container">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="modal-image"
              />

              {/* Descripción en la imagen completa */}
              <Box className="modal-overlay">
                <Typography variant="h6" className="modal-overlay-title">
                  {selectedImage.title}
                </Typography>
                <Typography
                  variant="body1"
                  className="modal-overlay-description"
                >
                  {selectedImage.description}
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
