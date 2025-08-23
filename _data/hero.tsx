import { ArrowRightIcon, ShoppingCart } from "lucide-react";
import { siteConfig } from "@/_data/site-config";
import { Badge } from "@/components/ui/badge";
import Screenshot from "@/components/ui/screenshot";

export const heroData = {
  title: "Quality you can trust and build on.",
  description:
    "Smart, modern websites built to win clients and grow your business. A website that helps your business stand out and turn visitors into customers.",
  mockup: (
    <Screenshot
      srcLight="/dashboard-light.png"
      srcDark="/dashboard-dark.png"
      alt="Launch UI app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge: (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">Call +2349061590172 !</span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Get started
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons: [
    {
      href: siteConfig.getStartedUrl,
      text: "Pre-Order Now",
      variant: "default" as const,
    },
    {
      href: siteConfig.links.github,
      text: "Buy now",
      variant: "glow" as const,
      icon: <ShoppingCart className="mr-2 size-4" />,
    },
  ],
};
