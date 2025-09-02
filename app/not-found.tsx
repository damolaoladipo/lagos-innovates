import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowUpRight } from "lucide-react";

const NotFound = () => {
  return (
    // flex flex-col justify-center items-center h-full py-16 sm:py-32
    <div className="mt-32 flex h-full flex-col items-start justify-center px-12 md:px-60 py-16 sm:py-32">
      <div className="flex flex-col">
        <p className="text-base font-semibold text-neutral-400 dark:text-neutral-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="flex flex-1 mt-4">
          <div className="group rounded-[calc(var(--radius-sm)+0.125rem)]">
            <Button
              asChild
              size="lg"
              className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
            >
              <a href="/">
                <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                  Go back home
                  <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                </span>

                <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)] transition-transform duration-300 group-hover:translate-x-0"></div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
