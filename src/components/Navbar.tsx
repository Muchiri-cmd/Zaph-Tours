import { AppBar, Toolbar, IconButton, Typography,Stack,Button } from "@mui/material";
  
const Navbar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow:1 }}>
                Zaph Tours
            </Typography>

            <Stack direction="row" spacing={2}>
                <Button color="inherit" href="null">
                   Home 
                </Button>
                <Button color="inherit" href="null">
                   Destinations 
                </Button>
                <Button color="inherit" href="null">
                   Trip Types Page 
                </Button>
                <Button color="inherit" href="null">
                   Contact Us 
                </Button>

            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar