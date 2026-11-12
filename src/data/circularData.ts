import type {
  LoopItem,
  CircularityFlowItem,
  LcaPhase,
  LcaHotspotGap,
  EllenMacArthurPrinciple,
  NineRStrategy,
  PrioritizedStrategy,
  AlpinaCorporateMetric,
  IndicatorSheet,
  MrvStage,
  OdsContribution,
  PresentationSlide,
  ProbableQA,
  RubricCriterion
} from '../types/circular';

export const PROJECT_IDENTITY = {
  company: 'Alpina Productos Alimenticios S.A.S. BIC',
  product: 'Bon Yurt Alpina (Presentación clásica con vaso, sobrecopa transparente y cuchara)',
  functionalUnit: 'Entregar, proteger y fusionar 175 g de mezcla láctea (yogurt y cereales) garantizando inocuidad, nutrición y vida útil óptima en cadena de frío para el consumidor final.',
  systemBoundaries: 'De la cuna a la tumba, incorporando estrategias de economía circular, simbiosis industrial y programas posconsumo.',
  route: 'Ruta A (Empresa con informes de sostenibilidad, metas y reportes públicos consolidados)',
  baselineYear: '2025',
  presence: '97% de los municipios de Colombia · Plantas estratégicas en Sopó, Caloto y Chinchiná'
};

export const KEY_RESULTS_INFOGRAPHIC = [
  {
    value: '95,2%',
    label: 'Residuos postindustriales aprovechados en planta',
    sublabel: 'Referente industria alimentos ANDI: 70%–80%',
    color: 'text-emerald-600'
  },
  {
    value: '75%',
    label: 'Plástico reciclado (rPET) en sobrecopas Bon Yurt',
    sublabel: 'Referente sector lácteo Colombia: 10%–15% (25% en vaso piloto)',
    color: 'text-alpina-blue'
  },
  {
    value: '59%',
    label: 'Plástico Neutralidad con >450 recicladores de oficio',
    sublabel: 'Supera ampliamente la meta legal Res. 1407 al 2030 (30%)',
    color: 'text-emerald-600'
  },
  {
    value: '51%',
    label: 'Índice de Reciclabilidad (IR) corporativo actual',
    sublabel: 'Referente sector agroalimentario Colombia: 25%–30% → Meta: 70%',
    color: 'text-alpina-accent'
  }
];

export const SEMI_CIRCULAR_DIAGNOSIS = {
  status: 'Modelo híbrido de transición (Semi-circular)',
  summary:
    'Mientras que en las fases internas de manufactura (Fases 2 y 3) Alpina alcanza altos niveles de circularidad gracias al aprovechamiento del 95,2% de sus residuos postindustriales y la incorporación del 75% de material reciclado en la sobrecopa, en las fases posteriores al consumo (Fases 5 y 6) persiste una fuga lineal significativa en el vaso y la cuchara plástica, lo cual exige activar bucles más internos mediante ecodiseño y simbiosis industrial.',
  sanitaryPrecaution:
    'El material de la línea Bio solo debe ubicarse en el ciclo biológico si cuenta con certificación de compostabilidad y condiciones reales de disposición; de lo contrario, actúa como contaminante en el reciclaje plástico. Asimismo, los excedentes lácteos que hayan perdido la cadena de frío no deben destinarse a consumo humano directo sin validación microbiológica y trazabilidad estricta.'
};

export const BUTTERFLY_LOOPS: LoopItem[] = [
  // ================= CICLO BIOLÓGICO =================
  {
    id: 'bio-regenerativo',
    cycle: 'biological',
    loopType: 'regenerativo',
    title: 'Envases Bio y etiquetas con semillas',
    shortSubtitle: 'Loop Regenerativo · Compostaje y retorno al suelo',
    tagline: 'Biopolímeros certificados e iniciativas de retorno biológico seguro',
    iconName: 'Sprout',
    colorScheme: 'green',
    highlightBadge: 'Exploración / Piloto · Loop Regenerativo',
    statusType: 'oportunidad',
    justification:
      'En fase de exploración y piloto. Permite que los envases biodegradables y etiquetas con semillas retornen a la biosfera como nutrientes mediante compostaje industrial o doméstico controlado, siempre evitando la contaminación cruzada.',
    actors: [
      { category: 'Material', description: 'Biopolímeros compostables certificados y etiquetas con semillas viables.' },
      { category: 'Hatos y Biogás', description: 'Ganadería sostenible certificada, acuerdos de cero deforestación y PTAR Sopó (38% biogás).' },
      { category: 'Gestores', description: 'Plantas de compostaje industrial y consumidores capacitados.' }
    ],
    implementationStrategy: [
      { step: '01', title: 'Certificación de compostabilidad', description: 'Asegurar norma internacional de compostabilidad industrial/doméstica en envases Bio.' },
      { step: '02', title: 'Segregación estricta', description: 'Separar claramente el flujo Bio del plástico reciclable convencional para no contaminar el rPET.' },
      { step: '03', title: 'Alianzas con gestores', description: 'Conectar puntos de retorno con gestores reales de compostaje agrícola.' }
    ],
    sanitaryNotes: [
      {
        title: 'Contaminación cruzada en reciclaje plástico',
        description: 'Un envase Bio sin disposición diferenciada contamina los lotes de reciclaje mecánico de plásticos.',
        criticality: 'Alta'
      }
    ],
    metricsGoal: 'Garantizar certificación de compostabilidad y validar resistencia térmica en cadena de frío (E3).'
  },
  {
    id: 'bio-cascada',
    cycle: 'biological',
    loopType: 'cascada',
    title: 'Kumis a quesos y simbiosis con Ramo, Nutresa y Kellanova',
    shortSubtitle: 'Loop en Cascada · Valorización agroindustrial y mermas',
    tagline: 'Sustitución de cereal virgen con mermas inocuas y derivación de excedentes lácteos',
    iconName: 'Recycle',
    colorScheme: 'green',
    highlightBadge: 'Simbiosis Industrial · E2 (Prioridad 2)',
    statusType: 'oportunidad',
    justification:
      'Conecta excedentes lácteos (kumis/yogurt próximos a vencer) con investigación en quesos y alimentación animal, junto a la incorporación de mermas inocuas de galletas, cereales y chocolates de empresas aliadas como Ramo, Jet, Nutresa y Kellanova (supuesto 5%–10% línea base → meta 15%).',
    actors: [
      { category: 'Aliados industriales', description: 'Ramo, Grupo Nutresa, Jet y Kellanova / Kellogg’s (mermas aptas para consumo humano).' },
      { category: 'Cadena láctea', description: 'Plantas de Sopó, Caloto y Chinchiná + industria de alimentos balanceados para mascotas.' }
    ],
    implementationStrategy: [
      { step: '01', title: 'Mapeo de mermas inocuas', description: 'Identificar excedentes de galleta, cereal y chocolate que cumplan inocuidad alimentaria.' },
      { step: '02', title: 'Protocolos de trazabilidad', description: 'Asegurar cadena de frío y validación microbiológica en cada lote derivado.' },
      { step: '03', title: 'Reincorporación como toppings', description: 'Integrar los subproductos certificados directamente en la línea Bon Yurt y quesos.' }
    ],
    sanitaryNotes: [
      {
        title: 'Validación microbiológica y cadena de frío',
        description: 'Excedentes lácteos que rompan cadena de frío no deben ir a consumo humano directo sin análisis microbiológico.',
        criticality: 'Alta'
      }
    ],
    metricsGoal: 'Sustituir ≥10% (meta 15% a 3 años) de cereal virgen por mermas aptas de aliados.'
  },
  {
    id: 'bio-corto',
    cycle: 'biological',
    loopType: 'corto',
    title: 'Cucharas comestibles de galleta',
    shortSubtitle: 'Loop Corto (Consumo) · Cero residuo plástico desde el diseño',
    tagline: 'Eliminación en la fuente de la cuchara de poliestireno de un solo uso',
    iconName: 'Utensils',
    colorScheme: 'green',
    highlightBadge: 'Prioridad 1 · Corto Plazo (0–12m)',
    statusType: 'oportunidad',
    justification:
      'Es el loop más interno del ciclo biológico: elimina el residuo desde el diseño al ser ingerida junto con el producto. Actualmente en piloto de ecodiseño (5% fase piloto); escalarla permite suprimir hasta 80% de cucharas plásticas en la línea clásica.',
    actors: [
      { category: 'Interno', description: 'Gerencia de I+D+i y Operaciones Alpina.' },
      { category: 'Aliados externos', description: 'Proveedores de panificación y biotecnología alimentaria.' }
    ],
    implementationStrategy: [
      { step: '01', title: 'Formulación antihumedad', description: 'Estandarizar galleta resistente al yogurt durante todo el consumo.' },
      { step: '02', title: 'Integración en línea', description: 'Adaptar empaque en sobrecopa sin afectar sellado ni inocuidad.' },
      { step: '03', title: 'Campaña al consumidor', description: 'Posicionar el atributo "cómete la cuchara" como diferenciador circular.' }
    ],
    sanitaryNotes: [
      {
        title: 'Barrera de humedad e inocuidad en línea',
        description: 'Requiere empaque hermético y cumplimiento de buenas prácticas de manufactura panificadora.',
        criticality: 'Media'
      }
    ],
    metricsGoal: 'Pasar de 5% piloto a 80% de sustitución de cucharas plásticas en 0–12 meses.'
  },

  // ================= CICLO TÉCNICO =================
  {
    id: 'tec-corto',
    cycle: 'technical',
    loopType: 'corto',
    title: 'Reutilización directa de vasos y tapas (PRAE / Manualidades)',
    shortSubtitle: 'Loop Corto Técnico · Segundo uso escolar y doméstico',
    tagline: 'Extensión de vida útil en colegios y hogares antes del reciclaje',
    iconName: 'GraduationCap',
    colorScheme: 'blue',
    highlightBadge: 'Educación Ambiental · E4 (Prioridad 4)',
    statusType: 'actual',
    justification:
      'Promueve el lavado y segundo uso creativo de vasos y tapas en entornos escolares (manualidades y materas) y domésticos, prolongando la vida útil del polímero antes de su entrega a reciclaje limpio.',
    actors: [
      { category: 'Educación', description: 'Colegios con Proyectos Ambientales Escolares (PRAE), niños y docentes.' },
      { category: 'Hogares', description: 'Familias colombianas en canales tradicionales y supermercados.' }
    ],
    implementationStrategy: [
      { step: '01', title: 'Concurso «Bon Yurt Transforma»', description: 'Activación pedagógica de lavado, manualidades y retorno escolar.' },
      { step: '02', title: 'Guía de separación limpia', description: 'Educar sobre enjuague básico del vaso para evitar malos olores y vectores.' }
    ],
    sanitaryNotes: [
      {
        title: 'Higienización previa',
        description: 'Todo vaso reutilizado o acopiado en escuelas debe enjuagarse para evitar proliferación microbiana de residuos lácteos.',
        criticality: 'Media'
      }
    ],
    metricsGoal: 'Escalar la red PRAE y conectar con gestores formales para no quedar solo en manualidades.'
  },
  {
    id: 'tec-local',
    cycle: 'technical',
    loopType: 'local',
    title: 'Reciclaje posconsumo (>450 recicladores) y canje PRAE / REP',
    shortSubtitle: 'Loop Local · Plástico Neutralidad 59% → 75% y 75% rPET sobrecopa',
    tagline: 'Recuperación limpia con recicladores de oficio, programa de premios y planes REP',
    iconName: 'Building2',
    colorScheme: 'blue',
    highlightBadge: 'Operación Activa + E4',
    statusType: 'actual',
    justification:
      'La sobrecopa transparente ya incorpora 75% de rPET y facilita la separación óptica; sin embargo, el 41% de plásticos puestos en mercado aún no se recuperan y el vaso principal (~25% en piloto) sufre fuga hacia relleno sanitario. Con >450 recicladores de oficio y canje escolar se busca elevar la plástico neutralidad del 59% al 75%.',
    actors: [
      { category: 'Inclusión social', description: 'Más de 450 recicladores de oficio y asociaciones formalizadas (ODS 8).' },
      { category: 'Canales', description: 'Colegios PRAE, puntos de canje "Recicla, juega y gana premios" y gestores REP Res. 1407.' }
    ],
    implementationStrategy: [
      { step: '01', title: 'Puntos de retorno escolar y retail', description: 'Instalar estaciones de acopio limpio en colegios y supermercados.' },
      { step: '02', title: 'Pago justo a recicladores', description: 'Articular rutas de recolección con pago directo y certificación ANLA/VUCE.' },
      { step: '03', title: 'Vaso monomaterial rPET', description: 'Transición del vaso multicapa a monomaterial 100% reciclable con validación INVIMA (E3).' }
    ],
    sanitaryNotes: [
      {
        title: 'Grado alimentario FDA / INVIMA',
        description: 'El rPET que vuelve a contacto directo con yogurt exige certificación estricta de descontaminación grado alimentario.',
        criticality: 'Alta'
      }
    ],
    metricsGoal: 'Incrementar Plástico Neutralidad de 59% a 75% e Índice de Reciclabilidad de 51% a 70%.'
  }
];

export const CIRCULARITY_FLOWS_TABLE: CircularityFlowItem[] = [
  {
    id: 'flow-sobrecopa',
    material: 'Sobrecopa transparente (rPET)',
    cycle: 'Técnico',
    baselineAmount: '75% material reincorporado (Alpina, 2025).',
    currentDestination: 'Reciclaje mediante redes de recicladores (59% recolección global).',
    currentLoop: 'Loop local (Reciclaje).',
    leakageOrLoss: '41% de plásticos puestos en el mercado aún no se recuperan.',
    innerLoopOpportunity: 'Escalar al 100% de contenido reciclado y fortalecer puntos de retorno directo.',
    statusType: 'actual'
  },
  {
    id: 'flow-vaso',
    material: 'Vaso plástico y cuchara convencional',
    cycle: 'Técnico',
    baselineAmount: '~25% material reciclado en líneas piloto; resto resina virgen.',
    currentDestination: 'Relleno sanitario (mayoría) y reciclaje parcial.',
    currentLoop: 'Ninguno (Lineal) / Loop local parcial.',
    leakageOrLoss: 'Pérdida de polímeros de alto valor en rellenos sanitarios.',
    innerLoopOpportunity: 'Loop corto: Sustituir cuchara por galleta comestible; migrar vaso a monomaterial 100% reciclable o Bio certificado.',
    statusType: 'parcial'
  },
  {
    id: 'flow-cuchara',
    material: 'Cucharas comestibles de galleta',
    cycle: 'Biológico',
    baselineAmount: 'Piloto de ecodiseño (5% fase piloto / 0% plástico).',
    currentDestination: 'Consumo humano directo junto al producto.',
    currentLoop: 'Loop corto (Consumo).',
    leakageOrLoss: 'Ninguna (elimina el residuo desde el diseño).',
    innerLoopOpportunity: 'Masificar en toda la línea clásica de Bon Yurt (hasta 80% en 12 meses).',
    statusType: 'oportunidad'
  },
  {
    id: 'flow-lacteos',
    material: 'Excedentes lácteos (kumis / yogurt próximo a vencer)',
    cycle: 'Biológico',
    baselineAmount: 'Mermas controladas en planta y devoluciones.',
    currentDestination: 'Alimentación animal e investigación en quesos.',
    currentLoop: 'Loop en cascada.',
    leakageOrLoss: 'Pérdida de valor nutricional si se rompe la cadena de frío.',
    innerLoopOpportunity: 'Estandarizar protocolos sanitarios para derivación segura a quesos y derivados lácteos.',
    statusType: 'actual'
  },
  {
    id: 'flow-cereales',
    material: 'Mermas de cereales y chocolates',
    cycle: 'Biológico',
    baselineAmount: 'Supuesto: 5% – 10% de sustitución potencial de cereal virgen (0% comercial).',
    currentDestination: 'Subproductos en industrias aliadas (Ramo, Nutresa, Jet).',
    currentLoop: 'Loop en cascada (Simbiosis industrial).',
    leakageOrLoss: 'Subutilización de materias primas aptas para consumo humano.',
    innerLoopOpportunity: 'Formalizar acuerdos de simbiosis industrial para reincorporar mermas certificadas como toppings (meta 15%).',
    statusType: 'oportunidad'
  },
  {
    id: 'flow-bio',
    material: 'Envases de la línea Bio y etiquetas con semillas',
    cycle: 'Biológico',
    baselineAmount: 'En fase de exploración / piloto.',
    currentDestination: 'Compostaje industrial o doméstico (si existe gestión).',
    currentLoop: 'Loop regenerativo.',
    leakageOrLoss: 'Riesgo de contaminación cruzada si terminan en relleno sanitario sin compostaje.',
    innerLoopOpportunity: 'Garantizar certificación de compostabilidad y alianzas con gestores de compostaje.',
    statusType: 'oportunidad'
  },
  {
    id: 'flow-prae',
    material: 'Vasos y tapas en colegios (PRAE)',
    cycle: 'Técnico',
    baselineAmount: 'Alcance educativo en instituciones aliadas.',
    currentDestination: 'Reutilización en manualidades y acopio escolar.',
    currentLoop: 'Loop local / Loop corto.',
    leakageOrLoss: 'Baja escalabilidad si no se articula con gestores formales.',
    innerLoopOpportunity: 'Escalar el concurso «Bon Yurt Transforma» articulado con asociaciones de recicladores.',
    statusType: 'parcial'
  }
];

export const LCA_PHASES: LcaPhase[] = [
  {
    id: 1,
    name: '1. Extracción y materias primas (Hatos y Cultivos)',
    shortTitle: 'Extracción y Campo',
    durationOrScope: 'Hatos lecheros, cultivos agrícolas y petroquímica',
    isHotspot: true,
    hotspotReason: 'Hotspot Hídrico y Climático: La ganadería lechera y el cultivo de cereales concentran el mayor consumo de agua y emisiones de metano/GEI de toda la cadena de valor.',
    griIndicators: ['GRI 301', 'GRI 302', 'GRI 303', 'GRI 305', 'GRI 306'],
    actors: ['Ganaderos aliados (hatos lecheros)', 'Productores de cereales (alianzas con Kellogg’s / Kellanova)', 'Industria petroquímica'],
    processes: [
      'Producción primaria de leche cruda bajo criterios de ganadería sostenible y cero deforestación',
      'Cultivo y procesamiento de cereales',
      'Extracción y síntesis de resinas plásticas vírgenes y bio-resinas'
    ],
    inputs: {
      material: ['Leche cruda y materias primas agrícolas (GRI 301)', 'Insumos de nutrición animal'],
      water: 'Riego de cultivos y consumo en hatos lecheros (GRI 303)',
      energy: 'Electricidad y combustibles en maquinaria agrícola, ordeño mecánico e iluminación de hatos (GRI 302)'
    },
    outputs: {
      products: ['Leche cruda y cereales cosechados', 'Resinas plásticas y biopolímeros'],
      waste: ['Residuos orgánicos agrícolas de baja escala (GRI 306)'],
      emissions: 'GEI agrícolas mitigados por estrategias de cambio climático (GRI 305)',
      byproducts: ['Acuerdos de cero deforestación']
    },
    circularOpportunity: 'Integrar mermas alimentarias inocuas de Ramo, Nutresa y Kellanova para sustituir hasta 15% de cereal virgen y reducir huella hídrica agrícola.'
  },
  {
    id: 2,
    name: '2. Proveedores y transporte de entrada',
    shortTitle: 'Transporte de Entrada',
    durationOrScope: 'Hatos y centros de acopio → Plantas Sopó, Caloto y Chinchiná',
    isHotspot: false,
    griIndicators: ['GRI 301', 'GRI 302', 'GRI 303', 'GRI 305', 'GRI 306'],
    actors: ['Red logística de Alpina', 'Proveedores certificados', 'Transportadores'],
    processes: [
      'Traslado de leche cruda desde hatos hacia centros de acopio y plantas estratégicas (Sopó, Caloto, Chinchiná) asegurando trazabilidad y cadena de frío'
    ],
    inputs: {
      material: ['Insumos empacados y envases (líneas Bio y cartón reciclado) (GRI 301)'],
      water: 'Lavado de carrotanques y tanques de acopio (GRI 303)',
      energy: 'Combustible diésel/gasolina para flotas y electricidad en refrigeración en tránsito (GRI 302)'
    },
    outputs: {
      products: ['Materias primas en planta con trazabilidad completa'],
      waste: ['Aguas de lavado tratadas (GRI 303/306)'],
      emissions: 'Emisiones de transporte (CO2) y material particulado (GRI 305)',
      byproducts: ['Cartón reciclado en embalajes de entrada']
    },
    circularOpportunity: 'Suministro regional cercano y optimización de carga para reducir intensidad de CO2 por tonelada transportada.'
  },
  {
    id: 3,
    name: '3. Producción o transformación',
    shortTitle: 'Producción en Planta',
    durationOrScope: 'Sopó, Caloto y Chinchiná · 95,2% aprovechamiento y 38% biogás Sopó',
    isHotspot: true,
    hotspotReason: 'Hotspot Energético en Cadena de Frío (Fases 3 y 4): Alta demanda eléctrica en maquinaria, sellado y refrigeración continua, compensada parcialmente por 24% autogeneración (38% biogás en Sopó).',
    griIndicators: ['GRI 301', 'GRI 302', 'GRI 303', 'GRI 306'],
    actors: ['Plantas de producción Alpina', 'Equipos de I+D+i (Innovación)', 'Operarios'],
    processes: [
      'Pasteurización y fermentación de la base láctea',
      'Termoformado de vasos y sobrecopas transparentes (75% plástico reincorporado rPET)',
      'Integración de cereales; investigación en derivación de excedentes lácteos para quesos o subproductos'
    ],
    inputs: {
      material: ['Leche, cultivos, cereales, azúcares, resinas y cartón reciclado (GRI 301)'],
      water: 'Agua industrial para limpieza, vapor, refrigeración y saneamiento (GRI 303)',
      energy: 'Alta demanda eléctrica para maquinaria, líneas de sellado y cadena de frío (24% autogenerada nacional) (GRI 302)'
    },
    outputs: {
      products: ['Bon Yurt terminado y empacado (unidad funcional 175 g)'],
      waste: ['Residuos postindustriales aprovechables: 95,2% de aprovechamiento (GRI 306)'],
      emissions: 'Aguas residuales enviadas a PTAR con generación de biogás en Sopó (38% electricidad de planta)',
      byproducts: ['Subproductos lácteos aprovechados en cascada']
    },
    circularOpportunity: 'Escalar 95,2% → 98% con Certificación Vertedero Cero en todas las plantas, autogeneración 24% → 30% e integración de cucharas de galleta en línea.'
  },
  {
    id: 4,
    name: '4. Empaque y distribución',
    shortTitle: 'Empaque y Distribución',
    durationOrScope: 'CEDI (ej. Galapa solar) → 97% de los municipios de Colombia',
    isHotspot: true,
    hotspotReason: 'Hotspot Energético en Cadena de Frío (Fases 3 y 4): Electricidad intensiva para refrigeración estática en CEDI y cámaras frías, además de mermas por rotación o daño en transporte.',
    griIndicators: ['GRI 301', 'GRI 302', 'GRI 303', 'GRI 305', 'GRI 306'],
    actors: ['Centros de distribución (CEDI)', 'Canales de retail', 'Tiendas de barrio', 'Supermercados'],
    processes: [
      'Almacenamiento masivo en frío y gestión de inventarios',
      'Distribución nacional al 97% de municipios apalancada en sistemas solares (destacando CEDI Galapa)'
    ],
    inputs: {
      material: ['Productos terminados Bon Yurt y embalajes secundarios de cartón'],
      water: 'Consumo menor en instalaciones administrativas y logísticas (GRI 303)',
      energy: 'Electricidad intensiva para refrigeración estática en CEDI y cámaras frías (6% solar nacional) (GRI 302)'
    },
    outputs: {
      products: ['Bon Yurt entregado en puntos de venta'],
      waste: ['Mermas de producto por rotación o daños en transporte (GRI 306)'],
      emissions: 'Emisiones por logística de distribución (GRI 305)',
      byproducts: ['Embalajes de cartón corrugado reincorporados']
    },
    circularOpportunity: 'Ampliar energía solar en CEDI regionales e implementar simbiosis reversa para devoluciones antes de vencimiento.'
  },
  {
    id: 5,
    name: '5. Uso o consumo',
    shortTitle: 'Consumo y Ecodiseño',
    durationOrScope: 'Hogares colombianos, colegios y tiendas · Brecha de reporte doméstico',
    isHotspot: true,
    hotspotReason: 'Hotspot Crítico de Plásticos de un Solo Uso + Brecha Ruta A: El vaso y la cuchara plástica convencional generan el mayor volumen de fuga por baja separación, sin desagregación exacta por SKU en informes públicos.',
    griIndicators: ['GRI 302', 'GRI 303', 'GRI 306'],
    actors: ['Hogares colombianos', 'Tiendas de barrio', 'Niños y jóvenes (consumidor potencial)'],
    processes: [
      'Comercialización, refrigeración en punto de venta y hogar, apertura y mezcla del cereal',
      'Ecodiseño: exploración de cucharas de galleta comestibles (5% piloto) y sobrecopas transparentes (75% rPET)'
    ],
    inputs: {
      material: ['Bon Yurt listo para consumir'],
      water: 'Uso doméstico asociado al consumo y enjuague de envases (GRI 303)',
      energy: 'Energía eléctrica en neveras de hogares y tiendas para mantener cadena de frío (GRI 302)'
    },
    outputs: {
      products: ['Alimento consumido por el usuario (175 g)'],
      waste: ['Envases vacíos: vaso, sobrecopa transparente y cuchara (GRI 306)'],
      emissions: 'Emisiones indirectas de refrigeración doméstica (no desagregadas en reporte Ruta A)',
      byproducts: ['Inversión social y educativa de marca con clientes potenciales']
    },
    circularOpportunity: 'Eliminar hasta el 80% de cucharas plásticas con cuchara de galleta (E1) y activar incentivos de lavado y canje en hogares y colegios (E4).'
  },
  {
    id: 6,
    name: '6. Fin de vida (Posconsumo y Valorización)',
    shortTitle: 'Fin de Vida y Valorización',
    durationOrScope: '>450 recicladores · PRAE · Alimento mascotas y quesos',
    isHotspot: true,
    hotspotReason: 'Hotspot de Fuga Lineal Posconsumo: El 41% de plásticos aún no se recuperan y no existe desagregación pública del % exacto de vasos Bon Yurt en relleno sanitario vs. recuperados.',
    griIndicators: ['GRI 302', 'GRI 303', 'GRI 305', 'GRI 306'],
    actors: ['Consumidores y niños', 'Redes de recicladores de oficio (>450)', 'Gestores aliados REP', 'Industria de alimentos balanceados'],
    processes: [
      'Programas posconsumo y PRAE: canje de envases y sobrecopas («Recicla, juega y gana premios»)',
      'Nuevos usos: manualidades educativas (macetas) e incorporación de cartón reciclado',
      'Valorización de vencidos: alimento para mascotas, investigación en quesos y alimentos funcionales'
    ],
    inputs: {
      material: ['Residuos postconsumo recuperados (vasos, sobrecopas, cartón)'],
      water: 'Lavado y acondicionamiento en plantas transformadoras (GRI 303)',
      energy: 'Electricidad en plantas de reciclaje asociadas y centros de acopio (GRI 302)'
    },
    outputs: {
      products: ['Materiales plásticos reintroducidos al ciclo técnico', 'Materia prima para alimentación animal'],
      waste: ['Reducción de envases en rellenos sanitarios (59% plástico neutralidad actual)'],
      emissions: 'Emisiones y residuos evitados (GRI 305/306)',
      byproducts: ['Inclusión social y económica de >450 recicladores de oficio (ODS 8)']
    },
    circularOpportunity: 'Migrar el vaso a monomaterial 100% rPET/Bio certificado (E3: IR 51%→70%) y escalar «Bon Yurt Transforma» para llevar plástico neutralidad de 59% a 75%.'
  }
];

export const LCA_HOTSPOTS_AND_GAPS: LcaHotspotGap[] = [
  {
    id: 1,
    title: 'Generación de plásticos de un solo uso',
    phaseRef: 'Fases 5 y 6 (Uso y Fin de Vida)',
    type: 'Hotspot',
    description: 'El vaso principal y la cuchara plástica convencional representan el mayor volumen de fuga hacia rellenos sanitarios debido a la baja separación en la fuente por parte del consumidor final.'
  },
  {
    id: 2,
    title: 'Consumo intensivo de energía en cadena de frío',
    phaseRef: 'Fases 3 y 4 (Producción y Distribución)',
    type: 'Hotspot',
    description: 'La refrigeración continua en plantas, CEDI y puntos de venta concentra una proporción crítica de la huella de carbono operacional (GRI 302 y 305).'
  },
  {
    id: 3,
    title: 'Huella hídrica y emisiones en producción primaria',
    phaseRef: 'Fase 1 (Extracción y Cultivos)',
    type: 'Hotspot',
    description: 'La ganadería lechera y el cultivo de cereales concentran el mayor consumo de agua y emisiones de metano/GEI de toda la cadena de valor.'
  },
  {
    id: 4,
    title: 'Brechas en los reportes públicos (Ruta A)',
    phaseRef: 'Fases 5 y 6 (Refrigeración doméstica y recuperación por SKU)',
    type: 'Brecha de Reporte (Ruta A)',
    description: 'Aunque Alpina reporta de manera consolidada sus indicadores GRI 301, 302, 303, 305 y 306 a nivel corporativo y de plantas propias (Fases 2, 3 y 4), los informes públicos no desagregan el impacto específico por referencia de producto (Bon Yurt) ni cuantifican con exactitud el consumo eléctrico doméstico (Fase 5) o el porcentaje exacto de vasos en relleno vs. recuperados (Fase 6).'
  }
];

export const ELLEN_MACARTHUR_PRINCIPLES: EllenMacArthurPrinciple[] = [
  {
    id: 1,
    name: '1. Eliminar residuos y contaminación desde el diseño',
    status: 'Sí (Parcial)',
    description: 'Aligeramiento de empaques, transparencia óptica y eliminación en fuente de accesorios de un solo uso.',
    maturityLevel: 4,
    levelLabel: 'Avanzado con Brecha en Cuchara (4/5)',
    bonYurtEvidence: [
      'Aligeramiento continuo de gramajes en envases y uso de sobrecopas transparentes para facilitar la separación óptica.',
      'Pilotos activos de cuchara comestible de galleta (5% piloto) y exploración de línea Bio.',
      'Brecha detectada: persiste el uso de cuchara plástica desechable en la presentación tradicional.'
    ],
    impactMetric: '4/5 · Meta E1: -80% cucharas plásticas en 12 meses'
  },
  {
    id: 2,
    name: '2. Circular productos y materiales en su máximo valor',
    status: 'Sí',
    description: 'Reincorporación de polímeros reciclados, valorización postindustrial y redes de recuperación posconsumo.',
    maturityLevel: 4,
    levelLabel: 'Consolidado en Planta / Parcial Posconsumo (4/5)',
    bonYurtEvidence: [
      'Reincorporación del 75% de plástico reciclado (rPET) en la sobrecopa del Bon Yurt y 25% en vaso piloto.',
      'Alianzas con más de 450 recicladores de oficio para lograr el 59% de plástico neutralidad (Alpina, 2025).',
      'Aprovechamiento del 95,2% de residuos postindustriales y cascada láctea hacia quesos y alimento animal.'
    ],
    impactMetric: '4/5 · 75% rPET sobrecopa · 59% Plástico Neutralidad'
  },
  {
    id: 3,
    name: '3. Regenerar la naturaleza',
    status: 'Sí',
    description: 'Sistemas agropecuarios sostenibles, protección de bosques, energías limpias y retorno biológico certificado.',
    maturityLevel: 5,
    levelLabel: 'Madurez Plena / Referente BIC (5/5)',
    bonYurtEvidence: [
      'Integrado al modelo de Sociedad de Beneficio e Interés Colectivo (BIC).',
      'Ganadería sostenible certificada y acuerdos de cero deforestación en hatos lecheros aliados.',
      'Autogeneración del 38% de la electricidad en Planta Sopó mediante biogás de su PTAR y 6% energía solar nacional (ej. CEDI Galapa).'
    ],
    impactMetric: '5/5 · 38% Biogás Sopó · Cero Deforestación'
  }
];

export const NINE_R_STRATEGIES: NineRStrategy[] = [
  {
    code: 'R0',
    name: 'Rechazar',
    group: 'Uso inteligente y manufactura',
    status: 'Parcial',
    lifecyclePhase: 'Producción / Uso',
    definition: 'Hacer que el producto o componente plástico de un solo uso sea redundante abandonando su función desechable.',
    application: 'Pilotos de eliminación de cucharas plásticas mediante cucharas de galleta comestibles (5% actual).',
    reductionDetail: 'Brecha: Aún no se escala al 100% del portafolio; E1 busca sustituir hasta el 80% en la línea clásica.',
    maturityScore: 3,
    progressPercentage: 60
  },
  {
    code: 'R1',
    name: 'Repensar',
    group: 'Uso inteligente y manufactura',
    status: 'Parcial',
    lifecyclePhase: 'Diseño / Consumo',
    definition: 'Hacer el uso del producto y empaque más intensivo y pedagógico, replanteando materiales y hábitos de consumo.',
    application: 'Rediseño conceptual de envases Bio con etiquetas de semillas y proyectos educativos PRAE.',
    reductionDetail: 'Brecha: Fase piloto/conceptual; requiere certificar compostabilidad y masificar cultura de no-descarte.',
    maturityScore: 3,
    progressPercentage: 60
  },
  {
    code: 'R2',
    name: 'Reducir',
    group: 'Uso inteligente y manufactura',
    status: 'Sí',
    lifecyclePhase: 'Producción / Empaque',
    definition: 'Aumentar la eficiencia en la fabricación consumiendo menos recursos naturales, resinas vírgenes y energía convencional.',
    application: 'Reducción sistemática del peso de resinas vírgenes por unidad de empaque y 38% menos electricidad convencional en Sopó gracias al biogás.',
    reductionDetail: 'Autogeneración energética nacional del 24% (6% solar CEDI Galapa + 18% nacional desde biogás Sopó).',
    maturityScore: 4,
    progressPercentage: 80
  },
  {
    code: 'R3',
    name: 'Reutilizar',
    group: 'Extender vida útil',
    status: 'Parcial',
    lifecyclePhase: 'Uso / Fin de vida',
    definition: 'Reutilización directa de vasos y tapas limpios para otros fines domésticos y pedagógicos antes del reciclaje.',
    application: 'Promoción de segundo uso de vasos y tapas en entornos escolares (PRAE) y hogares (manualidades y materas).',
    reductionDetail: 'Brecha: Limitado a campañas locales; E4 integra estas iniciativas con gestores formales para no perder el material.',
    maturityScore: 3,
    progressPercentage: 60
  },
  {
    code: 'R7',
    name: 'Reutilizar con otro propósito',
    group: 'Extender vida útil / Cascada',
    status: 'Sí',
    lifecyclePhase: 'Producción / Fin de vida',
    definition: 'Utilizar subproductos descartados o excedentes en una nueva función o industria alimentaria con menor exigencia.',
    application: 'Derivación de subproductos lácteos (kumis/yogurt vencido) hacia quesos y alimentación animal, y simbiosis de mermas de cereales con Ramo, Nutresa y Kellanova.',
    reductionDetail: 'Valorización en cascada consolidada en planta; E2 busca llevar la sustitución de cereal virgen del 0% piloto al 15%.',
    maturityScore: 4,
    progressPercentage: 80
  },
  {
    code: 'R8',
    name: 'Reciclar',
    group: 'Aplicación útil de materiales',
    status: 'Sí',
    lifecyclePhase: 'Fin de vida',
    definition: 'Procesar materiales para obtener igual calidad (rPET grado alimentario) o calidad secundaria mediante reciclaje mecánico y REP.',
    application: 'Índice de Reciclabilidad corporativo del 51%, aprovechamiento del 95,2% de residuos postindustriales y 59% de plástico neutralidad mediante planes REP.',
    reductionDetail: '75% rPET en sobrecopa y >450 recicladores; brecha en el vaso principal (~25% piloto) que aborda E3 (meta IR 70%).',
    maturityScore: 4,
    progressPercentage: 80
  },
  {
    code: 'R9',
    name: 'Recuperar',
    group: 'Aplicación útil de materiales',
    status: 'Sí',
    lifecyclePhase: 'Producción / Fin de vida',
    definition: 'Valorización energética (biogás) e incineración controlada / co-procesamiento de fracciones no reciclables.',
    application: 'Valorización energética mediante biogás en PTAR de Sopó (38% electricidad de planta) y co-procesamiento de residuos no reciclables con gestores autorizados bajo directriz Vertedero Cero.',
    reductionDetail: 'Complementa el 95,2% de aprovechamiento industrial rumbo a la meta del 98% Vertedero Cero.',
    maturityScore: 4,
    progressPercentage: 80
  }
];

export const PRIORITIZED_STRATEGIES: PrioritizedStrategy[] = [
  {
    id: 'E1',
    number: 'E1',
    priorityRank: 1,
    title: 'Escalamiento de cucharas comestibles de galleta',
    tagline: 'Prioridad 1 · Corto Plazo (0–12 meses) · R0 (Rechazar)',
    principleR: 'R0 (Rechazar) / Eliminar residuos desde el diseño',
    phaseTransformed: 'Empaque, Uso y Fin de vida',
    horizon: 'Corto plazo (0-12m)',
    impactLabel: 'Alto',
    feasibilityLabel: 'Alta',
    impactScore: 8.5,
    feasibilityScore: 9.0,
    objective: 'Eliminar el residuo plástico de un solo uso de la cuchara convencional en la fuente mediante escalamiento de galleta comestible diferenciando la marca.',
    targetAudience: 'Niños, jóvenes, familias y canales de consumo masivo de la línea clásica de Bon Yurt.',
    responsible: 'Gerencia de I+D+i y Operaciones Alpina',
    externalAllies: ['Proveedores de panificación y biotecnología alimentaria'],
    actions: [
      '1. Estandarizar formulación de cuchara de galleta resistente a la humedad del yogurt.',
      '2. Integrar dosificación y sellado en línea de empaque sin afectar inocuidad ni vida útil.',
      '3. Desplegar campaña de comunicación al consumidor resaltando la experiencia sin residuo plástico.'
    ],
    barriersAndMitigation: [
      {
        barrier: 'Costo unitario mayor frente a cuchara de poliestireno convencional y sensibilidad a humedad.',
        mitigation: 'Alianzas de escala con panificadoras, empaque sellado en sobrecopa y crédito verde / beneficios tributarios en Colombia.'
      }
    ],
    expectedImpact: 'Eliminación de hasta el 80% de cucharas plásticas en la línea clásica y ahorro en compras de poliestireno.',
    imageKey: '/images/slides/slide_visual_4.png'
  },
  {
    id: 'E2',
    number: 'E2',
    priorityRank: 2,
    title: 'Simbiosis industrial de mermas alimentarias',
    tagline: 'Prioridad 2 · Corto Plazo (6–18 meses) · R7 (Reutilizar con otro propósito)',
    principleR: 'R7 (Reutilizar con otro propósito) / Recuperación de recursos',
    phaseTransformed: 'Extracción y Producción',
    horizon: 'Corto plazo (6-18m)',
    impactLabel: 'Alto',
    feasibilityLabel: 'Alta',
    impactScore: 8.5,
    feasibilityScore: 8.2,
    objective: 'Reducir el desperdicio de alimentos y la huella hídrica agrícola aprovechando mermas inocuas de galletas, cereales y chocolates de industrias colombianas aliadas.',
    targetAudience: 'Cadena de suministro de toppings y áreas de compras sostenibles y calidad.',
    responsible: 'Gerencia de Calidad y Compras Sostenibles',
    externalAllies: ['Empresas aliadas: Ramo, Grupo Nutresa (Jet) y Kellanova'],
    actions: [
      '1. Mapear mermas inocuas de galletas, cereales y chocolates compatibles en granulometría y sabor.',
      '2. Establecer protocolos estrictos de trazabilidad, cadena de frío e inocuidad alimentaria.',
      '3. Incorporar las mermas certificadas como toppings en la sobrecopa del Bon Yurt.'
    ],
    barriersAndMitigation: [
      {
        barrier: 'Riesgo sanitario por pérdida de trazabilidad o estándares INVIMA para reincorporación alimentaria.',
        mitigation: 'Validación microbiológica por lote, acuerdos de calidad origen-destino y trazabilidad digital continua.'
      }
    ],
    expectedImpact: 'Sustitución de al menos 10% de cereal virgen (meta 15% a 3 años), reducción de huella hídrica y ahorro en costos de materia prima.',
    imageKey: '/images/slides/slide_visual_4.png'
  },
  {
    id: 'E3',
    number: 'E3',
    priorityRank: 3,
    title: 'Transición del vaso a monomaterial 100% rPET / Bio certificado',
    tagline: 'Prioridad 3 · Mediano Plazo (12–36 meses) · R2 & R8',
    principleR: 'R2 (Reducir) y R8 (Reciclar) / Insumos circulares',
    phaseTransformed: 'Producción y Fin de vida',
    horizon: 'Mediano plazo (12-36m)',
    impactLabel: 'Muy Alto',
    feasibilityLabel: 'Media',
    impactScore: 9.6,
    feasibilityScore: 5.5,
    objective: 'Cerrar el ciclo técnico del componente de mayor peso del empaque sustituyendo vasos multicapa difíciles de reciclar por monomateriales 100% reciclables o biopolímeros compostables certificados.',
    targetAudience: 'Proveedores de resinas circulares, transformadores de termoformado y autoridad sanitaria INVIMA.',
    responsible: 'Dirección de Sostenibilidad y Empaques',
    externalAllies: ['Proveedores de resinas circulares', 'INVIMA', 'Gestores REP'],
    actions: [
      '1. Sustituir vasos multicapa por monomateriales de alta reciclabilidad (100% rPET grado alimentario) o biopolímeros compostables certificados.',
      '2. Validar resistencia mecánica, sellado térmico y barrera microbiológica en cadena de frío.',
      '3. Gestionar registros sanitarios ante INVIMA y ajustar moldes de termoformado.'
    ],
    barriersAndMitigation: [
      {
        barrier: 'INVIMA exige estrictos estándares de inocuidad en contacto directo con lácteos y mayor CAPEX de ajuste de moldes.',
        mitigation: 'Resinas rPET con certificación grado alimentario FDA/INVIMA, descuento en renta / exclusión de IVA (Estatuto Tributario) y crédito verde Bancóldex.'
      }
    ],
    expectedImpact: 'Incremento del Índice de Reciclabilidad (IR) corporativo del 51% actual al 70% y MCI ≥ 0,68.',
    imageKey: '/images/slides/slide_visual_4.png'
  },
  {
    id: 'E4',
    number: 'E4',
    priorityRank: 4,
    title: 'Red de retorno escolar y comunitaria «Bon Yurt Transforma» (PRAE)',
    tagline: 'Prioridad 4 · Corto-Mediano Plazo (6–24 meses) · R3 & R8',
    principleR: 'R3 (Reutilizar) y R8 (Reciclar) / Circular materiales',
    phaseTransformed: 'Uso y Fin de vida',
    horizon: 'Corto-mediano plazo (6-24m)',
    impactLabel: 'Medio-Alto',
    feasibilityLabel: 'Alta',
    impactScore: 7.5,
    feasibilityScore: 8.6,
    objective: 'Aumentar la tasa de recolección limpia posconsumo en colegios y hogares integrando educación ambiental, canje lúdico e inclusión formal de recicladores de oficio.',
    targetAudience: 'Estudiantes de colegios (PRAE), hogares en canales retail y asociaciones de recicladores de oficio.',
    responsible: 'Gerencia de Asuntos Corporativos y Mercadeo',
    externalAllies: ['Colegios (PRAE)', 'Asociaciones de recicladores de oficio (>450)', 'Cadenas retail'],
    actions: [
      '1. Instalar puntos de recolección limpia en colegios y supermercados con concurso «Bon Yurt Transforma».',
      '2. Vincular asociaciones de recicladores de oficio para recolección directa, trazabilidad REP y pago justo.'
    ],
    barriersAndMitigation: [
      {
        barrier: 'Baja cultura de separación y lavado de envases lácteos en los hogares colombianos.',
        mitigation: 'Incentivos lúdicos de canje en puntos de venta ("Recicla, juega y gana premios") y sensibilización práctica en colegios.'
      }
    ],
    expectedImpact: 'Incrementar la tasa de plástico neutralidad del 59% actual al 75% en el segmento escolar y fortalecer el ODS 8.',
    imageKey: '/images/slides/slide_visual_4.png'
  }
];

export const VIABILITY_RISKS = [
  {
    category: 'Barreras regulatorias y sanitarias',
    risk: 'El INVIMA exige estrictos estándares de inocuidad para materiales reciclados en contacto directo con alimentos lácteos y para el aprovechamiento de excedentes alimentarios.',
    mitigation: 'Utilizar resinas rPET con certificación grado alimentario FDA/INVIMA y mantener trazabilidad de cadena de frío ininterrumpida.'
  },
  {
    category: 'Barreras financieras y de mercado',
    risk: 'El costo de los biopolímeros certificados y las cucharas comestibles puede superar al del plástico virgen convencional.',
    mitigation: 'Acceder a incentivos tributarios en Colombia por inversiones en control y mejoramiento del medio ambiente (descuento en renta y exclusión de IVA según Estatuto Tributario) y líneas de crédito verde de Bancóldex.'
  },
  {
    category: 'Barreras culturales',
    risk: 'Baja cultura de separación y lavado de envases lácteos en los hogares.',
    mitigation: 'Incentivos lúdicos de canje en puntos de venta y sensibilización en colegios (PRAE «Bon Yurt Transforma»).'
  }
];

export const ALPINA_CORPORATE_BASELINE: AlpinaCorporateMetric[] = [
  {
    id: 'corp-ir',
    pillar: 'Envases y Circularidad',
    name: 'Índice de Reciclabilidad (IR)',
    alpinaValue: 51,
    alpinaLabel: '51% Alpina (2025)',
    sectorValue: 27.5,
    sectorLabel: '25%–30% Sector Agroalimentario CO',
    sectorSource: 'Ref. sector agroalimentario Colombia',
    detail: '51% tras evaluar decenas de familias de productos mediante ecodiseño y aligeramiento de envases.',
    highlightTag: '+21 a +26 pts sobre el sector'
  },
  {
    id: 'corp-rpet',
    pillar: 'Envases y Circularidad',
    name: 'Plástico Reincorporado (rPET en sobrecopa)',
    alpinaValue: 75,
    alpinaLabel: '75% sobrecopa (25% vaso piloto)',
    sectorValue: 12.5,
    sectorLabel: '10%–15% Sector Lácteo CO',
    sectorSource: 'Ref. sector lácteo Colombia',
    detail: '75% de plástico reciclado rPET implementado en las sobrecopas del Bon Yurt (y 25% en referencias como Mini Bon Yurt y Frutto).',
    highlightTag: '5x el promedio del sector lácteo'
  },
  {
    id: 'corp-neutralidad',
    pillar: 'Envases y Circularidad',
    name: 'Plástico Neutralidad (Recuperación REP)',
    alpinaValue: 59,
    alpinaLabel: '59% recuperado (>450 recicladores)',
    sectorValue: 30,
    sectorLabel: '30% Meta Legal Res. 1407 al 2030',
    sectorSource: 'Resolución 1407 de 2018 (MADS)',
    detail: '59% de recolección y transformación del plástico puesto en el mercado con >450 recicladores de oficio, superando casi al doble la meta normativa 2030.',
    highlightTag: 'Supera casi 2x la meta 2030'
  },
  {
    id: 'corp-postind',
    pillar: 'Operación Limpia y Residuos',
    name: 'Aprovechamiento Residuos Postindustriales',
    alpinaValue: 95.2,
    alpinaLabel: '95,2% valorizados en planta',
    sectorValue: 75,
    sectorLabel: '70%–80% Industria Alimentos ANDI',
    sectorSource: 'Referente industria alimentos ANDI',
    detail: '95,2% de los residuos generados en plantas son valorizados bajo directriz de Vertedero Cero mediante co-procesamiento y compostaje.',
    highlightTag: '+15 pts sobre referente ANDI'
  },
  {
    id: 'corp-energia',
    pillar: 'Energía y Autogeneración',
    name: 'Autogeneración Energética Nacional',
    alpinaValue: 24,
    alpinaLabel: '24% nacional (38% biogás Sopó)',
    sectorValue: 7.5,
    sectorLabel: '5%–10% Sector Alimentos',
    sectorSource: 'Ref. sector alimentos Colombia',
    detail: '24% nacional (6% solar destacando CEDI Galapa + 18% nacional por biogás PTAR de Sopó que cubre el 38% de la planta).',
    highlightTag: '3x referente sector alimentos'
  }
];

export const INDICATOR_SHEETS: IndicatorSheet[] = [
  {
    id: 'IND-01',
    name: '1. Contenido de material reciclado o renovable en envases',
    category: 'Entradas',
    formula: '(Peso rPET o Bio (g) / Peso total envase (g)) × 100',
    unit: '%',
    baseline: '75% en sobrecopa / 25% en vaso piloto (Ref. sector lácteo: 10%–15%)',
    alpinaBaseline: '75% sobrecopa / 25% vaso piloto',
    sectorBenchmark: '10%–15% (Sector lácteo CO)',
    target: '85% promedio ponderado en todo el set de empaque Bon Yurt',
    periodicity: 'Mensual / Trimestral',
    responsible: 'Dirección de Sostenibilidad y Empaques',
    source: 'Forética (2019) / GRI 301-2',
    scale: 'Micro (Producto)',
    synergy: 'Cierra la brecha del vaso principal (E3) manteniendo liderazgo frente al 10%–15% del sector.'
  },
  {
    id: 'IND-02',
    name: '2. Porcentaje de mermas de terceros incorporadas (Simbiosis)',
    category: 'Entradas',
    formula: '(kg mermas aliadas / kg totales de cereal) × 100',
    unit: '%',
    baseline: '0% en línea comercial (Piloto de investigación)',
    alpinaBaseline: '0% comercial (supuesto 5%–10% potencial)',
    sectorBenchmark: 'Referente emergente de simbiosis (Forética)',
    target: '15% de sustitución de cereal virgen por mermas aptas',
    periodicity: 'Mensual / Trimestral',
    responsible: 'Gerencia de Calidad y Compras Sostenibles',
    source: 'Forética (2019)',
    scale: 'Meso (Cadena de valor)',
    synergy: 'Activa E2 con Ramo, Nutresa y Kellanova reduciendo huella hídrica agrícola y ODS 12.3.'
  },
  {
    id: 'IND-03',
    name: '3. Intensidad energética y autogeneración limpia',
    category: 'Entradas',
    formula: 'kWh / unidad producida y % autogeneración',
    unit: 'kWh/u y %',
    baseline: '24% autogeneración nacional (38% biogás en Sopó) · Sector: 5%–10%',
    alpinaBaseline: '24% nacional (38% Sopó · 6% solar)',
    sectorBenchmark: '5%–10% (Sector alimentos CO)',
    target: '30% autogeneración nacional y -8% en intensidad energética',
    periodicity: 'Mensual',
    responsible: 'Gerencia de Operaciones y Plantas',
    source: 'Forética (2019) / GRI 302-3',
    scale: 'Micro (Planta)',
    synergy: 'Mitiga el hotspot de refrigeración (Fases 3 y 4) y contribuye al ODS 13.'
  },
  {
    id: 'IND-04',
    name: '4. Tasa de aprovechamiento de residuos postindustriales',
    category: 'Salidas',
    formula: '(t aprovechadas / t generadas) × 100',
    unit: '%',
    baseline: '95,2% en plantas Alpina (Ref. industria alimentos ANDI: 70%–80%)',
    alpinaBaseline: '95,2% en plantas',
    sectorBenchmark: '70%–80% (Industria alimentos ANDI)',
    target: '98% (Consolidación Certificación Vertedero Cero en todas las plantas)',
    periodicity: 'Mensual / Anual',
    responsible: 'Área Operativa y Gestión Ambiental',
    source: 'GRI 306-4',
    scale: 'Micro (Planta)',
    synergy: 'Consolida la manufactura limpia y la cascada láctea hacia quesos y alimento animal.'
  },
  {
    id: 'IND-05',
    name: '5. Tasa de recuperación posconsumo (Plástico Neutralidad)',
    category: 'Salidas',
    formula: '(t plástico recuperado / t plástico en mercado) × 100',
    unit: '%',
    baseline: '59% recolectado con >450 recicladores (Meta legal Res. 1407 al 2030: 30%)',
    alpinaBaseline: '59% con >450 recicladores',
    sectorBenchmark: '30% (Meta Res. 1407 al 2030)',
    target: '75% de recolección y transformación efectiva',
    periodicity: 'Trimestral / Anual',
    responsible: 'Asuntos Corporativos, Mercadeo y Gestores REP',
    source: 'Forética / REP Res. 1407',
    scale: 'Meso / Macro (Nacional)',
    synergy: 'Apalancada por E4 («Bon Yurt Transforma» PRAE), alimenta cuentas nacionales DANE/ENEC.'
  },
  {
    id: 'IND-06',
    name: '6. Tasa de sustitución de cucharas plásticas (Ecodiseño)',
    category: 'Producto',
    formula: '(Unidades con cuchara galleta / Unidades totales vendidas) × 100',
    unit: '%',
    baseline: '5% (Fase piloto / lanzamiento comercial)',
    alpinaBaseline: '5% fase piloto',
    sectorBenchmark: 'Transición normativa plásticos de un solo uso',
    target: '80% de sustitución en la presentación clásica de Bon Yurt',
    periodicity: 'Mensual',
    responsible: 'Gerencia de I+D+i y Operaciones Alpina',
    source: 'Forética (2019)',
    scale: 'Micro (Producto)',
    synergy: 'Indicador directo de E1 (Prioridad 1) y del principio R0 Rechazar en consumo masivo.'
  },
  {
    id: 'IND-07',
    name: '7. Ahorro por eficiencia de materiales y simbiosis',
    category: 'Económicos',
    formula: 'COP / año ahorrados en resinas vírgenes y materias primas (variación %)',
    unit: '% ahorro COP/año',
    baseline: 'Línea base por consolidar en primer trimestre de operación (costos unitarios reservados)',
    alpinaBaseline: 'Por consolidar Q1',
    sectorBenchmark: 'Referente financiero relativo (reserva industrial)',
    target: 'Ahorro neto mínimo del 12% en costos de empaque y toppings',
    periodicity: 'Trimestral',
    responsible: 'Compras Sostenibles y Finanzas',
    source: 'Forética (2019)',
    scale: 'Micro (Financiero)',
    synergy: 'Convierte la economía circular en rentabilidad real junto a incentivos tributarios y Bancóldex.'
  },
  {
    id: 'IND-08',
    name: '8. Índice de Circularidad de Material (MCI) / IR',
    category: 'Integrados',
    formula: 'Índice de 0 a 1 (MCI) y % de Reciclabilidad (IR)',
    unit: 'Índice (0-1) / % IR',
    baseline: 'IR: 51% (Ref. sector agroalimentario Colombia: 25%–30%)',
    alpinaBaseline: 'IR 51%',
    sectorBenchmark: '25%–30% IR (Sector agroalimentario CO)',
    target: 'IR: 70% / MCI ≥ 0,68 para la línea Bon Yurt',
    periodicity: 'Anual',
    responsible: 'Comité Directivo de Sostenibilidad Alpina',
    source: 'Ellen MacArthur / WBCSD CTI',
    scale: 'Micro / Meso',
    synergy: 'Sintetiza E1+E2+E3+E4 evitando el greenwashing con respaldo metodológico internacional.'
  }
];

export const MRV_STAGES: MrvStage[] = [
  {
    step: 1,
    title: '1. Medición / Monitoreo',
    focus: 'Registro operativo continuo de gramajes de empaque, consumo de rPET, recepción de mermas de aliados, generación de biogás y certificados de recolección REP.',
    toolsAndStandards: ['Básculas industriales', 'Medidores inteligentes PTAR/solar', 'Módulo ambiental ERP (SAP)'],
    responsible: 'Área Operativa, Plantas de Producción y Gestores Aliados',
    frequency: 'Diaria / Mensual',
    deliverable: 'Registros primarios trazables en ERP (SAP)'
  },
  {
    step: 2,
    title: '2. Reporte Interno',
    focus: 'Consolidación de los 8 indicadores del Bon Yurt frente a las metas trimestrales y análisis de desviaciones económicas y operativas.',
    toolsAndStandards: ['Tablero de control (Dashboard de Economía Circular)'],
    responsible: 'Coordinador de Sostenibilidad y Líder de I+D+i',
    frequency: 'Trimestral',
    deliverable: 'Tablero ejecutivo trimestral de brechas y ahorros'
  },
  {
    step: 3,
    title: '3. Reporte Externo',
    focus: 'Divulgación pública de resultados y trazabilidad ante grupos de interés, DANE (CAEFM-RS) y autoridades ambientales bajo ENEC.',
    toolsAndStandards: ['Informe Integrado de Sostenibilidad (GRI)', 'Plataforma ANLA/VUCE (Plan REP Res. 1407)', 'Reporte BIC'],
    responsible: 'Dirección de Asuntos Corporativos y Sostenibilidad',
    frequency: 'Anual',
    deliverable: 'Reporte público GRI / BIC y radicación ANLA'
  },
  {
    step: 4,
    title: '4. Verificación',
    focus: 'Auditoría de calidad de datos, validación de certificados de aprovechamiento de recicladores y auditorías sanitarias.',
    toolsAndStandards: ['Verificación externa GRI', 'Auditoría Certificación Vertedero Cero', 'ISO 14001'],
    responsible: 'Auditoría Interna y Tercero Independiente (ej. ICONTEC / PwC / Deloitte)',
    frequency: 'Anual',
    deliverable: 'Dictamen independiente sin greenwashing'
  },
  {
    step: 5,
    title: '5. Ajuste',
    focus: 'Evaluación estratégica del desempeño del plan y actualización de metas e inversiones bajo el ciclo PHVA.',
    toolsAndStandards: ['Revisión por la dirección (Ciclo PHVA)'],
    responsible: 'Comité Directivo de Sostenibilidad Alpina',
    frequency: 'Anual',
    deliverable: 'Hoja de ruta recalibrada para siguiente ciclo anual'
  }
];

export const ODS_CONTRIBUTIONS: OdsContribution[] = [
  {
    ods: 'ODS 8',
    title: 'Trabajo decente y crecimiento económico',
    description: 'Formalización e inclusión económica de más de 450 recicladores de oficio.'
  },
  {
    ods: 'ODS 9',
    title: 'Industria, innovación e infraestructura',
    description: 'Ecodiseño de cucharas comestibles, aprovechamiento de biogás (38% Sopó) y energía solar (CEDI Galapa).'
  },
  {
    ods: 'ODS 12',
    title: 'Producción y consumo responsables',
    description: 'Reducción de plásticos de un solo uso (Meta 12.5) y reducción del desperdicio de alimentos mediante simbiosis industrial (Meta 12.3).'
  },
  {
    ods: 'ODS 13',
    title: 'Acción por el clima',
    description: 'Mitigación de emisiones de GEI mediante autogeneración renovable y sustitución de resinas vírgenes.'
  }
];

export const CONCLUSIONS_AND_LIMITATIONS = {
  conclusions: [
    {
      title: 'Viabilidad de transición en consumo masivo',
      text: 'El caso del Bon Yurt demuestra que los productos lácteos de alta rotación pueden migrar de un modelo lineal a uno circular cuando se combinan el ecodiseño desde la fuente (cucharas comestibles y sobrecopas con 75% de rPET) con el fortalecimiento de la infraestructura de recuperación posconsumo.'
    },
    {
      title: 'Sinergia entre ciclos técnicos y biológicos',
      text: 'La articulación del Diagrama de Mariposa permite aprovechar simultáneamente los residuos orgánicos y mermas alimentarias en cascada (simbiosis industrial y biogás en Sopó) y cerrar el ciclo técnico de los polímeros mediante alianzas con recicladores de oficio.'
    },
    {
      title: 'Rigor en la medición como motor estratégico',
      text: 'La integración de los indicadores sectoriales de Forética con la línea base verificable de Alpina evita el greenwashing y convierte la sostenibilidad en ahorro operativo (≥12%) y cumplimiento regulatorio anticipado frente a la Resolución 1407.'
    }
  ],
  limitations: [
    {
      title: 'Confidencialidad de costos unitarios',
      text: 'Por políticas de reserva industrial, los informes públicos de Alpina no detallan los costos unitarios de fabricación de moldes ni los márgenes exactos por referencia de producto, por lo que las metas financieras se expresan en variaciones porcentuales relativas.'
    },
    {
      title: 'Trazabilidad en el hogar del consumidor',
      text: 'Existe incertidumbre sobre el comportamiento final de separación en la fuente de cada consumidor en municipios apartados, lo cual exige mantener supuestos conservadores en las tasas de retorno postconsumo.'
    }
  ],
  references: [
    'Alpina Productos Alimenticios S.A.S. BIC. (2025). Informe de Sostenibilidad e Integrado. Alpina. https://online.fliphtml5.com/aatse/Inform_Sost_Alpina_2025-ZDDq/',
    'Departamento Administrativo Nacional de Estadística (DANE). (2024). Cuenta Ambiental y Económica de Flujos de Materiales de Residuos Sólidos (CAEFM-RS) 2023–2024p. Boletín Técnico DANE. https://www.dane.gov.co',
    'Forética. (2019). La medida de la economía circular: Marcos, indicadores e impacto en la gestión empresarial. Grupo de Acción en Economía Circular, Forética. https://www.foretica.org',
    'Fundación Ellen MacArthur. (s.f.). El diagrama de mariposa: visualizar la economía circular. https://www.ellenmacarthurfoundation.org',
    'Kirchherr, J., Reike, D., & Hekkert, M. (2017). Conceptualizing the circular economy: An analysis of 114 definitions. Resources, Conservation and Recycling, 127, 221–232. https://doi.org/10.1016/j.resconrec.2017.09.005',
    'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Resolución 1407 de 2018: Gestión ambiental de residuos de envases y empaques. MADS, Colombia.',
    'Ministerio de Ambiente y Desarrollo Sostenible. (2019). Estrategia Nacional de Economía Circular (ENEC). MADS, Colombia.',
    'World Business Council for Sustainable Development (WBCSD). (2021). Circular Transition Indicators (CTI): Guía de métricas para la circularidad empresarial. https://www.wbcsd.org'
  ]
};

export const PRESENTERS_SCHEDULE = [
  { presenter: 'Presentador 1', slides: '1–3', topic: 'Apertura, resumen ejecutivo y ciclo de vida (6 fases)', time: '3 min' },
  { presenter: 'Presentador 2', slides: '4–5', topic: 'Diagrama de mariposa, principios y madurez 9R', time: '3 min' },
  { presenter: 'Presentador 3', slides: '6–8', topic: 'Estrategias E1–E4, indicadores Alpina vs. sector y metas', time: '4 min' },
  { presenter: 'Presentador 4', slides: '9–12', topic: 'MRV, riesgos, conclusiones y referencias APA', time: '3 min' }
];

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    id: 1,
    presenter: 'Presentador 1',
    presenterTheme: 'Apertura y Ciclo de Vida (3 min)',
    duration: '30 s',
    title: 'Portada · Bon Yurt: de un empaque lineal a un sistema circular',
    subtitle: 'Plan de Economía Circular · Ruta A · Alpina Productos Alimenticios S.A.S. BIC',
    scriptText:
      '«Buenas tardes. Hoy presentamos el plan de economía circular para el Bon Yurt de Alpina: cómo pasar de un empaque lineal a un sistema circular. Somos [nombres]. Trabajamos con la Ruta A, es decir, con los informes públicos de sostenibilidad de la compañía.»',
    keyDataPoints: [
      'Empresa: Alpina Productos Alimenticios S.A.S. BIC (97% municipios de Colombia)',
      'Unidad funcional: 175 g de mezcla láctea (vaso, sobrecopa transparente y cuchara)',
      'Ruta A: Reportes GRI 301, 302, 303, 305 y 306 verificados (Alpina 2025)'
    ]
  },
  {
    id: 2,
    presenter: 'Presentador 1',
    presenterTheme: 'Apertura y Ciclo de Vida (3 min)',
    duration: '1 min',
    title: 'Resumen Ejecutivo y Diagnóstico Semi-circular',
    subtitle: 'Cifras de línea base oficial (Informe de Sostenibilidad Alpina 2025)',
    scriptText:
      '«Alpina parte de una base sólida. Aprovecha el 95,2% de sus residuos postindustriales. La sobrecopa lleva 75% de plástico reciclado. El plástico neutralidad llega a 59%, con más de 450 recicladores de oficio, y el Índice de Reciclabilidad es 51%. Nuestro diagnóstico: el Bon Yurt es semi-circular. La manufactura es muy circular, pero el vaso y la cuchara plástica siguen siendo una fuga lineal tras el consumo.»',
    keyDataPoints: [
      '95,2% residuos postindustriales aprovechados en planta',
      '75% rPET en sobrecopa transparente (25% en vaso piloto)',
      '59% Plástico Neutralidad con >450 recicladores de oficio',
      '51% Índice de Reciclabilidad (IR) corporativo'
    ]
  },
  {
    id: 3,
    presenter: 'Presentador 1',
    presenterTheme: 'Apertura y Ciclo de Vida (3 min)',
    duration: '1 min 30 s',
    title: 'Ciclo de Vida del Producto Bon Yurt (6 Fases · ACV)',
    subtitle: 'De la cuna a la tumba · Estándares GRI 301–306 + ideas de reutilización y vencidos',
    scriptText:
      '«Mapeamos el Bon Yurt en seis fases. Empieza en el campo, con ganaderos aliados y proveedores de cereales y cacao. Sigue el transporte de entrada y la producción en planta, donde se fermenta el yogurt y se termoforman los envases; ahí se aprovecha el 95,2% de los residuos. Luego vienen el empaque y la distribución, que llegan al 97% de los municipios, y el consumo en los hogares. La sexta fase es el posconsumo. Con el programa «Recicla, juega y gana premios», niños y familias canjean envases y tapas por premios, y los recicladores y gestores REP los transforman en nuevos materiales. En la parte inferior hay tres ideas de reutilización: macetas, cucharas de galleta y cartón reciclado; y soluciones para vencidos: alimento para mascotas, quesos con kumis vencido e investigación en alimentos funcionales.»',
    bridgeLine: '«Con esta fotografía del ciclo, [Presentador 2] muestra qué tan circular es hoy el producto.»',
    slideImage: '/images/slides/slide_visual_1.png',
    keyDataPoints: [
      '6 fases ACV completas (Hatos → Transporte → Planta → CEDI 97% municipios → Hogar → Posconsumo)',
      '4 Hotspots & Brechas: Plástico 1 uso (F5-6), Frío (F3-4), Campo/Agua/GEI (F1), Brecha reporte SKU',
      'Vencidos: Alimento mascotas, quesos de kumis vencido y línea de alimentos funcionales'
    ]
  },
  {
    id: 4,
    presenter: 'Presentador 2',
    presenterTheme: 'Circularidad y Madurez (3 min)',
    duration: '1 min 30 s',
    title: 'Diagrama de Mariposa – Economía Circular Bon Yurt',
    subtitle: 'Ciclo Biológico (Regeneración) & Ciclo Técnico (Conservación de valor)',
    scriptText:
      '«Usamos el modelo de la Fundación Ellen MacArthur, con dos ciclos alrededor del Bon Yurt. A la izquierda, el biológico, que regenera recursos naturales. Tiene un loop regenerativo, con envases Bio y etiquetas con semillas; un loop en cascada, que convierte el kumis en quesos y aprovecha mermas de cereales con Ramo, Jet y Nutresa; y un loop corto, con las cucharas de galleta. A la derecha, el técnico, que conserva el valor de los materiales. Tiene un loop corto de reutilización de vasos y tapas en manualidades; un loop local, con el programa escolar PRAE y el canje de envases por premios; y un loop en cascada de simbiosis industrial, con cartón reciclado y reciclaje de plásticos. Una precaución: los envases Bio solo cierran el ciclo biológico si tienen compostabilidad certificada.»',
    slideImage: '/images/slides/slide_visual_2.png',
    keyDataPoints: [
      'Ciclo Biológico: Cucharas galleta (corto), Kumis/mermas Ramo-Nutresa-Jet (cascada), Bio/semillas (regenerativo)',
      'Ciclo Técnico: Manualidades PRAE (corto), Canje & >450 recicladores REP (local), 75% rPET sobrecopa',
      'Alerta sanitaria: Compostabilidad certificada para Bio y cadena de frío estricta en excedentes'
    ]
  },
  {
    id: 5,
    presenter: 'Presentador 2',
    presenterTheme: 'Circularidad y Madurez (3 min)',
    duration: '1 min 30 s',
    title: 'Componente 3 · Principios Ellen MacArthur y Jerarquía 9R',
    subtitle: 'Principios en madurez 4/5, 4/5 y 5/5 · Matriz de 7 estrategias R (R0, R1, R2, R3, R7, R8, R9)',
    scriptText:
      '«A la izquierda, los tres principios de Ellen MacArthur: eliminar residuos desde el diseño tiene 4 de 5; circular materiales, 4 de 5; y regenerar la naturaleza, 5 de 5, por la ganadería sostenible y el biogás de Sopó. A la derecha, las 9R. Reducir, reutilizar con otro propósito, reciclar y recuperar están en nivel 4. Rechazar, repensar y reutilizar están en nivel 3: la cuchara de galleta es un piloto, los envases Bio y el PRAE están en etapa conceptual, y el segundo uso se limita a escuelas y hogares. La oportunidad es eliminar del todo los plásticos de un solo uso.»',
    bridgeLine: '«Esas brechas definen las cuatro estrategias que presenta [Presentador 3].»',
    slideImage: '/images/slides/slide_visual_3.png',
    keyDataPoints: [
      'MacArthur: Eliminar desde diseño (4/5 Parcial) · Circular materiales (4/5 Sí) · Regenerar naturaleza (5/5 Sí BIC)',
      'Nivel 4/5: R2 Reducir, R7 Reutilizar otro propósito, R8 Reciclar, R9 Recuperar',
      'Nivel 3/5 (Brecha): R0 Rechazar (cuchara piloto), R1 Repensar (Bio/PRAE), R3 Reutilizar (escuelas)'
    ]
  },
  {
    id: 6,
    presenter: 'Presentador 3',
    presenterTheme: 'Estrategias, Indicadores y Metas (4 min)',
    duration: '2 min',
    title: 'Componente 4 · Estrategias Priorizadas (E1–E4) y Plan de Implementación',
    subtitle: 'Matriz Impacto vs. Facilidad + Viabilidad y Riesgos',
    scriptText:
      '«Priorizamos cuatro estrategias por impacto y facilidad. La prioridad 1 es escalar las cucharas comestibles de galleta: impacto alto, facilidad alta, hasta 80% menos cucharas plásticas, en 0 a 12 meses, con I+D+i y Operaciones y aliados panificadores. La prioridad 2 es la simbiosis de mermas con Ramo, Nutresa y Kellanova: reemplaza al menos 10% del cereal virgen, en 6 a 18 meses. La prioridad 3 es el vaso monomaterial 100% rPET o Bio: es el de mayor impacto, pero de facilidad media, porque requiere validación de INVIMA; lleva el Índice de Reciclabilidad de 51% a 70% en 12 a 36 meses. La prioridad 4 es Bon Yurt Transforma, con colegios y recicladores: sube el plástico neutralidad al 75% en 6 a 24 meses.»',
    slideImage: '/images/slides/slide_visual_4.png',
    keyDataPoints: [
      'Prioridad 1 (E1 · 0–12m): Cucharas comestibles de galleta (Alto / Alta · R0)',
      'Prioridad 2 (E2 · 6–18m): Simbiosis mermas Ramo, Nutresa, Kellanova (Alto / Alta · R7)',
      'Prioridad 3 (E3 · 12–36m): Vaso monomaterial 100% rPET / Bio INVIMA (Muy Alto / Media · R2, R8)',
      'Prioridad 4 (E4 · 6–24m): Red «Bon Yurt Transforma» PRAE + recicladores (Medio-Alto / Alta · R3, R8)'
    ]
  },
  {
    id: 7,
    presenter: 'Presentador 3',
    presenterTheme: 'Estrategias, Indicadores y Metas (4 min)',
    duration: '1 min',
    title: 'Componente 5 · Indicadores Corporativos Alpina vs. Sector',
    subtitle: 'Línea base oficial 2025 comparada con referentes agroalimentario, lácteo, ANDI y Res. 1407',
    scriptText:
      '«Primero la línea base, que ya existe en Alpina: Índice de Reciclabilidad de 51%, 75% de plástico reincorporado en la sobrecopa y 59% de plástico neutralidad con más de 450 recicladores. En operación limpia, 95,2% de aprovechamiento de residuos y Vertedero Cero en plantas estratégicas. En energía, 24% de autogeneración, con 6% solar en el CEDI Galapa y 38% de biogás en Sopó. A la derecha está la matriz de ocho indicadores del plan.»',
    slideImage: '/images/slides/slide_visual_5.png',
    keyDataPoints: [
      'IR: 51% Alpina vs. 25%–30% sector agroalimentario · rPET: 75% vs. 10%–15% lácteo',
      'Plástico Neutralidad: 59% vs. 30% meta legal Res. 1407 al 2030',
      'Postindustriales: 95,2% vs. 70%–80% ANDI · Energía: 24% (38% biogás Sopó) vs. 5%–10% alimentos'
    ]
  },
  {
    id: 8,
    presenter: 'Presentador 3',
    presenterTheme: 'Estrategias, Indicadores y Metas (4 min)',
    duration: '1 min',
    title: 'Metas a 3 Años frente a la Línea Base (8 Indicadores)',
    subtitle: 'Alineación Forética (2019), GRI 301/302/306 y WBCSD CTI',
    scriptText:
      '«Estas son las metas frente a la línea base. La sustitución de cucharas plásticas pasa de 5% a 80%. El material reciclado en envases llega a 85%. La recuperación posconsumo sube de 59% a 75%. El aprovechamiento de residuos pasa de 95,2% a 98%. La autogeneración llega a 30%, con 8% menos de intensidad energética. Las mermas de terceros pasan de 0% a 15% del cereal. Y el Índice de Reciclabilidad llega a 70%, con un índice de circularidad de al menos 0,68. El ahorro mínimo es de 12% en empaque.»',
    bridgeLine: '«Para saber si cumplimos esas metas, [Presentador 4] explica cómo las vamos a medir.»',
    keyDataPoints: [
      'Cucharas plásticas sustituidas: 5% → 80% · rPET/Bio ponderado envase: 75%/25% → 85%',
      'Mermas terceros: 0% → 15% cereal · Recuperación posconsumo: 59% → 75%',
      'Postindustriales: 95,2% → 98% · Autogeneración: 24% → 30% (-8% intensidad)',
      'Ahorro empaque/toppings: ≥12% · IR: 51% → 70% y MCI ≥ 0,68'
    ]
  },
  {
    id: 9,
    presenter: 'Presentador 4',
    presenterTheme: 'Medición, Riesgos y Cierre (3 min)',
    duration: '1 min',
    title: 'Sistema de Medición, Reporte y Verificación (MRV) y ODS',
    subtitle: 'Ciclo de 5 etapas (SAP → Dashboard → GRI/ANLA → Auditoría → PHVA) y escalas Micro-Meso-Macro',
    scriptText:
      '«El plan se mide en cinco pasos. Medición diaria y mensual de gramajes, rPET, mermas, biogás y certificados REP. Reporte interno trimestral en un tablero de economía circular. Reporte externo anual con el informe GRI y el reporte BIC. Verificación anual con auditoría interna y un tercero independiente. Y un ajuste anual bajo el ciclo PHVA. Los datos se miden a escala micro, se conectan a escala meso con alianzas y recicladores, y alimentan DANE y ENEC. El plan contribuye a los ODS 8, 9, 12 y 13.»',
    keyDataPoints: [
      '5 etapas MRV: ERP SAP (Diaria/Mensual) → Dashboard (Trimestral) → GRI/ANLA/BIC → Auditoría ICONTEC/PwC → PHVA',
      'Escalas: Micro (Bon Yurt/Sopó) → Meso (Simbiosis/PRAE) → Macro (DANE CAEFM-RS y ENEC)',
      'ODS 8 (>450 recicladores), ODS 9 (Ecodiseño/Biogás), ODS 12 (Metas 12.3 y 12.5), ODS 13 (GEI)'
    ]
  },
  {
    id: 10,
    presenter: 'Presentador 4',
    presenterTheme: 'Medición, Riesgos y Cierre (3 min)',
    duration: '45 s',
    title: 'Análisis de Viabilidad, Riesgos, Mitigaciones y Limitaciones',
    subtitle: 'Barreras regulatorias (INVIMA), financieras (Bancóldex / Tributario) y culturales (Hogar)',
    scriptText:
      '«Ya los vieron resumidos en la diapositiva 6. El riesgo regulatorio: INVIMA exige inocuidad estricta, y lo mitigamos con rPET de grado alimentario y cadena de frío continua. El financiero: los biopolímeros y las cucharas comestibles pueden costar más, y lo mitigamos con incentivos tributarios y crédito verde de Bancóldex. El cultural: poca separación de envases en los hogares, que atendemos con incentivos de canje y colegios. Como limitaciones, los costos unitarios son reservados y la separación en el hogar es incierta en municipios apartados.»',
    keyDataPoints: [
      'Regulatorio: Resinas rPET grado alimentario FDA/INVIMA y trazabilidad en cadena de frío',
      'Financiero: Descuento renta, exclusión IVA (Estatuto Tributario) y crédito verde Bancóldex',
      'Cultural y Limitaciones: Canje lúdico + PRAE; costos unitarios reservados y supuestos conservadores posconsumo'
    ]
  },
  {
    id: 11,
    presenter: 'Presentador 4',
    presenterTheme: 'Medición, Riesgos y Cierre (3 min)',
    duration: '1 min',
    title: 'Conclusiones Estratégicas del Plan',
    subtitle: 'Viabilidad en consumo masivo · Sinergia biológico-técnica · Medición contra greenwashing',
    scriptText:
      '«Tres ideas para cerrar. Primera, la transición es viable en un producto de consumo masivo si se combinan ecodiseño y recuperación posconsumo. Segunda, los ciclos biológico y técnico se refuerzan entre sí. Tercera, medir con rigor evita el greenwashing y convierte la sostenibilidad en ahorro y en cumplimiento anticipado de la Resolución 1407. El siguiente paso: escalar la cuchara comestible en los próximos 12 meses y validar el vaso monomaterial ante INVIMA.»',
    keyDataPoints: [
      '1. Transición viable combinando cuchara comestible + 75% rPET + recuperación posconsumo',
      '2. Sinergia de ciclos: cascadas de mermas/biogás (bio) + cierre polímeros recicladores (técnico)',
      '3. Medición Forética + línea base 2025 evita greenwashing y logra ≥12% ahorro operativo'
    ]
  },
  {
    id: 12,
    presenter: 'Presentador 4',
    presenterTheme: 'Medición, Riesgos y Cierre (3 min)',
    duration: '15 s',
    title: 'Referencias Bibliográficas (APA 7ª Edición)',
    subtitle: 'Alpina (2025), DANE (2024), Forética (2019), Ellen MacArthur, Kirchherr et al. (2017), MADS & WBCSD',
    scriptText:
      '«Las fuentes están en la última diapositiva: el informe de sostenibilidad de Alpina 2025, DANE, Forética, la Fundación Ellen MacArthur, Kirchherr y colegas, el Ministerio de Ambiente y WBCSD. Muchas gracias; quedamos atentos a sus preguntas.»',
    keyDataPoints: [
      'Alpina Productos Alimenticios S.A.S. BIC (2025) · Informe de Sostenibilidad e Integrado',
      'DANE (2024) CAEFM-RS · Forética (2019) · Ellen MacArthur · Kirchherr et al. (2017)',
      'MinAmbiente Colombia (Res. 1407/2018 & ENEC 2019) · WBCSD (2021) CTI'
    ]
  }
];

export const PROBABLE_QA: ProbableQA[] = [
  {
    id: 1,
    question: '¿Qué tan circular es hoy el Bon Yurt?',
    shortAnswer: 'Es semi-circular: muy circular en planta (95,2% aprovechamiento postindustrial y 75% rPET en sobrecopa), con fuga lineal en el vaso y la cuchara tras el consumo.',
    responder: 'Presentador 2'
  },
  {
    id: 2,
    question: '¿Por qué empezar con la cuchara comestible?',
    shortAnswer: 'Es la prioridad 1 (E1): alto impacto, alta facilidad y tecnología alimentaria disponible en panificación, ejecutable en 0 a 12 meses (hasta 80% menos cucharas plásticas).',
    responder: 'Presentador 3'
  },
  {
    id: 3,
    question: '¿Cuánto cuesta el plan?',
    shortAnswer: 'Los costos unitarios son reservados por política industrial; las metas financieras son variaciones porcentuales relativas, proyectando un ahorro neto mínimo del 12% en empaque y toppings.',
    responder: 'Presentador 3'
  },
  {
    id: 4,
    question: '¿Es seguro usar reciclados y mermas con alimentos?',
    shortAnswer: 'Sí, utilizando resinas rPET con certificación grado alimentario FDA/INVIMA, validación microbiológica y trazabilidad ininterrumpida de la cadena de frío.',
    responder: 'Presentador 4'
  },
  {
    id: 5,
    question: '¿Qué pasa si el consumidor no separa los envases?',
    shortAnswer: 'Se mitiga con incentivos lúdicos de canje en puntos de venta y sensibilización escolar (PRAE «Bon Yurt Transforma»), manteniendo supuestos conservadores en las tasas de retorno.',
    responder: 'Presentador 4'
  },
  {
    id: 6,
    question: '¿Cómo evitan el greenwashing?',
    shortAnswer: 'Con una matriz de 8 indicadores medibles comparados frente a referentes sectoriales (Forética/GRI/WBCSD), línea base oficial 2025 y verificación externa anual (ICONTEC/PwC/Deloitte).',
    responder: 'Presentador 4'
  },
  {
    id: 7,
    question: '¿Qué pasa con los productos vencidos?',
    shortAnswer: 'Se derivan a alimento para mascotas, investigación en quesos y derivados lácteos (kumis vencido) y alimentos funcionales; si rompen cadena de frío exigen validación microbiológica.',
    responder: 'Presentador 1'
  },
  {
    id: 8,
    question: '¿Cómo se recupera el envase tras el consumo?',
    shortAnswer: 'Mediante el programa escolar PRAE «Bon Yurt Transforma», la iniciativa de canje «Recicla, juega y gana premios», redes de >450 recicladores de oficio y gestores REP (Res. 1407).',
    responder: 'Presentador 2'
  }
];

export const RUBRIC_CRITERIA: RubricCriterion[] = [
  {
    id: 'rub-1',
    number: 1,
    name: 'Mapeo de Ciclo de Vida (ACV · GRI 301-306)',
    weight: 20,
    excellentCriteria: '6 fases completas de cuna a tumba con unidad funcional (175 g), entradas/salidas GRI y detección precisa de hotspots y brechas Ruta A.',
    acceptableCriteria: 'Mapea fases generales del ciclo sin desagregar brechas ni hotspots energéticos/plásticos.',
    insufficientCriteria: 'Descripción superficial sin estándares GRI ni análisis de entradas/salidas.',
    bonYurtFulfillment: '100% Cubierto: 6 fases completas, unidad funcional 175 g, estándares GRI 301-306 y 4 hotspots/brechas Ruta A documentados.'
  },
  {
    id: 'rub-2',
    number: 2,
    name: 'Análisis de Circularidad (Diagrama de Mariposa)',
    weight: 20,
    excellentCriteria: 'Clasificación rigurosa de flujos técnico/biológico, 4 tipos de bucles (cortos, locales, cascada, regenerativos), precauciones sanitarias y diagnóstico híbrido.',
    acceptableCriteria: 'Menciona ciclos biológicos y técnicos sin precisar fugas ni oportunidades de bucle interno.',
    insufficientCriteria: 'Confunde compostables con reciclables plásticos sin precauciones técnicas.',
    bonYurtFulfillment: '100% Cubierto: Tabla de 7 flujos reales, diagnóstico semi-circular, alerta Bio vs. plástico y protocolo de cadena de frío.'
  },
  {
    id: 'rub-3',
    number: 3,
    name: 'Principios MacArthur y Jerarquía de las 9R',
    weight: 15,
    excellentCriteria: 'Evaluación cuantificada (1–5) de los 3 principios MacArthur y evidencia corporativa verificable en la matriz 9R detectando brechas de madurez.',
    acceptableCriteria: 'Lista los principios o R sin asignar madurez ni detectar brechas por fase.',
    insufficientCriteria: 'Evaluación cualitativa vaga sin soporte documental de la empresa.',
    bonYurtFulfillment: '100% Cubierto: Principios 4/5, 4/5 y 5/5 (BIC/Sopó) y Matriz 9R de 7 niveles (R0, R1, R2, R3, R7, R8, R9).'
  },
  {
    id: 'rub-4',
    number: 4,
    name: 'Priorización de Estrategias y Viabilidad (E1–E4)',
    weight: 25,
    excellentCriteria: 'Matriz Impacto vs. Facilidad, plan detallado con responsables, aliados externos (Ramo, Nutresa, Kellanova, PRAE), plazos y mitigación de riesgos INVIMA/Bancóldex.',
    acceptableCriteria: 'Propone ideas sueltas de reciclaje sin matriz de priorización ni análisis financiero/regulatorio.',
    insufficientCriteria: 'Repite programas existentes sin estrategias accionables.',
    bonYurtFulfillment: '100% Cubierto: E1–E4 en orden de prioridad exacto, responsables, aliados, incentivos tributarios y crédito verde Bancóldex.'
  },
  {
    id: 'rub-5',
    number: 5,
    name: 'Indicadores Sectoriales y Sistema MRV (5 Etapas)',
    weight: 20,
    excellentCriteria: 'Comparativa verificable Alpina vs. sector (Forética, ANDI, DANE, Res. 1407), 8 indicadores con metas a 3 años, ciclo MRV PHVA y contribución a ODS.',
    acceptableCriteria: 'Incluye metas generales sin referentes sectoriales ni sistema de auditoría.',
    insufficientCriteria: 'Carece de fórmulas, periodicidad o verificación contra greenwashing.',
    bonYurtFulfillment: '100% Cubierto: 5 métricas base Alpina vs. sector, 8 indicadores Forética/GRI/WBCSD, 5 etapas MRV (SAP→PHVA) y ODS 8, 9, 12, 13.'
  }
];
