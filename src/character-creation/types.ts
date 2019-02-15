export interface BasicInfo {
  name: string;
  highConcept: string;
  trouble: string;
}

export interface PhaseInfo {
  backstory: string;
  aspect: string;
}

export interface PhaseTrio<Phase> {
  adventure: Phase;
  firstCrossing: Phase;
  secondCrossing: Phase;
}
