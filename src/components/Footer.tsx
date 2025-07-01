import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
} from "@mui/material";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "60px 30px",
        boxShadow: 6,
      }}
    >
      <List>
        <ListItem>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Dancing Script, cursive",
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
              maxWidth: "500px",
              color: "white",
            }}
          />
        </ListItem>
      </List>

      <Box>
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              ADVENTURE AWAITS
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary="Adventure Catalogue" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Tours" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Destinations" />
          </ListItem>
        </List>
      </Box>

      <Box>
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              ABOUT US
            </Typography>
          </ListItem>

          <ListItem>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pack For A Purpose" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Box>

      <Box>
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
              GET IN TOUCH
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaPhone />
            </ListItemIcon>
            <ListItemText primary="+254 94812642818" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FaPhone />
            </ListItemIcon>
            <ListItemText primary="+254 94812642818" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
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
