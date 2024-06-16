"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 md:p-8 xl:p-12 shadow-lg text-center w-full rounded-[10px]  bg-black/10"
      >
        <div className="mb-6 flex flex-col md:flex-row md:gap-4 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="rounded-xl w-full p-4 border border-gray-300 text-dark placeholder:text-comforta placeholder:text-dark"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="rounded-xl w-full p-4 border border-gray-300 text-dark placeholder:text-comforta placeholder:text-dark"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="rounded-xl w-full p-4 border border-gray-300 min-h-[180px] text-dark placeholder:text-comforta placeholder:text-dark"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800"
        >
          SUBMIT
        </button>
      </form>
      {successMessage && (
        <div className="mt-4 text-mainBlue text-center font-bold">
          {successMessage}
        </div>
      )}
    </>
  );
}
