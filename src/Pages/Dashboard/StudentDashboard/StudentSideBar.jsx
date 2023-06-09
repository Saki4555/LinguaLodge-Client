
import { NavLink } from 'react-router-dom';

const StudentSideBar = () => {
    return (

            <>
                <li className="font-medium text-lg tracking-wider"><NavLink to="/dashboard/selectedclasses" className={({ isActive }) => (isActive ? 'side-text' : '')}>My Selected Classes</NavLink></li>

                <li className="font-medium text-lg tracking-wider"><NavLink to="/" className={({ isActive }) => (isActive ? 'side-text' : '')}>My Enrolled Classes</NavLink></li>
            </>

    );
};

export default StudentSideBar;