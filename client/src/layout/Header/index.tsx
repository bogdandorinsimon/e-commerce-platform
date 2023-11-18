import FitbitIcon from "@mui/icons-material/Fitbit";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import { useState } from "react";
import { DEFAULT_ROUTE } from "helpers/constants";
import { useTranslate } from "hooks/useTranslate";
import { sxStyles } from "./styles";
import { useNavItems } from "./useNavItems";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { translate } = useTranslate();
  const classes = sxStyles();
  const navItems = useNavItems();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderTitleAndLogo = () => {
    return (
      <>
        <FitbitIcon sx={classes.icon} />
        <Typography
          variant="h2"
          sx={classes.title}
          component="a"
          color="text.primary"
          noWrap
          href={DEFAULT_ROUTE}
        >
          {translate("common.app_name", "Dummy App")}
        </Typography>
      </>
    );
  };

  const renderMobileMenu = () => {
    return (
      <Box sx={classes.visibleOnMobile}>
        <IconButton
          size="large"
          aria-label="navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={classes.mobile}
        >
          {navItems.map((navItem) => (
            <MenuItem key={navItem.id} onClick={navItem.onClick}>
              <Typography textAlign="center">{navItem.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  };

  const renderDesktopMenu = () => {
    return (
      <Box sx={classes.desktopMenuContainer}>
        {navItems.map((navItem) => (
          <Button
            key={navItem.id}
            onClick={navItem.onClick}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {navItem.title}
          </Button>
        ))}
      </Box>
    );
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {renderMobileMenu()}
          {renderTitleAndLogo()}
          {renderDesktopMenu()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
