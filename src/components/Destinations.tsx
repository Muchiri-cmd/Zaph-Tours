import destinations from "../data/destinations.json";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const Destinations = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "#f2f2f2",
        // border:'2px solid red'
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Dancing Script', cursive",
          mb: 4,
          fontWeight: "bold",
          letterSpacing: "2px",
          fontSize: "4rem",
        }}
      >
        Explore Our Destinations
      </Typography>

      <Box
        sx={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          display: "flex",
          gap: 1.5,
          px: 2,
          py: 4,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {destinations.map((destination) => (
          <Card
            key={destination.id}
            sx={{
              minWidth: 300,
              maxWidth: 300,
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
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "#2E2E2E",
                }}
              >
                {destination.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "grey",
                  fontSize: "0.95rem",
                  mb: 2,
                  whiteSpace: "normal",
                }}
              >
                {destination.description}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#D4AF37",
                  textAlign: "right",
                }}
              >
                ${destination.price.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Destinations;
