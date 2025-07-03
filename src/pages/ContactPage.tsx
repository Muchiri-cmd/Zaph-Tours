import { Navbar, Footer } from "../components";
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Container,
  Paper,
} from "@mui/material";
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: "70px",
        }}
      >
        <Box
          sx={{
            // border:'2px solid red',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginTop: "20px" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            If you have any questions or feedback, feel free to reach out to us!
          </Typography>
          <Box
            sx={{
              // border:'2px solid red',
              boxShadow: 6,
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "20px",
              width: "80%",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <Typography>Please fill out the form below</Typography>
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            ></TextField>
            <TextField
              label="Email"
              type="text"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            ></TextField>
            <TextField
              label="Message"
              type="text"
              variant="outlined"
              multiline
              minRows={7}
              sx={{
                width: "100%",
              }}
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{
            width: "80%",
            minheight: "500px",
            // border:'2px solid red',
            margin: "auto",
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-around",
            padding: "2rem",
            boxShadow: 6,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              borderRight: ".5px solid gray",
              width: "50%",
            }}
          >
            <Typography>Zaph Tours Limited</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Working Hours: 8:00 A.M - 8:00 P.M (Daily)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Off Langata Road" />
              </ListItem>
              <ListItem>
                <ListItemText primary="P.O Box 8573265-8372 Karen, Nairobi,KE" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone: (+254) 87532897 | 897894717" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email: zaphtours@gmail.com" />
              </ListItem>
            </List>
            <Box
              sx={{
                // border:'2px solid red',
                margin: "20px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaInstagram
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
              <FaXTwitter
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
              <FaLinkedin
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
              <FaTiktok
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
              <FaWhatsapp
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
              <FaYoutube
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
              <FaFacebook
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              borderLeft: ".5px solid gray",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <Container>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  mb: 4,
                }}
              >
                <Box sx={{ mt: 2 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Paper>
            </Container>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContactPage;
