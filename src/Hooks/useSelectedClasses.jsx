import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useSelectedClasses = () => {

    const { user } = useAuth();

        const { data: selected = [], isLoading: loading, refetch } = useQuery({
            queryKey: ['selected', user?.email],
            queryFn: async () => {
                const res = await axios.get(`https://assignment-12-server-gold.vercel.app/selected/${user?.email}`);
                return res.data;
            }
        });
        return [selected, loading, refetch];
    };

export default useSelectedClasses;