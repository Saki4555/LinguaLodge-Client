import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {

    const [users] = useUsers();
    console.log(users);

    return (
        <div>
            users
        </div>
    );
};

export default ManageUsers;