import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllInstructors = () => {
    const { data: allinstructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allinstructors'],
        queryFn: async() => {
            const res = await axios.get('https://assignment-12-server-gold.vercel.app/allinstructors');
            return res.data;
        }
    });
    return [allinstructors, loading, refetch];
};

export default useAllInstructors;