import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { useEffect, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { Box, Menu, MenuList, MenuItem, IconButton } from "@mui/material";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (e: MouseEvent) => {
    setAnchorNav(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "white" : "rgba(0, 0, 0, 0.2)",
        boxShadow: "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        zIndex: 1200,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: scrolled ? "#9d6b53" : "#ffffff",
            fontFamily: "cursive",
            textDecoration: "none",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Zaph Tours
        </Typography>

        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <IconButton onClick={openMenu}>
            <MdMenu
              style={{
                fontSize: "3rem",
                color: scrolled ? "#9d6b53" : "white",
              }}
            />
          </IconButton>

          <Menu
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            sx={{
              display: { xs: "flex", md: "none" },
            }}
            anchorEl={anchorNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuList>
              <MenuItem onClick={openMenu} component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem onClick={closeMenu} component={Link} to="/trips">
                Trip Types
              </MenuItem>
              <MenuItem onClick={closeMenu} component={Link} to="/destinations">
                Destinations
              </MenuItem>
              <MenuItem onClick={closeMenu} component={Link} to="/contact-us">
                Contact Us
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/destinations"
            sx={{
              color: scrolled ? "#9d6b53" : "#ffffff",
              fontWeight: "bold",
            }}
          >
            Destinations
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/trips"
            sx={{
              color: scrolled ? "#9d6b53" : "#ffffff",
              fontWeight: "bold",
            }}
          >
            Trip Types Page
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact-us"
            sx={{
              color: scrolled ? "#9d6b53" : "#ffffff",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
