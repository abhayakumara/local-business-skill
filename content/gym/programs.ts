import type { Program, ProgramCategory } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME
// Each program references an image in /public/images/gym/programs named after the
// program (Olympic Lifting -> olympic-lifting.svg/.webp). Keep that 1:1 mapping
// so swapping in real photography is a drop-in replacement.
// ─────────────────────────────────────────────────────────────────────────────

export const programCategories: ProgramCategory[] = [
  {
    id: 'strength',
    name: 'Strength',
    description: 'Build real, lasting strength under expert coaching.',
  },
  {
    id: 'conditioning',
    name: 'Conditioning',
    description: 'High-output sessions that build your engine and burn it down.',
  },
  {
    id: 'skill',
    name: 'Skill & Movement',
    description: 'Master the lifts and move better, session after session.',
  },
  {
    id: 'recovery',
    name: 'Recovery',
    description: 'Mobility, breath, and restoration so you keep showing up.',
  },
];

export const programs: Program[] = [
  // ── Strength ───────────────────────────────────────────────────────────────
  {
    id: 'strength-foundations',
    name: 'Strength Foundations',
    description:
      'Coached barbell work — squat, press, deadlift — with a plan that adds weight to the bar every week.',
    level: 'All levels',
    duration: '60 min',
    image: '/images/gym/programs/strength-foundations.svg',
    imageAlt: 'Athlete coached through a barbell back squat',
    category: 'strength',
    isSignature: true,
  },
  {
    id: 'powerbuilding',
    name: 'Powerbuilding',
    description:
      'Heavy compound lifts paired with hypertrophy work to build strength and size together.',
    level: 'Intermediate',
    duration: '60 min',
    image: '/images/gym/programs/powerbuilding.svg',
    imageAlt: 'Lifter performing a heavy deadlift',
    category: 'strength',
  },
  {
    id: 'kettlebell-strength',
    name: 'Kettlebell Strength',
    description:
      'Full-body kettlebell training that builds grip, power, and resilient joints.',
    level: 'All levels',
    duration: '45 min',
    image: '/images/gym/programs/kettlebell-strength.svg',
    imageAlt: 'Athlete pressing a kettlebell overhead',
    category: 'strength',
  },

  // ── Conditioning ─────────────────────────────────────────────────────────
  {
    id: 'hiit-engine',
    name: 'HIIT Engine',
    description:
      'Short, brutal, effective. Intervals that spike your heart rate and build a serious engine.',
    level: 'All levels',
    duration: '40 min',
    image: '/images/gym/programs/hiit-engine.svg',
    imageAlt: 'Group mid-burpee in a high-intensity class',
    category: 'conditioning',
    isSignature: true,
  },
  {
    id: 'rowing-intervals',
    name: 'Rowing Intervals',
    description:
      'Erg-based conditioning that builds full-body endurance with zero joint pounding.',
    level: 'All levels',
    duration: '45 min',
    image: '/images/gym/programs/rowing-intervals.svg',
    imageAlt: 'Athletes training on rowing machines',
    category: 'conditioning',
  },
  {
    id: 'metcon',
    name: 'MetCon',
    description:
      'Constantly varied, high-intensity circuits that leave nothing in the tank.',
    level: 'Intermediate',
    duration: '50 min',
    image: '/images/gym/programs/metcon.svg',
    imageAlt: 'Athlete flipping a heavy battle rope',
    category: 'conditioning',
  },

  // ── Skill & Movement ────────────────────────────────────────────────────────
  {
    id: 'olympic-lifting',
    name: 'Olympic Lifting',
    description:
      'Snatch and clean & jerk technique, broken down and rebuilt under a dedicated coach.',
    level: 'Intermediate',
    duration: '60 min',
    image: '/images/gym/programs/olympic-lifting.svg',
    imageAlt: 'Lifter catching a clean in the front rack',
    category: 'skill',
    isSignature: true,
  },
  {
    id: 'boxing-fundamentals',
    name: 'Boxing Fundamentals',
    description:
      'Footwork, combinations, and pad work that sharpen coordination and torch calories.',
    level: 'All levels',
    duration: '50 min',
    image: '/images/gym/programs/boxing-fundamentals.svg',
    imageAlt: 'Boxer working combinations on the pads',
    category: 'skill',
  },

  // ── Recovery ────────────────────────────────────────────────────────────────
  {
    id: 'mobility-flow',
    name: 'Mobility Flow',
    description:
      'Guided mobility and stability work to unlock range and bulletproof your joints.',
    level: 'All levels',
    duration: '40 min',
    image: '/images/gym/programs/mobility-flow.svg',
    imageAlt: 'Athlete moving through a deep mobility stretch',
    category: 'recovery',
    isSignature: true,
  },
  {
    id: 'yoga-restore',
    name: 'Yoga & Restore',
    description:
      'Slow, deliberate flows and breathwork to recover, de-load, and reset for the week.',
    level: 'All levels',
    duration: '50 min',
    image: '/images/gym/programs/yoga-restore.svg',
    imageAlt: 'Calm restorative yoga session',
    category: 'recovery',
  },
];
