import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import UserAvatar from "./UserAvatar";
import { Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBox from "@mui/icons-material/AccountBox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const ClippedDrawer = () => {
  const [showMenu, toggleShowMenu] = React.useState(true);

  const darkTheme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "black",
            color: "red",
          },
        },
      },
    },
  });

  const toggleClick = (e) => {
    e.preventDefault();
    toggleShowMenu(!showMenu);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <Container>
              <UserAvatar />
              <p>
                <b>User Name</b>
              </p>
              <p>Additional info</p>
            </Container>
            <List>
              {["Home"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <Link to="/">
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon sx={{ color: red[800] }} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["Menu >"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={toggleClick}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {showMenu && (
              <List>
                <Link to="/Profile">
                  <ListItem>
                    <ListItemIcon>
                      <AccountBox sx={{ color: red[800] }} />
                    </ListItemIcon>
                    <ListItemText>Profile View</ListItemText>
                  </ListItem>
                </Link>
                <Link to="/settings">
                  <ListItem>
                    <ListItemIcon>
                      <SettingsApplicationsIcon sx={{ color: red[800] }} />
                    </ListItemIcon>
                    <ListItemText>Settings View</ListItemText>
                  </ListItem>
                </Link>
              </List>
            )}
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default ClippedDrawer;
