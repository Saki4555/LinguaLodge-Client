
import useClasses from '../../Hooks/useClasses';
import classgif from '../../assets/Gif/classes.gif';
import Container from '../Shared/Container';
import ClassCard from './ClassCard';

const Classes = () => {

    const [classes] = useClasses();
    // console.log(classes);
    return (
        <Container>
            <div className='pt-12 mb-6'>

                <img className='w-full object-cover object-center' src={classgif} alt="" />
            </div>


            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-9'>
                {
                    classes.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    >
                    </ClassCard>)
                }
            </div>


        </Container>



    );
};

export default Classes;