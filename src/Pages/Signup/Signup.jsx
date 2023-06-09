import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-hot-toast";
import SocailLogin from "../Shared/SocailLogin/SocailLogin";
// import axios from 'axios';


const Signup = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(() => {

                // const user = result.user;
                // console.log(user);
                updateUserProfile(data.name, data.PhotoUrl)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email };
                        // axios.post('http://localhost:5000/users', {
                        //     savedUser
                        // })
                        //     .then(res => {
                        //         console.log(res.data);
                        //         if (res.data.insertedId) {
                        //             reset();
                        //             toast.success('Singed up successfully', {
                        //                 duration: 3000,
                        //                 style: {
                        //                     background: '#E3F4F4',
                        //                     fontWeight: '700'
                        //                 },
                        //             });
                        //             navigate('/');
                        //         }
                        //     })

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId)
                                    reset();
                                    toast.success('Singed up successfully', {
                                        duration: 1500,
                                        style: {
                                            background: '#E3F4F4',
                                            fontWeight: '700'
                                        },
                                    });
                                    navigate('/');
                            })


                        
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const validatePassword = (value) => {
        const password = watch("password"); // Get the value of the password field
        if (value !== password) {
            return "Password do not match";
        }
        return true;
    };
    const showPassword = () => {
        setVisible((preState) => !preState)
    }

    return (
        <div className="pt-20 font-kanit">
            <div className="w-full px-2 lg:p-0 lg:w-96 mx-auto border-4 rounded-lg">

                <SocailLogin></SocailLogin>
                <div className="divider px-3">OR</div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-75 shadow-lg">
                    <div className="px-8 pt-6 pb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Name
                            </label>
                            <input
                                {...register('name', { required: true })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                id="name"
                                type="text"
                                placeholder="Enter your Name"

                            />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input {...register('email', { required: true })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                id="email"
                                type="email"
                                placeholder="Enter your email"

                            />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        {/* passoword field */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="flex">
                                <input
                                    {...register('password',
                                        {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\])/

                                        }
                                    )}

                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                    id="password"
                                    type={visible ? "text" : "password"}
                                    placeholder="Enter your password"

                                />
                                <div onClick={showPassword} type="button" className="flex items-center">

                                    {
                                        visible ? <FaEyeSlash className="-ml-7 w-6 h-6 text-gray-500"></FaEyeSlash> : <FaEye className="-ml-7 w-6 h-6 text-gray-500"></FaEye>
                                    }
                                </div>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-500">Password is requied</p>}
                            {
                                errors.password?.type === 'minLength' && <p className="text-red-500">Password should be minimum six length</p>
                            }

                            {
                                errors.password?.type === 'pattern' && <p className="text-red-500">Password should contain one Uppercase letter and one special character</p>
                            }
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Confirm Password
                            </label>
                            <input
                                {...register('confirm', {
                                    required: true,
                                    validate: validatePassword
                                })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                id="confirm"
                                type="password"
                                placeholder="Confirm your password"

                            />
                            {errors.confirm && <span className="text-red-500">Password do not match</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Photo URL
                            </label>
                            <input
                                {...register('PhotoUrl', { required: true })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                id="photo"
                                type="text"
                                placeholder="Enter Photo URL"

                            />
                            {errors.PhotoUrl && <span className="text-red-500">PhotoURL is required</span>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-[#88d5d0] hover:bg-[#b9dbdb] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                    <p className="ml-8 pb-7 pt-2">Already have and account? <Link to='/login'><span className="text-yellow-600 hover:text-blue-950">Login</span></Link></p>
                </form>

            </div>
        </div>
    );
};

export default Signup;