import React from 'react';
import Social from './Social';
import LocalFloristSharpIcon from '@mui/icons-material/LocalFloristSharp';
import { Paper, Box } from "@mui/material";
import '../App.css';

function Footer() {
    return (
        <Paper className='radiology-header-footer'
            sx={{
                position: 'fixed',
                width: '100vw', // Cambio: 100vw en lugar de 100%
                bottom: 0,
                textAlign: 'center',
                alignItems: 'center',
                color: 'white',
                zIndex: 1000,
            }}
            square
            variant="outlined"
        >
            <Social  />
           <Box 
  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
  <span >Radiologia 1 By Julieta Alcaraz</span>
  <LocalFloristSharpIcon />
</Box>
        </Paper>
    );
}

export default Footer;