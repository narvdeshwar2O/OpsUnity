import { useState } from "react";
import {
    Activity,
    MoveRight,
} from "lucide-react";
import Button from "@/components/ui/GradientButton";

const section = {
    id: 4,
    icon: <Activity className="inline-block mr-3 text-green-400" size={40} />,
    title: "OPSUNITY",
    subtitle: "The Cognitive Core of Infrastructure AI",
    desc: "Multimodal Generative AI for Operational Intelligence",
    details: [
        "CodeWeave™: Full-stack logic from a single prompt",
        "DocBrain™: Understands policies, blueprints, reports",
        "Voice AI Q&A: Handles 20K+ contextual calls/day",
        "Multimodal Understanding: Correlates across formats (text/image/audio)",
        "OpsAgent Deployment: AI agents trained on your private ops data",
    ],
};

export default function Product() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <div className="text-white">
                <div className="h-full flex items-center justify-center overflow-hidden">
                    <div className={`w-full h-full flex items-center justify-around mx-auto transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}>
                        <div className="flex flex-col md:flex-row items-stretch w-[90%] gap-8 px-4 md:px-0">
                            {/* Right side content */}
                            <div className="w-full flex flex-col justify-center text-center md:text-left py-6 pt-[160px] md:pt-0 md:py-12">
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold flex items-center justify-center md:justify-start mb-2 gap-2 transition-all duration-500">
                                    {section.icon}
                                    {section.title}
                                </h1>
                                <h2 className="text-white italic text-sm sm:text-base flex items-center gap-2 justify-center md:justify-start">
                                    <MoveRight size={16} /> {section.subtitle}
                                </h2>
                                <p className="text-base sm:text-lg max-w-xl text-gray-300 mt-3 mx-auto md:mx-0">
                                    {section.desc}
                                </p>
                                <ul className="text-left max-w-xl text-gray-400 text-sm md:text-base space-y-1 mt-4 mx-auto md:mx-0">
                                    {section.details?.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-3"> <Button label="Get started" to="/dashboard"/></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}