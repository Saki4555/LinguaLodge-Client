import { NavLink } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";
import { FaPlusSquare } from 'react-icons/fa';

const InstructorSideBar = () => {
    return (
        <>
            <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/dashboard/addclass" className={({ isActive }) => (isActive ? 'text-white': '')}><FaPlusSquare></FaPlusSquare> Add a Class</NavLink></li>

       
                
                <li className="font-medium text-lg tracking-wider side-text"><NavLink to="/dashboard/myclass" className={({ isActive }) => (isActive ? 'text-white' : '')}><SiGoogleclassroom></SiGoogleclassroom>My Classes</NavLink></li>

        </>
    );
};

export default InstructorSideBar;