import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Recording = ({ title, date, file }) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-white text-base">
          {title}
        </CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
      </CardHeader>

      <CardContent>
        <audio
          controls
          className="w-full"
          style={{
            colorScheme: "dark",
          }}
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src={file} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </CardContent>
    </Card>
  );
};

export default Recording;
