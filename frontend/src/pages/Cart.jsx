import {useDispatch, useSelector} from "react-redux";
import {getCart, getTotalPrice} from "../redux/cart/cart.selector";
import {Badge, Button, ListGroup} from "react-bootstrap";
import {addProduct, minusItem, removeItem} from "../redux/cart/cart.slice";
import CartForm from "../components/CartForm";

const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(getCart)
    const totalPrice = useSelector(getTotalPrice);

    const onClickAdd = (product) => {
        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            category: product.category,
        }
        dispatch(addProduct(product))
    }

    const onClickMinus = (product) => {
        const item = {
            id: product.id,
            count: product.count
        }

        if (product.count === 1) {
            dispatch(removeItem(item))
            return;
        }

        dispatch(minusItem(item));
    }

    if (cart.length === 0) {
        return (
            <div>Cart is empty :(</div>
        )
    }

    return (
        <div className="mt-4">
            <h1 className="mb-4">Send your order <span className="text-primary font-monospace">#right-now</span></h1>
            <ListGroup as="ol" numbered>
                {cart.map(item => (
                    <ListGroup.Item
                        key={item.id}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.name}</div>
                            {Number(item.price * item.count).toFixed(2)}$
                            {/*<div>*/}

                            {/*</div>*/}
                        </div>
                        <Badge bg="primary" pill>
                            <Button variant="outline-primary" className="add-button"
                                    onClick={() => onClickMinus(item)}>&lt;</Button>
                            <span>{item.count}</span>
                            <Button variant="outline-primary" className="add-button"
                                    onClick={() => onClickAdd(item)}>&gt;</Button>
                        </Badge>
                    </ListGroup.Item>

                ))}
            </ListGroup>
            <div className="d-flex justify-content-end mt-3">
                <h4>TotalPrice: <span className="text-primary font-monospace">{Number(totalPrice).toFixed(2)}$</span></h4>
            </div>
            <CartForm />
        </div>
    )
}

export default Cart;