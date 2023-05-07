import {Badge, Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCart, getCount} from "../redux/cart/cart.selector";

const Header = () => {
    const cart = useSelector(getCart);

    const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Online-Shop</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto align-items-center">
                        <Nav.Item><Link to="/" style={{textDecoration: "none", color: "black", marginRight: "20px"}}>Home</Link></Nav.Item>
                        <Nav.Item><Link to="/products" style={{textDecoration: "none", color: "black"}}>Products</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    <Link to="/cart">
                        <Button variant="primary" className="position-relative">
                            Cart
                            {totalCount !== 0 && (
                                <div className="badge1" style={{lineHeight: 0}}>{totalCount}</div>
                            )}
                        </Button>
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;