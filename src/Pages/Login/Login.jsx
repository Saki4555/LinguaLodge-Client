import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="pt-20 font-kanit">
            <div className="w-full px-2 lg:p-0 lg:w-96 mx-auto border-4 rounded-lg">
                <form className="bg-white bg-opacity-75 shadow-lg">
                    <div className="px-8 pt-6 pb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                id="email"
                                type="email"
                                placeholder="Enter your email"

                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                id="password"
                                type="password"
                                placeholder="Enter your password"

                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-[#88d5d0] hover:bg-[#b9dbdb] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                    
                    <p className="ml-8 pb-7 pt-2">New Here? <Link to='/signup'><span className="text-yellow-600 hover:text-blue-950">Create an LiguaLodge account</span></Link></p>
                </form>
                
            </div>
        </div>
    );
};

export default Login;