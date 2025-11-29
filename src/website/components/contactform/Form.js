"use client";

import CommonHeading from "@/website/utils/CommonHeading";
import React, { useState } from "react";
import Image from "next/image";
import { API_BASE_URL } from "../../../../config";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiMessage, setApiMessage] = useState(null);

  // ──────────────────────────────────────────────────────────────
  // Validation
  // ──────────────────────────────────────────────────────────────
  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
    else if (formData.name.length > 50) newErrors.name = "Name must be less than 50 characters";

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";

    // mobile
    const mobileRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.mobile) newErrors.mobile = "mobile number is required";
    else if (!mobileRegex.test(formData.mobile)) newErrors.mobile = "Invalid mobile number";

    // Message
    if (!formData.message) newErrors.message = "Message is required";
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ──────────────────────────────────────────────────────────────
  // Input change
  // ──────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ──────────────────────────────────────────────────────────────
  // Submit using fetch
  // ──────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiMessage(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}website/save-enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parse JSON response
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      // Success
      setApiMessage({ type: "success", text: data.message || "Enquiry saved successfully!" });
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setErrors({});
    } catch (err) {
      // Network or parsing error
      setApiMessage({ type: "error", text: err.message || "Failed to submit. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ──────────────────────────────────────────────────────────────
  // Render
  // ──────────────────────────────────────────────────────────────
  return (
    <div className="custom-container">
      <CommonHeading
        customClass="text-[#FFD38F]"
        heading="Exploring Queries, Fueling Solutions"
      />

      <form className="mt-[25px]" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="input-container mb-[15px]">
          <input
            className={`bg-white w-full placeholder:uppercase py-[15px] px-[20px] placeholder:text-[#000] border focus:outline-none focus:ring-2 focus:ring-[#FFD38F] transition ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="NAME"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="input-container mb-[15px]">
          <input
            className={`bg-white w-full placeholder:uppercase py-[15px] px-[20px] placeholder:text-[#000] border focus:outline-none focus:ring-2 focus:ring-[#FFD38F] transition ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="MAIL ID"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* mobile */}
        <div className="input-container mb-[15px]">
          <input
            className={`bg-white w-full placeholder:uppercase py-[15px] px-[20px] placeholder:text-[#000] border focus:outline-none focus:ring-2 focus:ring-[#FFD38F] transition ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="mobile NUMBER"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>

        {/* Message */}
        <div className="input-container mb-[15px]">
          <textarea
            rows={4}
            className={`bg-white w-full placeholder:uppercase py-[15px] px-[20px] placeholder:text-[#000] border resize-none focus:outline-none focus:ring-2 focus:ring-[#FFD38F] transition ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="inline-flex items-center pt-[15px] space-x-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`uppercase text-white bg-[#113120] px-6 py-3 hover:bg-[#0f2a1d] transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? "Submitting…" : "Submit Now"}
          </button>
          <Image
            src="/assets/icons/arrow-tilt-white.png"
            alt="arrow"
            height={35}
            width={35}
            className="object-contain"
          />
        </div>

        {/* API Response Message */}
        {apiMessage && (
          <div
            className={`mt-4 p-3 text-sm font-medium ${
              apiMessage.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {apiMessage.text}
          </div>
        )}
      </form>

      {/* Google Map */}
      <div className="relative mt-[80px]">
        <div className="overlay-container absolute inset-0 bg-[#113120d1] pointer-events-none"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2645145.4820160638!2d6.537027373847533!3d49.651475074050936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sarqis!5e0!3m2!1sen!2sin!4v1759478016585!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px]"
        ></iframe>
      </div>
    </div>
  );
}