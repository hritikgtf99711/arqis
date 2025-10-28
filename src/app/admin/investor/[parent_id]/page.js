"use client";
import { BASE_ADMIN } from "../../../../../config";
import Card from "@/admin/components/card/Card";
import CardHeading from "@/admin/components/card/CardHeading";
import DynamicForm from "@/admin/components/form/DynamicForm";
import TableContainer from "@/admin/components/table/TableContainer";
import { useApi } from "@/admin/hooks/useApi";
import { useCrud } from "@/admin/hooks/useCrud";
import { formatFormData } from "@/admin/utils/formatFormData";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const fields = [
  {
    type: "dropdown",
    name: "permissions",
    label: "Permissions",
    options: [
      { label: "Sub Parent", value: "sub_parent" },
      { label: "Peragraph", value: "peragraph" },
      { label: "Model", value: "model" },
      { label: "PDF", value: "pdf" },
      { label: "Table", value: "table" },
      { label: "Quater", value: "quater_file" },
      { label: "Link", value: "link" },
      { label: "Contact Card", value: "contact_card" },
    ],
  },
  { type: "text", name: "title", label: "Title" },
  { type: "text", name: "year", label: "Year" },
  {
    type: "text",
    name: "description",
    label: "Description",
    showIf: (formData) => formData.permissions === "peragraph", // 👈 show only if peragraph
  },
  {
    type: "file",
    name: "file",
    label: "File",
    showIf: (formData) => formData.permissions === "pdf", // 👈 show only if pdf
  },
  {
    type: "text",
    name: "link",
    label: "Link",
    showIf: (formData) => formData.permissions === "link", // 👈 show only if pdf
  },
  {
    type: "file",
    name: "q_1",
    label: "Quater 1",
    showIf: (formData) => formData.permissions === "quater_file", // 👈 show only if quater_file
  },
  {
    type: "file",
    name: "q_2",
    label: "Quater 2",
    showIf: (formData) => formData.permissions === "quater_file", // 👈 show only if quater_file
  },
  {
    type: "file",
    name: "q_3",
    label: "Quater 3",
    showIf: (formData) => formData.permissions === "quater_file", // 👈 show only if quater_file
  },
  {
    type: "file",
    name: "q_4",
    label: "Quater 4",
    showIf: (formData) => formData.permissions === "quater_file", // 👈 show only if quater_file
  },
  {
          type: "array",
          name: "other",
          label: "Overview",
          col:"md:col-span-12",
          investor_card:true ,
          multiple:false,
          showIf: (formData) => formData.permissions === "contact_card",
          fields: [
            { type: "text", name: "name", label: "Name" },
            { type: "text", name: "designation", label: "Designation" },
            { type: "text", name: "phone", label: "Phone Number" },
            { type: "text", name: "fax", label: "Fax" },
            { type: "text", name: "email", label: "Email" },
            { type: "text", name: "address", label: "Address" },
          ],
        },
];



const head = ["Title", "Permissions", "Investor"];
const header = ["title", "permissions", "file"];

export default function Page() {
  const { parent_id } = useParams();
  const router = useRouter();
  const api = useApi(BASE_ADMIN);
  const [dynamicFields] = useState(fields);

  const {
    tableData,
    editData,
    handleAddOrUpdate,
    handleDelete,
    handleEdit,
    pagination,
    currentPage,
    handlePageChange,
  } = useCrud(api, `investors`);


  // ---------------------------
  // Helpers
  // ---------------------------
;

  // normalize helper for DynamicForm
  // const normalizeApiResponse = (apiData, fields) => {
  //   if (!apiData) return {};
  //   let normalized = { ...apiData };
  //   const fieldNames = fields.map((f) => f.name);
  //   Object.keys(normalized).forEach((key) => {
  //     if (!fieldNames.includes(key)) delete normalized[key];
  //   });
  //   return normalized;
  // };

  const normalizeApiResponse = (apiData, fields) => {
  if (!apiData) return {};
  let normalized = { ...apiData };

  // parse JSON fields like 'other'
  if (normalized.other && typeof normalized.other === "string") {
    try {
      normalized.other = JSON.parse(normalized.other);
    } catch (e) {
      console.warn("Failed to parse 'other':", e);
      normalized.other = {};
    }
  }

  const fieldNames = fields.map((f) => f.name);
  Object.keys(normalized).forEach((key) => {
    if (!fieldNames.includes(key)) delete normalized[key];
  });

  return normalized;
};


  // flatten tree into one array
  const flattenTree = (data) => {
    let result = [];
    for (const item of data) {
      result.push(item);
      if (item.children?.length > 0) {
        result = result.concat(flattenTree(item.children));
      }
    }
    return result;
  };

  // get direct children of parent_id
  const getChildrenByParentId = (data, parent_id) => {
    const flat = flattenTree(data);
    return flat.filter((item) => item.parent_id === String(parent_id));
  };

  // format data for table
  const formatForTable = (data) => {
    return data.map((item) => [
      item.title,
      item.permissions,
      item.id, // ID always at end
    ]);
  };

  // get breadcrumb path
  const getBreadcrumb = (data, parent_id) => {
    const path = [];
    const findParent = (items, id) => {
      for (const item of items) {
        if (item.id === Number(id)) {
          path.unshift(item);
          if (item.parent_id && item.parent_id !== "0") {
            findParent(data, item.parent_id);
          }
          return true;
        }
        if (item.children?.length > 0) {
          if (findParent(item.children, id)) return true;
        }
      }
      return false;
    };
    if (parent_id && parent_id !== "0") findParent(data, parent_id);
    return path;
  };

  // ---------------------------
  // Computed data
  // ---------------------------
  const childrenOfParent = getChildrenByParentId(tableData, parent_id);
  const filteredData = formatForTable(childrenOfParent);
  const breadcrumb = getBreadcrumb(tableData, parent_id);
  // ---------------------------
  // Render
  // ---------------------------
  return (
    <div>
      {/* Breadcrumb */}
     <div
  className="mb-[10px] max-w-[400px] overflow-x-auto whitespace-nowrap"
>
  <span
    style={{ cursor: "pointer", color: "white", marginRight: "5px" }}
    onClick={() => router.push(`/admin/investor`)}
  >
    Investor
  </span>
  {breadcrumb.length > 0 && " > "}
  {breadcrumb.map((item, index) => (
    <span key={item.id}>
      <span
        style={{ cursor: "pointer", color: "white" }}
        onClick={() => router.push(`/admin/investor/${item.id}`)}
      >
        {item.title}
      </span>
      {index < breadcrumb.length - 1 && " > "}
    </span>
  ))}
</div>


      {/* Dynamic Form */}
      <div style={{ marginBottom: "20px" }}>
        <DynamicForm
          title={editData ? "Edit Investor" : "Add Investor"}
          data={dynamicFields}
          onSubmit={(formData) => {
            const formattedData = formatFormData(formData, dynamicFields);
            handleAddOrUpdate({ ...formattedData, parent_id });
          }}
          defaultValues={normalizeApiResponse(editData, dynamicFields)}
          col={12}
        />
      </div>

      {/* Table */}
      <div>
        <Card>
          <CardHeading>Investors</CardHeading>
          <TableContainer
            head={head}
            data={filteredData}
            onDelete={handleDelete}
            onEdit={handleEdit}
            pagination={pagination}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            onRowClick={(row) => router.push(`/admin/investor/${row[2]}`)} // ID is at end
          />
        </Card>
      </div>
    </div>
  );
}
