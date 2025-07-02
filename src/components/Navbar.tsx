import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "#f2f2f2" : "rgba(0, 0, 0, 0.2)",
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
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: scrolled ? "#9d6b53" : "#ffffff",
          }}
        >
          Zaph Tours
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              color: scrolled ? "#9d6b53" : "#ffffff",
              fontWeight: "bold",
            }}
          >
            Home
          </Button>
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
            href="null"
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
