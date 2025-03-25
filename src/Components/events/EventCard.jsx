import { AddShoppingCart, ShoppingBag, ShoppingBasketRounded } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Modal, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/dataContext';
import {Get,Post }from '../../functions/apiCalls';

function EventCard({event}) {
    const {addToCart,removeFromCart}=useContext(DataContext)
    const [statusModal,setStatusModal]=useState(false)
    const handleAdd=()=>{
        addToCart(event)
    }
    const handlePay=async()=>{
        console.log("Trying")
        try {
            const payment = {
                amount: 500,
                email: 'cletusberinyuy@email.com',
                externalId: '12345',
                userId: 'abcde',
                // redirectUrl: 'https://mywebsite.com',
                message: 'Eventix event ticket',
            }
            // const resp = await Get('initiate-pay')
            const resp = await Post('initiate-pay',payment)
            if(resp.data && resp.data.statusCode===200){
                window.location.href=resp.data.link
            }else{
            }
            // setStatusModal(true)
            console.log(resp) 
        } catch (error) {
            console.log(error)
            setStatusModal(true)
        }
    }
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
                <Modal
                    open={statusModal}
                    onClose={()=>setStatusModal(false)}
                    sx={{display:'flex',alignItems:'center',width:'100%'}}
                >
                    <Box sx={{width:'60%',mx:'auto',bgcolor:'white',height:'60%',p:4,borderRadius:'8px'}}>
                        <Typography variant='h5' className='text-lg text-center'>
                            Payment Failed
                        </Typography>
                    </Box>
                </Modal>
            </CardContent>
            <CardActions className='block mb-2' sx={{display:'block!important'}}>
                <Box className='flex items-center justify-between w-full mb-2'>
                    <Button className='w-[49%]' color='success' variant='outlined' size='small' onClick={handleAdd}> <AddShoppingCart /> </Button>
                    <Button className='w-[49%]' color='success' variant='outlined' size='small'>More </Button>
                </Box>
                <Button className='w-full' sx={{marginLeft:'0px!important'}} color='success' variant='contained'size='small' onClick={()=>handlePay()}>Buy ticket</Button>
            </CardActions>
        </Card>
    );
}

export default EventCard;