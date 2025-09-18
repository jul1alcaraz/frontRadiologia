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
import { Send as SendIcon, Person as PersonIcon } from "@mui/icons-material";

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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <PersonIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Formulario de Consulta
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Complete el formulario para enviar su consulta
          </Typography>
        </Box>

        {errors.submit && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.submit}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            {/* Nombre y Apellido */}
            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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

            {/* Consulta */}
           <Grid item xs={12}>
    <TextField
      fullWidth
      multiline
      rows={4}           // Aumentamos las filas para mayor tamaño vertical
      label="Consulta "
      name="consulta"
      value={formData.consulta}
      onChange={handleChange}
      error={!!errors.consulta}
      helperText={errors.consulta || `${formData.consulta.length}/500 caracteres`}
      variant="outlined"
      required
      inputProps={{
        maxLength: 500
      }}
      placeholder="Escriba aquí su consulta detallada..."
      sx={{
        fontSize: '16px',
        minHeight: 200
      }}
    />
  </Grid>

          </Grid>
          
          <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  startIcon={
                    loading ? <CircularProgress size={20} /> : <SendIcon />
                  }
                  sx={{
                    minWidth: 200,
                    py: 1.5,
                  }}
                >
                  {loading ? "Enviando..." : "Enviar Consulta"}
                </Button>
              </Box>
            </Grid>
        </Box>

        <Box sx={{ mt: 4, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            Sus datos serán tratados de forma confidencial y utilizados
            únicamente para responder su consulta.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormularioContacto;
