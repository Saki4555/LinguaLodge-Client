import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useSelectedClasses = () => {

    const { data: selected = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['selected'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/selected');
            return res.data;
        }
    });
    return [selected, loading, refetch];
};

export default useSelectedClasses;