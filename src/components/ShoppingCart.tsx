import { Offcanvas, Stack } from "react-bootstrap"
import  CartItem  from "./CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"
import FormatCurrency from "../utils/FormatCurrency"
import storeItems from "../data/items.json"


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
        {/* map through all our cart items and display the CartItem component we created  */}
        {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
        ))}
        {/* need to display the total of all items here */}
        <div className="ms-auto fw-bold fs-5">
            {/* we can use reduce to take all of the item prices and reduce them to one value */}
            Total {" "}
            {FormatCurrency(cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity

            }, 0)
            )}
        </div>
      </Stack>
    </Offcanvas.Body>

  </Offcanvas>
  
}

export default ShoppingCart