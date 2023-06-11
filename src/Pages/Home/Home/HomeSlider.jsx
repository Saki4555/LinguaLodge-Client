import { motion } from "framer-motion"

const HomeSlider = ({ img }) => {
    return (
        <div className="font-kanit">
            <div
                className="w-full h-[450px]  bg-cover bg-center flex justify-center items-center" style={{
                    backgroundImage: `url(${img})`,

                }}>
                <motion.div
                    initial={{ y: -300 }}
                    animate={{ y: 0}}
                    transition={{ type: 'spring', stiffness: 50}}
                    className="flex flex-col justify-center items-center">
                    <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
                        <span className="text-amber-500">KINDACODE.COM</span>
                    </h1>
                    <p className="mt-5 text-center text-lg text-white opacity-70">This webiste is about programming and things like
                        that</p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                        href="#">Get Started</motion.button>
                </motion.div>
            </div>


        </div>
    );
};

export default HomeSlider;