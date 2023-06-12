import LazyLoad from "react-lazy-load";


const PopularClassCard = ({ item }) => {

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <LazyLoad>
          <img src={item.image} alt="class" className="w-96 h-64 object-cover object-center" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{item.name}</h2>
      </div>
    </div>
  );
};

export default PopularClassCard;