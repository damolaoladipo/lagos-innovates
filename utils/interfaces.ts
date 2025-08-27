import { buttonVariants} from "@/components/ui/button";
import { ReactNode } from "react";

export interface IHeroButton {
  href: string;
  text: string;
  variant?: typeof buttonVariants;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

export interface IHero {
  title?: string;
  description?: string;
  mockup?: ReactNode | false | boolean | string;
  badge?: ReactNode | false;
  buttons?: IHeroButton[] | false;
  className?: string;
}

export interface ITestimonials {
  heading: string;
  subheading: string
  items: ITestimonial[];
}

// export interface ITestimonial {
//   id: string
//   quote?: string
//   author?: string
//   role?: string
//   description?: string
//   videoUrl?: string
// }

export type ITestimonial = {
  id: number;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  avatar: {
    src: string;
    alt: string;
    fallback: string;
    width: number;
    height: number;
  };
  author: string;
  title: string;
  quote: string;
  videoUrl?: string
  className?: string;
};
