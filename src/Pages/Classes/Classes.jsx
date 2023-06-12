
import LazyLoad from 'react-lazy-load';
import useClasses from '../../Hooks/useClasses';

import classgif from '../../assets/Gif/classes.gif';
import Container from '../Shared/Container';
import ClassCard from './ClassCard';

const Classes = () => {

    const [classes] = useClasses();
    // console.log(classes);


    return (
        <Container>
            <div className='pt-[75px] mb-6'>
                <LazyLoad>
                    <img className='w-full object-cover object-center' src={classgif} alt="" />
                </LazyLoad>

            </div>

            <div className="font-kanit mt-20 mb-14">
                <h2 className="text-4xl text-center">Our Classes</h2>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-9 pb-16'>
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