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
            <button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={openModal}>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const callsColumn = [
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
    cell: ({ row }) => (
      <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
        {row.getValue("endReason")}
      </span>
    ),
  },
];
