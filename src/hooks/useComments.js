import { useQuery } from "react-query";

  const fetchComments = async (page, id) => {
    try {
      const response = await fetch(`/api/comment/list?page_size=${page * 5}&id=${id}`);
      const data = await response.json();
        return data
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }; 

const useComments = (page, id) => {
    return useQuery({
        queryKey: ['comments', page, id],
        queryFn: ()=>fetchComments(page, id),
        staleTime: 1000 * 60 * 5,
        keepPreviousData: true,
      });
  };

  export default useComments;