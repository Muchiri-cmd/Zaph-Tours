import Carousel from "react-material-ui-carousel";
import { Paper, Box, Typography } from "@mui/material";
import slider from "../data/slider.json";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Carousel
        indicators={true}
        navButtonsAlwaysVisible={false}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "40px",
            zIndex: 10,
          },
        }}
        indicatorIconButtonProps={{
          style: {
            padding: "5px",
            fontSize: "2rem",
          },
        }}
      >
        {slider.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

interface ItemProps {
  item: {
    id: number;
    imageURL: string;
    title: string;
  };
}

const Item = ({ item }: ItemProps) => {
  return (
    <Paper
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        margin: 0,
        backgroundImage: `url(${item.imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 0,
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            letterSpacing: "2px",
            fontFamily: "'Roboto', sans-serif",
            textTransform: "uppercase",
          }}
        >
          Your Safari begins here
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Dancing Script', 'Great Vibes', cursive",
            textAlign: "center",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          - Explore The World with us -
        </Typography>
      </Box>
    </Paper>
  );
};

export default Hero;
