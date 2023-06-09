import { useForm } from "react-hook-form";
import useUserRole from "../../../Hooks/useUserRole";


const AddClass = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loggedUser] = useUserRole();

    const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?&key=${image_hosting_token}`;

    // console.log(loggedUser);
    // console.log(image_hosting_url);
  

    const onSubmit = data => {
        // console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageResponse => {
            // console.log(imageResponse)
           if(imageResponse.success){
            const imgURL = imageResponse.data.display_url;
            // console.log(imgURL);

            const { name, price,seat } = data;
            const newclass = { name, price: parseFloat(price), instructor_name: loggedUser?.name, instructor_email: loggedUser?.email, image: imgURL, seat,enrolled_student:0, status:"Pending", rating: 4 };
            
            // console.log(newclass);

            // axiosSecure.post('/menu', newItem)
            // .then(data => {
            //     console.log('after inserting new item', data.data);
            //     if(data.data.insertedId){
            //         reset();
            //         Swal.fire({
            //             position: 'top-end',
            //             icon: 'success',
            //             title: 'Item added successfully',
            //             showConfirmButton: false,
            //             timer: 1500
            //           })
            //     }
            // })
           }
        })

    };


    return (
        <div className="px-8 pt-14 font-kanit">
            <div className="border-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-75 shadow-lg">

                    <div className="px-8 pt-6 pb-4 mb-2">

                        <div className="flex items-center gap-4">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    {...register('name', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="text"
                                    placeholder="Enter class Name"
                                />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>

                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Image
                                </label>
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                                {errors.image && <span className="text-red-500">Image is required</span>}
                            </div>
                        </div>

                        <div className="flex gap-4 mb-2">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iname">
                                   Instructor Name
                                </label>
                                <input
                                    // {...register('instructor_name')}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="text"
                                    defaultValue={loggedUser?.name}
                                    // readOnly
                                    disabled
                                />
                               
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iemail">
                                    Instructor Email
                                </label>
                                <input 
                                // {...register('instructor_email')}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="email"
                                    defaultValue={loggedUser?.email}
                                    // readOnly
                                    disabled

                                />
                               
                            </div>
                        </div>

                        <div className="flex gap-4 mb-2">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seat">
                                  Available Seats
                                </label>
                                <input
                                    {...register('seat', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="text"
                                 
                                />
                                {errors.seat && <span className="text-red-500">Required</span>}
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iemail">
                                   Price
                                </label>
                                <input {...register('price', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="number"

                                />
                                {errors.price && <span className="text-red-500">Required</span>}
                            </div>
                        </div>

                        {/* <input type="number" {...register('rating')} className="border hidden" defaultValue={5} readOnly/> */}


                        {/* add button */}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-[#88d5d0] hover:bg-[#b9dbdb] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default AddClass;