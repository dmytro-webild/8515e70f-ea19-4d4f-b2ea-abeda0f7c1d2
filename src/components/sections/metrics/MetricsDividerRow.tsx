import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import TwoToneSweepTitle from "@/components/kit/TwoToneSweepTitle";
import MakroCounter from "@/components/kit/MakroCounter";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Metric = { value: string; label: string };

type MetricsDividerRowProps = {
  tag?: string;
  title?: string;
  titleMuted?: string;
  description?: string;
  items?: Metric[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: Metric[] = [
  { value: "2.4M+", label: "Tasks automated" },
  { value: "18hrs", label: "Saved per person, weekly" },
  { value: "99.9%", label: "Uptime" },
];

const MetricsDividerRow = ({
  tag = "In numbers",
  title = "Quiet systems,",
  titleMuted = "loud results.",
  description,
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: MetricsDividerRowProps) => (
  <section aria-label={ariaLabel ?? tag ?? "Metrics"} className={cn("relative py-[var(--section-space)]", className)}>
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
      <AppearOnScroll variant="fade" className="mt-[clamp(2.5rem,4vw,4rem)]">
        <ul className="kit-card flex flex-col divide-y divide-foreground/10 px-6 lg:flex-row lg:divide-x lg:divide-y-0 lg:px-0 lg:py-6">
          {items.map((item, i) => (
            <li key={`${item.label}-${i}`} className="flex min-w-0 flex-1 flex-col items-center gap-3 py-8 text-center lg:px-6 lg:py-4">
              <MakroCounter value={item.value} className="whitespace-nowrap text-[length:var(--text-display)] font-medium leading-none tracking-[var(--heading-tracking)] tabular-nums text-foreground" />
              <p className="text-balance text-[length:var(--text-small)] text-muted-foreground">{item.label}</p>
            </li>
          ))}
        </ul>
      </AppearOnScroll>
    </div>
  </section>
);

export default MetricsDividerRow;
