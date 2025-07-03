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
  ListItemIcon,
  Button,
} from "@mui/material";
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaClock,
  FaPhone,
  FaRegPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdAttachEmail, MdOutlineEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "70px",
          // border:'2px solid red',
          padding: "10px",
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
              width: {
                xs: "100%",
                sm: "80%",
                md: "60%",
              },
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <Typography>Please fill out the form below</Typography>
            <TextField
              label="Name"
              placeholder="Enter your name"
              type="text"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            ></TextField>
            <TextField
              label="Email"
              placeholder="Enter your email"
              type="text"
              variant="outlined"
              sx={{
                width: "100%",
              }}
            ></TextField>
            <TextField
              label="Message"
              placeholder="What's your message"
              type="text"
              variant="outlined"
              multiline
              minRows={6}
              sx={{
                width: "100%",
              }}
            ></TextField>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9d6b53",
                display: "flex",
                gap: 1,
              }}
            >
              Submit
              <FaRegPaperPlane />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: {
              sm: "100%",
              md: "80%",
              lg: "60%",
            },
            minheight: "500px",
            // border:'2px solid red',
            margin: "auto",
            marginTop: "50px",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
            },
            justifyContent: "space-around",
            padding: "1rem",
            boxShadow: 6,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              borderRight: {
                xs: "none",
                sm: ".1px solid #9d6b53",
                md: ".1px solid #9d6b53",
              },
              width: {
                xs: "100%",
                sm: "50%",
                md: "50%",
              },
            }}
          >
            <Typography
              sx={{
                color: "#9d6b53",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
            >
              Zaph Tours Limited
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon
                  sx={{
                    color: "#9d6b53",
                  }}
                >
                  <FaClock />
                </ListItemIcon>
                <ListItemText primary="Working Hours: 8:00 A.M - 8:00 P.M (Daily)" />
              </ListItem>
              <ListItem>
                <ListItemIcon
                  sx={{
                    color: "#9d6b53",
                  }}
                >
                  <CiLocationOn />
                </ListItemIcon>
                <ListItemText primary="Off Langata Road" />
              </ListItem>
              <ListItem>
                <ListItemIcon
                  sx={{
                    color: "#9d6b53",
                  }}
                >
                  <MdAttachEmail />
                </ListItemIcon>
                <ListItemText primary="P.O Box 8573265-8372 Karen, Nairobi,KE" />
              </ListItem>
              <ListItem>
                <ListItemIcon
                  sx={{
                    color: "#9d6b53",
                  }}
                >
                  <FaPhone />
                </ListItemIcon>
                <ListItemText primary="Phone: (+254) 87532897 | 897894717" />
              </ListItem>
              <ListItem>
                <ListItemIcon
                  sx={{
                    color: "#9d6b53",
                  }}
                >
                  <MdOutlineEmail />
                </ListItemIcon>
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
                gap: "10px",
              }}
            >
              <FaInstagram
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#9d6b53",
                }}
              />
              <FaXTwitter
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#9d6b53",
                }}
              />
              <FaLinkedin
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#9d6b53",
                }}
              />
              <FaTiktok
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#9d6b53",
                }}
              />
              <FaWhatsapp
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#9d6b53",
                }}
              />
              <FaYoutube
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#9d6b53",
                }}
              />
              <FaFacebook
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#9d6b53",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              borderLeft: {
                xs: "none",
                sm: ".1px solid #9d6b53",
                md: ".1px solid #9d6b53",
              },
              width: {
                xs: "100%",
                sm: "50%",
                md: "50%",
              },
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
                    src="https://www.google.com/maps/embed?"
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
