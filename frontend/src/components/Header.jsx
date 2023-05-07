import {Badge, Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCart, getCount} from "../redux/cart/cart.selector";
import ModalWindow from "./ModalWindow";
import TrackList from "./TrackList";
import Track from "../pages/Track";

const Header = () => {
    const [showModal, setShowModal] = React.useState(false);

    // modal
    const handleOnClose = () => setShowModal(() => false)

    const handleOnShow = () => setShowModal(() => true);

    const cart = useSelector(getCart);

    const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Online-Shop</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto align-items-center">
                        <Nav.Item><Link to="/" style={{
                            textDecoration: "none",
                            color: "black",
                            marginRight: "20px"
                        }}>Home</Link></Nav.Item>
                        <Nav.Item><Link to="/products" style={{textDecoration: "none", color: "black", marginRight: "20px"}}>Products</Link></Nav.Item>
                        <Nav.Item><Link to="/track" style={{textDecoration: "none", color: "black"}}>Track order</Link></Nav.Item>
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
                    <Button onClick={handleOnShow} variant="outline-primary" className="position-relative"
                            style={{marginLeft: "10px"}}>
                        My Local Tracks
                    </Button>
                </Navbar.Brand>
            </Container>
            <ModalWindow open={showModal} handleClose={handleOnClose} title="Your track numbers"
                         body={<TrackList handleClose={handleOnClose}/>}/>
        </Navbar>
    )
}

export default Header;