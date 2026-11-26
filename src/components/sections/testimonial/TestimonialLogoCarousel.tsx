import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Box, ChevronLeft, ChevronRight, Hexagon, Layers, Triangle, type LucideIcon } from "lucide-react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import TwoToneSweepTitle from "@/components/kit/TwoToneSweepTitle";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Testimonial = { quote: string; name: string; role: string; company?: string; icon?: LucideIcon };

type TestimonialLogoCarouselProps = {
  tag?: string;
  title?: string;
  titleMuted?: string;
  description?: string;
  testimonials?: Testimonial[];
  secondaryButton?: { text: string; href: string };
  labels?: { previous?: string; next?: string };
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  { quote: "Our weekly reporting used to take a full day. Now it lands in the inbox before anyone logs in.", name: "Aisha Kamara", role: "Ops Lead at Corebit", company: "Corebit", icon: Hexagon },
  { quote: "Handoffs between sales and delivery were where things got lost. Not anymore.", name: "Daniel Park", role: "Founder at Aerix", company: "Aerix", icon: Triangle },
  { quote: "They built it, then stayed to run it. We stopped thinking about the plumbing.", name: "Sarah Mitchell", role: "Product Lead at Lumen", company: "Lumen", icon: Layers },
  { quote: "Invoices, reminders and follow-ups all run on their own now.", name: "Tiago Neves", role: "Finance Lead at Boxwell", company: "Boxwell", icon: Box },
];

const TestimonialLogoCarousel = ({
  tag = "Real results",
  title = "Less busywork,",
  titleMuted = "more room to think.",
  description,
  testimonials = DEFAULT_TESTIMONIALS,
  secondaryButton = { text: "Start a project", href: "#contact" },
  labels,
  ariaLabel,
  className,
}: TestimonialLogoCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", duration: 24 });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section aria-label={ariaLabel ?? tag ?? "Testimonials"} className={cn("relative py-[var(--section-space)]", className)}>
      <div className="mx-auto w-[var(--container)]">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-start">
            {tag && (
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-3 rounded-full bg-accent" />
                <p className="text-[length:var(--text-label)] tracking-[var(--label-tracking)] uppercase text-accent">{tag}</p>
              </div>
            )}
            <TwoToneSweepTitle title={title} muted={titleMuted} className="mt-4 text-[length:var(--text-h1)] leading-[1.08] tracking-[var(--heading-tracking)] font-medium" />
            {description && <p className="mt-4 max-w-[34rem] text-balance text-[length:var(--text-body-lg)] text-muted-foreground">{description}</p>}
          </div>
          {secondaryButton && (
            <a href={secondaryButton.href} className="btn-secondary inline-flex h-11 shrink-0 items-center whitespace-nowrap rounded-[var(--radius-button)] px-4 text-[length:var(--text-small)]">
              {secondaryButton.text}
            </a>
          )}
        </div>
        <div ref={emblaRef} className="mt-[clamp(2.5rem,4vw,4rem)] overflow-hidden">
          <div className="-ml-4 flex touch-pan-y">
            {testimonials.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={`${item.name}-${i}`} className="min-w-0 shrink-0 grow-0 basis-[88%] pl-4 lg:basis-1/2 xl:basis-1/3">
                  <AppearOnScroll variant="fade" delay={i * 0.08} className="h-full">
                    <div className="kit-card flex h-full min-h-[19rem] flex-col gap-6 p-6">
                      {item.company && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          {Icon && <Icon className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />}
                          <p className="text-[length:var(--text-body)] font-medium">{item.company}</p>
                        </div>
                      )}
                      <p className="text-[length:var(--text-body-lg)] leading-[1.45] text-foreground">&ldquo;{item.quote}&rdquo;</p>
                      <div className="mt-auto flex flex-col gap-1 pt-4">
                        <p className="text-[length:var(--text-small)] text-foreground">{item.name}</p>
                        <p className="text-[length:var(--text-small)] text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                  </AppearOnScroll>
                </div>
              );
            })}
          </div>
        </div>
        {(canPrev || canNext) && (
          <div className="mt-6 flex justify-end gap-2">
            {[
              { label: labels?.previous ?? "Previous", Icon: ChevronLeft, onClick: () => emblaApi?.scrollPrev(), enabled: canPrev },
              { label: labels?.next ?? "Next", Icon: ChevronRight, onClick: () => emblaApi?.scrollNext(), enabled: canNext },
            ].map(({ label, Icon, onClick, enabled }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={onClick}
                disabled={!enabled}
                className="kit-card grid size-10 cursor-pointer place-items-center rounded-full text-foreground transition-opacity duration-300 disabled:cursor-default disabled:opacity-40"
              >
                <Icon className="size-4" strokeWidth={1.75} aria-hidden />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialLogoCarousel;
