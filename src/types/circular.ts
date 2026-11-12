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

export interface CircularityFlowItem {
  id: string;
  material: string;
  cycle: 'Técnico' | 'Biológico';
  baselineAmount: string;
  currentDestination: string;
  currentLoop: string;
  leakageOrLoss: string;
  innerLoopOpportunity: string;
  statusType: 'actual' | 'parcial' | 'oportunidad';
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

export interface LcaHotspotGap {
  id: number;
  title: string;
  phaseRef: string;
  type: 'Hotspot' | 'Brecha de Reporte (Ruta A)';
  description: string;
}

export interface EllenMacArthurPrinciple {
  id: number;
  name: string;
  status: 'Sí' | 'Sí (Parcial)' | 'No';
  description: string;
  maturityLevel: number; // 1-5
  levelLabel: string;
  bonYurtEvidence: string[];
  impactMetric: string;
}

export interface NineRStrategy {
  code: 'R0' | 'R1' | 'R2' | 'R3' | 'R7' | 'R8' | 'R9';
  name: string;
  group: string;
  status: 'Sí' | 'Parcial' | 'No';
  lifecyclePhase: string;
  definition: string;
  application: string;
  reductionDetail: string;
  maturityScore: number; // 1-5
  progressPercentage: number;
}

export interface PrioritizedStrategy {
  id: string;
  number: string;
  priorityRank: number;
  title: string;
  tagline: string;
  principleR: string;
  phaseTransformed: string;
  horizon: 'Corto plazo (0-12m)' | 'Corto plazo (6-18m)' | 'Corto-mediano plazo (6-24m)' | 'Mediano plazo (12-36m)';
  impactLabel: 'Alto' | 'Muy Alto' | 'Medio-Alto';
  feasibilityLabel: 'Alta' | 'Media';
  impactScore: number; // 1-10 for 2x2 chart
  feasibilityScore: number; // 1-10 for 2x2 chart
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

export interface AlpinaCorporateMetric {
  id: string;
  pillar: 'Envases y Circularidad' | 'Operación Limpia y Residuos' | 'Energía y Autogeneración';
  name: string;
  alpinaValue: number; // numeric for visual bar comparison
  alpinaLabel: string;
  sectorValue: number; // numeric benchmark for visual bar
  sectorLabel: string;
  sectorSource: string;
  detail: string;
  highlightTag: string;
}

export interface IndicatorSheet {
  id: string;
  name: string;
  category: 'Entradas' | 'Salidas' | 'Producto' | 'Económicos' | 'Integrados';
  formula: string;
  unit: string;
  baseline: string;
  alpinaBaseline: string;
  sectorBenchmark: string;
  target: string;
  periodicity: string;
  responsible: string;
  source: string;
  scale: 'Micro (Producto)' | 'Micro (Planta)' | 'Micro (Financiero)' | 'Meso (Cadena de valor)' | 'Micro / Meso' | 'Meso / Macro (Nacional)';
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

export interface OdsContribution {
  ods: string;
  title: string;
  description: string;
}

export interface PresentationSlide {
  id: number;
  presenter: string;
  presenterTheme: string;
  duration: string;
  title: string;
  subtitle: string;
  scriptText: string;
  bridgeLine?: string;
  slideImage?: string;
  keyDataPoints: string[];
}

export interface ProbableQA {
  id: number;
  question: string;
  shortAnswer: string;
  responder: string;
}

export interface RubricCriterion {
  id: string;
  number: number;
  name: string;
  weight: number;
  excellentCriteria: string;
  acceptableCriteria: string;
  insufficientCriteria: string;
  bonYurtFulfillment: string;
}

export interface SimulationParams {
  recoveryRate: number; // % (baseline 59% -> target 75%)
  recycledContent: number; // % (baseline 51% IR / 75% sobrecopa -> target 85%)
  energyReduction: number; // % autogeneración (baseline 24% -> target 30%)
  spoonSubstitution: number; // % cucharas galleta (baseline 5% -> target 80%)
  symbioticCereal: number; // % mermas cereal (baseline 0% -> target 15%)
}

export interface SimulationResults {
  circularityScore: number; // IR / MCI %
  mciIndex: number; // 0 to 1
  virginPlasticSavedTons: number;
  co2AvoidedTons: number;
  spoonsReplacedThousands: number;
  recyclerFamiliesSupported: number;
  packagingSavingsPct: number;
}
