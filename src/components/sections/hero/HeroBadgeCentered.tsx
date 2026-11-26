import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import TwoToneSweepTitle from "@/components/kit/TwoToneSweepTitle";
import CardCylinder from "@/components/animation/CardCylinder";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Button = { text: string; href: string };
type HeroImage = { imageSrc: string; imageAlt?: string };

type HeroBadgeCenteredProps = {
  badge?: { label?: string; text: string; href?: string };
  title?: string;
  titleMuted?: string;
  description?: string;
  primaryButton?: Button;
  secondaryButton?: Button;
  images?: HeroImage[];
  introDelay?: number;
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_IMAGES: HeroImage[] = [
  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp", imageAlt: "Product screen on a laptop" },
  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp", imageAlt: "Website page on a display" },
  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "App screens side by side" },
  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-7.webp", imageAlt: "Dashboard on a screen" },
  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp", imageAlt: "Product page in a browser" },
  { imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew1.webp", imageAlt: "Project screens on a desk" },
  { imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew2.webp", imageAlt: "Website layout in close up" },
  { imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew3.webp", imageAlt: "Brand pages on a screen" },
];

const HeroBadgeCentered = ({
  badge = { label: "New", text: "Weekly reports for every client", href: "#" },
  title = "Your busywork, running on its own.",
  titleMuted,
  description = "We build and run the systems behind growing teams, so the work between your tools gets done.",
  primaryButton = { text: "Book a call", href: "#contact" },
  secondaryButton = { text: "See how it works", href: "#process" },
  images = DEFAULT_IMAGES,
  introDelay = 0,
  ariaLabel,
  className,
}: HeroBadgeCenteredProps) => {
  const reduce = useReducedMotion();
  const fade = (step: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] as const, delay: introDelay + step * 0.12 },
        };

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative flex flex-col overflow-x-clip", className)}>
      <div className="relative z-10 mx-auto flex w-[min(var(--container),40rem)] flex-col items-center pt-28 text-center lg:pt-32">
        {badge?.text && (
          <motion.a
            href={badge.href ?? "#"}
            {...fade(0)}
            className="flex max-w-full items-center gap-2 rounded-full bg-background/40 py-1.5 pl-1.5 pr-3 shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--foreground)_10%,transparent)]"
          >
            {badge.label && (
              <div className="kit-chip shrink-0 rounded-full px-2 py-0.5">
                <p className="text-[length:var(--text-label)] uppercase leading-tight tracking-[var(--label-tracking)]">{badge.label}</p>
              </div>
            )}
            <p className="min-w-0 truncate text-[length:var(--text-small)] leading-tight text-foreground/90">{badge.text}</p>
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-3.5 shrink-0 text-foreground/80" />
          </motion.a>
        )}

        <TwoToneSweepTitle
          tag="h1"
          title={title}
          muted={titleMuted}
          delay={introDelay}
          className="mt-5 w-full text-[length:var(--text-display)] font-medium leading-[1.08] tracking-[var(--heading-tracking)]"
        />

        {description && (
          <motion.p {...fade(1)} className="mt-5 max-w-[36rem] text-balance text-[length:var(--text-body-lg)] leading-relaxed text-foreground/85">
            {description}
          </motion.p>
        )}

        {(primaryButton || secondaryButton) && (
          <motion.div {...fade(2)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {primaryButton && (
              <a href={primaryButton.href} className="btn-primary inline-flex h-11 items-center px-4 rounded-[var(--radius-button)] text-[length:var(--text-small)]">
                {primaryButton.text}
              </a>
            )}
            {secondaryButton && (
              <a href={secondaryButton.href} className="btn-secondary inline-flex h-11 items-center px-4 rounded-[var(--radius-button)] text-[length:var(--text-small)]">
                {secondaryButton.text}
              </a>
            )}
          </motion.div>
        )}
      </div>

      {images.length > 0 && (
        <motion.div {...(reduce ? {} : { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1.1, ease: [0.33, 1, 0.68, 1] as const, delay: introDelay + 0.35 } })} className="pointer-events-none mt-[calc(7rem-26.7vw)] w-full pb-6 md:mt-[calc(7rem-8vw)] lg:mt-[calc(8rem-8vw)]">
          <CardCylinder
            items={images.map((image) => ({ src: image.imageSrc, alt: image.imageAlt }))}
            count={12}
            duration={70}
            edgeFade={false}
            cardClassName="rounded-[var(--radius-card)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--foreground)_8%,transparent)]"
          />
        </motion.div>
      )}
    </section>
  );
};

export default HeroBadgeCentered;
