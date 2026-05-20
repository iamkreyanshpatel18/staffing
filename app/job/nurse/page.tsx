"use client"
import { useState } from "react";
import toast from "react-hot-toast";
import { applyJob } from "@/app/actions1/applyjob";

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
        !form.firstname ||
        !form.lastname ||
        !form.email
    ) {
        toast.error("Please fill all fields");
        return;
    }

    const formData = new FormData();

    formData.append("firstname", form.firstname);
    formData.append("lastname", form.lastname);
    formData.append("email", form.email);

    formData.append("jobtitle", "Nurse");

    const result = await applyJob(formData);

    // ❌ USER NOT REGISTERED
    if (!result.success) {
        toast.error(result.message);
        return;
    }

    // ✅ SUCCESS
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
                className="w-full h-auto object-cover max-h-96"
            />

            <section className="px-4 sm:px-6 md:px-8 mt-10 sm:mt-20 flex flex-col gap-6 sm:gap-10 max-w-5xl mx-auto">

                {/* FIRST APPLICATION */}
                <div className="border rounded-2xl p-4 sm:p-6 flex flex-col gap-3 hover:shadow-lg transition">

                    <p className="text-sm sm:text-base">Experiance:1-3</p>
                    <p className="text-sm sm:text-base">Salary:$20/h</p>
                    <p className="text-sm sm:text-base">Job:Helping hand</p>
                    <p className="text-sm sm:text-base">Location:Shreeji tower op himallya mall</p>

                    <button
                        onClick={() => setOpen(true)}
                        className="border rounded-2xl p-2 hover:bg-gray-200 text-sm sm:text-base w-full sm:w-auto"
                    >
                        Apply
                    </button>

                    {open && (
                        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">

                            <div className="bg-white w-full sm:w-96 p-6 rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">

                                <h2 className="text-xl sm:text-2xl mb-3 font-semibold">
                                    Apply for Job
                                </h2>

                                <h4 className="font-light mb-4 text-sm sm:text-base">
                                    Hey u are going to apply for job if u are not ready then go to hell
                                    and if u are ready then what u thinging just click button.
                                </h4>

                                <input
                                    type="text"
                                    name="firstname"
                                    value={form.firstname}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="border w-full p-2 mb-3 rounded text-sm"
                                />

                                <input
                                    type="text"
                                    name="lastname"
                                    value={form.lastname}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="border w-full p-2 mb-3 rounded text-sm"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="border w-full p-2 mb-4 rounded text-sm"
                                />

                                <div className="flex justify-end gap-3">

                                    <button
                                        onClick={() => setOpen(false)}
                                        className="border px-4 py-2 rounded text-sm hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleSubmit}
                                        className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600"
                                    >
                                        Submit
                                    </button>

                                </div>

                            </div>

                        </div>
                    )}

                </div>

                {/* REMAINING KEEP SAME */}
                <div className="border rounded-2xl p-4 sm:p-6 flex flex-col gap-3 hover:shadow-lg transition">
                    <p className="text-sm sm:text-base">Experiance:1-3</p>
                    <p className="text-sm sm:text-base">Salary:$20/h</p>
                    <p className="text-sm sm:text-base">Job:Helping hand</p>
                    <p className="text-sm sm:text-base">Location:Shreeji tower op himallya mall</p>
                    <button className="border rounded-2xl p-2 mt-2 hover:bg-green-300 text-sm sm:text-base w-full sm:w-auto">
                        Apply
                    </button>
                </div>

                <div className="border rounded-2xl p-4 sm:p-6 flex flex-col gap-3 hover:shadow-lg transition">
                    <p className="text-sm sm:text-base">Experiance:1-3</p>
                    <p className="text-sm sm:text-base">Salary:$20/h</p>
                    <p className="text-sm sm:text-base">Job:Helping hand</p>
                    <p className="text-sm sm:text-base">Location:Shreeji tower op himallya mall</p>
                    <button className="border rounded-2xl p-2 mt-2 hover:bg-green-300 text-sm sm:text-base w-full sm:w-auto">
                        Apply
                    </button>
                </div>

                <div className="border rounded-2xl p-4 sm:p-6 flex flex-col gap-3 hover:shadow-lg transition">
                    <p className="text-sm sm:text-base">Experiance:1-3</p>
                    <p className="text-sm sm:text-base">Salary:$20/h</p>
                    <p className="text-sm sm:text-base">Job:Helping hand</p>
                    <p className="text-sm sm:text-base">Location:Shreeji tower op himallya mall</p>
                    <button className="border rounded-2xl p-2 mt-2 hover:bg-green-300 text-sm sm:text-base w-full sm:w-auto">
                        Apply
                    </button>
                </div>

            </section>

        </div>
    );
}