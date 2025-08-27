import { ITestimonials } from "@/utils/interfaces";


export const Testimoni = {
  heading: "Testimonials",
  subheading: "Hub Loans are available to operators of co-working spaces, incubators and hubs in Lagos State on very attractive terms, very attractive terms.",
  items: [
    {
    id: "workspace-voucher",
    quote:
      "The workspace voucher has been instrumental to my business growth. It has allowed me to have a professional and flexible workspace without the burden of a lease or high overhead costs.",
    author: "KatexPower",
    role: "Beneficiary of Lagos Innovates Workspace Voucher",
  },
  {
    id: "talent-development",
    description:
      "The participants of the Lagos Innovates Talent Development Programme engaged in a stimulating discussion, sharing insights and experiences from their journey throughout the program.",
  },
  {
    id: "dynalimb-idea-hub-1",
    description:
      "Meet Dynalimb Technologies, a participant in the Idea Hub program. Dynalimb Technologies is a startup that provides affordable, functional, and cosmetic prosthetic and orthotic services to individuals with disabilities to aid their mobility.",
    videoUrl: "https://youtu.be/b6o90zNQ3nA",
  },
  {
    id: "dynalimb-idea-hub-2",
    description:
      "They aim to assist people with disabilities by offering both functional and aesthetically pleasing mobility aids. Listen to their experience with the Idea Hub Program.",
    videoUrl: "https://youtu.be/eygeCirCKWk",
  },
  ],
};

// The data object that will be imported
export const TestimonialsData: ITestimonials = {
  heading: "Testimonials",
  subheading: "See what beneficiaries has to say.",
  items: [
    {
      id: 1,
      logo: "https://html.tailus.io/blocks/customers/nike.svg",
      logoAlt: "Nike Logo",
      logoWidth: 200, // Replace with actual logo dimensions
      logoHeight: 48,
      quote: "Meet Dynalimb Technologies, a participant in the Idea Hub program. Dynalimb Technologies is a startup that provides affordable, functional, and cosmetic prosthetic and orthotic services to individuals with disabilities to aid their mobility.",
      avatar: {
        src: "https://tailus.io/images/reviews/shekinah.webp",
        alt: "Damola Oladipo",
        fallback: "ST",
        width: 400,
        height: 400,
      },
      author: "Damola Oladipo",
      title: "Software Engineer",
      className: "sm:col-span-2 lg:row-span-2",
    },
    {
      id: 2,
      logo: "", // No logo for this item
      logoAlt: "",
      logoWidth: 0,
      logoHeight: 0,
      quote: "The workspace voucher has been instrumental to my business growth. It has allowed me to have a professional and flexible workspace without the burden of a lease or high overhead costs.",
      avatar: {
        src: "https://tailus.io/images/reviews/jonathan.webp",
        alt: "Damola Oladipo",
        fallback: "JY",
        width: 400,
        height: 400,
      },
      author: "Adebayo Peter",
      title: "Dynalimb Technologies",
      className: "md:col-span-2",
    },
    {
      id: 3,
      logo: "",
      logoAlt: "",
      logoWidth: 0,
      logoHeight: 0,
      quote: "They aim to assist people with disabilities by offering both functional and aesthetically pleasing mobility aids.",
      avatar: {
        src: "https://tailus.io/images/reviews/yucel.webp",
        alt: "Abigail Ade",
        fallback: "YF",
        width: 400,
        height: 400,
      },
      author: "Abigail Ade",
      title: "Creator, Tailkits",
      className: "",
    },
    {
      id: 4,
      logo: "",
      logoAlt: "",
      logoWidth: 0,
      logoHeight: 0,
      quote: "They aim to assist people with disabilities by offering both functional and aesthetically pleasing mobility aids.",
      avatar: {
        src: "https://tailus.io/images/reviews/rodrigo.webp",
        alt: "Adetola Bola",
        fallback: "RA",
        width: 400,
        height: 400,
      },
      author: "Adetola Bola",
      title: "Creator, Tailwind",
      className: "card variant-mixed",
    },
  ],
};
