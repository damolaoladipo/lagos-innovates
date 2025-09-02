"use client";

import { useSearchParams } from "next/navigation";

import { Suspense } from "react";

import * as Icons from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { ProgramsData } from "@/_data/programs";
import { TextEffect } from "@/components/ui/text-effect";

// This is the component that uses the hook.
function ProgramComponent({ params }: { params: Promise<{ id: string }> }) {
   
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const program = ProgramsData.find((p) => p.id === id);

  if (!program) {
    return <p className="p-6 text-center">Program not found</p>;
  }

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        {/* Program image */}
        <img
          className="rounded-(--radius) grayscale"
          src={program.image.src}
          alt={program.image.alt}
          width={program.image.width}
          height={program.image.height}
          loading="lazy"
        />

        {/* Heading + Subheading + Button */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-x-12">
          <div className="flex-1 items-start">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-6 max-w-2xl text-left text-4xl font-medium md:text-5xl"
            >
              {program.heading}
            </TextEffect>
          </div>

          <div className="flex flex-1 flex-col space-y-6">
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mt-8 max-w-2xl text-left text-lg text-pretty"
            >
              {program.subheading}
            </TextEffect>

            <div className="flex flex-1">
              <Button
                asChild
                size="lg"
                variant={program.button.variant}
                className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
              >
                <a href={program.button.href}>
                  <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                    {program.button.text}
                    {/* Dynamic icon */}
                    <Icons.ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                  <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)] transition-transform duration-300 group-hover:translate-x-0"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Dynamic Features */}
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          {program.features.map((feature) => {
            const Icon =
              (Icons as unknown as Record<string, React.ElementType>)[
                feature.icon
              ] || Icons.Zap;
            return (
              <div key={feature.id} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon className="size-4" />
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Wrap your component in a Suspense boundary for the export.
export default function Program({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div>Loading program details...</div>}>
      <ProgramComponent params={params}  />
    </Suspense>
  );
}
