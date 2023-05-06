import React from 'react';
import MainCarousel from "../components/MainCarousel/MainCarousel";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/product/product.action";
import {selectProducts} from "../redux/product/product.selectors";

const Home = () => {
    const dispatch = useDispatch();

    const pizzas = useSelector(selectProducts);

    return (
        <div className="mt-4">
            <h1 className="text-center">Our Products</h1>
        </div>
    )
}

export default Home;