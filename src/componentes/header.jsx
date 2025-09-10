import * as React from "react"; 
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { orange } from "@mui/material/colors";
import MenuDrawer from "../utils/menuDrawer";
import BungalowIcon from '@mui/icons-material/Bungalow';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(orange[900], 0.15), // fondo naranja transparente
  "&:hover": {
    backgroundColor: alpha(orange[50], 0.25), // más intenso al hover
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: orange[500] }}> {/* AppBar naranja */}
        <Toolbar>
          <MenuDrawer />          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="inicio"
            sx={{ mr: 2 }}
          >
          <BungalowIcon />
          </IconButton>

          <Box sx={{ marginLeft: "auto" }}> {/* esto empuja el Search al extremo derecho */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
