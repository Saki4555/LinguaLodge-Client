import LazyLoad from "react-lazy-load";
import instructorImg from '../../assets/Home/instrcutor.jpg';
import Container from "../Shared/Container";
const Instructors = () => {
    return (
        <Container>
        <div className='pt-[76px] mb-6'>
        <LazyLoad>
            <img className='w-full h-[700px] object-center object-fill' src={instructorImg} alt="Instructor" />
        </LazyLoad>
    </div>
    </Container>
    );
};

export default Instructors;