import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import Footer from "../components/Footer";

const MainLayout = ({isCarousel}) => {
    return (
        <div>
            <Header/>
            {isCarousel && (
                <MainCarousel/>
            )}
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </div>
    )
}

export default MainLayout;