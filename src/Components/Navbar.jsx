import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "../stylessheet/Navbar.css";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /**
   *  Responsive Show side panel content
   * NavItems
   */
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="header_wrp">
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Container>
            <Grid container>
              {/* Logo Here */}
              <Grid item lg={3}>
                <Box className="dd" component={"div"} >
                <h6>React Redux Application</h6>
                </Box>
              </Grid>
              {/* Listing Items for Linking */}
              <Grid item lg={9} sx={{ display: { xs: "none", sm: "block" }}} >
                <Box className="list_wrp_ul" component={"ul"}>
                  <Box className="list_wrp_li" component={"li"}>
                    <Link to={""} spy={true} smooth={true}  >Counter App</Link>
                  </Box>
                  <Box className="list_wrp_li" component={"li"}>
                    <Link spy={true} smooth={true}  to={""}>Todo App</Link>
                  </Box>
                  <Box className="list_wrp_li" component={"li"}>
                    <Link spy={true} smooth={true}  to={""}>Fetch API App</Link>
                  </Box>
                  <Box className="list_wrp_li" component={"li"}>
                    <Link spy={true} smooth={true}  to={""}>Ecommerce Cart App</Link>
                  </Box>
                  {/* <Box className="list_wrp_li" component={"li"}>
                    <Link to={""}>Home</Link>
                  </Box>
                  <Box className="list_wrp_li" component={"li"}>
                    <Link to={""}>Home</Link>
                  </Box> */}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Responsive Show navbar sidepanel  */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
// sx={{ display: { xs: "none", sm: "block" }, alignItems:"center", justifyContent:"flex-end" }} responsive hide list item
