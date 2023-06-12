import useClasses from "../../../Hooks/useClasses";
import PopularClassCard from "./PopularClassCard";


const Popularclasses = () => {

    const [classes] = useClasses();

    return (
        <>
        <div className="font-kanit mt-20 mb-14">
            <h2 className="text-4xl text-center">Popular Classes</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-7 font-kanit pb-10">
            {
                classes.slice(0, 6).map(item => <PopularClassCard
                    key={item._id}
                    item={item}
                >
                </PopularClassCard>)
            }
        </div>
        </>
    );
};

export default Popularclasses;