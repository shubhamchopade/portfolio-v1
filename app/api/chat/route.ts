export async function POST(request: Request) {
  const body = await request.json();
  const { sessionId, databaseId } = body;
  // const databaseId = request.headers.get("databaseId");
  // const sessionId = request.headers.get("sessionId");

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_SECRET}`,
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: sessionId,
              },
            },
          ],
        },
      },
    }),
  });
  const data = await res.json();
  return new Response(JSON.stringify(data));
}

export async function GET(request: Request) {
  const chatId = request.url.split("?block_id=").pop();

  const res = await fetch(
    `https://api.notion.com/v1/comments?block_id=${chatId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_SECRET}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );
  const data = await res.json();
  return new Response(JSON.stringify(data));
}
