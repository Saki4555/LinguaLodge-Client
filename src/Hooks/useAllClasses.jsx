import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllClasses = () => {
    const { data: allclasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allclasses'],
        queryFn: async() => {
            const res = await axios.get('https://assignment-12-server-gold.vercel.app/allclasses');
            return res.data;
        }
    });
    return [allclasses, loading, refetch];
};

export default useAllClasses;