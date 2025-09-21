import * as React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const images = [
  { url: "/static/images/buttons/breakfast.jpg", title: "MMSS" },
  { url: "/static/images/buttons/burgers.jpg", title: "MMII" },
  { url: "/static/images/buttons/camera.jpg", title: "CRANEO" },
  { url: "/static/images/buttons/breakfast.jpg", title: "TORAX" },
  { url: "/static/images/buttons/burgers.jpg", title: "COLUMNA" },
  { url: "/static/images/buttons/camera.jpg", title: "CINTURA PELVICA" },
  { url: "/static/images/buttons/camera.jpg", title: "CINTURA ESCAPULAR" },
];

function CategoriasCart() {
  return (
    <div className="categorias-grid">
      {images.map((image) => (
        <Link
          to="/SubCategorias"
          key={image.title}
          className="categorias-grid-item"
        >
          <span
            className="image-src"
            style={{ backgroundImage: `url(${image.url})` }}
          />
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
  );
}

export default CategoriasCart;
