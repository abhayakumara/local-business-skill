import { Reveal } from './Reveal';
import { TextReveal } from './TextReveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

// Theme-aware: eyebrow + accent line + ink colors resolve through the CSS
// variables of the surrounding `.theme-*` scope, so this one component renders
// on-brand inside every demo and on the agency landing page. The title rises
// word-by-word out of a clip mask as it scrolls into view.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <Reveal className={align === 'center' ? 'mx-auto' : undefined} y={14}>
        <span className="eyebrow">
          <span className="h-px w-6 bg-brand" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <h2 className="heading-display text-4xl text-ink sm:text-5xl">
        <TextReveal text={title} mode="view" stagger={0.045} />
      </h2>
      {description && (
        <Reveal delay={0.15} y={16}>
          <p className="text-base leading-relaxed text-ink/65 sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
