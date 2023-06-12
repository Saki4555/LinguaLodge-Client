import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Container from "../Pages/Shared/Container";
import { Toaster } from "react-hot-toast";
import useUserRole from "../Hooks/useUserRole";
import StudentSideBar from "../Pages/Dashboard/StudentDashboard/StudentSideBar";
import InstructorSideBar from "../Pages/Dashboard/InstructorDashboard/InstructorSideBar";
import useAuth from "../Hooks/useAuth";
import AdminSideBar from "../Pages/Dashboard/AdminDashboard/AdminSideBar";


const Dashboard = () => {


    const [loggedUser] = useUserRole();
    // console.log(loggedUser);

    const { user } = useAuth();

    const navigate = useNavigate();

    if( !user){
        return navigate('/');
    }

    return (
        <>

            <NavBar></NavBar>
            <Container>
                <div className="drawer lg:drawer-open font-kanit pt-[76px]">
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
                                            <AdminSideBar></AdminSideBar>
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