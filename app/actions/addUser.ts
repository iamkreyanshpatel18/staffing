"use server";

import { db } from "../lib/db";
import { revalidatePath } from "next/cache";

export default  async function addUser(formData: FormData) {

  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const phonenumber = formData.get("phonenumber") as string;
  const skill = formData.get("skill") as string;
  const address = formData.get("address") as string;
  const experience = formData.get("experience") as string;
  const gender = formData.get("gender") as string;
 const resume = formData.get("resume") as File;
  await db.user.create({
    data: {
      firstname,
      lastname,
      email,
      phonenumber,
      skill,
      address,
      experience: Number(experience),
      gender,
      resume: resume.name,
    },
  });

 
  revalidatePath("/");
}