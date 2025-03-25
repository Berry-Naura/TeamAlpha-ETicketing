import { AddShoppingCart } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/dataContext';

function Cart({newItem}) {
    const {cartItemsNumber}=useContext(DataContext)
    return (
        <div className='relative bg-[whitesmoke] p-3 rounded-full'>
            <AddShoppingCart />
            <span className='absolute bottom-0 right-1  text-black text-sm font-bold'>{cartItemsNumber}</span>
        </div>
    );
}

export default Cart;