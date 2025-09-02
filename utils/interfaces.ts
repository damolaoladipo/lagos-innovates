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

export type ITestimonial = {
  id: number;
  type: "youtube" | "quote";
  // For YouTube type
  youtubeId?: string;
  youtubeTitle?: string;
  // For Quote type
  quote?: string;
  logo?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  // Shared fields
  avatar: {
    src: string;
    alt: string;
    fallback: string;
    width: number;
    height: number;
  };
  author: string;
  title: string;
  className?: string;
};

