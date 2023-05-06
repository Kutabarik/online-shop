import React from 'react';
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/product/product.action";
import {selectProducts} from "../redux/product/product.selectors";
import ProductList from "../components/ProductList";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="mt-4">
            <section>
                <h1 className="text-center mb-5">Our Products</h1>
                <ProductList isPagination={false} />
                <Link to="/products">
                    <Button variant="outline-primary">More Products...</Button>
                </Link>
            </section>
        </div>
    )
}

export default Home;