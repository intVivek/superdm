import { getSharedData } from "@/app/lib/sharedStore";
import { NextResponse } from "next/server";

const paginateComments = (comments, page, pageSize) => {
  const sortedComments = comments.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA - dateB;  
  });

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return sortedComments.slice(start, end);
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request) {
  await delay(1000)
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = parseInt(url.searchParams.get('page_size') || '10');

  const comments = getSharedData("comments");

  const paginatedComments = paginateComments(comments, page, pageSize);

  const hasNextPage = page * pageSize < comments.length;

  return NextResponse.json({
    comments: paginatedComments,
    cursor: {
      last_message_id: paginatedComments.length > 0 ? paginatedComments[paginatedComments.length - 1].id : null,
      page_size: pageSize,
      has_next_message: hasNextPage,
    },
  });
}