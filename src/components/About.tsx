import { Box, Typography, Button } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        py: 10,
        // border:'2px solid red',
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Dancing Script', cursive",
          mb: 2,
          // textTransform: 'uppercase',
          fontWeight: "bold",
          letterSpacing: "2px",
          fontSize: "5rem",
        }}
      >
        About Us
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "normal",
        }}
      >
        We plan and guide exceptional, participatory wilderness experiences and
        safaris throughout Africa.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          lineHeight: "1.6",
          color: "#555",
          mb: 4,
          mx: "auto",
        }}
      >
        As technology drives us into faster and more isolated lives, we provide
        a place of reprieve. To become wild again is to revive your connection
        with the natural world, to awaken your senses, be inspired by place and
        emboldened for life.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#9d6b53",
          px: 4,
          py: 2,
          borderRadius: "10px",
          fontWeight: 600,
          letterSpacing: 1,
          "&:hover": {
            backgroundColor: "#865841",
          },
        }}
      >
        More About Us
      </Button>
    </Box>
  );
};

export default About;
