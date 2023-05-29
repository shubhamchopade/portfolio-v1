export async function POST(request: Request) {
  const body = await request.json();
  const { message, chatId } = body;
  const res = await fetch("https://api.notion.com/v1/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_SECRET}`,
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: {
        page_id: chatId,
      },
      rich_text: [
        {
          text: {
            content: message,
          },
        },
      ],
    }),
  });
  const data = await res.json();
  return new Response(JSON.stringify(data));
}
