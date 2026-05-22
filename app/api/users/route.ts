import { db } from "@/app/lib/db";

export async function GET() {
  const users = await db.user.findMany();

  return Response.json(users);
}