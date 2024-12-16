export const chartColors = [
  'rgb(99, 102, 241)',  // indigo-500
  'rgb(59, 130, 246)',  // blue-500
  'rgb(14, 165, 233)',  // sky-500
  'rgb(6, 182, 212)',   // cyan-500
  'rgb(20, 184, 166)'   // teal-500
] as const;

export const getColor = (index: number): string => {
  return chartColors[index % chartColors.length];
};