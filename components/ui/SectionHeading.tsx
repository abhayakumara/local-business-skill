import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

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
        <span className="h-px w-6 bg-saffron-400" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="heading-display text-4xl text-charcoal sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-charcoal/65 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
