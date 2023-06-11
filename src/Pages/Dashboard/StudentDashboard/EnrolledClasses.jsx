import useEnrolledClasses from "../../../Hooks/useEnrolledClasses";


const EnrolledClasses = () => {

    const [enrolledClasses] = useEnrolledClasses();
    console.log(enrolledClasses);

    return (
        <div className="overflow-x-auto pl-10 pt-16 font-kanit">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolledClasses.map((item, index) => <tr
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
                            <td className="text-[#090580]">
                                {item.name}
                            </td>
                            <td className="text-lime-700">
                                {item.price}
                            </td>
                           
                           
                        </tr>)
                    }


                </tbody>

            </table>
        </div>
    );
};

export default EnrolledClasses;