import { getSharedData, setSharedData } from "@/app/lib/sharedStore";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { text, author, ticketId } = await request.json();

    const comments = getSharedData("comments");

    if (!text || !author || !ticketId) {
      return NextResponse.json(
        { error: "Missing required fields (text, author, ticketId)" },
        { status: 400 }
      );
    }

    const newComment = {
      id: comments.length + 1,
      content: text,
      name_of_sender: author,
      ticket_id: ticketId,
      created_at: new Date().toISOString(),
    };

    comments.push(newComment);

    setSharedData('comments', comments);

    return NextResponse.json(
      { message: "Comment added successfully", data: newComment },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}