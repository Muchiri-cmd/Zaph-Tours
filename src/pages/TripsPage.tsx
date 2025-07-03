import { Navbar, Footer } from "../components";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Grid,
} from "@mui/material";
import tripTypes from "../data/trip-packages.json";
import Carousel from "react-material-ui-carousel";

const TripsPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "64px",
          padding: "20px",
          backgroundColor: "#ffffff",
          minHeight: "100vh",
          // border:'2px solid red',
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Explore Our Trip Packages
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {tripTypes.map((trip) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                margin: "20px",
                // border:'2px solid red',
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 4,
                  overflow: "hidden",
                  position: "relative",
                  // border:'2px solid red',
                  maxWidth: "610px",
                }}
              >
                <Carousel indicators={true} navButtonsAlwaysVisible={false}>
                  {trip.images.map((image, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      height="200"
                      image={image}
                      alt={`${trip.title} ${index + 1}`}
                      sx={{ width: "100%", objectFit: "cover" }}
                    />
                  ))}
                </Carousel>

                <CardContent>
                  {trip.tag && (
                    <Chip
                      label={trip.tag}
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        right: 15,
                        padding: "15px",
                        backgroundColor: "#9d6b53",
                        color: "white",
                      }}
                    />
                  )}
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {trip.title}
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    {trip.description}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#D4AF37" }}>
                    Starting from ${trip.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="green" mb={2}>
                    {trip.offer}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#9d6b53",
                      borderColor: "#9d6b53",
                      "&:hover": {
                        backgroundColor: "#9d6b53",
                        color: "#fff",
                      },
                    }}
                  >
                    Explore Package
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default TripsPage;
