import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountBox from "@mui/icons-material/AccountBox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Logout } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import UserAvatar from "./UserAvatar";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#4f2870",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <div>
            <IconButton
              size="large"
              aria-label="Account actions"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <UserAvatar />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/Profile">
                <MenuItem onClick={handleClose}>
                  {" "}
                  <AccountBox /> Profile View
                </MenuItem>{" "}
              </Link>
              <Link to="Settings">
                <MenuItem onClick={handleClose}>
                  {" "}
                  <SettingsApplicationsIcon /> Settings View
                </MenuItem>
              </Link>
              <Divider />
              <MenuItem onClick={handleClose}>
                {" "}
                <Logout /> Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
