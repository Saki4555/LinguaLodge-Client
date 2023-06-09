import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Container from "../Pages/Shared/Container";
import { Toaster } from "react-hot-toast";
import useUserRole from "../Hooks/useUserRole";
import StudentSideBar from "../Pages/Dashboard/StudentDashboard/StudentSideBar";
import InstructorSideBar from "../Pages/Dashboard/InstructorDashboard/InstructorSideBar";


const Dashboard = () => {


    const [loggedUser] = useUserRole();
    // console.log(loggedUser);

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
                                loggedUser?.role === 'instructor' ?
                                    <InstructorSideBar></InstructorSideBar>
                                    : loggedUser?.role === 'admin' ?
                                        <>
                                            <li>admin</li>
                                        </>
                                        :
                                        <StudentSideBar></StudentSideBar>
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