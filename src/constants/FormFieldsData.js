export const agentFormFields = [
  {
    id: "name",
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter agent name",
    required: true,
    defaultValue: "Neha",
    section: "model"
  },
  {
    id: "description",
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter agent description",
    required: false,
    defaultValue: "Neha is an AI Agent, that works for HC Call Center to handle the customer grievances.",
    section: "model"
  },
  {
    id: "introduction",
    name: "introduction",
    label: "Introduction",
    subtitle: "(When agent receives the call)",
    type: "textarea",
    placeholder: "Enter introduction message",
    required: false,
    defaultValue: "Thank you for contacting the Cyber Crime. My name is Neha, and I'll be assisting you with your scheduling needs today. How may I help you?",
    section: "model"
  },
  {
    id: "endingCallMessage",
    name: "endingCallMessage",
    label: "Ending Call Message",
    subtitle: "(When agent ends the call)",
    type: "textarea",
    placeholder: "Enter ending call message",
    required: false,
    defaultValue: "Once again, thank you for Calling Cyber Crime. We truly appreciate your patience and the opportunity to make this right. If you need further assistance, don't hesitate to call us. Wishing you a peaceful day ahead.",
    section: "model"
  },
  {
    id: "voiceMailMessage",
    name: "voiceMailMessage",
    label: "VoiceMail Message",
    subtitle: "(When agent is not available)",
    type: "textarea",
    placeholder: "Enter voicemail message",
    required: false,
    defaultValue: "Hello, this is Neha from Cyber Crime Department. I'm not available at the moment. Please call us back in between 9:00 AM to 6:00 PM.",
    section: "model"
  }
];

  