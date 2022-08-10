import { createContext, ReactNode, useContext } from "react";

type ShoppingCartContext = {
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
// creating the context with an empty object to start, then passing in our type of ShoppingCartContext that has access to all the functions above
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// using export function here because we are exporting two in the same file
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


// gives all the values we need and the code for rendering out the shopping cart when you click the cart
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return <ShoppingCartContext.Provider value={{} as ShoppingCartContext}>
        {children}
    </ShoppingCartContext.Provider>
}