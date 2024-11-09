import { useMutation } from "react-query";

const updateTicket = async ({id, data}) => {
  try {
    const response = await fetch(`/api/ticket/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update ticket with id ${id}`);
    }

    const updatedTicket = await response.json();
    return updatedTicket;
  } catch (error) {
    console.error("Error updating ticket:", error);
  }
};
const useTicketsMutation = () => {
  return useMutation({
    mutationFn: ({id, data}) => updateTicket({id, data}),
  });
};

export default useTicketsMutation;
