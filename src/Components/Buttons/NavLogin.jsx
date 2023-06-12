import { Link } from "react-router-dom";


const NavLogin = () => {

    return (
        <Link to='/login'>
            <button
            type="button"
            className="py-2.5 shadow-sm px-5 mr-2 mb-2 text-base font-bold text-gray-900 focus:outline-none rounded-full border border-gray-200 bg-[#dfe8e8] hover:bg-[#C4DFDF] hover:text-[#F8F6F4] focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
            LogIn
        </button>
        </Link>
    );
};

export default NavLogin;