"use client";       
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { useParams } from "next/navigation";
import { useApi } from "@/admin/hooks/useApi";
import { BASE_ADMIN } from "@/config";
import { useCrud } from "@/admin/hooks/useCrud";
import DynamicForm from "@/admin/components/form/DynamicForm";
import Card from "@/admin/components/card/Card";
import CardHeading from "@/admin/components/card/CardHeading";
import TableContainer from "@/admin/components/table/TableContainer";
import { formatFormData } from "@/admin/utils/formatFormData";
import { toast } from "react-toastify";
import SearchInput from "@/admin/components/table/SearchInput";

const sectionConfigs = {
  platter: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
      { type: "image", name: "mobile_image", label: "Mobile Image" },
      { type: "text", name: "heading", label: "Heading" },
      { type: "text", name: "sub_heading", label: "Sub Heading" },
      { type: "text", name: "platter_overview", label: "Overview" },
      { type: "text", name: "link", label: "Link" },
      {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
      { type: "text", name: "meta_title", label: "Meta Title" },
      { type: "text", name: "meta_keywords", label: "Meta Keywords" },
      { type: "textarea", name: "seo_tags", label: "Head Script" },
      { type: "textarea", name: "body_tags", label: "Body Script" },
      { type: "text", name: "meta_description", label: "Meta Description" },
    ],
    table: { head: ["Name","Short Description","Image", "Alt Tag"], header: ["name","short_description","image", "alt"] },
    endpoint: "platter",
    label: "Platter",
  },
  typologies: {
    fields: [
      { type: "text", name: "name", label: "Typologies" },
        {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Typologies"], header: ["name"] },
    endpoint: "typologies",
    label: "Typologies",
  },
  "sub-typologies": {
    fields: [
      { type: "text", name: "name", label: "Sub Typologies" },
        {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Typologies"], header: ["name"] },
    endpoint: "sub-typologies",
    label: "Sub Typologies",
  },
  timeline: {
    fields: [
      { type: "text", name: "year", label: "Year" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
       {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Year","Short Description","Image", "Alt Tag"], header: ["year","short_description","image", "alt"] },
    endpoint: "timeline",
    label: "Timeline",
  },
  "amenities-logo": {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "logo", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
       {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Name","Alt Tag","Image"], header: ["name","alt","logoUrl"] },
    endpoint: "amenities-logo",
    label: "Amenities Logo",
  },
  award: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "file", label: "Image" },
      { type: "text", name: "alt_txt", label: "Alt Tag" },
      { type: "text", name: "year", label: "Year" },
      { type: "text", name: "description", label: "Short Description" },
      {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Title","Short Description","Year","Image", "Alt Tag","Awards"], header: ["title","description","year","file", "alt_txt"] },
    endpoint: "award",
    label: "Awards",
  },
  news: {
    fields: [
      { type: "date", name: "date_at", label: "Date" },
      { type: "image", name: "logo", label: "Logo" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
      { type: "text", name: "link", label: " Link" },
      {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Short Description","Logo","Image" ,"Alt Tag","Date"], header: ["short_description","logo","image", "alt","date_at"] },
    endpoint: "news",
    label: "News",
  },
  blog: {
  fields: [
    { type: "text", name: "title", label: "Title" },
    { type: "date", name: "date_at", label: "date" },
    { type: "text", name: "short_description", label: "Short Description" },
    { type: "image", name: "image", label: "Desktop Image" },
    { type: "image", name: "mobile_image", label: "Mobile Image" },
    { type: "text", name: "meta_title", label: "Meta Title" },
    { type: "text", name: "meta_keywords", label: "Meta Keywords" },
    { type: "text", name: "meta_description", label: "Meta Description" },
    { type: "text", name: "seo_tags", label: "SEO Tags" },
    {
      type: "dropdown",
      name: "status", 
      label: "Status",
      options: [
        { label: "Active", value: "1" },
        { label: "Inactive", value: "0" },
      ],
      defaultValue: "1",
    },
    { type: "richtext", name: "long_description", label: "Long Description", col: "md:col-span-12" },
  ],
  table: {
    head: ["Title", "Short Description", "Desktop Image","Mobile Image"],
    header: ["title", "short_description", "image","mobile_image"],
  },
  endpoint: "blog",
  label: "Blogs",
  col: 12,
},
  testimonial: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "text", name: "short_description", label: "Description" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "video_link", label: "Video Link" },
      { type: "text", name: "alt", label: "Alt Tag" },
      {
        type: "dropdown",
        name: "status",
        label: "Status",
        options: [
        { label: "Active", value: "1" },
        { label: "Inactive", value: "0" },
        ],
        defaultValue:"1"
      },
    ],
    table: {
      head: ["Name", "Description"],
      header: ["name", "short_description"],
    },
    endpoint: "testimonial",
    label: "Testimonial",
  },
  "our-story": {
    fields: [
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt_text", label: "Alt tag" },
      {
      type: "dropdown",
      name: "type",
      label: "Select Type",
      options: [
        { label: "Our Story", value: "story" },
        { label: "our manifesto", value: "manifasto" },
      ],
    },
      { type: "text", name: "sequence", label: "Sequence" },
    ],
    table: { head: ["Image", "Alt Tag","Type","Sequence"], header: ["image", "alt_text","type","sequence"] },
    endpoint: "our-story-and-manifasto",
    label: "Our Story",
  },
  pillar: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "text", name: "short_description", label: "Description" },
    ],
    table: { head: ["Title", "Description"], header: ["title", "short_description"] },
    endpoint: "brandpillar",
    label: "Pillars",
  },
  "our-team": {
    fields: [
      {
        type: "dropdown",
        name: "is_team_board",
        label: "Select Page",
        options: [],
        // required: true,
      },
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "designation", label: "Designation" },
      { type: "text", name: "din_number", label: "DIN Number" },
      { type: "text", name: "short_description", label: "Description" },
      {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
      { type: "richtext", name: "long_description", label: "Long Description" },
        {
          type: "array",
          name: "directorship",
          label: "Directorship",
          col:"md:col-span-12",
          multiple: true,
          fields: [
            { type: "text", name: "name", label: "Name" },
            { type: "text", name: "designation", label: "Designation" },
          ],
        },
    ],
    table: {
      head: ["Name", "Image", "Alt Tag", "Designation","LeaderShip"],
      header: ["name","image","alt","designation","is_leadership"],
    },
    endpoint: "team",
    label: "Our Team",
  },
  "csr-list": {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "text", name: "description", label: "Description" },
      { type: "image", name: "file", label: "Image" },
      { type: "text", name: "alt_txt", label: "Alt" }

    ],
    table: { head: ["Title", "Description","Image"], header: ["title", "description","file"] },
    endpoint: "csr-list",
    label: "Csr List",
  },
  "csr-gallery": {
    fields: [
      { type: "text", name: "year", label: "Year" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt" }

    ],
    table: { head: ["Year", "Image","Alt"], header: ["year", "image","alt"] },
    endpoint: "csr-galleries",
    label: "Csr Gallery",
  },
  "career-galleries": {
    fields: [
      { type: "text", name: "year", label: "Year" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt" }

    ],
    table: { head: ["Year", "Image","Alt"], header: ["year", "image","alt"] },
    endpoint: "career-galleries",
    label: "Career Gallery",
  },
  jobs: {
    fields: [
      { type: "text", name: "job_title", label: "Job Title" },
      { type: "text", name: "location", label: "Location" },
      { type: "text", name: "education_required", label: "Education" },
      { type: "text", name: "experience_required", label: "Experience" },
      { type: "text", name: "skills_required", label: "Skills" }

    ],
    table: { head: ["Job Title", "Location","Education","Experience"], header: ["job_title", "location","education_required","experience_required"] },
    endpoint: "jobs",
    label: "Jobs",
  },
  "event-galleries":{
    fields: [
      { type: "text", name: "year", label: "Year" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt" }

    ],
    table: { head: ["Year", "Image","Alt"], header: ["year", "image","alt"] },
    endpoint: "event-galleries",
    label: "Event Gallery",
  },
  "press-kit":{
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt_text", label: "Alt" }

    ],
    table: { head: ["Title", "Image","Alt"], header: ["title", "image","alt_text"] },
    endpoint: "presskit",
    label: "Press Kit",
  },
  "press-kit-logos":{
    fields: [
      {
        type: "dropdown",
        name: "is_type",
        label: "Select Page",
        options: [],
      },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt" },
      { type: "text", name: "label", label: "Label" },

    ],
    table: { head: ["Label", "Image","Alt"], header: ["label", "image","alt"] },
    endpoint: "logos",
    label: "Press Kit",
  },
  pages: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "text", name: "description", label: "Description" },
      { type: "image", name: "file", label: "Desktop Image" },
      { type: "image", name: "mobile_image", label: "Mobile Image" },
      {
        type: "dropdown",
        name: "status",
        label: "Status",
        options: [
        { label: "Active", value: "1" },
        { label: "Inactive", value: "0" },
        ],
        defaultValue:"1"
      },
      { type: "text", name: "meta_title", label: "Meta Title" },
      { type: "text", name: "meta_keywords", label: "Meta Keywords" },
      { type: "text", name: "meta_description", label: "Meta Description" },
      { type: "textarea", name: "seo_tags", label: "Head Script" },
      { type: "textarea", name: "body_tags", label: "Body Script" },
    ],
    table: {
      head: ["Name","Title", "Keywords", "Description"],
      header: ["name","meta_title","meta_keywords","meta_description"],
    },
    endpoint: "page",
    label: "Meta Page",
  }
};

const CmsSections = () => {

   const { slug } =  useParams();
  
      const api = useApi(BASE_ADMIN);
        const [dynamicFields, setDynamicFields] = useState([]);

  // Get config for current slug
  const config = sectionConfigs[slug] || {
    fields: [],
    table: { head: [], header: [] },
    endpoint: "",
    label: slug,
  };


  
    const { tableData,fetchTableData, editData, handleAddOrUpdate, handleDelete, handleEdit,pagination,currentPage,handlePageChange } =
      useCrud(api, config.endpoint ,config.table.header || [],);
      
      // const {tableData : MetaFields}=useCrud(api,"distinct-pages");
        // 👇 Only call distinct-pages API when slug === "meta"
  const { tableData: MetaFields } = slug === "our-team" ? useCrud(api, "team/categories") : { tableData: [] };
  const { tableData: pressKit } = slug === "press-kit-logos" ? useCrud(api, "presskit") : { tableData: [] };
      
useEffect(() => {
  let updatedFields = config.fields;

  if (slug === "our-team") {
    const options =
      MetaFields?.[0]?.rows?.map((item) => ({
        label: item.title,
        value: item.id,
      })) || [];

    updatedFields = config.fields.map((f) => {
      if (f.type === "dropdown" && f.name === "is_team_board") {
        return {
          ...f,
          options,
          defaultValue: editData?.is_team_board || "",
        };
      }
      return f;
    });
  }

  if (slug === "press-kit-logos") {
    const options =
      pressKit?.map((item) => ({
        label: item.title, // adjust based on API structure
        value: item.id,
      })) || [];

    updatedFields = config.fields.map((f) => {
      if (f.type === "dropdown" && f.name === "is_type") {
        return {
          ...f,
          options,
          defaultValue: editData?.is_type || "",
        };
      }
      return f;
    });
  }
    setDynamicFields(prev =>
    JSON.stringify(prev) !== JSON.stringify(updatedFields) ? updatedFields : prev
  );

  // setDynamicFields(updatedFields);
}, [slug, MetaFields, pressKit, editData]);



// normalize helper
const normalizeApiResponse = (apiData, fields) => {
  let normalized = { ...apiData };

  const fieldNames = fields.map((f) => f.name);
  Object.keys(normalized).forEach((key) => {
    if (!fieldNames.includes(key)) delete normalized[key];
  });

  return normalized;
};


const handleLeaderShip = async (id, body) => {
  try {
    // ✅ Use the correct method from useApi
    const res = await api.update(`team/${id}/leadership`, body);
    toast.success("Leadership updated");
  } catch (err) {
    console.error("Failed to update leadership:", err);
  }
};


  return <>
    <section key={slug}>
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12">
          <DynamicForm
            title={editData ? `Edit ${config.label}` : `Add ${config.label}`}
            data={dynamicFields}
            onSubmit={(formData) => {
              const formattedData = formatFormData(formData, dynamicFields);
              handleAddOrUpdate(formattedData);
            }}
            defaultValues={normalizeApiResponse(editData, dynamicFields)}
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
  onLeaderShip={handleLeaderShip} // ✅ pass the function
  onEdit={handleEdit}
  pagination={pagination}
  currentPage={currentPage}
  handlePageChange={handlePageChange}
/>

          </Card>
        </div>
      </div>
    </section>
  </>;
};

export default CmsSections;
