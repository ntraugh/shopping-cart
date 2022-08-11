import { Offcanvas, Stack } from "react-bootstrap"
import  CartItem  from "./CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    // Offcanvas from bootstrap allows the slide in method for our cart
  return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Stack gap={3}>
        {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
        ))}

      </Stack>
    </Offcanvas.Body>

  </Offcanvas>
  
}

export default ShoppingCart