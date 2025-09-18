import * as React from "react";
import { Box, Typography, styled } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import ColorButtons from "../utils/botonesData";

const images = [
  {
    url: "/static/images/buttons/breakfast.jpg",
    title: "Brazo",
    width: "40%",
  },
  {
    url: "/static/images/buttons/burgers.jpg",
    title: "Codo",
    width: "40%",
  },
  {
    url: "/static/images/buttons/camera.jpg",
    title: "Antebrazo",
    width: "40%",
  },
  {
    url: "/static/images/buttons/breakfast.jpg",
    title: "Muñeca",
    width: "40%",
  },
  {
    url: "/static/images/buttons/burgers.jpg",
    title: "Mano",
    width: "40%",
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.down("sm")]: {},
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

function SubCategorias() {
  const totalRows = Math.ceil(images.length / 3);
  const heightPerRow = `calc(${100 / totalRows}% - ${8 / totalRows}px)`;

  return (
  <Box sx={{ width: "100vw", height: "100vh" }}>
    <ColorButtons />

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "calc(100% - 50px)", // resto del espacio
        marginTop: 1,
        gap: 1,
      }}
    >
      {images.map((image) => (
        <ImageButton
          component={Link}
          to="/Carrusel"
          focusRipple
          key={image.title}
          sx={{
            flex: "1 0 calc(33.333% - 8px)",
            height: `calc(100% / ${Math.ceil(images.length / 3)})`,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: "relative",
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  </Box>
);
}

export default SubCategorias;
