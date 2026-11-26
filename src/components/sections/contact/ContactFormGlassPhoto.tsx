import { useId, useState, type FormEvent } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import TwoToneSweepTitle from "@/components/kit/TwoToneSweepTitle";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Labels = { firstName: string; lastName: string; email: string; company: string; message: string };

type ContactFormGlassPhotoProps = {
  title?: string;
  titleMuted?: string;
  labels?: Partial<Labels>;
  placeholders?: Partial<Labels>;
  primaryButton?: { text: string };
  note?: string;
  successText?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

const DEFAULT_LABELS: Labels = { firstName: "First name", lastName: "Last name", email: "Work email", company: "Company", message: "What should run first?" };
const DEFAULT_PLACEHOLDERS: Labels = { firstName: "First name", lastName: "Last name", email: "you@email.com", company: "Your company", message: "Tell us how we can help." };

const ContactFormGlassPhoto = ({
  title = "Tell us the task,",
  titleMuted = "we will show you the run.",
  labels,
  placeholders,
  primaryButton = { text: "Send message" },
  note = "We reply within one working day. Your details stay with us.",
  successText = "Thanks. We will be in touch within one working day.",
  imageSrc = "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&w=1200",
  imageAlt = "",
  className,
}: ContactFormGlassPhotoProps) => {
  const id = useId();
  const [sent, setSent] = useState(false);
  const text = { ...DEFAULT_LABELS, ...labels };
  const hint = { ...DEFAULT_PLACEHOLDERS, ...placeholders };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <section aria-label="Contact" className={cn("relative py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto w-[var(--container)]">
        <TwoToneSweepTitle title={title} muted={titleMuted} className="text-[length:var(--text-h1)] leading-[1.08] tracking-[var(--heading-tracking)] font-medium" />
        <div className="mt-[clamp(2.5rem,4vw,4rem)] grid grid-cols-1 gap-4 lg:grid-cols-2">
          <AppearOnScroll variant="fade" className="h-full">
            <form onSubmit={onSubmit} className="kit-card flex h-full flex-col gap-5 p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor={`${id}-first`} className="text-[length:var(--text-small)] text-foreground">{text.firstName}</label>
                  <input id={`${id}-first`} name="firstName" type="text" required autoComplete="given-name" placeholder={hint.firstName} className="kit-card h-11 w-full rounded-[var(--radius-button)] px-4 text-[length:var(--text-body)] text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/40" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor={`${id}-last`} className="text-[length:var(--text-small)] text-foreground">{text.lastName}</label>
                  <input id={`${id}-last`} name="lastName" type="text" required autoComplete="family-name" placeholder={hint.lastName} className="kit-card h-11 w-full rounded-[var(--radius-button)] px-4 text-[length:var(--text-body)] text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/40" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-email`} className="text-[length:var(--text-small)] text-foreground">{text.email}</label>
                <input id={`${id}-email`} name="email" type="email" required autoComplete="email" placeholder={hint.email} className="kit-card h-11 w-full rounded-[var(--radius-button)] px-4 text-[length:var(--text-body)] text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/40" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-company`} className="text-[length:var(--text-small)] text-foreground">{text.company}</label>
                <input id={`${id}-company`} name="company" type="text" autoComplete="organization" placeholder={hint.company} className="kit-card h-11 w-full rounded-[var(--radius-button)] px-4 text-[length:var(--text-body)] text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/40" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor={`${id}-message`} className="text-[length:var(--text-small)] text-foreground">{text.message}</label>
                <textarea id={`${id}-message`} name="message" rows={4} required placeholder={hint.message} className="kit-card min-h-[8rem] w-full flex-1 resize-none rounded-[var(--radius-button)] px-4 py-3 text-[length:var(--text-body)] text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/40" />
              </div>
              <button type="submit" className="btn-primary inline-flex h-11 w-full items-center justify-center px-4 rounded-[var(--radius-button)] text-[length:var(--text-small)]">
                {primaryButton.text}
              </button>
              <p aria-live="polite" className="text-center text-balance text-[length:var(--text-small)] text-muted-foreground">{sent ? successText : note}</p>
            </form>
          </AppearOnScroll>
          <AppearOnScroll variant="fade" delay={0.08} className="h-full">
            <div className="relative aspect-[4/3] h-full w-full overflow-hidden rounded-[var(--radius-image)] lg:aspect-auto">
              <Media src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full rounded-[var(--radius-image)] object-cover" />
            </div>
          </AppearOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactFormGlassPhoto;
