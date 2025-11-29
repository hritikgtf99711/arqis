"use client";
import React, { useState, useEffect } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import CardHeading from "../card/CardHeading";
import Card from "../card/Card";
import TextDropdown from "./TextDropdown";
import RichTextEditor from "./RichTextEditor";
import { useRouter } from "next/navigation"; 
import ArrayField from "./ArrayField";
import InfiniteDropdown from "./InfiniteDropdown";
import FileUpload from "./FileUpload";
import DateInput from "./DateInput";

const DynamicForm = ({
  title,
  data,
  onSubmit,
  defaultValues,
  className,
  col,
  isEdit = false,
   loading = false,
}) => {
  const [formData, setFormData] = useState({});
  const [resetCounter, setResetCounter] = useState(0);
  const router = useRouter(); 

  // Prefill form when editing
  useEffect(() => {
    setFormData(defaultValues || {});
  }, [defaultValues]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Async submit handler
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!onSubmit) return;

  try {
    const success = await onSubmit(formData); // wait for submission result

    if (success) {
      if (isEdit) {
        router.back();
      } else {
        setFormData({});
        setResetCounter((prev) => prev + 1);
      }
    }
  } catch (err) {
    console.error("Submission error:", err);
  }
};



  const renderField = (field) => {
    const commonProps = {
      name: field.name || "",
      label: field.label || "",
      value: formData[field.name] || "",
      required: field.required,
      col: field.col || "",
      rows: field.rows,
    };

    switch (field.type) {
      case "text":
        return <TextInput {...commonProps} onChange={(e) => handleChange(field.name, e.target.value)} />;
      case "number":
        return <TextInput {...commonProps} type="number" onChange={(e) => handleChange(field.name, e.target.value)} />;
      case "date":
        return <TextInput {...commonProps} onChange={(e) => handleChange(field.name, e.target.value)} />;
      case "textarea":
        return <TextArea {...commonProps} onChange={(e) => handleChange(field.name, e.target.value)} />;
      case "richtext":
        return <RichTextEditor {...commonProps} onChange={(value) => handleChange(field.name, value)} />;
      case "file":
        return <FileUpload {...commonProps} reset={resetCounter} onChange={(fieldName, file) => handleChange(fieldName, file)} />;
      case "dropdown":
        if (field.fetchOptions) {
          return (
            <InfiniteDropdown
              {...commonProps}
              defaultOptions={field.fetchOptions}
              onChange={(fieldName, selectedValue) => handleChange(fieldName, selectedValue)}
              pageSize={field.limit}
              end_point={field.end_point}
            />
          );
        }
        return (
          <TextDropdown
            {...commonProps}
            options={field.options || []}
            onChange={(fieldName, selectedValue) => handleChange(fieldName, selectedValue)}
          />
        );
      case "image":
        return (
          <ImageUpload
            {...commonProps}
            reset={resetCounter}
            preview={typeof formData[field.name] === "string" ? formData[field.name] : null}
            onChange={(fieldName, file) => handleChange(fieldName, file)}
          />
        );
      case "array":
        return <ArrayField field={field} value={formData[field.name]} setFormData={setFormData} />;
      case "video":
        return <VideoUpload {...commonProps} reset={resetCounter} onChange={(fieldName, file) => handleChange(fieldName, file)} />;
      default:
        return null;
    }
  };

  return (
    <Card className={className}>
      <CardHeading>{title}</CardHeading>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-x-[20px] gap-y-[30px]">
          {data
            .filter((field) => !field.showIf || field.showIf(formData))
            .map((field, idx) => (
              <div key={idx} className={`col-span-12 ${field.col || "md:col-span-6"}`}>
                {renderField(field)}
              </div>
            ))}
        </div>

        <div className="text-end mt-[20px]">
          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--admin-secondary)] border-none rounded-[5px] text-[#eee] mt-0 font-roboto tracking-[0.4px] px-[25px] py-[7px]"
          >
            {loading ? (isEdit ? "Saving..." : "Submitting...") : "Save"}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default DynamicForm;
