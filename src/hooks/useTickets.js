import { useQuery } from "react-query";

  const fetchTickets = async (page, selectedTab) => {
    try {
      const response = await fetch(`/api/ticket?pageSize=${page * 5}&status=${selectedTab}`);
      const data = await response.json();
        return data
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  }; 

const useTickets = (page, selectedTab) => {
    return useQuery({
        queryKey: ['tickets', page, selectedTab],
        queryFn: ()=>fetchTickets(page, selectedTab),
        staleTime: 1000 * 60 * 5,
        keepPreviousData: true,
      });
  };

  export default useTickets;