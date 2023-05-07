import React from "react";
import {Tab, Tabs} from "react-bootstrap";
import ProductList from "../components/ProductList";

const Products = () => {
    const [key, setKey] = React.useState("1");

    return (
        <section className="mt-4">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey={"1"} title="Products"/>
                <Tab eventKey={"2"} title="Electronics"/>
                <Tab eventKey={"3"} title="Clothing and footwear"/>
                <Tab eventKey={"4"} title="Home goods"/>
            </Tabs>

            <ProductList isPagination={true} categoryId={Number(key)}/>
        </section>
    )
}

export default Products;