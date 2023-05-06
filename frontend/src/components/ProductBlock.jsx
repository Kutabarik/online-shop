import React from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addProduct} from "../redux/cart/cart.slice";

const ProductBlock = ({id, name, description, price, img, category}) => {
    const dispatch = useDispatch();

    const onClickAdd = () => {
        const item = {
            id,
            name,
            price,
            img,
            category,
        }
        dispatch(addProduct(item));
    }

    return (
        <Card style={{width: '18rem', height: "100%"}}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p className="p-2 rounded-2 fs-6"># {category}</p>
                <Card.Text className="text-truncate">
                    {description}
                </Card.Text>
                <Card.Text>
                    <span className="text-bold">{price}$</span>
                </Card.Text>
                <hr />
                <Button onClick={onClickAdd} variant="outline-primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductBlock;