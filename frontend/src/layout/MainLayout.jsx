import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import MainCarousel from "../components/MainCarousel/MainCarousel";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <MainCarousel />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default MainLayout;