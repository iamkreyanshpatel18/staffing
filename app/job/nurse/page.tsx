"use client"
import { useState } from "react";
import toast from "react-hot-toast";
import  applyJob  from "@/app/actions1/page";

export default function page() {

    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async () => {

        if (
            !form.firstname || !form.lastname || !form.email
        ) {
            toast.error("Please fill all fields");
            return;
        }

        const formData = new FormData();

        formData.append("firstname", form.firstname);
        formData.append("lastname", form.lastname);
        formData.append("email", form.email);

        // JOB TITLE
        formData.append("jobtitle", "Nurse");

        const result = await applyJob(formData);

        if (!result.success) {
            toast.error(result.message);
            return;
        }

        toast.success(result.message);

        setOpen(false);

        setForm({
            firstname: "",
            lastname: "",
            email: "",
        });
    };

    return (
        <div>

            <img
                src="/mainhero.jpg"
                className="w-full h-180 object-cover"
            />

            <section className="ml-20 mt-20 flex flex-col gap-10">

                {/* FIRST APPLICATION */}
                <div className="border rounded-2xl w-100 h-50 p-3 flex flex-col gap-2">

                    <p>Experiance:1-3</p>
                    <p>Salary:$20/h</p>
                    <p>Job:Helping hand</p>
                    <p>Location:Shreeji tower op himallya mall</p>

                    <button
                        onClick={() => setOpen(true)}
                        className="border rounded-2xl p-1.5 hover:bg-green-300"
                    >
                        Apply
                    </button>

                    {open && (
                        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">

                            <div className="bg-white w-96 p-6 rounded-2xl shadow-xl">

                                <h2 className="text-2xl ml-20 mb-2 font-extralight">
                                    Apply for Job
                                </h2>

                                <h4 className="font-extralight mb-2">
                                    Hey u are going to apply for job if u are not ready then go to hell
                                    and if u are ready then what u thinging just click button.
                                </h4>

                                <input
                                    type="text"
                                    name="firstname"
                                    value={form.firstname}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="border w-full p-2 mb-3 rounded"
                                />

                                <input
                                    type="text"
                                    name="lastname"
                                    value={form.lastname}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="border w-full p-2 mb-3 rounded"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="border w-full p-2 mb-4 rounded"
                                />

                                <div className="flex justify-end gap-3">

                                    <button
                                        onClick={() => setOpen(false)}
                                        className="border px-4 py-2 rounded"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleSubmit}
                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                    >
                                        Submit
                                    </button>

                                </div>

                            </div>

                        </div>
                    )}

                </div>

                {/* REMAINING KEEP SAME */}
                <div className="border rounded-2xl w-100 h-50 p-3 flex flex-col gap-2">
                    <p>Experiance:1-3</p>
                    <p>Salary:$20/h</p>
                    <p>Job:Helping hand</p>
                    <p>Location:Shreeji tower op himallya mall</p>
                    <button className="border rounded-2xl p-1 ml-35 mt-2 hover:bg-green-300">
                        Apply
                    </button>
                </div>

                <div className="border rounded-2xl w-100 h-50 p-3 flex flex-col gap-2">
                    <p>Experiance:1-3</p>
                    <p>Salary:$20/h</p>
                    <p>Job:Helping hand</p>
                    <p>Location:Shreeji tower op himallya mall</p>
                    <button className="border rounded-2xl p-1 ml-35 mt-2 hover:bg-green-300">
                        Apply
                    </button>
                </div>

                <div className="border rounded-2xl w-100 h-50 p-3 flex flex-col gap-2">
                    <p>Experiance:1-3</p>
                    <p>Salary:$20/h</p>
                    <p>Job:Helping hand</p>
                    <p>Location:Shreeji tower op himallya mall</p>
                    <button className="border rounded-2xl p-1 ml-35 mt-2 hover:bg-green-300">
                        Apply
                    </button>
                </div>

            </section>

        </div>
    );
}