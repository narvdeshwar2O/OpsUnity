import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const createAgentsColumns = ({openModal}) => [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "language",
    header: "Language",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("language")}</div>
    ),
  },
  {
    accessorKey: "voiceModel",
    header: "Voice Model",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("voiceModel")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("createdAt")}</div>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("updatedAt")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  // },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"));

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);

  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer" onClick={openModal}>Edit</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const  callsColumn  = [

  {
    accessorKey: "callID",
    header: "Call ID",
    cell: ({ row }) => <div>{row.getValue("callID")}</div>,
  },
  {
    accessorKey: "agent",
    header: "Agent",
    cell: ({ row }) => <div>{row.getValue("agent")}</div>,
  },
  {
    accessorKey: "caller",
    header: "Caller",
    cell: ({ row }) => <div>{row.getValue("caller")}</div>,
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
    cell: ({ row }) => <div>{row.getValue("startTime")}</div>,
  },
  {
    accessorKey: "endTime",
    header: "End Time",
    cell: ({ row }) => <div>{row.getValue("endTime")}</div>,
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => <div>{row.getValue("duration")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "endReason",
    header: "End Reason",
    cell: ({ row }) => {
      const reason = row.getValue("endReason");
      let colorClass = "";

      switch (reason) {
        case "Customer-Ended-Call":
          colorClass = "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
          break;
        case "Assistant-Said-End-Call-Phrase":
          colorClass = "bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200";
          break;
        case "Customer-Did-Not-Answer":
          colorClass = "bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100";
          break;
        case "Exceeded-Max-Duration":
          colorClass = "bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-100";
          break;
        default:
          colorClass = "bg-zinc-200 text-zinc-800 dark:bg-zinc-600 dark:text-zinc-100";
      }

      return (

        <button className={`px-3 py-1  text-xs font-medium h-8 w-fit mx-auto rounded-md flex items-center ${colorClass}`}>
          {reason}
        </button>
      );
    },
  }

];
