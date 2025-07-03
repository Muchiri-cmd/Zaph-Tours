import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        backgroundImage: `url('/lion3.jpeg')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          width: "50%",
          fontSize: {
            xs: "24px",
            sm: "28px",
            md: "32px",
            lg: "36px",
          },
        }}
      >
        “Africa - You can see a sunset and believe you have witnessed the Hand
        of God. You watch the lope of a lioness and forget to breathe. When you
        are in Africa, you feel primordial, rocked in the cradle of the world.”
        <br />
        <Typography
          sx={{ fontStyle: "italic", fontSize: "20px", marginTop: "20px" }}
        >
          {" "}
          - Jodi Picoult
        </Typography>
      </Typography>
    </Box>
  );
};

export default Banner;
