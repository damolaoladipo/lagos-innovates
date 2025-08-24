import { ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

export interface IHeroButton {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

export interface IHero {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: IHeroButton[] | false;
  className?: string;
}

export interface ITestimonials {
  title: string;
  items: ITestimonial[];
}

export interface ITestimonial {
  id: string
  quote?: string
  author?: string
  role?: string
  description?: string
  videoUrl?: string
}
