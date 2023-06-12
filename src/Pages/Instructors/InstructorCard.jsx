import LazyLoad from "react-lazy-load";


const InstructorCard = ({ item }) => {
    return (
        <div className="flex flex-col items-center border space-y-6 bg-[#eef7f7]">
            <div className="pt-10">
                <LazyLoad>
                    <img src={item.image} className="w-36 h-36 rounded-full object-cover object-center" alt="" />
                </LazyLoad>
            </div>
            <div>
                <h3 className="text-lg  uppercase">{item.name}</h3>
                <p className="text-sm">{item.email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;