export interface ImpactItem {
  id: string;
  label: string;
  value: string;   
  suffix?: string;
  description: string;
}

export interface ImpactData {
  heading: string;
  subheading: string
  items: ImpactItem[];
}


export const impactData: ImpactData = {
  heading: "Our Impact",
  subheading: "Empowering talents, startups, and hubs through skills, resources, and support for sustainable growth.",
  items: [
    {
      id: "talent-development",
      label: "Talent Development",
      value: "4500",
      suffix: "+",
      description: "individuals supported with tech-based upskilling",
    },
    {
      id: "workspace-voucher",
      label: "Workspace Voucher",
      value: "700",
      suffix: "+",
      description: "startups supported with vouchers worth ₦167 million",
    },
    {
      id: "hub-loan",
      label: "Hub Loan Programme",
      value: "250",
      suffix: "+",
      description: "innovation hubs supported",
    },
    {
      id: "idea-hub",
      label: "Idea Hub Programme",
      value: "57",
      suffix: "",
      description: "startups mentored",
    },
  ],
};