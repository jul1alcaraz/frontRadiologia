import React from 'react';
import Social from './Social';
import LocalFloristSharpIcon from '@mui/icons-material/LocalFloristSharp';
import { orange } from "@mui/material/colors";
import { Paper, Box } from "@mui/material";

function Footer() {
    return (
        <Paper
            sx={{
                
                bottom: 0,
                padding: 2,
                textAlign: 'center',
                alignItems: 'center',
                backgroundColor: orange[500], 
                color: 'white', 
            }}
            square
            variant="outlined"
        >
            <Social />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <span>By Julieta Alcaraz</span>
                <LocalFloristSharpIcon />
            </Box>
        </Paper>
    );
}

export default Footer;

