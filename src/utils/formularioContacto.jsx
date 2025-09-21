import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Alert,
  CircularProgress,
  Grid,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Send as SendIcon, Person as PersonIcon } from "@mui/icons-material";
import "../App.css";

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    anio: "",
    consulta: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = "El apellido es obligatorio";
    } else if (formData.apellido.trim().length < 2) {
      newErrors.apellido = "El apellido debe tener al menos 2 caracteres";
    }

    if (!formData.dni.trim()) {
      newErrors.dni = "El DNI es obligatorio";
    } else if (!/^\d{7,8}$/.test(formData.dni.trim())) {
      newErrors.dni = "El DNI debe tener 7 u 8 números";
    }

    if (!formData.consulta.trim()) {
      newErrors.consulta = "La consulta es obligatoria";
    } else if (formData.consulta.trim().length < 10) {
      newErrors.consulta = "La consulta debe tener al menos 10 caracteres";
    }

    return newErrors;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});
  };

  // Manejar solo números en el campo DNI
  const handleDniChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData((prev) => ({
      ...prev,
      dni: value,
    }));

    if (errors.dni) {
      setErrors((prev) => ({
        ...prev,
        dni: "",
      }));
    }
  };

  return (
    <Container>
      <Paper className="radiology-form-container">
        <Box sx={{ textAlign: "center" }}>
          <InboxIcon
            sx={{ fontSize: 48, color: "var(--radiology-yellow)", mb: 2 }}
          />
          <h2 className="radiology-subtitle">Formulario de Consulta</h2>
          <p className="radiology-subtitle2">
            Complete el formulario para enviar su consulta.
          </p>
        </Box>

        {errors.submit && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.submit}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid className="radiology-form-grid">
            {/* Nombre y Apellido */}
            <Grid item>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                error={!!errors.nombre}
                helperText={errors.nombre}
                variant="outlined"
                required
                inputProps={{
                  maxLength: 50,
                }}
              />
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                label="Apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                error={!!errors.apellido}
                helperText={errors.apellido}
                variant="outlined"
                required
                inputProps={{
                  maxLength: 50,
                }}
              />
            </Grid>

            {/* DNI */}
            <Grid item>
              <TextField
                fullWidth
                label="DNI"
                name="dni"
                value={formData.dni}
                onChange={handleDniChange}
                error={!!errors.dni}
                helperText={
                  errors.dni || "Solo números, sin puntos ni espacios"
                }
                variant="outlined"
                required
                inputProps={{
                  maxLength: 8,
                  pattern: "[0-9]*",
                }}
              />
            </Grid>

            {/* Año que cursó */}
            <Grid item>
              <TextField
                fullWidth
                label="Año que cursó la materia"
                name="anio"
                value={formData.anio}
                onChange={handleChange}
                error={!!errors.anio}
                helperText={errors.anio}
                variant="outlined"
                required
              ></TextField>
            </Grid>
            <Grid item xs={12} className="radiology-form-grid-textarea">
              <TextField
                label="Consulta"
                name="consulta"
                value={formData.consulta}
                onChange={handleChange}
                error={!!errors.consulta}
                helperText={
                  errors.consulta ||
                  `${formData.consulta.length}/500 caracteres`
                }
                variant="outlined"
                required
                multiline
                fullWidth
                inputProps={{ maxLength: 500 }}
                placeholder="Escriba aquí su consulta detallada..."
              />
            </Grid>
          </Grid>
        </Box>
        <Grid className="radiology-button-container">
          <Box>
            <Button
              item
              className="radiology-button-success-box"
              type="submit"
              disabled={loading}
              startIcon={
                loading ? <CircularProgress size={20} /> : <SendIcon />
              }
            >
              {loading ? "Enviando..." : "Enviar Consulta"}
            </Button>
          </Box>
        </Grid>
      </Paper>
    </Container>
  );
};

export default FormularioContacto;
