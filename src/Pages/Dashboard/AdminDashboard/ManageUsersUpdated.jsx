import useUsers from "../../../Hooks/useUsers";
import { GridLoader } from "react-spinners";
import { FaChalkboardTeacher, FaUserAlt, FaUserCog } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useState } from "react";

const ManageUsersUpdated = () => {
    const [users, loading, refetch] = useUsers();
    const [disabledAdmins, setDisabledAdmins] = useState([]);
    const [disabledInstructors, setDisabledInstructors] = useState([]);

    if (loading) {
        return (
            <div className="ml-10 mt-16">
                <GridLoader color="#C2DEDC" />
            </div>
        );
    }

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/role/${user._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ role: "admin" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setDisabledAdmins((prevDisabledAdmins) => [
                        ...prevDisabledAdmins,
                        user._id,
                    ]);
                    refetch();
                    toast.success(`${user?.name} is now an admin`, {
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

    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/role/${user._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ role: "instructor" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setDisabledInstructors((prevDisabledInstructors) => [
                        ...prevDisabledInstructors,
                        user._id,
                    ]);
                    refetch();
                    toast.success(`${user?.name} is now an instructor`, {
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

    return (
        <div className="overflow-x-auto pl-10 pt-16 font-kanit">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user?.role === "admin" ? (
                                    <FaUserCog className="w-6 h-6" />
                                ) : user.role === "instructor" ? (
                                    <FaChalkboardTeacher className="w-6 h-6" />
                                ) : (
                                    <FaUserAlt className="w-5 h-5" />
                                )}
                            </td>
                            <td>
                                <button
                                    onClick={() => handleMakeInstructor(user)}
                                    disabled={disabledInstructors.includes(user._id)}
                                    className="btn btn-outline btn-sm mr-2 text-sm"
                                >
                                    Make Instructor
                                </button>
                                <button
                                    onClick={() => handleMakeAdmin(user)}
                                    disabled={disabledAdmins.includes(user._id)}
                                    className="btn btn-outline btn-primary btn-sm text-sm"
                                >
                                    Make Admin
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsersUpdated;
