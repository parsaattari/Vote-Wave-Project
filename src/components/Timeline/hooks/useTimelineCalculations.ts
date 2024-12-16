import { useMemo } from 'react';
import { TimelineMilestone } from '../../../types/timeline';

export function useTimelineCalculations(milestones: TimelineMilestone[]) {
  return useMemo(() => {
    if (milestones.length === 0) {
      return { progress: 0, currentMilestone: null };
    }

    const today = new Date();
    const firstDate = new Date(milestones[0].date);
    const lastDate = new Date(milestones[milestones.length - 1].date);
    
    const totalDays = (lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
    const daysPassed = (today.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
    
    const progress = Math.min(100, Math.max(0, (daysPassed / totalDays) * 100));

    const currentMilestone = milestones.reduce((prev, curr) => {
      const currDate = new Date(curr.date);
      return currDate <= today ? curr : prev;
    }, milestones[0]);

    return { progress, currentMilestone };
  }, [milestones]);
}