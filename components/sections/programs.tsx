"use client";

import { useState } from "react";
import { ArrowUpRight, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ProgramsSection } from "@/_data/programs";
import Link from "next/link";

export default function Programs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);

  const toggleOverlay = (index: number) => {
    setOverlayIndex(overlayIndex === index ? null : index);
  };

  return (
    <section className="text-foreground bg-white py-16 pt-20 md:py-32 dark:bg-[#171717]">
      <div className="@container mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-10 items-start text-start">
          <h2 className="mb-6 text-5xl font-medium text-balance">
            {ProgramsSection.heading}
          </h2>
          <p className="mr-12 max-w-md text-lg leading-relaxed">
            {ProgramsSection.subheading}
          </p>
        </div>

        {/* Components Grid */}
        <div className="group relative">
          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {ProgramsSection.items.map((item, index) => (
              <div
                key={item.id}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={cn(
                    "bg-card border-border relative overflow-hidden rounded-lg transition-all duration-300",
                    hoveredIndex === index &&
                      "border-accent bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]",
                  )}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20"></div>
                  </div>

                  {/* Content */}
                  <div className="bg-brand/20 p-4">
                    <h3 className="text-lgfont-medium text-foreground flex items-center justify-between transition-colors">
                      {item.title}
                      {/* Plus Icon Next to Title */}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-foreground/10 hover:bg-foreground/10 h-6 w-6 cursor-pointer"
                        onClick={() => toggleOverlay(index)}
                      >
                        {overlayIndex === index ? (
                          <X className="text-foreground h-4 w-4 cursor-pointer" />
                        ) : (
                          <Plus className="text-foreground h-4 w-4 cursor-pointer" />
                        )}
                      </Button>
                    </h3>
                  </div>

                  {overlayIndex === index && (
                    <div className="bg-background/95 absolute inset-0 z-10 flex flex-col justify-between p-4 duration-200">
                      <div className="flex flex-1 items-start justify-start pt-4">
                        <div className="text-left">
                          <h4 className="text-foreground mb-3 text-sm font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="group relative z-20 rounded-[calc(var(--radius-sm)+0.125rem)]">
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="relative flex h-10 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                          >
                            <a href={item.cta.link}>
                              <span className="relative z-20 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                                {item.cta.label}
                                <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                              </span>
                              <div className="absolute inset-y-0  left-0 h-full w-full -translate-x-full bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)] transition-transform duration-300 group-hover:translate-x-0"></div>
                            </a>
                          </Button>
                        </div>

                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-foreground/10 relative z-20 h-6 w-6 cursor-pointer bg-transparent"
                          onClick={() => toggleOverlay(index)}
                        >
                          <X className="text-foreground h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
