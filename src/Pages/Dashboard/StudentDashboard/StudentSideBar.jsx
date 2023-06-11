import { FaCheckSquare, FaHistory, FaStripe } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const StudentSideBar = () => {
    return (

            <>
                <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/dashboard/selectedclasses" className={({ isActive }) => (isActive ? 'text-white' : '')}><FaCheckSquare></FaCheckSquare> My Selected Classes</NavLink></li>

                <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : '')}><FaStripe className="border border-teal-200 w-10"></FaStripe> My Enrolled Classes</NavLink></li>

                <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/dashboard/payhistroy" className={({ isActive }) => (isActive ? 'text-white' : '')}><FaHistory></FaHistory> Payment History</NavLink></li>
            </>

    );
};

export default StudentSideBar;