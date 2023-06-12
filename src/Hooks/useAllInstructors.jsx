import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllInstructors = () => {
    const { data: allinstructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allinstructors'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/allinstructors');
            return res.data;
        }
    });
    return [allinstructors, loading, refetch];
};

export default useAllInstructors;