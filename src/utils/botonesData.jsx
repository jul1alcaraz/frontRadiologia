import { Stack, Button } from "@mui/material";

function ColorButtons() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      sx={{ marginTop: 5,
        gap: 1,}} >
      
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
export default ColorButtons;