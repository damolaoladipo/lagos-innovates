import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TestimonialsData } from '@/_data/testimonials'
import Image from 'next/image';
import { cn } from "@/lib/utils";


const TestimonialCard = ({ testimonial }: any) => (
  <Card className={cn("grid grid-rows-[auto_1fr] gap-8 border-none shadow-none", testimonial.className)}>
    {testimonial.logo && (
      <CardHeader>
        <Image
          className="h-6 w-fit dark:invert"
          src={testimonial.logo}
          alt={testimonial.logoAlt}
          height={testimonial.logoHeight}
          width={testimonial.logoWidth}
        />
      </CardHeader>
    )}
    <CardContent className="h-full pt-6">
      <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
        <p className="text-xl font-medium">{testimonial.quote}</p>
        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage
              src={testimonial.avatar.src}
              alt={testimonial.avatar.alt}
              height={testimonial.avatar.height}
              width={testimonial.avatar.width}
            />
            <AvatarFallback>{testimonial.avatar.fallback}</AvatarFallback>
          </Avatar>
          <div>
            <cite className="text-sm font-medium not-italic">{testimonial.author}</cite>
            <span className="text-muted-foreground block text-sm">{testimonial.title}</span>
          </div>
        </div>
      </blockquote>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* Header */}
        <div className="mb-10 text-start">
          <h2 className="mb-6 text-4xl font-bold text-balance md:text-5xl">
            {TestimonialsData.heading}
          </h2>
          <p className="text-muted-foreground text-lg text-pretty max-w-xl">
            {TestimonialsData.subheading}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-4 [--color-card:var(--color-muted)] sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
          {TestimonialsData.items.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}