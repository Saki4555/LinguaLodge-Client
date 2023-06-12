import LazyLoad from "react-lazy-load";


const PopularInstructorCard = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-xl border-4 border-[#E3F4F4]">
      <figure className="px-10 pt-10">
        <LazyLoad>
          <img src={item.image} alt="instructor" className="rounded-xl w-[305px] h-[250px] object-cover object-center border-8 border-[#E3F4F4]" />
        </LazyLoad>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.name}</h2>

      </div>
    </div>
  );
};

export default PopularInstructorCard;