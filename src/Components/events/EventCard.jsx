import { ShoppingBag, ShoppingBasketRounded } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import React from 'react';

function EventCard({event}) {
    return (
        <Card sx={{maxWidth:{sm:'25%',xs:'100%'}}}>
            <CardMedia sx={{height:200}} image={event.image} />
            <CardContent>
                <Typography variant='h5' className='line-clamp-1' gutterBottom>
                    {event.name}
                </Typography>
                <Typography variant='body2' 
                    className='line-clamp-3'
                    gutterBottom
                >
                    {event.description}
                </Typography>
                <Box sx={{display:'flex',alignItems:'center',gap:'.75em',flexWrap:'wrap'}}>
                    <Chip label={event.location} />
                    <Chip label={event.date} />
                    <Chip label={`${event.prices[0]} - ${event.prices[event.prices.length-1]}`} />
                </Box>
            </CardContent>
            <CardActions className='block mb-2' sx={{display:'block!important'}}>
                <Box className='flex items-center justify-between w-full mb-2'>
                    <Button className='w-[49%]' color='success' variant='outlined' size='small'> Add <ShoppingBag /> </Button>
                    <Button className='w-[49%]' color='success' variant='outlined' size='small'>More </Button>
                </Box>
                <Button className='w-full' sx={{marginLeft:'0px!important'}} color='success' variant='contained'size='small'>Buy ticket</Button>
            </CardActions>
        </Card>
    );
}

export default EventCard;