import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";
import { Faq } from "@/_data/faq";

interface FAQProps {
  className?: string;
}

export default function FAQ({ className }: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {Faq.heading}
        </h2>
        {Faq.subheading && (
          <p className="text-muted-foreground text-center max-w-[640px]">
            {Faq.subheading}
          </p>
        )}
        {Faq.items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {Faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answers.map((ans, i) => (
                    <p key={i} className="mb-4">{ans}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
