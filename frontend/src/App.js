import './App.scss';
import MainLayout from "./layout/MainLayout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import {useDispatch} from "react-redux";
import Cart from "./pages/Cart";
import {ToastContainer} from "react-toastify";
import React from "react";

function App() {

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
            />
            <Routes>
                <Route path="/" element={<MainLayout isCarousel={true}/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
