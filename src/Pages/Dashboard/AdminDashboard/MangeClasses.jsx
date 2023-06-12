import useAllClasses from "../../../Hooks/useAllClasses";
import { GridLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";


const MangeClasses = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [allclasses, loading, refetch] = useAllClasses();
    // console.log(allclasses);
    const [disableButtons, setDisabledButtons] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClassId, setSelectedClassId] = useState("");
    const [selectedClass, setSelectedClass] = useState("");

    if (loading) {
        return (
            <div className="ml-10 mt-16">
                <GridLoader color="#C2DEDC" />
            </div>
        );
    }


    const openModal = (classId, className) => {
        setIsModalOpen(true);
        setSelectedClassId(classId);
        setSelectedClass(className)

    };
    const closeModal = () => {
        setSelectedClassId("");
        setSelectedClass("");
        setIsModalOpen(false);
        reset();

    };



    const handleStatus = (item, roleToUpdate) => {
        // console.log(item._id);
        fetch(`http://localhost:5000/classes/status/${item._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: roleToUpdate })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setDisabledButtons((prevDisabledButtons) => [
                        ...prevDisabledButtons,
                        item._id,
                    ]);
                    refetch();
                    toast.success(`${item?.name} is ${roleToUpdate}`, {
                        duration: 1500,
                        position: "top-right",
                        style: {
                            background: "#E3F4F4",
                            fontWeight: "700",
                        },
                    });
                }
            });
    };

    const onSubmit = data => {
        console.log(data);
        setIsModalOpen(false);
        fetch(`http://localhost:5000/classes/feedback/${data.classId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ feedback: data.feedback })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   
                    // refetch();
                    reset();
                    toast.success(`Feedback sent successfully for ${selectedClass} class`, {
                        duration: 3000,
                        position: "top-right",
                        style: {
                            background: "#E3F4F4",
                            fontWeight: "700",
                        },
                    });
                }
            });

    };

    return (
        <div className="overflow-x-auto pl-7 pt-16 font-kanit">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Send Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allclasses.map((item, index) => <tr
                            key={item._id}
                        >
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.instructor_name}
                            </td>
                            <td>
                                {item.instructor_email}
                            </td>
                            <td className="text-center">
                                {item.seat}
                            </td>
                            <td>
                                {
                                    item.status === "Approved" ? <p className="text-[#00b894]">{item.status}</p>
                                        : item.status === "Pending" ? <div className="flex items-center gap-1"><span className="text-[#999999]">{item.status}</span><span className="loading loading-dots loading-xs"></span></div>
                                            : <p className="text-red-600">{item.status}</p>

                                }
                            </td>
                            <td>
                                <div className="flex flex-col gap-2">
                                    <button onClick={() => handleStatus(item, "Approved")}
                                        disabled={disableButtons.includes(item._id)} className="btn btn-outline btn-success btn-xs">approve</button>

                                    <button onClick={() => handleStatus(item, "Denied")}
                                        disabled={disableButtons.includes(item._id)}
                                        className="btn btn-outline btn-error btn-xs">deny</button>
                                </div>
                            </td>
                            <td className="text-center">

                                <button onClick={()=> openModal(item._id, item.name)} className="btn btn-outline btn-info text-xs">Send Feedback</button>
                                {isModalOpen && (
                                    <div className="modal modal-open">
                                        <div method="dialog" className="modal-box ">
                                            {/* form submit */}
                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                <span className="text-lg font-semibold pb-2">{selectedClass}</span><br />
                                                <textarea {...register('feedback', { required: true })}
                                                    className="textarea textarea-info w-11/12 mb-2" placeholder="Feedback"></textarea>
                                                <br />
                                                {errors.feedback && <span className="text-red-500">Can not send empty feedback</span>}
                                                <br />

                                                <input
                                                    {...register('classId')}
                                                    type="text"
                                                    placeholder="Type here"
                                                    className="input input-bordered input-info w-full max-w-xs hidden"
                                                    defaultValue={selectedClassId} 
                                                /> <br />


                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="bg-[#88d5d0] hover:bg-[#b9dbdb] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    type="submit"
                                                >
                                                    Send
                                                </motion.button>
                                            </form>

                                            <div className="modal-action">
                                                <button className="btn" onClick={closeModal}>Cancel</button>
                                            </div>
                                        </div>

                                    </div>
                                )}

                            </td>
                        </tr>)
                    }


                </tbody>

            </table>
        </div>
    );
};

export default MangeClasses;