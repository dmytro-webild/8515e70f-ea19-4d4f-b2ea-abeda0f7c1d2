import { Workflow, type LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Column = { title: string; items: { label: string; href: string }[] };

type FooterQuietColumnsProps = {
  brand?: string;
  brandIcon?: LucideIcon;
  description?: string;
  columns?: Column[];
  copyright?: string;
  className?: string;
};

const DEFAULT_COLUMNS: Column[] = [
  { title: "Studio", items: [{ label: "Services", href: "#services" }, { label: "Process", href: "#process" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }] },
  { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Journal", href: "#blog" }, { label: "Contact", href: "#contact" }, { label: "Privacy", href: "#" }] },
  { title: "Social", items: [{ label: "LinkedIn", href: "#" }, { label: "GitHub", href: "#" }, { label: "Instagram", href: "#" }] },
];

const FooterQuietColumns = ({
  brand = "Switchyard",
  brandIcon: BrandIcon = Workflow,
  description = "A Lisbon studio that builds and runs automation, so your team can focus on the work that matters.",
  columns = DEFAULT_COLUMNS,
  copyright = "© 2026 Switchyard, Lisbon",
  className,
}: FooterQuietColumnsProps) => (
  <section aria-label="Footer" className={cn("relative pt-[var(--section-space)] pb-[var(--gutter)] text-foreground", className)}>
    <div className="kit-card mx-auto w-[var(--container)] rounded-[calc(var(--radius-card)*1.5)] px-6 pt-10 pb-6 lg:px-10 lg:pt-14 lg:pb-8">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-4 lg:w-[16rem] lg:shrink-0">
          <div className="flex items-center gap-2.5">
            <div aria-hidden="true" className="flex size-7 items-center justify-center rounded-[0.5rem] bg-foreground text-background">
              <BrandIcon className="size-4" strokeWidth={2} />
            </div>
            <p className="text-[length:var(--text-h2)] leading-[1.2] tracking-[var(--heading-tracking)] font-medium">{brand}</p>
          </div>
          {description && <p className="max-w-[16rem] text-[length:var(--text-body)] leading-relaxed text-muted-foreground">{description}</p>}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:flex-1 lg:max-w-[44rem] lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
          {columns.map((column, i) => (
            <div key={column.title + i} className="flex flex-col gap-4">
              <h3 className="text-[length:var(--text-body-lg)] font-normal">{column.title}</h3>
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[length:var(--text-body)] text-muted-foreground transition-colors duration-[var(--dur-fast)] hover:text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {copyright && <p className="mt-12 text-[length:var(--text-body)] text-muted-foreground">{copyright}</p>}
    </div>
  </section>
);

export default FooterQuietColumns;
