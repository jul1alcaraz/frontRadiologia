import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, ButtonBase, Typography, Stack, Button } from "@mui/material";



const images = [{ url: "/static/images/buttons/breakfast.jpg", title: "MANO" }];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
 
  height: 200,
  flex: "1 0 30%",
  margin: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    flex: "1 0 100%", 
  },
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

function ColorButtons() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end" // alinearlos a la derecha
      sx={{ width: "100%", mb: 1 }} 
      padding={1}// ocupa todo el ancho y margen inferior
    >
      <Button variant="contained" color="secondary" size="xs" >
        Subir
      </Button>
      <Button variant="contained" color="success" size="small">
        Actualizar
      </Button>
      <Button variant="contained" color="error" size="small">
        Borrar
      </Button>
    </Stack>
  );
}

function SubCategorias() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", mt: 6 }}
    >
  
      <ColorButtons />
    
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {images.map((image) => (
          <ImageButton
           component={Link}
            to="/Carrusel"
           key={image.title} focusRipple>
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
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