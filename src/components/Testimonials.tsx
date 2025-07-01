import { Typography, Box, Grid } from "@mui/material";
import testimonials from "../data/testimonials.json";

const Testimonials = () => {
  return (
    <Box
      sx={{
        // border:'2px solid red',
        padding: "2rem 1rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          fontFamily: "Dancing Script, cursive",
          fontSize: "5rem",
        }}
      >
        Testimonials
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          marginTop: "50px",
          padding: "52px",
          // border:'2px solid red',
          gap: 2,
        }}
      >
        {testimonials.map((testimonial) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
            <Box
              bgcolor="primary.main"
              p={2}
              sx={{
                borderRadius: 2,
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                position: "relative",
                // border: '2px solid red',
                height: "320px",
                marginBottom: "3.5rem",
                boxShadow: 6,
                //hover
                "&:hover": {
                  cursor: "pointer",
                  transform: "scale(1.05)",
                  transition: "transform 0.4s ease-in-out",
                },
              }}
            >
              <img
                src={testimonial.image}
                alt="user-image"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "-40px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: "80px",
                  fontStyle: "italic",
                }}
              >
                <span
                  style={{
                    fontSize: "35px",
                    color: "#9d6b53",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  "{" "}
                </span>
                {testimonial.comment}
                <span
                  style={{
                    fontSize: "35px",
                    color: "#9d6b53",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  "{" "}
                </span>
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mt: 4,
                  color: "#9d6b53",
                  fontWeight: "bold",
                  fontFamily: "Dancing Script, cursive",
                }}
              >
                -{testimonial.name}-
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
