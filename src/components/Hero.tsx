import Carousel from 'react-material-ui-carousel'
import { Paper, Button,Box } from '@mui/material'
import slider from '../data/slider.json'

const Hero = () => {
    return (
        <Carousel>
            {
                slider.map(item  => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

interface ItemProps {
    item: {
        id: number;
        imageURL: string;
        title: string;
    }
}

const Item = ({ item }: ItemProps) => {
    return (
        <Paper
            sx = {{
                position: 'relative',
                height: '88vh',
                backgroundImage: `url(${item.imageURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
           
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                zIndex:1,
            }}
            />

            <Box
                sx={{
                position: 'relative',
                zIndex: 2,
                color: '#fff',
                textAlign: 'center',
                }}
            >
                <Button variant="contained" size="large"
                    sx ={{
                        px:4,
                        py:2,
                        borderRadius:'10px',
                        border:'none'
                    }}
                >
                    Explore The World With Us!
                </Button>
            </Box>
        </Paper>
    )
}

export default Hero