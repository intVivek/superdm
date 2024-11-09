import { getSharedData, setSharedData } from "@/app/lib/sharedStore";
import { NextResponse } from "next/server";


  export async function PATCH(req, { params }) {
    try {
      const { id } = params;

      const tickets = getSharedData('tickets');

      const ticketIndex = tickets.findIndex(ticket => ticket.id === id);
  
      if (ticketIndex === -1) {
        return NextResponse.json({ error: `Ticket with id ${id} not found` }, { status: 404 });
      }
      const requestBody = await req.json() 
      if (!requestBody) {
        return NextResponse.json({ error: 'Request body is empty' }, { status: 400 });
      }
  
      let updatedData;
      try {
        updatedData = requestBody; 
      } catch (err) {
        return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
      }
  
      const updatedTicket = { ...tickets[ticketIndex], ...updatedData };
      tickets[ticketIndex] = updatedTicket;

      setSharedData('tickets', tickets);
  
      return NextResponse.json(updatedTicket);
    } catch (error) {
      console.error("Error updating ticket:", error);
      return NextResponse.json({ error: 'Failed to update ticket' }, { status: 500 });
    }
  }
  