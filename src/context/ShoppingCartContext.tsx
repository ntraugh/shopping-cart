import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart"

type ShoppingCartContext = {
    // setting functions to open and close the cart
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
    // set a function to pass in a number as an id then return that number
    getItemQuantity: (id: number) => number
    // next two functions take in an id but don't return anything
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

type ShoppingCartProviderProps = {
    children: ReactNode 
}

type CartItem = {
    id: number
    quantity: number
}
// creating the context with an empty object to start, then passing in our type of ShoppingCartContext that has access to all the functions above
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// using export function here because we are exporting two in the same file
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


// gives all the values we need and the code for rendering out the shopping cart when you click the cart
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [open, setOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    // 
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    console.log(cartQuantity)

    const openCart = () => setOpen(true)
    const closeCart = () => setOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    
    function increaseCartQuantity(id: number) {
        // use state to setCartItems
        setCartItems(currentItems => {
            // check if an item isn't in the cart and if it isn't we add a new item
            if(currentItems.find(item => item.id === id) == null){
                return [...currentItems, { id, quantity: 1}]
            } else {
                // need to map through our items and find where the id's match
                return currentItems.map((item) => {
                    if(item.id === id) {
                        // if they match then we return all our items "...item" and increment the quantity by 1
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        // if they don't match we just return the item without doing anything to it
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(currentItems => {
            // check if our quantity is equal to 1
            if(currentItems.find(item => item.id === id)?.quantity === 1){
                // if it's equal to 1 we filter out the items to find where the id doesn't match
                return currentItems.filter(item => item.id !== id)
            } else {
                // need to map through our items and find where the id's match
                return currentItems.map((item) => {
                    if(item.id === id) {
                        // if they match then we return all our items "...item" and decrement the quantity by 1
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        // if they don't match we just return the item without doing anything to it
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: number) {
        // use state to setCartItems to currentItems
        setCartItems(currentItems => {
            // then return the ID where they don't match
            return currentItems.filter(item => item.id !== id)
        })
    }
    return (
        <ShoppingCartContext.Provider value={
        { getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart, 
        openCart,
        closeCart,
        cartItems, 
        cartQuantity}}
        >
        {children}
            <ShoppingCart isOpen={open}/>
        </ShoppingCartContext.Provider>
    )
}