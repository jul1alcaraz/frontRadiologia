import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BungalowIcon from '@mui/icons-material/Bungalow';

function MenuDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const menu = [
    { path: "/", name: "Home" },
    { path: "/categoria", name: "Categorias" },
    { path: "/contacto", name: "Contacto" },
  ];

  const DrawerList = (
    <Box
  sx={{ width: 250 }}
  role="presentation"
  onClick={() => toggleDrawer(false)}
>
  <List>
    {menu.map(({ path, name }, index) => {
      const icons = [<BungalowIcon />, <AutoFixHighIcon />, <InboxIcon />];
      return (
        <ListItem key={path} disablePadding>
          <ListItemButton component={Link} to={path}>
            <ListItemIcon>
              {icons[index % icons.length]}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
        </ListItem>
      );
    })}
  </List>
  <Divider />
</Box>

  );

  return (
    <div>
      <IconButton
        onClick={() => toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
