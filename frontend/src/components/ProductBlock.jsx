import {Button, Card} from "react-bootstrap";

const ProductBlock = ({id, name, description, price, img}) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductBlock;