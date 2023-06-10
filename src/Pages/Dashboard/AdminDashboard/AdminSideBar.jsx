import { NavLink } from "react-router-dom";

const AdminSideBar = () => {
    return (
        <>
            <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/dashboard/manageclasses" className={({ isActive }) => (isActive ? 'text-white' : '')}>Manage Classes</NavLink></li>

            <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/dashboard/manageusers" className={({ isActive }) => (isActive ? 'text-white' : '')}>Manage Users</NavLink></li>
        </>
    );
};

export default AdminSideBar;