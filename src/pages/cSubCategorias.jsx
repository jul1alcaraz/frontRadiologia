import * as React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ColorButtons from "../utils/botonesData";
import "../App.css";

const images = [
  { url: "/static/images/buttons/breakfast.jpg", title: "Brazo" },
  { url: "/static/images/buttons/burgers.jpg", title: "Codo" },
  { url: "/static/images/buttons/camera.jpg", title: "Antebrazo" },
  { url: "/static/images/buttons/breakfast.jpg", title: "Muñeca" },
  { url: "/static/images/buttons/burgers.jpg", title: "Mano" },
];

function SubCategorias() {
  return (
    <div className="subcategorias-container">
      <ColorButtons />
      <div className="categorias-grid">
        {images.map((image) => (
          <Link
            to="/Carrusel"
            key={image.title}
            className="subcategorias-grid-item"
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <span className="image-src" style={{ backgroundImage: `url(${image.url})` }} />
            <span className="image-backdrop" />
            <div className="image-content">
              <Typography component="span" className="image-title">
                {image.title}
                <span className="image-marked" />
              </Typography>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubCategorias;
