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
                        <Nav.Item><Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link></Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    <Link to="/cart">
                        <Button variant="primary" className="position-relative">
                            Cart
                            {totalCount !== 0 && (
                                <div className="badge1">{totalCount}</div>
                            )}
                        </Button>
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;