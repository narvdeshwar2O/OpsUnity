import CustomTable from "@/components/custom/Table/Table";
import { useModal } from "@/components/hooks/useModalHooks";
import {  CreateCallsColumn } from "@/constants/tableColumn";
import { callsData } from "@/constants/tableData";
import CallDetails from "./comp/CallDetails";
import { useState } from "react";
const Calls = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    console.log("called")
    setIsOpenModal(true)
  }
  const callsColumn = CreateCallsColumn({ openModal });
  console.log("callscolumn",callsColumn)
  return (
    <div>
      <CustomTable columns={callsColumn} row={callsData} />
      <CallDetails
        open={isOpenModal}
        onOpenChange={openModal}
        // callData={selectedRow}
      />
    </div>
  );
};

export default Calls;
