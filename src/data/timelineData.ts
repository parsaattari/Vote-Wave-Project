import { TimelineMilestone } from '../types/timeline';

export const generateTimelineMilestones = (stateId: string): TimelineMilestone[] => {
  const today = new Date();
  
  // Common timeline for all states in 2025
  return [
    {
      id: 'today',
      title: 'Today',
      date: today.toISOString(),
      type: 'today',
      description: 'Start your voting journey today!'
    },
    {
      id: 'mail-registration',
      title: 'Mail Registration Deadline',
      date: '2025-10-12',
      type: 'mail-registration',
      description: 'Last day to register by mail - don\'t wait!'
    },
    {
      id: 'in-person-registration',
      title: 'Same-Day Registration',
      date: '2025-11-04',
      type: 'in-person-registration',
      description: 'Register in person at your polling place'
    },
    {
      id: 'election',
      title: 'Election Day',
      date: '2025-11-04',
      type: 'election',
      description: 'Make your voice heard! Vote today!'
    }
  ];
};