import { Link } from "react-router-dom";


const NavLogin = ( {navColorChange} ) => {
    return (
        <Link to='/login'>
            <button
            type="button"
            className={`py-2.5 shadow-sm px-5 mr-2 mb-2 text-base font-bold text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:text-[#F8F6F4] focus:z-10 focus:ring-4 focus:ring-gray-200 ${navColorChange ? "bg-[#9ed3d3] hover:bg-[#bbdede]" : "bg-[#dfe8e8] hover:bg-[#C4DFDF]"}`}
        >
            LogIn
        </button>
        </Link>
    );
};

export default NavLogin;