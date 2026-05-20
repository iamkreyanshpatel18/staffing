"use server";

import { db } from "../lib/db";

export async function applyJob(formData: FormData) {

    try {

        const firstname = formData.get("firstname") as string;
        const lastname = formData.get("lastname") as string;
        const email = formData.get("email") as string;
        const jobtitle = formData.get("jobtitle") as string;

        const user = await db.user.findUnique({
            where: {
                email,
            },
        });

        // USER NOT FOUND
        if (!user) {
            return {
                success: false,
                message: "Please fill registration form first",
            };
        }

        // SAVE APPLICATION
        await db.jobApplication.create({
            data: {
                firstname,
                lastname,
                email,
                jobtitle,
                userId: user.id,
            },
        });

        return {
            success: true,
            message: "Application submitted successfully",
        };

    } catch (error) {

        console.log(error);

        return {
            success: false,
            message: "Something went wrong",
        };
    }
}