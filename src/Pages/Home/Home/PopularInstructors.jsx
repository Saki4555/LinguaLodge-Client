import useAllInstructors from "../../../Hooks/useAllInstructors";

import PopularInstructorCard from "./PopularInstructorCard";


const PopularInstructors = () => {
    const [allinstructors] = useAllInstructors();
    return (
        <>
            <div className="font-kanit mt-20 mb-14">
                <h2 className="text-4xl text-center">Popular Instructors</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-7 font-kanit pb-16">
                {
                    allinstructors.slice(0, 6).map(item => <PopularInstructorCard
                    key={item._id}
                    item={item}
                    >

                    </PopularInstructorCard>)
                }
            </div>
        </>
    );
};

export default PopularInstructors;