import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const DrawerLinks = () => {
  return (
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerLinks;
