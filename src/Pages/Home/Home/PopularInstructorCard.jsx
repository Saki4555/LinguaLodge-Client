

const PopularInstructorCard = ({ item }) => {
    return (
        <div className="card bg-base-100 shadow-xl border-2 border-[#c6d4d4]">
            <figure className="px-10 pt-10">
                <img src={item?.image} alt="instuctor" className="rounded-xl w-full h-64 object-cover object-center border-8 border-[#c6d4d4]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item?.name}</h2>
            </div>
        </div>
    );
};

export default PopularInstructorCard;