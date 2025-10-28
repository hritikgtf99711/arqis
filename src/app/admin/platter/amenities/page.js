"use client";

import React, { useMemo } from "react";
import { useApi } from "@/admin/hooks/useApi";
import { BASE_ADMIN } from "../../../../../config";
import { useCrud } from "@/admin/hooks/useCrud";
import DynamicForm from "@/admin/components/form/DynamicForm";
import Card from "@/admin/components/card/Card";
import CardHeading from "@/admin/components/card/CardHeading";
import TableContainer from "@/admin/components/table/TableContainer";
import { formatFormData } from "@/admin/utils/formatFormData";
import SearchInput from "@/admin/components/table/SearchInput";
import { toast } from "react-toastify";

const AmenitiesPage = () => {
  const api = useApi(BASE_ADMIN);

  const { tableData: amenitiesLogo } = useCrud(api, "amenities-logo");

  // Amenities configuration
  const config = {
    fields: [
      {
        type: "dropdown",
        name: "amenities_logo_id",
        label: "Amenities Logo",
        idRequired: false,
        limit: 50,
        end_point: "amenities-logo",
        options: [],
      },
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "desktop_file", label: "Desktop Image" },
      { type: "image", name: "mobile_file", label: "Mobile Image" },
      { type: "text", name: "alt_text", label: "Alt Tag" },
    ],
    table: {
      head: ["Title", "Image", "Alt Tag", "amenities_id"],
      header: ["title", "desktop_file", "alt_text", "amenities_logo_id"],
    },
    endpoint: "township-amenities",
    label: "Amenities",
  };

  // Prepare dropdown options
  const amenitiesLogoOptions =
    amenitiesLogo?.map((item) => ({ label: item.name, value: item.id })) || [];

  // Compute dynamicFields with dropdown options
  const dynamicFields = useMemo(
    () =>
      config.fields.map((f) => {
        if (f.type === "dropdown" && f.name === "amenities_logo_id") {
          return { ...f, fetchOptions: amenitiesLogoOptions };
        }
        return f;
      }),
    [config.fields, amenitiesLogoOptions]
  );

  // CRUD operations
  const {
    tableData,
    fetchTableData,
    pagination,
    currentPage,
    editData,
    handleDelete,
    handleEdit,
    handlePageChange,
  } = useCrud(api, config.endpoint, config.table.header, true);

  // Form submission (always POST to endpoint)
  const handleFormSubmit = async (formData) => {
    const formattedData = formatFormData(formData, dynamicFields);

    try {
      const fd = new FormData();
      Object.entries(formattedData).forEach(([k, v]) => fd.append(k, v));

      await api.post(config.endpoint, fd);
      toast.success("Amenity saved successfully");

      fetchTableData(currentPage);
    } catch (err) {
      console.error(err);
      toast.error("Failed to save amenity");
    }
  };

  // Default values for edit
  const defaultValues = editData
    ? {
        title: editData.title || "",
        desktop_file: editData.banner.desktop_file || "",
        mobile_file: editData.banner.mobile_file || "",
        alt_text: editData.alt_text || "",
        amenities_logo_id:
          amenitiesLogoOptions.find((opt) => opt.value === editData.amenities_logo_id)
            ?.value || null,
      }
    : {};

  return (
    <section>
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12">
          <DynamicForm
            title={editData ? `Edit ${config.label}` : `Add ${config.label}`}
            data={dynamicFields}
            onSubmit={handleFormSubmit}
            defaultValues={defaultValues}
            col={12}
          />
        </div>

        <div className="col-span-12">
          <Card>
            <CardHeading>{config.label}</CardHeading>
            <SearchInput
              onSearch={(term) => {
                if (term.trim() === "") {
                  fetchTableData(1);
                } else {
                  fetchTableData(1, { search: term });
                }
              }}
            />
            <TableContainer
              head={config.table.head}
              data={tableData}
              onDelete={handleDelete}
              onEdit={(id) => handleEdit(id, false)}
              pagination={pagination}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesPage;
