import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar/NavBar";
import { Toaster, toast } from 'react-hot-toast';
const Main = () => {
    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Toaster></Toaster>
        </>
    );
};

export default Main;