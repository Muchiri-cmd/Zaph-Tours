import { Box, Typography, Button, TextField } from "@mui/material";

const NewsLetter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        // border:'2px solid red',
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          margin: "auto",
          textAlign: "center",
          padding: 4,
          // border:'2px solid red'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: "1rem",
            fontFamily: "Dancing Script, cursive",
          }}
        >
          Subscribe to Our Newsletter
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
          }}
        >
          Stay updated with the latest news and offers.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            type="text"
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              width: "80%",
              maxWidth: "500px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              marginLeft: "10px",
              width: "30%",
              backgroundColor: "#9d6b53",
              borderRadius: "8px",
              cursor: "pointer",
              height: "60px",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
