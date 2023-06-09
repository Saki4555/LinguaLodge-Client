import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useUserRole = () => {

    const { user } = useAuth();

    const { data: loggedUser = {}, isLoading: loading, refetch } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/role/${user?.email}`);
            return res.data;
        }
    });
    // console.log(loggedUser);
    return [loggedUser, loading, refetch];
};

export default useUserRole;