
import { NavLink } from 'react-router-dom';

const StudentSideBar = () => {
    return (

            <>
                <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/dashboard/selectedclasses" className={({ isActive }) => (isActive ? 'text-white' : '')}>My Selected Classes</NavLink></li>

                <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : '')}>My Enrolled Classes</NavLink></li>
            </>

    );
};

export default StudentSideBar;