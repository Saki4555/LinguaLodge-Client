

const HomeSlider = ({img}) => {
    return (
            <div className="font-kanit">
                <div
                    className="w-full h-[450px]  bg-cover bg-center flex justify-center items-center" style={{
                        backgroundImage: `url(${img})`,
                        
                      }}>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
                            <span className="text-amber-500">KINDACODE.COM</span>
                        </h1>
                        <p className="mt-5 text-center text-lg text-white opacity-70">This webiste is about programming and things like
                            that</p>
                        <a className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                            href="#">Get Started</a>
                    </div>
                </div>
                <div className="p-20 bg-[#C2DEDC]">
                    <h1 className="text-4xl">Other Content</h1>
                </div>
                
            </div>
    );
};

export default HomeSlider;