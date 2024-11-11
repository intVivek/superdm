import { useQuery } from "react-query";
import { useDebounceValue } from "usehooks-ts";

const fetchTickets = async ({ page, selectedTab, priority }) => {

  try {
    const response = await fetch(`/api/ticket?pageSize=${page * 5}&status=${selectedTab}&priority=${priority}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
  }
};

const useTickets = (filters) => {
  const [debouncedFilters] = useDebounceValue(filters, 100); 

  return useQuery(
    ['tickets', debouncedFilters], 
    () => fetchTickets(debouncedFilters),
    {
      keepPreviousData: true, 
    }
  );
};

export default useTickets;