import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import FormatCurrency from "../utils/FormatCurrency"


type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if(item === null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item?.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
            <div className="me-auto">
                <div>
                    {/* display the item name and a space, then IF the quantity is greater than 1 we will show the span class */}
                    {item?.name} {" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{fontSize: ".9rem"}}>
                            x{quantity}</span>
                    )}
                </div>
                {/* display our price of the single item */}
                <div className="text-muted" style={{"fontSize": ".9rem"}}>
                        {FormatCurrency(item?.price)}
                </div>
            </div>
            {/* multiply the price by the quantity for a total  */}
            <div>{FormatCurrency(item?.price * quantity )}</div>
            {/* on click we remove from the cart */}
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                &times;
            </Button>
        </Stack>
    )
}

export default CartItem