import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        // backdropFilter: 'blur(2px)',
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
          sx={{ flexGrow: 1, fontWeight: "bold", textTransform: "uppercase" }}
        >
          Zaph Tours
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit" href="null">
            Home
          </Button>
          <Button color="inherit" href="null">
            Destinations
          </Button>
          <Button color="inherit" href="null">
            Trip Types Page
          </Button>
          <Button color="inherit" href="null">
            Contact Us
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
