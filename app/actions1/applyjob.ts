"use server";

import { db } from "../lib/db";

export default async function applyJob(formData: FormData) {

  const firstname = formData.get("firstname")
    ?.toString()
    .trim();

  const lastname = formData.get("lastname")
    ?.toString()
    .trim();

  const email = formData.get("email")
    ?.toString()
    .trim()
    .toLowerCase();

  const jobtitle = formData.get("jobtitle")
    ?.toString()
    .trim();

  // CHECK USER EXISTS
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  console.log("EMAIL:", email);
  console.log("USER:", user);

  // IF USER NOT FOUND
  if (!user) {
    return {
      success: false,
      message: "Please fill registration form first",
    };
  }

  // SAVE APPLICATION
  await db.jobApplication.create({
    data: {
      firstname: firstname || "",
      lastname: lastname || "",
      email: email || "",
      jobtitle: jobtitle || "",
      userId: user.id,
    },
  });

  return {
    success: true,
    message: "Application submitted",
  };
}