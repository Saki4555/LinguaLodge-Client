import { NavLink } from 'react-router-dom';

const InstructorSideBar = () => {
    return (
        <>
            <li className="font-medium text-lg tracking-wider"><NavLink to="/dashboard/addclass" className={({ isActive }) => (isActive ? 'side-text underline decoration-2 underline-offset-4' : '')}>Add a Class</NavLink></li>

            <li className="font-medium text-lg tracking-wider"><NavLink to="/" className={({ isActive }) => (isActive ? 'side-text underline decoration-2 underline-offset-4' : '')}>My Classes</NavLink></li>
        </>
    );
};

export default InstructorSideBar;