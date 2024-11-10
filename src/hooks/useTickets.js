import { useQuery } from "react-query";

  const fetchTickets = async ({page, selectedTab, priority}) => {
    console.log({page, selectedTab, priority})
    
    try {
      const response = await fetch(`/api/ticket?pageSize=${page * 5}&status=${selectedTab}&priority=${priority}`);
      const data = await response.json();
        return data
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  }; 

const useTickets = (filters) => {
    return useQuery({
        queryKey: ['tickets', filters],
        queryFn: ()=>fetchTickets(filters),
        keepPreviousData: true,
      });
  };

  export default useTickets;