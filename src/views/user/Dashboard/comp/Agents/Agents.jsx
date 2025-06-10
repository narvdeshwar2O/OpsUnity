import CustomTable from "@/components/custom/Table/Table";
import { createAgentsColumns } from "@/constants/tableColumn";
import { agentData } from "@/constants/tableData";
import { DialogDemo } from "@/components/custom/Modal/Modal";
import { useModal } from "@/components/hooks/useModalHooks";
import InputField, { TextArea } from "@/components/custom/Input/input";
import { agentFormFields } from "@/constants/FormFieldsData";

const Agents = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const agentsColumns = createAgentsColumns({ openModal });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="agents">
      <CustomTable columns={agentsColumns} row={agentData} />
      <DialogDemo
        classContent="sm:max-w-[50%]"
        open={isOpen}
        onOpenChange={closeModal}
        title="Edit Agent"
        showCloseBtn={true}
        showSubmitBtn={true}
        handleSubmit={handleSubmit}
      >
        <div className="grid my-3 gap-4">
          <div className="grid gap-3">
            {agentFormFields.map((field, index) =>
              field.type === "textarea" ? (
                <div key={index}>
                  <TextArea {...field} />
                </div>
              ) : (
                <div key={index}>
                  <InputField {...field} />
                </div>
              )
            )}
          </div>
        </div>
      </DialogDemo>
    </div>
  );
};

export default Agents;
