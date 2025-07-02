import { Navbar, Footer } from "../components";
import { Box, Typography } from "@mui/material";

const TripsPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: "20px",
          textAlign: "center",
          marginTop: "64px",
          minHeight: "89vh",
        }}
      >
        <Typography variant="h4">Explore Our Destinations</Typography>
      </Box>
      <Footer />
    </>
  );
};

export default TripsPage;
