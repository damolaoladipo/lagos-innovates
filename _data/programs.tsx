// @/_data/programs.ts
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // we’ll map this to lucide icons dynamically
}

export interface Program {
  id: string;
  heading: string;
  subheading: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  button1: {
    id: string;
    text: string;
    href: string;
    variant: "default" | "outline" | "secondary" | "glow";
  };
  button2?: {
    id: string;
    text: string;
    href: string;
    variant: "default" | "outline" | "secondary" | "glow";
    icon?: string;
  };

  features: Feature[];
}

export const ProgramsData: Program[] = [
  {
    id: "idea-hub",
    heading: "Idea Hub Program",
    subheading:
      "The Lagos Innovates Idea Hub Program is a 12-week incubation program designed to support very early stage tech-enabled ventures with relevant skills, networking opportunities and mentorship from seasoned industry experts to achieve a minimum viable product; geared towards building a competitive and sustainable brand.",
    image: {
      src: "/blocks/hub.png",
      alt: "Idea hub",
      height: 1400,
      width: 1400,
    },
    button1: {
      id: "01",
      href: "/apply-now",
      text: "Apply Now",
      variant: "default" as const,
    },
    button2: {
      id: "02",
      href: "/download",
      text: "Download Guide",
      variant: "glow" as const,
      icon: "Arrow",
    },
    features: [
      {
        id: "mentorship",
        title: "Mentorship",
        description:
          "Business incubation and coaching from Lagos Innovates’ experienced and seasoned mentors.",
        icon: "Lightbulb",
      },
      {
        id: "network",
        title: "Network",
        description:
          "Access to Lagos Innovates’ strong ecosystem of government, corporates, startups, and investors.",
        icon: "Network",
      },
      {
        id: "services",
        title: "Services",
        description:
          "Administrative support including legal, accounting, human resources, and more.",
        icon: "Briefcase",
      },
      {
        id: "funding",
        title: "Funding",
        description:
          "An opportunity to pitch for Lagos Innovates Workspace Vouchers for 6 or 12 months (valued between ₦120,000 – ₦1,800,000).",
        icon: "CreditCard",
      },
    ],
  },
  {
    id: "talent-development",
    heading: "Talent Development Programme",
    subheading:
      "The Talent Development Programme enables aspiring and existing tech professionals to upskill by granting them access to courses through a student loan program. Lagos Innovates, in partnership with Honeywell Group, is supporting capacity development to build a formidable tech talent pipeline and improve the investability of startups in Lagos. The program funds up to 80% of the cost of attendance for high-potential individuals such as founders, developers, or startup employees active in the Lagos ecosystem.",
    image: {
      src: "/blocks/hub.png",
      alt: "Idea hub",
      height: 1400,
      width: 1400,
    },

    button1: {
      id: "01",
      href: "/apply-now",
      text: "Apply Now",
      variant: "default" as const,
    },
    button2: {
      id: "02",
      href: "/download",
      text: "Download Guide",
      variant: "glow" as const,
      icon: "Arrow",
    },
    features: [
      {
        id: "access",
        title: "Access",
        description:
          "Covers up to 80% of course fees through the student loan program, making quality training affordable for aspiring tech talent.",
        icon: "BookOpen",
      },
      {
        id: "upskill",
        title: "Upskill",
        description:
          "Supports Lagos residents in gaining in-demand technology skills that improve employability and career growth.",
        icon: "GraduationCap",
      },
      {
        id: "support",
        title: "Support",
        description:
          "Backed by Lagos Innovates in partnership with Honeywell Group to build a formidable talent pipeline for the ecosystem.",
        icon: "Handshake",
      },
      {
        id: "impact",
        title: "Impact",
        description:
          "Focused on high-potential individuals such as founders, developers, and startup employees who can strengthen the Lagos tech ecosystem.",
        icon: "Users",
      },
    ],
  },
  {
    id: "workspace-voucher",
    heading: "Workspace Vouchers",
    subheading:
      "Workspace Vouchers offer high-potential new founders and teams a significant discount on membership costs at Lagos Innovates’ Partner Hubs. The vouchers support very early-stage ventures by facilitating access to affordable, well-equipped workspaces. Lagos Innovates covers 30% to 75% of membership costs for 3 to 12 months, depending on stage. Applications are judged on merit, provided they meet the eligibility criteria. A panel of judges evaluates each venture based on market opportunity, team strength, traction or progress, and third-party recommendations. Scoring is out of 100 points, with a minimum of 50 points required, and vouchers are awarded to the highest-scoring ventures until they are fully allocated. While third-party recommendations from founders, investors, or hub operators are not mandatory, they can strengthen an application and improve its score.",
    image: {
      src: "/blocks/hub.png",
      alt: "Idea hub",
      height: 1400,
      width: 1400,
    },

    button1: {
      id: "01",
      href: "/apply-now",
      text: "Apply Now",
      variant: "default" as const,
    },
    button2: {
      id: "02",
      href: "/download",
      text: "Download Guide",
      variant: "glow" as const,
      icon: "Arrow",
    },
    features: [
      {
        id: "stage",
        title: "Early Stage",
        description:
          "Your venture is at ideation or very early revenue, either not yet incorporated or incorporated for less than one year.",
        icon: "Rocket",
      },
      {
        id: "team",
        title: "Founder-Led",
        description:
          "Your team is small with no paid staff — only co-founders working together.",
        icon: "Users",
      },
      {
        id: "revenue",
        title: "Growing Revenue",
        description:
          "Your venture does not generate monthly revenues above one million naira.",
        icon: "TrendingUp",
      },
      {
        id: "capital",
        title: "Bootstrapped",
        description:
          "Your venture has never received third-party capital, including grants, equity, or debt.",
        icon: "PiggyBank",
      },
    ],
  },
  {
    id: "hub-loans",
    heading: "Hub Loans Programs",
    subheading:
      "Hub Loans are available to operators of co-working spaces, incubators and hubs in Lagos State on very attractive terms: 9 percent interest for four years. Lagos Innovates recognises the vital role that co-working spaces, incubators and hubs play in the Lagos startup ecosystem. By taking a community-focused approach, and through their programs, mentorship, networks and resources, they help catalyse growth opportunities for high potential entrepreneurs and startups. Lagos Innovates is making meaningful capital available on very attractive terms to high-performing, outcome-focused workspace providers in Lagos State. The Hub Loan program is available to operators who are looking to fund expansion or improvement of their existing facilities at current sites, or to increase their number of locations.",
    image: {
      src: "/blocks/hub.png",
      alt: "Idea hub",
      height: 1400,
      width: 1400,
    },

    button1: {
      id: "01",
      href: "/apply-now",
      text: "Apply Now",
      variant: "default" as const,
    },
    button2: {
      id: "02",
      href: "/download",
      text: "Download Guide",
      variant: "glow" as const,
      icon: "Arrow",
    },
    features: [
      {
        id: "registered",
        title: "Registered",
        description:
          "Your business is registered in Nigeria, and has its headquarters in Lagos State.",
        icon: "Zap",
      },
      {
        id: "facility",
        title: "Facility",
        description:
          "Your business operates as a co-working facility, incubator or innovation hub located in Lagos State.",
        icon: "Cpu",
      },
      {
        id: "compliant",
        title: "Compliant",
        description:
          "At least one of your shareholders or directors is a Lagos State resident and can show evidence of personal tax compliance.",
        icon: "Lock",
      },
      {
        id: "ai",
        title: "Track Record",
        description:
          "Your business is tax compliant, and has been for the last three years (or, if active for less than three years, for the period since it has been operational).",
        icon: "Sparkles",
      },
    ],
  },
];

export const ProgramsSection = {
  heading: "Explore our programs",
  subheading:
    "Discover initiatives and opportunities crafted to support talents, startups, and innovation hubs.",
  items: [
    {
      id: "idea-hub",
      title: "Idea Hub Programme",
      image: "/blocks/idea-hub.png",
      description:
        "The Lagos Innovates Idea Hub Program is a 12-week incubation program designed to support very early stage tech-enabled ventures with relevant skills, networking opportunities and mentorship from seasoned industry experts to achieve a minimum viable product; geared towards building a competitive and sustainable brand.",
      cta: {
        label: "Learn More",
        link: "programs/idea-hub",
      },
    },
    {
      id: "talent-development",
      title: "Talent Development Programme",
      image: "/images/about.png",
      description:
        "Lagos Innovates, in partnership with Honeywell Group, is supporting capacity development to build a formidable tech talent pipeline and improve the investability of startups in Lagos. The program funds up to 80% of the cost of attendance for high-potential individuals such as founders, developers, or startup employees active in the Lagos ecosystem.",
      cta: {
        label: "Apply now",
        link: "/programs/talent",
      },
    },
    {
      id: "workspace-voucher",
      title: "Workspace Vouchers",
      image: "/blocks/workspace.png",
      description:
        "Workspace Vouchers offer high-potential new founders and teams a significant discount on membership costs at Lagos Innovates’ Partner Hubs. The vouchers support very early-stage ventures by facilitating access to affordable, well-equipped workspaces. Lagos Innovates covers 30% to 75% of membership costs for 3 to 12 months, depending on stage. Applications are competitive and merit-based.",
      cta: {
        label: "Apply now",
        link: "/programs/workspace-vouchers",
      },
    },
    {
      id: "hub-loans",
      title: "Hub Loans Programme",
      image: "/blocks/hub.png",
      description:
        "Hub Loans are available to operators of co-working spaces, incubators and hubs in Lagos State on very attractive terms: 9 percent interest for four years. Lagos Innovates recognises the vital role that co-working spaces, incubators and hubs play in the Lagos startup ecosystem.",
      cta: {
        label: "Apply now",
        link: "/programs/hub-loans",
      },
    },
  ],
};

export const Programzs = {
  heading: "Our programs made for you",
  items: [
    {
      id: "hub-loans",
      title: "Hub Loans",
      description:
        "Hub Loans are available to operators of co-working spaces, incubators and hubs in Lagos State on very attractive terms: 9 percent interest for four years. Lagos Innovates recognises the vital role that co-working spaces, incubators and hubs play in the Lagos startup ecosystem. By taking a community-focused approach, and through their programs, mentorship, networks and resources, they help catalyse growth opportunities for high potential entrepreneurs and startups. Lagos Innovates is making meaningful capital available on very attractive terms to high-performing, outcome-focused workspace providers in Lagos State. The Hub Loan program is available to operators who are looking to fund expansion or improvement of their existing facilities at current sites, or to increase their number of locations.",
      eligibility: [
        "Your business is registered in Nigeria, and has its headquarters in Lagos State.",
        "Your business operates as a co-working facility, incubator or innovation hub located in Lagos State.",
        "At least one of your shareholders or directors is a Lagos State resident and can show evidence of personal tax compliance.",
        "Your business is tax compliant, and has been for the last three years (or, if active for less than three years, for the period since it has been operational).",
      ],
      selection: [
        "Hub Loan applications must be made online and will be judged entirely on their individual merits, subject to the business meeting the eligibility criteria for a Hub Loan.",
        "Additional information can be found in the Hub Loan Applications Guidelines, downloadable below.",
      ],
      guideline: {
        label: "Download: Lagos Innovates Hub Loan Guidelines",
        link: "#",
      },
      cta: {
        label: "Apply now",
        link: "#",
      },
    },
    {
      id: "talent-development",
      title: "Talent Development Programme",
      description:
        "The Talent Development Programme enables aspiring and existing tech professionals to upskill by granting them access to courses through a student loan program. Lagos Innovates, in partnership with Honeywell Group, is supporting capacity development to build a formidable tech talent pipeline and improve the investability of startups in Lagos. The program funds up to 80% of the cost of attendance for high-potential individuals such as founders, developers, or startup employees active in the Lagos ecosystem.",
      eligibility: [
        "Lagos State residents who want to upskill themselves in technology-based training/courses.",
      ],
      selection: [
        "Candidates apply online. Selection is merit-based and focused on individuals who show the highest potential to contribute to the Lagos startup ecosystem.",
      ],
      guideline: {
        label: "Download: Lagos Innovates - Talent Development Guidelines.",
        link: "#",
      },
      cta: {
        label: "Apply now",
        link: "#",
      },
    },
    {
      id: "workspace-voucher",
      title: "Workspace Vouchers",
      description:
        "Workspace Vouchers offer high-potential new founders and teams a significant discount on membership costs at Lagos Innovates’ Partner Hubs. The vouchers support very early-stage ventures by facilitating access to affordable, well-equipped workspaces. Lagos Innovates covers 30% to 75% of membership costs for 3 to 12 months, depending on stage. Applications are competitive and merit-based.",
      eligibility: [
        "Your venture stage is anywhere from ideation to very early revenue (either not yet incorporated, or incorporated less than one year).",
        "Your team is small and has no paid staff — only co-founders.",
        "You do not generate monthly revenues of more than one million naira.",
        "You have never received any third-party capital for your venture (including grants, equity, or debt).",
      ],
      selection: [
        "Applications are judged on merit, subject to meeting eligibility criteria.",
        "A panel of judges evaluates based on market opportunity, team strength, traction/progress, and third-party recommendations.",
        "Maximum score is 100 points. A minimum of 50 points is required. Vouchers are awarded to the highest scoring ventures until exhausted.",
        "Third-party recommendations (from founders, investors, hub operators, etc.) are not mandatory but can boost scores.",
      ],
      guideline: {
        label: "Download: Lagos Innovates - Workspace Voucher Guidelines.",
        link: "#",
      },
      cta: {
        label: "Apply now",
        link: "#",
      },
    },
  ],
};
