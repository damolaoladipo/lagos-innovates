import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import { heroData } from "@/_data/hero";

import type { Transition } from "framer-motion";

const springTransition: Transition = {
  type: "spring",
  bounce: 0.3,
  duration: 1.5,
};

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: springTransition,
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
       
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mt-0 lg:mr-auto text-left">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 max-w-2xl text-5xl font-medium text-left md:text-6xl lg:mt-16"
                >
                  {heroData.heading}
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-8 max-w-2xl text-lg text-pretty"
                >
                  {heroData.subheading}
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 flex items-center gap-2"
                >
                  <div
                    key={heroData.button1.id}
                    className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                    >
                      <a href={heroData.button1.href}>
                        <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                          {heroData.button1.text}

                          <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </span>

                        <div
                         className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"
                        ></div>
                      </a>
                    </Button>
                  </div>

                  <div className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]">
                    <Button
                      key={heroData.button1.id}
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-background relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                    >
                      <a href={heroData.button1.href}>
                        <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                          {heroData.button2.text}

                          <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </span>

                        <div
                         className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"
                        ></div>
                      </a>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-12 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
                <div
                  aria-hidden
                  className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent from-80% dark:from-35%"
                />
                <div className="ring-background bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 dark:inset-shadow-white/20">
                  <Image
                    className="bg-background relative hidden aspect-15/8 rounded-2xl dark:block"
                    src={heroData.mockup.dark.src}
                    alt={heroData.mockup.dark.alt}
                    width={heroData.mockup.dark.width}
                    height={heroData.mockup.dark.height}
                  />
                  <Image
                    className="border-border/25 relative z-2 aspect-15/8 rounded-2xl dark:hidden"
                    src={heroData.mockup.light.src}
                    alt={heroData.mockup.light.alt}
                    width={heroData.mockup.light.width}
                    height={heroData.mockup.light.height}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background pt-16 pb-16 md:pb-10">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="/"
                className="block text-sm duration-150 hover:opacity-75"
              >
                <span> {heroData.partners.text}</span>

                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-4 gap-y-8 transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs sm:gap-x-16 sm:gap-y-14">
              <div className="flex">
                <Image
                  className="mx-auto h-10 md:h-10 w-fit dark:invert"
                  src="/partners/pwc.svg"
                  alt="PWC Logo"
                  height="24"
                  width="24"
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/partners/honeywell.svg"
                  alt="Honeywell Logo"
                  height="16"
                  width="16"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/partners/gomycode.svg"
                  alt="Gomycode Logo"
                  height="16"
                  width="16"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/partners/leadspace.svg"
                  alt="Leadspace logo"
                  height="16"
                  width="16"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/partners/workstation.svg"
                  alt="Workstation logo"
                  height="16"
                  width="16"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/partners/dsn.svg"
                  alt="Data Science Nigeria Logo"
                  height="16"
                  width="16"
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/partners/itanna.svg"
                  alt="Itanna Logo"
                  height="16"
                  width="16"
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/partners/mindthegap.svg"
                  alt="Mind the gap Logo"
                  height="16"
                  width="16"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
