import {
  Box,
  Container,
  Grid,
} from '@mui/material';

import FormularioContacto from '../utils/formularioContacto';

const Contacto = () => {
    return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', py: 4 }}>
      <Container maxWidth="lg">
    
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <FormularioContacto />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacto;
