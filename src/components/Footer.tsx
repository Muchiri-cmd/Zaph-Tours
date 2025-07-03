import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  Link,
} from "@mui/material";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
          md: "row",
        },
        justifyContent: {
          xs: "center",
          sm: "space-between",
          md: "space-between",
        },
        alignItems: "center",
        padding: "60px 30px",
        boxShadow: 6,
      }}
    >
      <List>
        <ListItem>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Dancing Script, cursive",
              color: "#9d6b53",
            }}
          >
            Zaph Tours
          </Typography>
        </ListItem>
        <ListItem>
          <TextField
            type="text"
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "600px",
              color: "white",
            }}
          />
        </ListItem>
      </List>

      <Box>
        <List>
          <ListItem>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: "bold",
                color: "#9d6b53",
                fontFamily: "cursive",
              }}
            >
              ADVENTURE AWAITS
            </Typography>
          </ListItem>
          <ListItem>
            <Link
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <ListItemText primary="Adventure Catalogue" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <ListItemText primary="Tours" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <ListItemText primary="Destinations" />
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box>
        <List>
          <ListItem>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: "bold",
                color: "#9d6b53",
                fontFamily: "cursive",
              }}
            >
              ABOUT US
            </Typography>
          </ListItem>

          <ListItem>
            <Link
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <ListItemText primary="About Us" />
            </Link>
          </ListItem>

          <ListItem>
            <Link
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <ListItemText primary="Pack For A Purpose" />
            </Link>
          </ListItem>

          <ListItem>
            <Link
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <ListItemText primary="Contact" />
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box>
        <List>
          <ListItem>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: "bold",
                color: "#9d6b53",
                fontFamily: "cursive",
              }}
            >
              GET IN TOUCH
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon
              sx={{
                color: "#9d6b53",
              }}
            >
              <FaPhone />
            </ListItemIcon>
            <ListItemText primary="+254 94812642818" />
          </ListItem>
          <ListItem>
            <ListItemIcon
              sx={{
                color: "#9d6b53",
              }}
            >
              <FaPhone />
            </ListItemIcon>
            <ListItemText primary="+254 94812642818" />
          </ListItem>

          <ListItem>
            <ListItemIcon
              sx={{
                color: "#9d6b53",
              }}
            >
              <IoMail />
            </ListItemIcon>
            <ListItemText primary="zaphtours@gmail.com" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
