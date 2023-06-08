import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ClassCard = ({ item }) => {
    const { name, image, rating, instructor_name, seat, price } = item;
    console.log(instructor_name, name);
    return (
        <div className="w-full px-2 lg:p-0 lg:w-72 font-kanit hover:bg-[#eef3f2] hover:shadow-2xl overflow-hidden transition">
            <img src={image} alt="Course Image" className="w-full h-60" />
            <div className='border border-black'>
                <div className="px-6 pb-4 pt-6">
                    <p className="text-xl uppercase font-semibold">{name}</p>
                    <p className="text-gray-700">{instructor_name}</p>

                </div>
                <div className='flex gap-10 px-6 items-center'>
                    <div className='w-28'>
                        <Rating
                            value={rating}
                            readOnly
                        />
                    </div>
                    <p className='px-4 py-1 bg-[#C2DEDC] rounded-2xl font-semibold'>${price}</p>
                </div>
                <div className='px-6 pt-3'>
                    <p className='font-semibold tracking-wider'>Available seats: {seat}</p>
                </div>
                <div className="px-6 pt-8 pb-2">
                    <button className="bg-[#59aaa4] hover:bg-[#aacdcb] hover:text-gray-800 text-white tracking-wider font-bold py-2 px-4 rounded w-full transition">
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;