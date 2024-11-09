import { getSharedData } from "@/app/lib/sharedStore";
import { NextResponse } from "next/server";

export async function GET(request) {

  const tickets = getSharedData("tickets");
  try {
    const { searchParams } = new URL(request.url);

    const page = searchParams.get("page") || "1";
    const pageSize = searchParams.get("pageSize") || "5";
    const priority = searchParams.get("priority");
    const status = searchParams.get("status");
    const labels = searchParams.get("labels");

    const pageInt = parseInt(page, 10);
    const pageSizeInt = parseInt(pageSize, 10);

    // Validate page and pageSize
    if (isNaN(pageInt) || isNaN(pageSizeInt)) {
      return NextResponse.json(
        { error: "Invalid pagination values" },
        { status: 400 }
      );
    }

    let filteredTickets = tickets;

    // Apply filters
    if (priority) {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.priority === priority
      );
    }

    if (status) {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.status === status
      );
    }

    if (labels) {
      const labelArray = labels.split(",");
      filteredTickets = filteredTickets.filter((ticket) =>
        labelArray.every((label) => ticket.labels.includes(label))
      );
    }

    const total = filteredTickets.length;

    // Paginate the filtered tickets
    const startIdx = (pageInt - 1) * pageSizeInt;
    const paginatedTickets = filteredTickets.slice(
      startIdx,
      startIdx + pageSizeInt
    );

    // Check if the current page is the last page
    const isLast = startIdx + pageSizeInt >= total;

    return NextResponse.json({
      data: paginatedTickets,
      meta: {
        isLast,
        total,
      },
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
