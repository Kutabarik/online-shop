import './App.scss';
import MainLayout from "./layout/MainLayout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import {useDispatch} from "react-redux";
import Cart from "./pages/Cart";

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout isCarousel={true}/>}>
                <Route path="" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/cart" element={<Cart />}/>
            </Route>
        </Routes>
    );
}

export default App;
