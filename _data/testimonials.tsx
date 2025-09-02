import { ITestimonials } from "@/utils/interfaces";

export const TestimonialsData: ITestimonials = {
  heading: "Testimonials",
  subheading: "See what beneficiaries have to say.",
  items: [
    {
      id: 1,
      type: "youtube",
      youtubeId: "b6o90zNQ3nA",
      youtubeTitle: "Customer Success Story",
      author: "Taiwo Akinsanya",
      title: "CEO, Dynalimb Technologies",
      avatar: {
        src: "/professional-woman-diverse.png",
        alt: "Taiwo Akinsanya",
        height: 48,
        width: 48,
        fallback: "TA",
      },
      className: "md:col-span-2 lg:row-span-2",
    },
    {
      id: 2,
      type: "quote",
      logo: "",
      logoAlt: "",
      logoWidth: 0,
      logoHeight: 0,
      quote:
        "The workspace voucher has been instrumental to my business growth. It has allowed me to have a professional and flexible workspace without the burden of a lease or high overhead costs.",
      avatar: {
        src: "https://tailus.io/images/reviews/jonathan.webp",
        alt: "Adebayo Peter",
        fallback: "AP",
        width: 400,
        height: 400,
      },
      author: "Adebayo Peter",
      title: "Kintil Technologies",
      className: "md:col-span-2",
    },
    {
      id: 3,
      type: "quote",
      logo: "",
      logoAlt: "",
      logoWidth: 0,
      logoHeight: 0,
      quote:
        "The co-working space support gave us the stability we needed in our early days, and today we’ve scaled into multiple cities.",
      avatar: {
        src: "https://tailus.io/images/reviews/yucel.webp",
        alt: "Abigail Ade",
        fallback: "AA",
        width: 400,
        height: 400,
      },
      author: "Abigail Ade",
      title: "CEO, munch N` eat",
      className: "",
    },
    {
      id: 4,
      type: "quote",
      logo: "",
      logoAlt: "",
      logoWidth: 0,
      logoHeight: 0,
      quote:
        "It's priceless for my business. The funding and support from Lagos Innovates helped us test and refine our product faster.",
      avatar: {
        src: "https://tailus.io/images/reviews/rodrigo.webp",
        alt: "Bola Adetona",
        fallback: "BA",
        width: 400,
        height: 400,
      },
      author: "Bola Adetona",
      title: "Creator, Tailnow Studios",
      className: "card variant-mixed",
    },
  ],
};
