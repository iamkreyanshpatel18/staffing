import { db } from "@/app/lib/db";

export async function GET(){
    const jobdata=await db.jobApplication.findMany()
    return Response.json(jobdata)
}