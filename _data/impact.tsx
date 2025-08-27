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
  subheading: "Thousands of designers and developers have already used shadcn/ui to create beautiful and functional websites and products.",
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
      description: "startups mentored",
    },
    {
      id: "dummy-id",
      label: "Idea Hub Programme",
      value: "3",
      suffix: "",
      description: "startups mentored",
    },
  ],
};