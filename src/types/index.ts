export interface StateData {
  id: string;
  name: string;
  registrationUrl: string;
  registrationDeadline: string;
  electionDay: string;
  requirements: Requirement[];
}

export interface Requirement {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export interface DemographicData {
  ageGroup: string;
  populationPercentage: number;
  voterTurnoutPercentage: number;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  impact: string;
  imageUrl: string;
}

export type Language = 'en' | 'es' | 'fil' | 'zh' | 'ar' | 'fa';