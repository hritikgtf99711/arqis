"use client";
import CommonHeading from '@/website/utils/CommonHeading'
import React, { useState } from "react";
import Image from "next/image";
import { submitCareerForm } from '@/admin/utils/api';

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    experience: "",
    message: "",
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const mobileRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.mobile) {
      newErrors.mobile = "mobile number is required"; // Fixed: was newErrors.email
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Invalid phone number";
    }

    if (!formData.experience) {
      newErrors.experience = "Experience level is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!formData.file) {
      newErrors.file = "Resume is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        // Create FormData to properly handle file upload
        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('mobile', formData.mobile);
        submitData.append('experience', formData.experience);
        submitData.append('message', formData.message);
        if (formData.file) {
          submitData.append('file', formData.file);
        }

        await submitCareerForm(submitData);
        console.log("Form submitted:", Object.fromEntries(submitData)); // Log FormData entries for debugging
        setFormData({ 
          name: "", 
          email: "", 
          mobile: "", 
          experience: "", 
          message: "", 
          file: null 
        });
        setErrors({});
        setSubmitSuccess(true);
      } catch (error) {
        console.error("Submission failed:", error);
        setErrors({ submit: "Failed to submit form. Please try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="lg:pt-0 pt-[50px]">
      <CommonHeading
        customClass={`text-[#FFD38F]`}
        heading={`Step Into Your Future`}
      />
      <form className="mt-[30px]" onSubmit={handleSubmit}>
        {submitSuccess && (
          <p className="text-green-500 text-sm mb-4">Form submitted successfully!</p>
        )}
        {errors.submit && (
          <p className="text-red-500 text-sm mb-4">{errors.submit}</p>
        )}
        <div className="input-container mb-[15px]">
          <input
            className={`bg-[#fff] w-[100%] placeholder:uppercase py-[15px] px-[20px] placeholder:text-[#000] border border-gray-300 ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="input-container mb-[15px]">
          <input
            className={`bg-[#fff] w-[100%] placeholder:uppercase py-[15px] px-[20px] placeholder:text-[#000] border border-gray-300 ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="mail id"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="input-container mb-[15px]">
          <input
            className={`bg-[#fff] w-[100%] placeholder:uppercase py-[15px] px-[20px] placeholder:text-[#000] border border-gray-300 ${
              errors.mobile ? "border-red-500" : "" 
            }`}
            placeholder="phone number"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        <div className="input-container mb-[15px]">
          <select
            className={`bg-[#fff] w-[100%] py-[15px] px-[20px] border border-gray-300 ${
              errors.experience ? "border-red-500" : ""
            }`}
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="">Select experience</option>
            <option value="1 Year">1 Year</option>
            <option value="2 Year">2 Year</option>
            <option value="3 Year">3 Year</option>
          </select>
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
          )}
        </div>
        <div className="input-container mb-[15px]">
          <textarea
            className={`bg-[#fff] w-[100%] placeholder:uppercase py-[15px] px-[20px] placeholder:text-[#000] border border-gray-300 resize-vertical ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="input-container mb-[15px]">
          <input
            className={`bg-[#fff] w-[100%] py-[15px] px-[20px] border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FFD38F] file:text-gray-700 hover:file:bg-[#FFD38F]/80 ${
              errors.file ? "border-red-500" : ""
            }`}
            placeholder="Upload Resume"
            type="file"
            name="file"
            onChange={handleChange}
          />
          {errors.file && (
            <p className="text-red-500 text-sm mt-1">{errors.file}</p>
          )}
        </div>

        <div className="input-container inline-flex pt-[15px] items-center">
          <button 
            type="submit" 
            disabled={loading}
            className="uppercase tracking-[1.2] text-white cursor-pointer rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Now"}
          </button>
          {!loading && (
            <Image
              src={`/assets/icons/arrow-tilt-white.png`}
              className="ml-2 object-contain" // Fixed: me-10 to ml-2, objrct to object
              alt="arrow title"
              height={35}
              width={35}
            />
          )}
        </div>
      </form>
    </div>
  );
}