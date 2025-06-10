import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Transcript = ({ messages }) => {
  return (
    <div className="border rounded-md shadow-md">
      <div className="bg-muted px-4 py-2 rounded-t-md border-b font-medium text-sm flex items-center gap-2">
        <span className="text-primary">📄 Call Transcript</span>
      </div>
      <ScrollArea className="h-[400px] p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex flex-col p-2 ${msg.role === "agent" ? "items-end" : "items-start"}`}>
            <span className="text-xs text-muted-foreground mb-2">{msg.role === "agent" ? "Agent" : "User"}</span>
            <div
              className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                msg.role === "agent"
                  ? "bg-blue-100 text-black dark:bg-blue-900"
                  : "bg-gray-100 text-black dark:bg-gray-800"
              }`}
            >
              {msg.text}
            </div>
            <span className="text-xs text-muted-foreground mt-1">{msg.time}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Transcript;
