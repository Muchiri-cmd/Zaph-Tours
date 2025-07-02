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
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  mt: 2,
                  textAlign: "right",
                }}
              >
                <Box sx={{ mt: 1, mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2">Individual Price:</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: "#9d6b53",
                      }}
                    >
                      ${destination.individualPrice.toFixed(2)}
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2">Group Price:</Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, color: "#9d6b53" }}
                    >
                      ${destination.groupPrice.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Destinations;
