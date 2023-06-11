import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar/NavBar";
import { Toaster } from 'react-hot-toast';
import Footer from "../../Pages/Shared/Footer/Footer";
const Main = () => {
    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster></Toaster>
        </>
    );
};

export default Main;