
import LazyLoad from 'react-lazy-load';
import { Link, useRouteError } from 'react-router-dom';
import errorgif from '../assets/Home/error.gif';
import { motion } from 'framer-motion';
const ErrorElement = () => {
    const { error, status } = useRouteError();
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex gap-10 items-center justify-center px-5 mx-auto my-8'>
                <div>
                    <LazyLoad>
                        <img className='w-[600px] h-[600px] object-cover object-center' src={errorgif} alt="error" />
                    </LazyLoad>
                </div>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-8xl text-yellow-500'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/'>
                    <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-[#88d5d0] hover:bg-[#b9dbdb] text-gray-800 font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Back to Homepage
                            </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorElement;