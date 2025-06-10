import { Card } from "@/components/ui/card";

const Overview = ({ statsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card
            key={index}
            className="bg-slate-900/50 border border-slate-500/30 rounded-md p-3 hover:bg-gray-900/70 transition-colors shadow-md"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-gray-400 text-sm font-medium mb-2">
                  {stat.title}
                </h3>
                <div className="text-2xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    stat.changeType === "positive"
                      ? "text-green-400"
                      : stat.changeType === "negative"
                      ? "text-red-400"
                      : "text-gray-400"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
              <div className={`${stat.iconColor} p-3 rounded-full`}>
                <IconComponent size={20} className="text-white" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Overview;
