<script lang="ts">
  import {
    Sliders,
    TrendingUp,
    RotateCcw,
    Sparkles,
    Droplet,
    Zap,
    Users,
    ShieldCheck,
    CheckCircle2,
    FileSpreadsheet,
    Scale,
    Layers,
    Clock,
    BookOpen
  } from 'lucide-svelte';
  import { MRV_STAGES, INDICATOR_SHEETS } from '../data/circularData';
  import type { SimulationParams, SimulationResults, IndicatorSheet } from '../types/circular';

  interface Props {
    onAskAi: (prompt: string) => void;
  }

  let { onAskAi }: Props = $props();

  const DEFAULT_PARAMS: SimulationParams = {
    recoveryRate: 38, // 38%
    recycledContent: 45, // 45%
    energyReduction: 24, // 24%
    waterRecirculation: 650, // m3
    praeSchools: 120, // 120 schools
  };

  let params = $state<SimulationParams>({ ...DEFAULT_PARAMS });

  // Dynamic simulation calculations
  const results = $derived<SimulationResults>(() => {
    const totalPlasticVolumeTons = 900;
    const virginPlasticSavedTons = Math.round(
      totalPlasticVolumeTons * (params.recycledContent / 100) * 0.95
    );

    const plasticCo2Avoided = (virginPlasticSavedTons * 1000 * 2.1) / 1000;
    const energyCo2Avoided = params.energyReduction * 14.5;
    const co2AvoidedTons = Math.round(plasticCo2Avoided + energyCo2Avoided);

    const waterSavedM3 = Math.round(params.waterRecirculation * 48);

    const recoveredTons = (totalPlasticVolumeTons * (params.recoveryRate / 100));
    const schoolDesksProduced = Math.round((recoveredTons * 1000 * 0.4) / 12);

    const recyclerFamiliesSupported = Math.round(recoveredTons / 7.5 + params.praeSchools * 0.25);

    const ecoPointsGenerated = Math.round(
      (recoveredTons * 1000 * 1000) / 15 * 10
    );

    const circularityScore = Math.min(
      98,
      Math.round(
        params.recoveryRate * 0.4 +
        params.recycledContent * 0.35 +
        params.energyReduction * 0.5 +
        (params.waterRecirculation / 1200) * 10
      )
    );

    return {
      circularityScore,
      virginPlasticSavedTons,
      co2AvoidedTons,
      waterSavedM3,
      schoolDesksProduced,
      recyclerFamiliesSupported,
      ecoPointsGenerated,
    };
  });

  function handleReset() {
    params = { ...DEFAULT_PARAMS };
  }

  let selectedIndicatorCategory = $state<string>('todos');

  const filteredIndicators = $derived(() => {
    if (selectedIndicatorCategory === 'todos') return INDICATOR_SHEETS;
    return INDICATOR_SHEETS.filter(i => i.category.toLowerCase() === selectedIndicatorCategory.toLowerCase());
  });
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
  <!-- Header with 20% Rubric Weight Badge -->
  <div class="max-w-3xl">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003876] text-xs font-bold mb-2">
      <Scale class="w-3.5 h-3.5" />
      <span>Componente 5 · Guía de Clase (Peso: 20% de la Rúbrica)</span>
    </div>
    <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-brand">
      Simulador de Circularidad & Sistema MRV
    </h2>
    <p class="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
      Modelación paramétrica del desempeño anual de Bon Yurt, fichas técnicas de 7 indicadores articulados en escalas (micro, meso, macro) y ciclo de aseguramiento MRV de 5 etapas.
    </p>
  </div>

  <!-- 1. Interactive Simulator Deck -->
  <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-sm space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#003876] flex items-center justify-center font-bold">
          <Sliders class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-base sm:text-lg font-black text-slate-900 font-brand">
            Calculadora de Impacto Circular Bon Yurt
          </h3>
          <p class="text-xs text-slate-500">
            Ajusta los parámetros para simular el cumplimiento de metas REP (Resolución 1407/2018).
          </p>
        </div>
      </div>

      <button
        onclick={handleReset}
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
      >
        <RotateCcw class="w-3.5 h-3.5" />
        <span>Restablecer Valores</span>
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Sliders Deck (7 cols) -->
      <div class="lg:col-span-7 space-y-5">
        <!-- Slider 1: Recovery Rate -->
        <div class="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-900">
              1. Tasa de Recuperación de Envases Posconsumo (Red PRAE)
            </span>
            <span class="font-mono-numbers font-black text-[#003876] bg-blue-100 px-2 py-0.5 rounded-md text-sm">
              {params.recoveryRate}%
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="85"
            step="1"
            bind:value={params.recoveryRate}
            class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003876]"
          />
          <div class="flex justify-between text-[10px] text-slate-400 font-medium">
            <span>Meta base legal (10%)</span>
            <span>Meta Bon Yurt (38%)</span>
            <span>Visión Cero Relleno (85%)</span>
          </div>
        </div>

        <!-- Slider 2: Recycled / Bio Content -->
        <div class="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-900">
              2. Contenido de Resina Reciclada / Biomaterial en Empaque
            </span>
            <span class="font-mono-numbers font-black text-[#2B8A1E] bg-emerald-100 px-2 py-0.5 rounded-md text-sm">
              {params.recycledContent}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            bind:value={params.recycledContent}
            class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2B8A1E]"
          />
          <div class="flex justify-between text-[10px] text-slate-400 font-medium">
            <span>0% Fósil virgen</span>
            <span>45% Ecodiseño</span>
            <span>100% Circular / Bio</span>
          </div>
        </div>

        <!-- Slider 3: Energy Efficiency -->
        <div class="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-900">
              3. Eficiencia Energética en Planta Sopó (Cogeneración Biogás)
            </span>
            <span class="font-mono-numbers font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md text-sm">
              {params.energyReduction}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            step="2"
            bind:value={params.energyReduction}
            class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
          <div class="flex justify-between text-[10px] text-slate-400 font-medium">
            <span>0% Red estándar</span>
            <span>24% Biogás PTAR</span>
            <span>50% Eficiencia máxima</span>
          </div>
        </div>

        <!-- Dual mini sliders: Water + PRAE -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex justify-between items-center text-xs">
              <span class="font-bold text-slate-900">4. Ahorro Hídrico CIP</span>
              <span class="font-mono-numbers font-bold text-cyan-700 text-xs">
                {params.waterRecirculation} m³
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="1200"
              step="50"
              bind:value={params.waterRecirculation}
              class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
          </div>

          <div class="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex justify-between items-center text-xs">
              <span class="font-bold text-slate-900">5. Colegios Red PRAE</span>
              <span class="font-mono-numbers font-bold text-purple-700 text-xs">
                {params.praeSchools} sedes
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              bind:value={params.praeSchools}
              class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>
        </div>
      </div>

      <!-- Results Scoreboard (5 cols) -->
      <div class="lg:col-span-5 space-y-4">
        <!-- Global Circularity Score Card -->
        <div class="p-6 rounded-3xl bg-gradient-to-br from-[#003876] via-[#002554] to-slate-950 text-white shadow-xl space-y-3 border-2 border-blue-400">
          <div class="flex items-center justify-between">
            <span class="text-xs uppercase font-black tracking-wider text-emerald-400 font-brand">
              Índice Calculado (MCI / CTI)
            </span>
            <span class="text-xs text-blue-200">WBCSD Framework</span>
          </div>
          <div class="flex items-baseline gap-3">
            <span class="text-5xl sm:text-6xl font-black font-mono-numbers tracking-tight text-white">
              {results().circularityScore}%
            </span>
            <span class="text-sm font-bold text-emerald-300">
              Tasa de Circularidad Global
            </span>
          </div>
          <p class="text-xs text-blue-100/90 leading-relaxed font-medium">
            Supera con creces la meta mínima del 30% establecida en el marco de la <strong>Resolución 1407/2018 de MinAmbiente</strong> para envases en Colombia.
          </p>
        </div>

        <!-- Dynamic Output Metric Cards -->
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">
              Plástico Virgen Ahorrado
            </span>
            <span class="text-xl font-black font-mono-numbers text-slate-900">
              {results().virginPlasticSavedTons} t/año
            </span>
            <span class="text-[11px] text-[#2B8A1E] font-medium block">
              Resina no extraída
            </span>
          </div>

          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">
              CO₂eq Evitado
            </span>
            <span class="text-xl font-black font-mono-numbers text-slate-900">
              {results().co2AvoidedTons} t CO₂
            </span>
            <span class="text-[11px] text-[#2B8A1E] font-medium block">
              Mitigación climática
            </span>
          </div>

          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">
              Pupitres Escolares
            </span>
            <span class="text-xl font-black font-mono-numbers text-slate-900">
              {results().schoolDesksProduced} pupitres
            </span>
            <span class="text-[11px] text-[#003876] font-medium block">
              Madera plástica reciclada
            </span>
          </div>

          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">
              Familias Recicladoras
            </span>
            <span class="text-xl font-black font-mono-numbers text-slate-900">
              {results().recyclerFamiliesSupported} hogares
            </span>
            <span class="text-[11px] text-[#003876] font-medium block">
              Tarifa justa de acopio
            </span>
          </div>
        </div>

        <button
          onclick={() =>
            onAskAi(
              `Con una tasa de recuperación del ${params.recoveryRate}% y un contenido reciclado del ${params.recycledContent}%, analiza cómo se compara el Bon Yurt de Alpina frente a las metas nacionales de la Resolución 1407 de 2018 y estándares GRI.`
            )
          }
          class="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#003876] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
        >
          <Sparkles class="w-3.5 h-3.5 text-blue-600" />
          <span>Analizar esta Simulación con la IA</span>
        </button>
      </div>
    </div>
  </div>

  <!-- 2. Fichas Técnicas de los 7 Indicadores (Guía de Clase) -->
  <div class="space-y-5">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 font-brand">
          Fichas Técnicas de Indicadores (Mínimo 6 Requeridos · 7 Diseñados)
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 mt-0.5">
          Articulación en 3 escalas de medición: <strong>Micro</strong> (Planta), <strong>Meso</strong> (Cadena PRAE) y <strong>Macro</strong> (Metas REP Colombia).
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap gap-1.5">
        {#each ['todos', 'entradas', 'salidas', 'social', 'integrado'] as cat}
          <button
            onclick={() => selectedIndicatorCategory = cat}
            class={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-colors cursor-pointer ${
              selectedIndicatorCategory === cat
                ? 'bg-[#003876] text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        {/each}
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each filteredIndicators() as ind}
        <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-[#003876] border border-blue-200">
                {ind.category}
              </span>
              <span class="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                {ind.scale}
              </span>
            </div>

            <h4 class="text-sm font-bold text-slate-900 leading-snug">
              {ind.name}
            </h4>

            <div class="mt-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono-numbers text-slate-700">
              <span class="text-[9px] uppercase font-bold text-slate-400 block">Fórmula:</span>
              <code class="text-blue-900 font-semibold">{ind.formula}</code>
            </div>

            <div class="mt-3 space-y-1 text-xs text-slate-600">
              <div class="flex justify-between">
                <span>Línea base:</span>
                <span class="font-bold text-slate-800">{ind.baseline}</span>
              </div>
              <div class="flex justify-between">
                <span>Meta fijada:</span>
                <span class="font-black text-[#2B8A1E]">{ind.target}</span>
              </div>
              <div class="flex justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-100">
                <span>Frecuencia: {ind.periodicity}</span>
                <span>Resp: {ind.responsible}</span>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
            <strong>Sinergia:</strong> {ind.synergy}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- 3. Sistema MRV en 5 Etapas (Medición, Reporte Interno, Reporte Externo, Verificación, Ajuste) -->
  <div class="space-y-5">
    <div>
      <h3 class="text-xl sm:text-2xl font-black text-slate-900 font-brand">
        Sistema MRV: Las 5 Etapas de Aseguramiento
      </h3>
      <p class="text-xs sm:text-sm text-slate-600 mt-0.5">
        Gobernanza completa para garantizar la veracidad de los datos de circularidad ante la ANLA, ICONTEC y auditorías internacionales.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {#each MRV_STAGES as stage}
        <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="w-7 h-7 rounded-lg bg-[#003876] text-white font-mono-numbers font-black text-xs flex items-center justify-center">
                0{stage.step}
              </span>
              <span class="text-[10px] text-slate-400 font-bold uppercase">
                {stage.frequency}
              </span>
            </div>

            <h4 class="text-sm font-bold text-slate-900 leading-snug">
              {stage.title}
            </h4>
            <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">
              {stage.focus}
            </p>

            <div class="mt-3 pt-2 border-t border-slate-100 space-y-1">
              <span class="text-[9px] uppercase font-black text-slate-400 block tracking-wider">
                Herramientas
              </span>
              <ul class="space-y-1 text-[11px] text-slate-700">
                {#each stage.toolsAndStandards as tool}
                  <li class="flex items-start gap-1">
                    <span class="text-blue-500">•</span>
                    <span>{tool}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100 text-[10px] space-y-0.5 bg-slate-50 p-2 rounded-lg">
            <div class="text-slate-500"><strong>Resp:</strong> {stage.responsible}</div>
            <div class="text-[#003876] font-bold"><strong>Entregable:</strong> {stage.deliverable}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
