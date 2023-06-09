import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Container from "../Pages/Shared/Container";
import { Toaster } from "react-hot-toast";
import useAuth from "../Hooks/useAuth";


const Dashboard = () => {

    const { user } = useAuth();

    console.log(user?.role);

    return (
        <>

            <NavBar></NavBar>
            <Container>
                <div className="drawer lg:drawer-open font-kanit pt-24">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content bg-[#F9F9F9]">
                        {/* Page content here */}

                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-[#374259] text-white">
                            {/* Sidebar content here */}

                            {
                                user?.role == 'instructor' ?
                                    <>
                                        <li>instructor</li>
                                    </>
                                    : user?.role == 'admin' ?
                                        <>
                                            <li>admin</li>
                                        </>
                                        :
                                        <>
                                            <li className="font-medium text-lg tracking-wider"><NavLink to="/dashboard/selectedclasses" className={({ isActive }) => (isActive ? 'side-text' : '')}>My Selected Classes</NavLink></li>

                                            <li className="font-medium text-lg tracking-wider"><NavLink to="/" className={({ isActive }) => (isActive ? 'side-text' : '')}>My Enrolled Classes</NavLink></li>
                                        </>
                            }




                        </ul>

                    </div>
                </div>
            </Container>
            <Toaster></Toaster>
        </>
    );
};

export default Dashboard;