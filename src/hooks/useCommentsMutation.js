import { useMutation } from "react-query";

const updateComment = async (data) => {
  try {
    const response = await fetch(`/api/comment/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update Comment with id ${data.ticketId}`);
    }

    const updatedTicket = await response.json();
    return updatedTicket;
  } catch (error) {
    console.error("Error updating ticket:", error);
  }
};
const useCommentsMutation = () => {
  return useMutation({
    mutationFn: (data) => updateComment(data),
  });
};

export default useCommentsMutation;
