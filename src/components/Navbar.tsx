import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";

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
        backgroundColor: scrolled ? "#ffffff" : "transparent",
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
            color: scrolled ? "#000000" : "#ffffff",
          }}
        >
          Zaph Tours
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            href="null"
            sx={{
              color: scrolled ? "#000000" : "#ffffff",
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="null"
            sx={{
              color: scrolled ? "#000000" : "#ffffff",
            }}
          >
            Destinations
          </Button>
          <Button
            color="inherit"
            href="null"
            sx={{
              color: scrolled ? "#000000" : "#ffffff",
            }}
          >
            Trip Types Page
          </Button>
          <Button
            color="inherit"
            href="null"
            sx={{
              color: scrolled ? "#000000" : "#ffffff",
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
