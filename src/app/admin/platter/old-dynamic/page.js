"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { useApi } from "@/admin/hooks/useApi";
import { BASE_ADMIN } from "@/config";
import { useCrud } from "@/admin/hooks/useCrud";
import DynamicForm from "@/admin/components/form/DynamicForm";
import Card from "@/admin/components/card/Card";
import CardHeading from "@/admin/components/card/CardHeading";
import TableContainer from "@/admin/components/table/TableContainer";
import { formatFormData } from "@/admin/utils/formatFormData";
import SearchInput from "@/admin/components/table/SearchInput";
import { toast } from "react-toastify";

const Page = () => {
  const { slug } = useParams();
  const api = useApi(BASE_ADMIN);

  // Fetch dropdown data
  const { tableData: amenitiesLogo } = useCrud(api, "amenities-logo");

  

  // Section configurations
  const sectionConfigs = {
    amenities: {
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
        head: ["Title", "Image", "Alt Tag","Id"],
        header: ["title", "desktop_file", "alt_text","amenities_logo_id"],
      },
      endpoint: "township-amenities",
      label: "Amenities",
    },  
    location: {
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
    },
  };

  const config = sectionConfigs[slug] || {
    fields: [],
    table: { head: [], header: [] },
    endpoint: "",
    label: slug,
  };

  // Prepare dropdown options
  const amenitiesLogoOptions =
    amenitiesLogo?.map((item) => ({ label: item.name, value: item.id })) || [];

  // Compute dynamicFields using useMemo (stable reference)
  const dynamicFields = useMemo(() => {
    if (!config.fields) return [];
    return config.fields.map((f) => {
      if (f.type === "dropdown" && f.name === "amenities_logo_id")
        return { ...f, fetchOptions: amenitiesLogoOptions };
      return f;
    });
  }, [config.fields, amenitiesLogoOptions]);
  // const tableEndpoint = townshipId ? `${config.endpoint}` : null;

  // CRUD operations for table
  const { tableData,fetchTableData, pagination, currentPage,editData, handleDelete, handleEdit, handlePageChange ,handleAddOrUpdate,} = useCrud(
    api,
   config.endpoint, // only fetch if townshipId is available
    config.table.header || [], // false = don't auto-fetch if your hook supports manual mode
    true,
    config.idRequired ?? true
  );

  // Handle form submission
  // const handleFormSubmit = (formData) => {
  //   const formattedData = formatFormData(formData, dynamicFields);
  //   handleAddOrUpdate(formattedData);
  // };

   const handleFormSubmit = async (formData) => {
    const formattedData = formatFormData(formData, dynamicFields);

    if (slug === "amenities") {
      try {
        const fd = new FormData();
        Object.entries(formattedData).forEach(([k,v]) => fd.append(k,v));

        
          await api.post(config.endpoint, fd);
          toast.success("Amenity added successfully")
        crud.fetchTableData(crud.currentPage);
        crud.setEditData(null);
      } catch (err) {
        console.error(err);
      }
    } else {
      // use normal crud for other slugs
      crud.handleAddOrUpdate(formattedData);
    }
  };

const defaultValues = (() => {
  if (!editData) return {};

  if (slug === "amenities" && editData.banner) {
    return {
      title: editData.title,
      desktop_file: editData.banner.desktop_file || "",
      mobile_file: editData.banner.mobile_file || "",
      alt_text: editData.alt_text || "",
      amenities_logo_id: amenitiesLogoOptions.find(
        (opt) => opt.value === editData.amenities_logo_id
      )?.value || null, // ✅ map to primitive ID from options
    };
  }

  if (slug === "location") {
    return {
      title: editData.title || "",
      distance_time: editData.distance_time || "",
      platter_id: editData.platter_id || null,
    };
  }

  return editData || {};
})();




  return (
    <section key={slug}>
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
