import type { ScheduleDay } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME — the weekly class timetable. Times are strings so you can
// write them exactly as members expect to read them.
// ─────────────────────────────────────────────────────────────────────────────

export const schedule: ScheduleDay[] = [
  {
    id: 'mon',
    day: 'Monday',
    short: 'Mon',
    sessions: [
      { time: '6:00 AM', name: 'Strength Foundations', coach: 'Marcus', intensity: 'Moderate' },
      { time: '7:30 AM', name: 'HIIT Engine', coach: 'Diego', intensity: 'High' },
      { time: '6:00 PM', name: 'Powerbuilding', coach: 'Tasha', intensity: 'High' },
      { time: '8:00 PM', name: 'Mobility Flow', coach: 'Priya', intensity: 'Low' },
    ],
  },
  {
    id: 'tue',
    day: 'Tuesday',
    short: 'Tue',
    sessions: [
      { time: '6:30 AM', name: 'Kettlebell Strength', coach: 'Tasha', intensity: 'Moderate' },
      { time: '12:30 PM', name: 'Boxing Fundamentals', coach: 'Diego', intensity: 'Moderate' },
      { time: '7:00 PM', name: 'Olympic Lifting', coach: 'Marcus', intensity: 'High' },
    ],
  },
  {
    id: 'wed',
    day: 'Wednesday',
    short: 'Wed',
    sessions: [
      { time: '6:00 AM', name: 'MetCon', coach: 'Diego', intensity: 'High' },
      { time: '7:30 AM', name: 'Strength Foundations', coach: 'Marcus', intensity: 'Moderate' },
      { time: '6:30 PM', name: 'Rowing Intervals', coach: 'Tasha', intensity: 'High' },
      { time: '8:00 PM', name: 'Yoga & Restore', coach: 'Priya', intensity: 'Low' },
    ],
  },
  {
    id: 'thu',
    day: 'Thursday',
    short: 'Thu',
    sessions: [
      { time: '6:30 AM', name: 'Powerbuilding', coach: 'Tasha', intensity: 'High' },
      { time: '12:30 PM', name: 'Mobility Flow', coach: 'Priya', intensity: 'Low' },
      { time: '7:00 PM', name: 'Boxing Fundamentals', coach: 'Diego', intensity: 'Moderate' },
    ],
  },
  {
    id: 'fri',
    day: 'Friday',
    short: 'Fri',
    sessions: [
      { time: '6:00 AM', name: 'HIIT Engine', coach: 'Diego', intensity: 'High' },
      { time: '7:30 AM', name: 'Olympic Lifting', coach: 'Marcus', intensity: 'High' },
      { time: '6:00 PM', name: 'Kettlebell Strength', coach: 'Tasha', intensity: 'Moderate' },
    ],
  },
  {
    id: 'sat',
    day: 'Saturday',
    short: 'Sat',
    sessions: [
      { time: '8:00 AM', name: 'Community MetCon', coach: 'All coaches', intensity: 'High' },
      { time: '9:30 AM', name: 'Strength Foundations', coach: 'Marcus', intensity: 'Moderate' },
      { time: '11:00 AM', name: 'Yoga & Restore', coach: 'Priya', intensity: 'Low' },
    ],
  },
];
