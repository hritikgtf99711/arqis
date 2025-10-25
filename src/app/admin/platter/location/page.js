"use client";

import React, { useMemo } from "react";
import { useApi } from "@/admin/hooks/useApi";
import { BASE_ADMIN } from "../../../../../config";
import { useCrud } from "@/src/admin/hooks/useCrud";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { formatFormData } from "@/src/admin/utils/formatFormData";
import SearchInput from "@/src/admin/components/table/SearchInput";

const Page = () => {
  const api = useApi(BASE_ADMIN);

  // Location section configuration
  const config = {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "text", name: "distance_time", label: "Distance Time" },
    ],
    table: {
      head: ["Title", "Distance Time"],
      header: ["title", "distance_time"],
    },
    endpoint: "township-location",
    label: "Location",
  };

  // Compute dynamicFields using useMemo
  const dynamicFields = useMemo(() => config.fields, [config.fields]);

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
    handleAddOrUpdate,
  } = useCrud(api, config.endpoint, config.table.header);

  // Handle form submission
  const handleFormSubmit = (formData) => {
    const formattedData = formatFormData(formData, dynamicFields);
    handleAddOrUpdate(formattedData);
  };

  // Default values for edit
  const defaultValues = editData
    ? {
      title: editData.title || "",
      distance_time: editData.distance_time || "",
      platter_id: editData.platter_id || null,
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
                  fetchTableData(1); // fetch default
                } else {
                  fetchTableData(1, { search: term }); // fetch filtered
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

export default Page;
