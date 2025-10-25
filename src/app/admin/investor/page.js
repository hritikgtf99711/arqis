"use client";
import { BASE_ADMIN } from "../../../../config";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { useApi } from "@/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { formatFormData } from "@/src/admin/utils/formatFormData";
import React, { useState } from "react";
const fields = [{ type: "text", name: "title", label: "Title" }];

const head = ["Title", "Investor"];
const header = ["title"];
const page = () => {
  const [dynamicFields] = useState(fields);
  const api = useApi(BASE_ADMIN);

  // ⚡ Helper
  const normalizeApiResponse = (apiData, fields) => {
    let normalized = { ...apiData };
    const fieldNames = fields.map((f) => f.name);
    Object.keys(normalized).forEach((key) => {
      if (!fieldNames.includes(key)) delete normalized[key];
    });
    return normalized;
  };

  const {
    tableData,
    editData,
    handleAddOrUpdate,
    handleDelete,
    handleEdit,
    pagination,
    currentPage,
    handlePageChange,
  } = useCrud(api, `investors`, header);

  return (
    <div>
      <div>
        <DynamicForm
          title={`Add Award`}
          data={dynamicFields}
          onSubmit={(formData) => {
            const formattedData = formatFormData(formData, dynamicFields);
            handleAddOrUpdate({ ...formattedData });
          }}
          defaultValues={{
            parent_id: 0,
            permissions: "accordian",
            ...normalizeApiResponse(editData, dynamicFields),
          }}
          col={12}
        />
      </div>

      <div>
        <Card>
          <CardHeading>Investor</CardHeading>
          <TableContainer
            head={head}
            data={tableData}
            onDelete={handleDelete}
            onEdit={handleEdit}
            pagination={pagination}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </Card>
      </div>
    </div>
  );
};

export default page;
