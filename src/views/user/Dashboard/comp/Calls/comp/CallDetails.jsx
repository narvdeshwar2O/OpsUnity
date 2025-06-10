import React, { memo } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Transcript from "./Transcript";
import Recording from "./Recording";
import record from "@/assets/opunity.mp3"
import { CallDurationDonut } from "@/components/ui/CallDurationDonut";
import { messages } from "./message";

const InfoCard = memo(({ label, value, className = "" }) => (
    <div className={`rounded-md border p-4 ${className}`}>
        <p className="text-muted-foreground text-sm">{label}</p>
        <p className="text-lg font-medium">{value}</p>
    </div>
));

InfoCard.displayName = "InfoCard";

// Tab content components for better organization
const OverviewTab = memo(({ callData }) => (
    <div className="grid grid-cols-2 gap-4">
        <InfoCard label="Caller" value={callData.caller} />
        <InfoCard label="Start Time" value={callData.startTime} />
        <InfoCard label="End Time" value={callData.endTime} />
        <InfoCard label="Duration" value={callData.duration} />
        <InfoCard
            label="End Reason"
            value={callData.endReason}
            className="col-span-2"
        />
    </div>
));

OverviewTab.displayName = "OverviewTab";

const TranscriptTab = memo(() => (
    <div className="space-y-4">
        <Transcript
            messages={messages}
        />

    </div>
));

TranscriptTab.displayName = "TranscriptTab";

const RecordingTab = memo(() => (
    <div className="space-y-4">
        <Recording title="Conversation" date="22/6/2025" file={record} />
    </div>
));

RecordingTab.displayName = "RecordingTab";

const AnalysisTab = memo(() => (
    <div className="space-y-4">
        <CallDurationDonut />
    </div>
));

AnalysisTab.displayName = "AnalysisTab";

const CallDetails = memo(({ open, onOpenChange, callData }) => {
    // Early return optimization
    if (!callData) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="min-w-1/2 dark:bg-slate-900">
                <DialogHeader>
                    <DialogTitle className="text-xl text-center">
                        Call Details
                    </DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="overview" className="mt-4 w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-muted mb-4">
                        <TabsTrigger value="overview" className="cursor-pointer">Overview</TabsTrigger>
                        <TabsTrigger value="transcript" className="cursor-pointer">Transcript</TabsTrigger>
                        <TabsTrigger value="recording" className="cursor-pointer">Recording</TabsTrigger>
                        <TabsTrigger value="analysis" className="cursor-pointer">Analysis</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                        <OverviewTab callData={callData} />
                    </TabsContent>

                    <TabsContent value="transcript">
                        <TranscriptTab />
                    </TabsContent>

                    <TabsContent value="recording">
                        <RecordingTab />
                    </TabsContent>

                    <TabsContent value="analysis">
                        <AnalysisTab />
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
});

CallDetails.displayName = "CallDetails";

export default CallDetails;