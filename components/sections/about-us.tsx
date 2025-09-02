import { AboutUsData } from "@/_data/about-us";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 pt-20 md:py-32 dark:bg-[#171717]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <img
          className="rounded-(--radius) grayscale"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="team image"
          height=""
          width=""
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium"></h2>
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h1"
            className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16"
          >
            {AboutUsData.heading}
          </TextEffect>
          <div className="space-y-6">
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mt-8 max-w-2xl text-lg text-pretty"
            >
              {AboutUsData.subheading}
            </TextEffect>

            <div className="flex flex-1">
              <div className="group rounded-[calc(var(--radius-sm)+0.125rem)]">
                <Button
                  asChild
                  size="lg"
                  variant={AboutUsData.button.variant}
                  className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                >
                  <a href={AboutUsData.button.href}>
                    <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                      {AboutUsData.button.text}

                      <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                    </span>

                    <div
                      className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, var(--color-green), var(--color-orange))",
                      }}
                    ></div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
