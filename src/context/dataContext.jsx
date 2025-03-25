import { createContext, useEffect, useState } from "react";

export const DataContext=createContext()

const DataContextProvider=({children})=>{
    let localCart=localStorage.getItem('EventixCart')
    localCart=JSON.parse(localCart)
    if(!localCart || localCart.length<1) localCart=[]
    const [cartItemsNumber,setCartItemsNumber]=useState(localCart.length)
    const [cartItems,setCartItems]=useState(localCart)
    const addToCart=(item)=>{
        let itemIds=cartItems.map(({id})=>{return id})
        if(itemIds.includes(item.id)){
            console.log("Already exist in cart")
            return
        }
        localStorage.setItem('EventixCart',JSON.stringify([...cartItems,item]))
        setCartItems([...cartItems,item])
        setCartItemsNumber(cartItemsNumber+1)
    }
    const removeFromCart=(item)=>{
        if(cartItemsNumber<1) return
        setCartItems([...cartItems.filter((cartItem)=>cartItem.id!==item.id)])
        setCartItemsNumber(cartItemsNumber-1)
        localStorage.setItem('EventixCart',JSON.stringify(cartItems))
        console.log(cartItems)
    }
    useEffect(()=>{

    },[cartItems])
    return (
        <DataContext.Provider value={{cartItems,cartItemsNumber,addToCart,removeFromCart}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider