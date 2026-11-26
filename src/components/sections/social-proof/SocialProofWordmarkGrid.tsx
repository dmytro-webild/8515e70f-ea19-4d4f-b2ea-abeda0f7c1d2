import { Hexagon, Triangle, Waves, Zap, type LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Wordmark = { name: string; icon?: LucideIcon };

type SocialProofWordmarkGridProps = {
  title?: string;
  items?: Wordmark[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: Wordmark[] = [
  { name: "Corebit", icon: Zap },
  { name: "Lumen Labs", icon: Hexagon },
  { name: "Aerix", icon: Triangle },
  { name: "Driftwave", icon: Waves },
  { name: "Aerix", icon: Triangle },
  { name: "Driftwave", icon: Waves },
  { name: "Corebit", icon: Zap },
  { name: "Lumen Labs", icon: Hexagon },
];

const SocialProofWordmarkGrid = ({ title = "Trusted by teams who would rather not do it by hand", items = DEFAULT_ITEMS, ariaLabel, className }: SocialProofWordmarkGridProps) => (
  <section aria-label={ariaLabel ?? "Customers"} className={cn("relative py-[var(--section-space)]", className)}>
    <div className="mx-auto flex w-[var(--container)] flex-col items-center gap-8">
      {title && <p className="max-w-[34rem] text-balance text-center text-[length:var(--text-body)] leading-snug text-muted-foreground">{title}</p>}
      <ul className="grid w-full max-w-[44rem] grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-10">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <li key={`${i}-${item.name}`} className="flex justify-center">
              <AppearOnScroll variant="fade" delay={i * 0.08}>
                <div className="flex min-w-0 items-center gap-2">
                  {Icon && <Icon aria-hidden="true" strokeWidth={2} className="size-5 shrink-0 fill-foreground/90 text-foreground" />}
                  <p className="whitespace-nowrap text-[length:var(--text-body-lg)] font-medium leading-none tracking-[-0.02em] text-foreground">{item.name}</p>
                </div>
              </AppearOnScroll>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default SocialProofWordmarkGrid;
