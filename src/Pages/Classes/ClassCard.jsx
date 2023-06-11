import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import useUserRole from '../../Hooks/useUserRole';
import LazyLoad from 'react-lazy-load';



const ClassCard = ({ item, }) => {

    const { name, image, rating, instructor_name, seat, price, _id } = item;
    //  console.log(item.status);

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const [loggedUser] = useUserRole();

    const isDisable = loggedUser?.role === "admin" || loggedUser?.role === "instructor" || seat === 0;

    // console.log(isDisable);

    const handleSelectedClass = () => {
        if (user && user.email) {
            const selectedClasees = {
                selectedClassId: _id,
                name, image, price, email: user.email,
            }
            fetch('http://localhost:5000/selected', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClasees),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch();
                        // Swal.fire({
                        //     position: 'top-end',
                        //     icon: 'success',
                        //     title: 'Selected Successfully',
                        //     showConfirmButton: false,
                        //     timer: 1500
                        // })

                        toast.success('Selected successfully', {
                            duration: 1500,
                            style: {
                                background: '#E3F4F4',
                                fontWeight: '700'
                            },
                        });
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {
                        state: {
                            from: location
                        }
                    })
                }
            })
        }

    }

    return (
        <div className="w-full px-2 lg:p-0 lg:w-[275px] font-kanit hover:bg-[#eef3f2] hover:shadow-2xl overflow-hidden transition">
            <LazyLoad>
                <img src={image} alt="Course Image" className="w-full h-60 object-cover object-center" />
            </LazyLoad>
            <div className='border border-black'>
                <div className="px-6 pb-4 pt-6">
                    <p className="text-lg uppercase font-semibold">{name}</p>
                    <p className="text-gray-700">{instructor_name}</p>

                </div>
                <div className='flex gap-10 px-6 items-center'>
                    <div className='w-28'>
                        <Rating
                            value={rating}
                            readOnly
                        />
                    </div>
                    <p className='px-4 py-1 bg-[#C2DEDC] rounded-2xl font-semibold'>${price}</p>
                </div>
                <div className='px-6 pt-3'>
                    <p className='font-semibold tracking-wider'>Available seats: {seat}</p>
                </div>
                <div className="px-6 pt-8 pb-2">
                    {
                        !isDisable && <button onClick={() => handleSelectedClass(item)} className="bg-[#59aaa4] hover:bg-[#aacdcb] hover:text-gray-800 text-white tracking-wider font-bold py-2 px-4 rounded w-full transition" disabled={isDisable} >
                            Select
                        </button>
                    }

                    {isDisable &&
                        <button className="btn tracking-wider font-bold py-2 px-4 rounded w-full" disabled={isDisable} >
                            Select
                        </button>
                    }
                </div>

            </div>
        </div>
    );
};

export default ClassCard;