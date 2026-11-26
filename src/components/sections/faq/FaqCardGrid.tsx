import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Plus } from "lucide-react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import TwoToneSweepTitle from "@/components/kit/TwoToneSweepTitle";
import { useKitMotion } from "@/components/kit/kitMotion";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Faq = { title: string; description: string };

type FaqCardGridProps = {
  tag?: string;
  title?: string;
  titleMuted?: string;
  description?: string;
  items?: Faq[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: Faq[] = [
  { title: "What do you automate first?", description: "We start with the task that costs the most hours each week, usually reporting, handoffs or invoicing." },
  { title: "Do we need new software?", description: "Rarely. We connect the tools you already pay for and fill the gaps between them." },
  { title: "Who runs it after launch?", description: "We do. Every flow is watched, and we fix and improve it as your team changes." },
  { title: "Is our data safe?", description: "Data stays in your own accounts. We work with scoped access and log every run." },
];

const FaqCardGrid = ({
  tag = "FAQ",
  title = "You have questions.",
  titleMuted = "We have answers.",
  description,
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: FaqCardGridProps) => {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const { ease, base } = useKitMotion();
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half).map((item, i) => ({ item, i })), items.slice(half).map((item, i) => ({ item, i: i + half }))];

  return (
    <section aria-label={ariaLabel ?? tag ?? "FAQ"} className={cn("relative py-[var(--section-space)]", className)}>
      <div className="mx-auto w-[var(--container)]">
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
        <div className="mt-[clamp(2.5rem,4vw,4rem)] grid items-start gap-4 lg:grid-cols-2">
          {columns.map((column, c) => (
            <ul key={c} className="flex flex-col gap-4">
              {column.map(({ item, i }) => {
                const isOpen = open === i;
                return (
                  <li key={`${item.title}-${i}`}>
                    <AppearOnScroll variant="fade" delay={i * 0.08}>
                      <div className="kit-card">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="flex w-full cursor-pointer items-center justify-between gap-6 p-6 text-left"
                        >
                          <h3 className="text-[length:var(--text-body-lg)] font-normal leading-snug text-foreground">{item.title}</h3>
                          <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: reduce ? 0 : 0.4, ease }}
                            className="shrink-0 text-foreground"
                          >
                            <Plus className="size-5" strokeWidth={1.5} aria-hidden />
                          </motion.div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: reduce ? 0 : base, ease }}
                              className="overflow-hidden"
                            >
                              <p className="px-6 pb-6 text-[length:var(--text-body)] leading-relaxed text-muted-foreground">{item.description}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </AppearOnScroll>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqCardGrid;
