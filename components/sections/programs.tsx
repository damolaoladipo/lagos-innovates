"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
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
    <section className="text-foreground py-16 md:py-32 bg-white pt-20 dark:bg-[#171717]">
      <div className=" @container mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-10 text-start items-start ">
          <h2 className="mb-6 text-4xl font-bold text-balance md:text-5xl">
            {ProgramsSection.heading}
          </h2>
          <p className="text-muted-foreground text-lg text-pretty max-w-xl">
            {ProgramsSection.subheading}
          </p>
        </div>

        {/* Components Grid */}
        <div className="relative">
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
                    "bg-card border-border relative overflow-hidden rounded-lg border transition-all duration-300",
                    hoveredIndex === index && "border-accent bg-accent/20",
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
                  <div className="p-4">
                    <h3 className="text-lgfont-medium text-foreground group-hover:text-primary flex items-center justify-between transition-colors">
                      {item.title}
                      {/* Plus Icon Next to Title */}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-foreground/10 hover:bg-foreground/10 h-6 w-6 cursor-pointer"
                        onClick={() => toggleOverlay(index)}
                      >
                        {overlayIndex === index ? (
                          <X className="text-foreground h-4 w-4" />
                        ) : (
                          <Plus className="text-foreground h-4 w-4" />
                        )}
                      </Button>
                    </h3>
                  </div>

                  {overlayIndex === index && (
                    <div className="bg-background/95 animate-in fade-in absolute inset-0 flex flex-col justify-between p-4 duration-200">
                      {/* Content section */}
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
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-border text-foreground hover:bg-foreground/10 cursor-pointer bg-transparent px-3 py-1 text-xs"
                        >
                          <Link href={item.cta.link}>{item.cta.label}</Link>
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-foreground/10 h-6 w-6 bg-transparent"
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
