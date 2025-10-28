"use client"
import { BASE_ADMIN } from '../../../../config';
import Card from '@/admin/components/card/Card';
import CardHeading from '@/admin/components/card/CardHeading';
import TableContainer from '@/admin/components/table/TableContainer';
import { useApi } from '@/admin/hooks/useApi';
import { useCrud } from '@/admin/hooks/useCrud';
import React from 'react'

const tableHead = ["Name", "Mobile", "Email", "Message"];
const tableHeader = ["name","mobile","email", "message"];

const page = () => {
    
      const api = useApi(BASE_ADMIN);
      const { tableData,pagination,currentPage,handlePageChange } = useCrud(api, "get-all-enquiry",tableHeader);

  return (
    <section>
      <Card className="!p-[40px]">
        <CardHeading>Our Projects Table</CardHeading>
        <TableContainer
          head={tableHead}
          data={tableData}
              pagination={pagination}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              showAction={false}
        />
      </Card>
    </section>
  )
}

export default page
