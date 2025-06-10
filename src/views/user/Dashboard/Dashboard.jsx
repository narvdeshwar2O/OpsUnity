import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Phone,
  RotateCcw,
  ThumbsUp,
  TrendingUp,
  Users,
} from "lucide-react";
import Overview from "./comp/Overview/Overview";
import Calls from "./comp/Calls/Calls";
import Reports from "./comp/Reports/Reports";
import Agents from "./comp/Agents/Agents";

const tabsData = [
  { value: "overview", label: "Overview" },
  { value: "agents", label: "Agents" },
  { value: "calls", label: "Calls" },
  { value: "reports", label: "Reports" },
];

const statsData = [
  {
    title: "Total Voice Agents",
    value: "1",
    change: "+100% from last month",
    changeType: "positive",
    icon: Users,
    iconColor: "bg-teal-500",
  },
  {
    title: "Total Calls",
    value: "15",
    change: "Not Applicable",
    changeType: "neutral",
    icon: Phone,
    iconColor: "bg-blue-500",
  },
  {
    title: "Avg. Call Duration",
    value: "02:14 min",
    change: "+5.1% from last month",
    changeType: "positive",
    icon: Clock,
    iconColor: "bg-purple-500",
  },
  {
    title: "Conversion Rate",
    value: "14.8%",
    change: "+2.3% from last month",
    changeType: "positive",
    icon: TrendingUp,
    iconColor: "bg-orange-500",
  },
  {
    title: "Positive Feedback",
    value: "89%",
    change: "+3.8% from last month",
    changeType: "positive",
    icon: ThumbsUp,
    iconColor: "bg-blue-600",
  },
  {
    title: "Repeat Caller Rate",
    value: "5.2%",
    change: "+1.2% from last month",
    changeType: "negative",
    icon: RotateCcw,
    iconColor: "bg-red-500",
  },
];

const tabComponents = {
  overview: <Overview statsData={statsData} />,
  agents: <Agents />,
  calls: <Calls />,
  reports: <Reports />
};

const Dashboard = () => {

  return (
    <div className="w-[90%] p-3 mx-auto">
      <div className="dashboard border border-slate-400/30 rounded-md p-3 bg-slate-900/50">
        <Tabs defaultValue="overview">
          <TabsList className="border border-slate-400/30">
            {tabsData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="cursor-pointer">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="mx-auto w-[100%]"
            >
              {tabComponents[tab.value]}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
