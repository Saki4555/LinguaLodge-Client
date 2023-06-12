import LazyLoad from "react-lazy-load";
import instructorImg from '../../assets/Home/instrcutor.jpg';
import Container from "../Shared/Container";
import useAllInstructors from "../../Hooks/useAllInstructors";
import InstructorCard from "./InstructorCard";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";
const Instructors = () => {
    const [allinstructors] = useAllInstructors();
    // console.log(allinstructors);

    const { theme } = useContext(ThemeContext);
    console.log(theme);

    return (
        <div data-theme={theme}>
            <Container>
                <div className='pt-[76px] mb-6'>
                    <LazyLoad>
                        <img className='w-full h-[700px] object-center object-fill' src={instructorImg} alt="Instructor" />
                    </LazyLoad>
                </div>
                <div className="font-kanit mt-20 mb-14">
                    <h2 className="text-4xl text-center">Our Instructors</h2>
                </div>
                <div className="grid lg:grid-cols-4 gap-14 font-kanit pb-20">
                    {
                        allinstructors.map(item => <InstructorCard
                            key={item._id}
                            item={item}
                        >
                        </InstructorCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Instructors;