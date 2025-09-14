import React from 'react';
import Social from './Social';
import LocalFloristSharpIcon from '@mui/icons-material/LocalFloristSharp';
import { orange } from "@mui/material/colors";
import { Paper, Box } from "@mui/material";

function Footer() {
    return (
        <Paper
            sx={{
                position: 'fixed',
                width: '100vw', // Cambio: 100vw en lugar de 100%
                left: 0,        // Añadido: fuerza a empezar desde el borde izquierdo
                right: 0,       // Añadido: fuerza a terminar en el borde derecho
                bottom: 0,
                textAlign: 'center',
                alignItems: 'center',
                backgroundColor: orange[500],
                color: 'white',
                zIndex: 1000,
            }}
            square
            variant="outlined"
        >
            <Social />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <span>Radiologia 1 By Julieta Alcaraz</span>
                <LocalFloristSharpIcon />
            </Box>
        </Paper>
    );
}

export default Footer;