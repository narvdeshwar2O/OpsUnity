import CustomTable from '@/components/custom/Table/Table'
import { callsColumn } from '@/constants/tableColumn'
import { callsData } from '@/constants/tableData'
const Calls = () => {
  return (
    <div>
      <CustomTable columns={callsColumn} row={callsData}/>
    </div>
  )
}

export default Calls