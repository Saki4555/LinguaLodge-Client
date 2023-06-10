
import { GridLoader } from "react-spinners";
import useInstructorClasses from "../../../Hooks/useInstructorClasses";

const MyClass = () => {

    const [instructorClasses, loading] = useInstructorClasses();
    // console.log(instructorClasses);

    if (loading) {
        return <div className="ml-10 mt-16">

           <GridLoader
                color="#C2DEDC"
            ></GridLoader>

        </div>
    }
    return (
        <div className="overflow-x-auto pl-5 pt-12 font-kanit">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Status</th>
                        <th>Total Enrolled</th>
                        <th>Action</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instructorClasses.map((item, index) => <tr
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
                                {
                                    item.status === "Approved" ? <p className="text-[#00b894]">{item.status}</p>
                                        : item.status === "Pending" ? <div className="flex items-center gap-1"><span className="text-[#999999]">{item.status}</span><span className="loading loading-dots loading-xs"></span></div>
                                            : <p className="text-red-600">{item.status}</p>

                                }
                            </td>
                            <td className="text-center">
                                {item.enrolled_student}
                            </td>
                            <td>
                                <button className="btn btn-outline btn-primary btn-xs">update</button>
                            </td>
                            <td>
                                {
                                    item?.feedback ? item?.feedback : <p>-------</p>
                                }
                            </td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyClass;