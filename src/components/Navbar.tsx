import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import { useShoppingCart } from "../context/ShoppingCartContext"

const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm px-3">
        {/* <Container> */}
            <Nav className="me-auto py-2">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/Store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/About" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button 
                    onClick={openCart}
                    style={{position: "relative"}} variant="outline-primary">
                    <FaShoppingCart size={30}/>

                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={
                            {color: "white", 
                            width: "1.5rem", 
                            height: "1.5rem", 
                            position: "absolute", 
                            bottom: 0, 
                            right: 0, 
                            transform: "translate(25%, 25%)"}}>
                        {cartQuantity}
                        
                    </div>
                </Button>
            )}
        {/* </Container> */}

    </NavbarBs>
  )
}

export default Navbar