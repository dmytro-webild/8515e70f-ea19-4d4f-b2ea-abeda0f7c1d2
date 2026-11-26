import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Check, Sparkles, X, type LucideIcon } from "lucide-react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import TwoToneSweepTitle from "@/components/kit/TwoToneSweepTitle";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type AboutCompareListsProps = {
  tag?: string;
  title?: string;
  titleMuted?: string;
  description?: string;
  otherTitle?: string;
  otherItems?: string[];
  brandName?: string;
  brandIcon?: LucideIcon;
  items?: string[];
  ariaLabel?: string;
  className?: string;
};

const AboutCompareLists = ({
  tag = "Why us",
  title = "Most fixes fall short.",
  titleMuted = "Here is why teams pick us.",
  description,
  otherTitle = "The usual way",
  otherItems = [
    "Tools that never talk to each other",
    "Manual steps that eat the day",
    "No view of what runs and what failed",
    "One-off scripts nobody owns",
  ],
  brandName = "Our way",
  brandIcon: BrandIcon = Sparkles,
  items = [
    "Every tool connected in one flow",
    "Repetitive work handled for you",
    "A clear log of every run",
    "One team that builds and runs it",
  ],
  ariaLabel,
  className,
}: AboutCompareListsProps) => (
  <section aria-label={ariaLabel ?? tag ?? "About"} className={cn("relative py-[var(--section-space)]", className)}>
    <div className="mx-auto w-[var(--container)]">
      <div className="flex flex-col items-center text-center">
        {tag && (
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-3 rounded-full bg-accent" />
            <p className="text-[length:var(--text-label)] tracking-[var(--label-tracking)] uppercase text-accent">{tag}</p>
          </div>
        )}
        <TwoToneSweepTitle title={title} muted={titleMuted} className="mt-4 text-[length:var(--text-h1)] leading-[1.08] tracking-[var(--heading-tracking)] font-medium" />
        {description && <p className="mt-4 max-w-[34rem] text-balance text-[length:var(--text-body-lg)] text-muted-foreground">{description}</p>}
      </div>
      <AppearOnScroll variant="fade" className="mx-auto mt-[clamp(2.5rem,4vw,4rem)] max-w-[56rem]">
        <div className="kit-card grid gap-4 p-3 lg:grid-cols-2">
          <div className="flex flex-col gap-6 p-6 lg:p-8">
            <h3 className="text-[length:var(--text-h3)] font-medium leading-tight text-foreground">{otherTitle}</h3>
            <ul className="flex flex-col gap-3">
              {otherItems.map((item, i) => (
                <li key={`${item}-${i}`} className="flex items-start gap-3">
                  <X className="mt-1 size-4 shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                  <p className="text-[length:var(--text-body)] leading-relaxed text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="kit-card flex flex-col gap-6 p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-[0.375rem] bg-foreground text-background">
                <BrandIcon className="size-4" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="text-[length:var(--text-h3)] font-medium leading-tight text-foreground">{brandName}</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {items.map((item, i) => (
                <li key={`${item}-${i}`} className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden />
                  <p className="text-[length:var(--text-body)] leading-relaxed text-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AppearOnScroll>
    </div>
  </section>
);

export default AboutCompareLists;
