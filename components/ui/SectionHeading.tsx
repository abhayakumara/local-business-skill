import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

// Theme-aware: eyebrow + accent line + ink colors resolve through the CSS
// variables of the surrounding `.theme-*` scope, so this one component renders
// on-brand inside every demo and on the agency landing page.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">
        <span className="h-px w-6 bg-brand" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="heading-display text-4xl text-ink sm:text-5xl">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-ink/65 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
