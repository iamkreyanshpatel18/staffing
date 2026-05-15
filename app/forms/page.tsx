'use client'
import { useState } from "react";
import addUser  from "../actions/page";

export default function FormPage() {


  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    skill: "",
    experience: "",
    gender: "",
    resume: null as File | null
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFile = (e: any) => {
    setForm({ ...form, resume: e.target.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <img src="/mainhero.jpg" className="w-full h-180 object-cover" />

      <form action={addUser}
        className="bg-white p-8 rounded-xl shadow-md w-150 ml-110 mt-20"
      >

        <h2 className="text-2xl font-bold text-center mb-6">
          Registration Form
        </h2>

        {/* First + Last */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        {/* Phone + Skill */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
          <input
            type="text"
            name="skill"
            placeholder="Skill"
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />
        </div>

        {/* Address */}
        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        {/* Experience + Gender */}
        <div className="grid grid-cols-2 gap-4 mb-4 items-center">
          <input
            type="number"
            name="experience"
            placeholder="Experience"
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <div className="flex gap-6">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        {/* File */}
        <input
          type="file"
          name="resume"
          onChange={handleFile}
          className="w-full border p-2 rounded mb-4"
        />

        {/* Button */}
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Submit
        </button>

      </form>

    </div>
  );
}



    