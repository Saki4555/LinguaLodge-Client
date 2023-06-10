import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useUsers = () => {
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/users');
            return res.data;
        }
    });
    return [users, loading, refetch];
};

export default useUsers;