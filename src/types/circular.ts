export type CycleType = 'biological' | 'technical';

export interface LoopItem {
  id: string;
  cycle: CycleType;
  loopType: 'regenerativo' | 'cascada' | 'corto' | 'local';
  title: string;
  shortSubtitle: string;
  tagline: string;
  iconName: string;
  colorScheme: 'green' | 'blue';
  highlightBadge: string;
  statusType: 'actual' | 'oportunidad' | 'fuga';
  justification: string;
  actors: {
    category: string;
    description: string;
  }[];
  implementationStrategy: {
    step: string;
    title: string;
    description: string;
  }[];
  sanitaryNotes: {
    title: string;
    description: string;
    criticality: 'Alta' | 'Media' | 'Informativa';
  }[];
  metricsGoal: string;
}

export interface LcaPhase {
  id: number;
  name: string;
  shortTitle: string;
  durationOrScope: string;
  isHotspot: boolean;
  hotspotReason?: string;
  griIndicators: string[];
  actors: string[];
  processes: string[];
  inputs: {
    material: string[];
    water: string;
    energy: string;
  };
  outputs: {
    products: string[];
    waste: string[];
    emissions: string;
    byproducts: string[];
  };
  circularOpportunity: string;
}

export interface EllenMacArthurPrinciple {
  id: number;
  name: string;
  description: string;
  maturityLevel: number; // e.g. 4
  levelLabel: string;
  bonYurtEvidence: string[];
  impactMetric: string;
}

export interface NineRStrategy {
  code: 'R2' | 'R3' | 'R8';
  name: string;
  group: string;
  definition: string;
  application: string;
  reductionDetail: string;
  maturityScore: number;
  progressPercentage: number;
}

export interface PrioritizedStrategy {
  id: string;
  number: string;
  title: string;
  tagline: string;
  principleR: string;
  phaseTransformed: string;
  horizon: 'Corto plazo (0-12m)' | 'Mediano plazo (1-3a)' | 'Largo plazo (3-5a)';
  impactScore: number; // 1-10
  feasibilityScore: number; // 1-10
  objective: string;
  targetAudience: string;
  responsible: string;
  externalAllies: string[];
  actions: string[];
  barriersAndMitigation: {
    barrier: string;
    mitigation: string;
  }[];
  expectedImpact: string;
  imageKey?: string;
}

export interface IndicatorSheet {
  id: string;
  name: string;
  category: 'Entradas' | 'Salidas' | 'Producto' | 'Económico' | 'Integrado' | 'Social';
  formula: string;
  unit: string;
  baseline: string;
  target: string;
  periodicity: string;
  responsible: string;
  source: string;
  scale: 'Micro (Producto/Planta)' | 'Meso (Cadena/Red PRAE)' | 'Macro (Nacional/REP)';
  synergy: string;
}

export interface MrvStage {
  step: number;
  title: string;
  focus: string;
  toolsAndStandards: string[];
  responsible: string;
  frequency: string;
  deliverable: string;
}

export interface RubricCriterion {
  id: string;
  number: number;
  name: string;
  weight: number; // percentage
  excellentCriteria: string;
  acceptableCriteria: string;
  insufficientCriteria: string;
  bonYurtFulfillment: string;
}

export interface SimulationParams {
  recoveryRate: number; // %
  recycledContent: number; // %
  energyReduction: number; // %
  waterRecirculation: number; // m3
  praeSchools: number; // count
}

export interface SimulationResults {
  circularityScore: number; // %
  virginPlasticSavedTons: number; // tons/year
  co2AvoidedTons: number; // t CO2eq/year
  waterSavedM3: number; // m3/year
  schoolDesksProduced: number; // units
  recyclerFamiliesSupported: number; // count
  ecoPointsGenerated: number; // points
}
