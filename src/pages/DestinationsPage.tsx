import { Navbar, Footer } from "../components";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import destinations from "../data/destinations.json";

const DestinationsPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: "20px",
          textAlign: "center",
          marginTop: "64px",
          // border:'2px solid red',
          minHeight: "89vh",
        }}
      >
        <Typography variant="h4">Explore Our Destinations</Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "grey", marginTop: "10px" }}
        >
          Discover the world's most beautiful places with Zaph Tours. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Expedita, qui
          laboriosam voluptatem, suscipit quibusdam quas a vel itaque at harum
          eaque obcaecati explicabo necessitatibus porro sit dicta. Fugit ad
          quasi unde sunt omnis harum incidunt. Praesentium earum laboriosam quo
          delectus, consequatur ea pariatur, dolores ipsam deleniti hic commodi
          repellendus saepe?
        </Typography>

        <Box
          sx={{
            // border:'2px solid red',
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            padding: 2,
            marginTop: "20px",
          }}
        >
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              sx={{
                minWidth: 300,
                maxWidth: 350,
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
                sx={{
                  objectFit: "cover",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {destination.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "grey", fontSize: "0.95rem", mb: 2 }}
                >
                  {destination.description}
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                  Group Price:{" "}
                  <span style={{ color: "#9d6b53" }}>
                    ${destination.groupPrice}
                  </span>
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                  Individual Price:{" "}
                  <span style={{ color: "#9d6b53" }}>
                    ${destination.individualPrice}
                  </span>
                </Typography>

                <Button
                  href={destination.link}
                  variant="outlined"
                  sx={{
                    alignSelf: "flex-end",
                    mt: "10px",
                    borderColor: "#9d6b53",
                    color: "#9d6b53",
                    "&:hover": {
                      backgroundColor: "#9d6b53",
                      color: "#fff",
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default DestinationsPage;
