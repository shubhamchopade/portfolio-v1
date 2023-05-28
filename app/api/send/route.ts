export async function POST(request: Request) {
  const body = await request.json();
  const content = body.content;
  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_SECRET}`,
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content,
              },
            },
          ],
        },
      },
    }),
  });
  const data = await res.json();
  return new Response(data);
}
