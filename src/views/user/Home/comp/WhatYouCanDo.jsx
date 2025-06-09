import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";

const items = [
    {
        id: "1",
        title: "24/7 Call Reception",
        description:
            "Automatically receive and respond to phone calls around the clock using smart AI logic.",
    },
    {
        id: "2",
        title: "Natural Conversations",
        description:
            "Powered by GPT and Whisper, your agent understands and responds just like a human.",
    },
    {
        id: "3",
        title: "Manage in Real-Time",
        description:
            "Use your dashboard to monitor conversations, fine-tune behavior, and control responses.",
    },
];

const WhatYouCanDo = () => {
    return (
        <section className="mt-3">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                    What You Can Do
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] mx-auto">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        className="shadow-md transition-all cursor-pointer duration-300 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/20 hover:scale-105"
                    >
                        <CardHeader>
                            <CardTitle className="text-center text-lg md:text-xl text-white">
                                {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-gray-100 text-sm md:text-base">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default WhatYouCanDo;
