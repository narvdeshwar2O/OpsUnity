import React from "react";
import CustomTable from "@/components/custom/Table/Table";
import { agentsColumns } from "@/constants/tableColumn";
import { agentData } from "@/constants/tableData";

const Agents = () => {
  return (
    <div className="agents">
      <CustomTable columns={agentsColumns} row={agentData} />
    </div>
  );
};

export default Agents;
