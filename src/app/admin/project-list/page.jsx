"use client"
import { BASE_ADMIN } from "../../../../config";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import SearchInput from "@/src/admin/components/table/SearchInput";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { useApi } from "@/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import React from "react";
import { toast } from "react-toastify";

const tableHead = ["Name", "Image", "Address", "Short Description","Add_To_Township"];
const tableHeader = ["name","image","address", "short_description","is_township"];

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const api = useApi(BASE_ADMIN);
  const { tableData ,handleDelete,pagination,currentPage,handlePageChange,fetchTableData} = useCrud(api, "projects",tableHeader);

  // Function to handle township update
  const handleTownshipChange = async (projectId, value) => {
    try {
      await api.post(`is_township/${projectId}/${value}`);
      toast.success("Township updated successfully")
      
    } catch (error) {
      console.error("Failed to update township:", error);
      toast.error(error);
    }
  };


  return (
    <section>
      <Card className="!p-[40px]">
        <CardHeading>Our Projects Table</CardHeading>
        <SearchInput
          placeholder="Search Projects..."
          onSearch={(term) => {
            if (term.trim() === "") {
              fetchTableData(1); // fetch default
            } else {
              fetchTableData(1, { search: term }); // fetch filtered
            }
          }}
        />

        <TableContainer
          head={tableHead}
          data={tableData}
          onTownshipChange={handleTownshipChange}
          onDelete={handleDelete}
          pagination={pagination}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          projectList={true}
        />
      </Card>
    </section>
  );
};

export default ProjectList;
