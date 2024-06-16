"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  description: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    description: "",
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
      description: "",
    });
  };

  return (
    <div className="bg-white p-8 shadow-lg text-center w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          SUBMIT
        </button>
      </form>
      {successMessage && (
        <div className="mt-4 text-green-600 font-bold">{successMessage}</div>
      )}
    </div>
  );
}
