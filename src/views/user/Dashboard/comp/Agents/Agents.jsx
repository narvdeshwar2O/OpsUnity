import React from "react";
import CustomTable from "@/components/custom/Table/Table";
import { agentsColumns } from "@/constants/tableColumn";
import { agentData } from "@/constants/tableData";
import { DialogDemo } from "@/components/custom/Modal/Modal";

const Agents = () => {
  return (
    <div className="agents">
      <CustomTable columns={agentsColumns} row={agentData} />
    </div>
  );
};

export default Agents;
