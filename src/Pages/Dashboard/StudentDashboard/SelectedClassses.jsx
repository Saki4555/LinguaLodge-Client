import { FaTrashAlt } from "react-icons/fa";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { GridLoader } from "react-spinners";
import { Link } from "react-router-dom";

const SelectedClassses = () => {

    const [selected, loading, refetch] = useSelectedClasses();
    // console.log(selected);

    if (loading) {
        return <div className="ml-10 mt-16">

            <GridLoader
                color="#C2DEDC"
            ></GridLoader>

        </div>
    }

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/selected/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch()
                            // Swal.fire(
                            //     'Deleted!',
                            //     'Your file has been deleted.',
                            //     'success'
                            // )

                            toast.success('Deleted successfully', {
                                duration: 1500,
                                style: {
                                    background: '#E3F4F4',
                                    fontWeight: '700'
                                },
                            });
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto pl-10 pt-16 font-kanit">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Price</th>
                        <th>Action</th>

                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selected.map((item, index) => <tr
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
                                {item.price}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-error btn-sm bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                            <th>
                                <Link to={`/dashboard/pay?price=${item.price}&id=${item._id}&selectedClassId=${item.selectedClassId}`}>
                                    <button className="btn btn-warning btn-sm">Pay</button>
                                </Link>

                            </th>
                        </tr>)
                    }


                </tbody>

            </table>
        </div>
    );
};

export default SelectedClassses;