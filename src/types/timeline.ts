export interface TimelineMilestone {
  id: string;
  title: string;
  date: string;
  type: 'today' | 'mail-registration' | 'in-person-registration' | 'election';
  description: string;
}

export interface TimelineState {
  currentMilestone: string;
  progress: number;
}