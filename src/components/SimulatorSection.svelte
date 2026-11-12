<script lang="ts">
  import {
    Sliders,
    RotateCcw,
    Sparkles,
    Scale,
    Layers,
    BookOpen,
    Image as ImageIcon,
    ChevronDown,
    ChevronUp,
    TrendingUp,
    Globe,
    CheckCircle2,
    BarChart3
  } from 'lucide-svelte';
  import {
    ALPINA_CORPORATE_BASELINE,
    INDICATOR_SHEETS,
    MRV_STAGES,
    ODS_CONTRIBUTIONS
  } from '../data/circularData';
  import type { SimulationParams, SimulationResults } from '../types/circular';

  interface Props {
    onAskAi: (prompt: string) => void;
  }

  let { onAskAi }: Props = $props();

  const BASELINE_2025_PARAMS: SimulationParams = {
    recoveryRate: 59, // 59% Plástico Neutralidad actual
    recycledContent: 51, // 51% IR actual (75% sobrecopa / 25% vaso piloto)
    energyReduction: 24, // 24% autogeneración nacional (38% Sopó)
    spoonSubstitution: 5, // 5% piloto cuchara galleta
    symbioticCereal: 0 // 0% comercial (piloto)
  };

  const TARGET_3Y_PARAMS: SimulationParams = {
    recoveryRate: 75, // Meta 75%
    recycledContent: 85, // Meta 85% ponderado
    energyReduction: 30, // Meta 30%
    spoonSubstitution: 80, // Meta 80%
    symbioticCereal: 15 // Meta 15%
  };

  let params = $state<SimulationParams>({ ...BASELINE_2025_PARAMS });
  let selectedIndicatorCategory = $state<string>('todos');
  let showSlideVisual = $state(false);

  const results = $derived.by<SimulationResults>(() => {
    const irProjected = Math.min(
      85,
      Math.round(
        30 +
          (params.recycledContent - 51) * 0.42 +
          (params.recoveryRate - 59) * 0.28 +
          (params.spoonSubstitution - 5) * 0.08 +
          21
      )
    );
    const mciIndex = Number(
      Math.min(
        0.92,
        Math.max(
          0.35,
          0.42 +
            (params.recycledContent / 100) * 0.18 +
            (params.recoveryRate / 100) * 0.14 +
            (params.spoonSubstitution / 100) * 0.06 +
            (params.symbioticCereal / 100) * 0.08
        )
      ).toFixed(2)
    );

    const virginPlasticSavedTons = Math.round(
      420 + (params.recycledContent - 51) * 7.5 + (params.spoonSubstitution - 5) * 2.2
    );
    const co2AvoidedTons = Math.round(
      1150 +
        (params.energyReduction - 24) * 45 +
        (params.recycledContent - 51) * 14 +
        params.symbioticCereal * 18
    );
    const spoonsReplacedThousands = Math.round((params.spoonSubstitution / 100) * 45000);
    const recyclerFamiliesSupported = Math.round(450 + Math.max(0, params.recoveryRate - 59) * 11);
    const packagingSavingsPct = Number(
      Math.min(
        22,
        Math.max(
          2,
          3 +
            (params.recycledContent - 51) * 0.12 +
            (params.spoonSubstitution - 5) * 0.05 +
            params.symbioticCereal * 0.25
        )
      ).toFixed(1)
    );

    return {
      circularityScore: irProjected,
      mciIndex,
      virginPlasticSavedTons,
      co2AvoidedTons,
      spoonsReplacedThousands,
      recyclerFamiliesSupported,
      packagingSavingsPct
    };
  });

  const filteredIndicators = $derived.by(() => {
    if (selectedIndicatorCategory === 'todos') return INDICATOR_SHEETS;
    return INDICATOR_SHEETS.filter(
      (i) => i.category.toLowerCase() === selectedIndicatorCategory.toLowerCase()
    );
  });

  function setBaseline() {
    params = { ...BASELINE_2025_PARAMS };
  }

  function setTarget3Y() {
    params = { ...TARGET_3Y_PARAMS };
  }
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003876] text-xs font-bold mb-2">
        <Scale class="w-3.5 h-3.5" />
        <span>Componente 5 · Indicadores Corporativos vs. Sector & Sistema MRV</span>
      </div>
      <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-brand">
        Indicadores Alpina vs. Sector, Simulador & MRV
      </h2>
      <p class="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
        Contraste directo de los indicadores oficiales de <strong>Alpina (2025)</strong> frente a referentes sectoriales en Colombia (<strong>Forética, ANDI, DANE, Res. 1407</strong>), metas a 3 años en <strong>8 indicadores</strong> y trazabilidad en <strong>5 etapas MRV</strong>.
      </p>
    </div>

    <button
      onclick={() => (showSlideVisual = !showSlideVisual)}
      class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer self-start md:self-auto"
    >
      <ImageIcon class="w-4 h-4 text-[#003876]" />
      <span>{showSlideVisual ? 'Ocultar Lámina Oficial' : 'Ver Lámina Oficial (Diapositiva 7)'}</span>
      {#if showSlideVisual}
        <ChevronUp class="w-3.5 h-3.5" />
      {:else}
        <ChevronDown class="w-3.5 h-3.5" />
      {/if}
    </button>
  </div>

  {#if showSlideVisual}
    <div class="rounded-3xl overflow-hidden border-2 border-blue-200 bg-white shadow-lg p-3 space-y-2">
      <img
        src="/images/slides/slide_visual_5.png"
        alt="Infografía oficial Componente 5: Indicadores Alpina, Matriz 8 Indicadores, MRV y ODS"
        class="w-full h-auto rounded-2xl object-contain max-h-[540px] mx-auto bg-slate-50"
      />
      <p class="text-[11px] text-center text-slate-500 font-medium">
        Lámina oficial de la presentación ejecutiva (Diapositiva 7): Indicadores corporativos Alpina, matriz de 8 métricas, MRV y ODS.
      </p>
    </div>
  {/if}

  <!-- 5.1 Indicadores Corporativos Actuales en Alpina vs. Sector -->
  <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-sm space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
      <div>
        <span class="text-[11px] font-black uppercase tracking-wider text-[#2B8A1E] font-brand block">
          5.1. Línea Base Oficial (Informe de Sostenibilidad Alpina 2025)
        </span>
        <h3 class="text-lg sm:text-2xl font-black text-slate-900 font-brand">
          Alpina Hoy vs. Referentes del Sector en Colombia
        </h3>
        <p class="text-xs text-slate-500 mt-0.5">
          Barras comparativas entre el desempeño auditado de Alpina S.A.S. BIC y el promedio sectorial / umbral normativo.
        </p>
      </div>

      <button
        onclick={() => onAskAi('Compara en detalle los indicadores actuales de Alpina (IR 51%, rPET 75%, Plástico Neutralidad 59%, Postindustrial 95,2% y Biogás 38%/Autogeneración 24%) frente a los referentes del sector en Colombia.')}
        class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#1B5E20] text-xs font-bold border border-emerald-200 transition-colors cursor-pointer self-start sm:self-auto"
      >
        <Sparkles class="w-3.5 h-3.5 text-[#2B8A1E]" />
        <span>Analizar Comparativa Sectorial</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each ALPINA_CORPORATE_BASELINE as metric}
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-[#003876] bg-blue-100/80 px-2 py-0.5 rounded-md">
                {metric.pillar}
              </span>
              <span class="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                {metric.highlightTag}
              </span>
            </div>
            <h4 class="text-sm font-black text-slate-900 leading-snug">
              {metric.name}
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              {metric.detail}
            </p>
          </div>

          <!-- Dual Comparison Bars -->
          <div class="space-y-2.5 pt-2 border-t border-slate-200 text-xs">
            <div>
              <div class="flex justify-between font-bold text-[#003876] mb-1">
                <span>Alpina Actual (2025)</span>
                <span class="font-mono-numbers">{metric.alpinaLabel}</span>
              </div>
              <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  class="h-full bg-[#003876] rounded-full transition-all duration-500"
                  style={`width: ${Math.min(100, metric.alpinaValue)}%`}
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between font-semibold text-slate-500 mb-1">
                <span>Referente Sector</span>
                <span class="font-mono-numbers text-[11px]">{metric.sectorLabel}</span>
              </div>
              <div class="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  class="h-full bg-slate-400 rounded-full transition-all duration-500"
                  style={`width: ${Math.min(100, metric.sectorValue)}%`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      {/each}

      <!-- Vertedero Cero & Solar Highlight Card -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-[#003876] to-blue-900 text-white flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <span class="text-[10px] font-black uppercase tracking-wider text-amber-300">
            Hitos Adicionales Operación Limpia & Energía
          </span>
          <h4 class="text-base font-black leading-snug">
            Vertedero Cero, Solar Galapa & Biogás Sopó
          </h4>
          <ul class="space-y-2 text-xs text-blue-100">
            <li class="flex items-start gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong class="text-white">Vertedero Cero:</strong> Directriz activa en plantas estratégicas mediante co-procesamiento y compostaje.</span>
            </li>
            <li class="flex items-start gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong class="text-white">Energía Solar (6%):</strong> Cobertura nacional apalancada en paneles solares (destaca CEDI Galapa).</span>
            </li>
            <li class="flex items-start gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong class="text-white">Biogás Planta Sopó (38%):</strong> Generado desde su PTAR, equivale al 18% del consumo nacional de Alpina.</span>
            </li>
          </ul>
        </div>
        <div class="text-[11px] text-blue-200 border-t border-blue-800 pt-2">
          Fuente: Informe de Sostenibilidad e Integrado Alpina (2025).
        </div>
      </div>
    </div>
  </div>

  <!-- 1. Simulador Interactivo: Línea Base 2025 -> Meta 3 Años -->
  <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-sm space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#003876] flex items-center justify-center font-bold">
          <Sliders class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-base sm:text-lg font-black text-slate-900 font-brand">
            Simulador de Transición Circular (Línea Base 2025 → Meta 3 Años)
          </h3>
          <p class="text-xs text-slate-500">
            Cambia rápidamente entre el escenario actual y la meta a 3 años o ajusta las palancas E1–E4.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <button
          onclick={setBaseline}
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
        >
          <RotateCcw class="w-3.5 h-3.5" />
          <span>Línea Base 2025</span>
        </button>
        <button
          onclick={setTarget3Y}
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#2B8A1E] hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer shadow-xs"
        >
          <TrendingUp class="w-3.5 h-3.5" />
          <span>Cargar Meta a 3 Años</span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Sliders (7 cols) -->
      <div class="lg:col-span-7 space-y-4">
        <div class="space-y-1.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-900">1. Recuperación Posconsumo / Plástico Neutralidad (E4 · Res. 1407)</span>
            <span class="font-mono-numbers font-black text-[#003876] bg-blue-100 px-2 py-0.5 rounded-md">{params.recoveryRate}%</span>
          </div>
          <input type="range" min="30" max="85" step="1" bind:value={params.recoveryRate} class="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-[#003876]" />
          <div class="flex justify-between text-[10px] text-slate-400">
            <span>Res. 1407 al 2030 (30%)</span>
            <span>Actual Alpina (59%)</span>
            <span>Meta Plan (75%)</span>
          </div>
        </div>

        <div class="space-y-1.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-900">2. Material Reciclado/Bio Ponderado en Set de Empaque (E3)</span>
            <span class="font-mono-numbers font-black text-[#2B8A1E] bg-emerald-100 px-2 py-0.5 rounded-md">{params.recycledContent}%</span>
          </div>
          <input type="range" min="15" max="100" step="1" bind:value={params.recycledContent} class="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-[#2B8A1E]" />
          <div class="flex justify-between text-[10px] text-slate-400">
            <span>Sector Lácteo (15%)</span>
            <span>IR Actual (51%)</span>
            <span>Meta Ponderada (85%)</span>
          </div>
        </div>

        <div class="space-y-1.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-900">3. Sustitución de Cucharas Plásticas por Galleta Comestible (E1)</span>
            <span class="font-mono-numbers font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">{params.spoonSubstitution}%</span>
          </div>
          <input type="range" min="0" max="100" step="5" bind:value={params.spoonSubstitution} class="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-amber-600" />
          <div class="flex justify-between text-[10px] text-slate-400">
            <span>Piloto Actual (5%)</span>
            <span>Meta Línea Clásica (80%)</span>
            <span>100% Portafolio</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex justify-between items-center text-xs">
              <span class="font-bold text-slate-900">4. Mermas Simbiosis (E2)</span>
              <span class="font-mono-numbers font-bold text-emerald-700">{params.symbioticCereal}%</span>
            </div>
            <input type="range" min="0" max="25" step="1" bind:value={params.symbioticCereal} class="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-emerald-600" />
            <div class="flex justify-between text-[10px] text-slate-400">
              <span>Base 0%</span>
              <span>Meta 15%</span>
            </div>
          </div>

          <div class="space-y-1.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex justify-between items-center text-xs">
              <span class="font-bold text-slate-900">5. Autogeneración Limpia</span>
              <span class="font-mono-numbers font-bold text-amber-700">{params.energyReduction}%</span>
            </div>
            <input type="range" min="10" max="45" step="1" bind:value={params.energyReduction} class="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-amber-600" />
            <div class="flex justify-between text-[10px] text-slate-400">
              <span>Base 24%</span>
              <span>Meta 30%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Outputs (5 cols) -->
      <div class="lg:col-span-5 space-y-4">
        <div class="p-6 rounded-3xl bg-gradient-to-br from-[#003876] to-slate-900 text-white shadow-xl space-y-5">
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                Índices Integrados Proyectados (IND-08)
              </span>
              <div class="flex items-baseline gap-3 mt-1">
                <span class="text-3xl font-black font-mono-numbers">IR {results.circularityScore}%</span>
                <span class="text-sm font-bold text-amber-300 font-mono-numbers">MCI {results.mciIndex}</span>
              </div>
            </div>
            <div class="text-right text-[11px] text-slate-300">
              <span class="block">Meta Plan: IR 70%</span>
              <span class="block text-emerald-300 font-bold">MCI ≥ 0,68</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span class="text-slate-400 text-[10px] block">Ahorro Empaque/Toppings</span>
              <span class="text-lg font-black text-emerald-400 font-mono-numbers">≥{results.packagingSavingsPct}%</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span class="text-slate-400 text-[10px] block">Recicladores Articulados</span>
              <span class="text-lg font-black text-sky-300 font-mono-numbers">&gt;{results.recyclerFamiliesSupported}</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span class="text-slate-400 text-[10px] block">Resina Virgen Evitada</span>
              <span class="text-lg font-black text-white font-mono-numbers">{results.virginPlasticSavedTons} t/año</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span class="text-slate-400 text-[10px] block">CO2eq Mitigado</span>
              <span class="text-lg font-black text-amber-300 font-mono-numbers">{results.co2AvoidedTons} t/año</span>
            </div>
          </div>

          <button
            onclick={() => onAskAi(`Simulé el plan con ${params.recoveryRate}% recuperación posconsumo, ${params.recycledContent}% material reciclado en empaque y ${params.spoonSubstitution}% cucharas de galleta (IR proyectado ${results.circularityScore}%, MCI ${results.mciIndex}). ¿Cómo se valida esto frente a las metas a 3 años y el sistema MRV?`)}
            class="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles class="w-4 h-4" />
            <span>Interpretar Escenario con la IA</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 5.2 Matriz de 8 Indicadores del Plan (Forética / GRI / WBCSD) -->
  <div class="space-y-4">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div>
        <h3 class="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2 font-brand">
          <BarChart3 class="w-5 h-5 text-[#003876]" />
          <span>5.2. Matriz de 8 Indicadores del Plan (Forética, GRI y WBCSD · Horizonte 3 años)</span>
        </h3>
        <p class="text-xs text-slate-500">
          Cruza la línea base verificable de Alpina (2025) con referentes de Colombia (DANE, ANDI, Res. 1407).
        </p>
      </div>

      <div class="flex flex-wrap gap-1.5">
        {#each ['todos', 'Entradas', 'Salidas', 'Producto', 'Económicos', 'Integrados'] as cat}
          <button
            onclick={() => (selectedIndicatorCategory = cat)}
            class={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
              selectedIndicatorCategory === cat
                ? 'bg-[#003876] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat === 'todos' ? 'Todos (8)' : cat}
          </button>
        {/each}
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each filteredIndicators as ind}
        <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-[#003876] border border-blue-200">
                {ind.category} · {ind.scale}
              </span>
              <h4 class="text-sm font-black text-slate-900 mt-1.5 leading-snug">{ind.name}</h4>
            </div>
            <span class="text-[10px] font-bold text-slate-400 shrink-0">{ind.source}</span>
          </div>

          <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700">
            <strong>Fórmula:</strong> {ind.formula}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div class="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200">
              <span class="text-[9px] font-black uppercase text-blue-800 block">Base Alpina</span>
              <span class="font-bold text-slate-900">{ind.alpinaBaseline}</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
              <span class="text-[9px] font-black uppercase text-slate-500 block">Ref. Sectorial</span>
              <span class="font-semibold text-slate-700">{ind.sectorBenchmark}</span>
            </div>
            <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300">
              <span class="text-[9px] font-black uppercase text-emerald-800 block">Meta 3 Años</span>
              <span class="font-black text-emerald-950">{ind.target}</span>
            </div>
          </div>

          <p class="text-[11px] text-slate-500 leading-relaxed pt-1 border-t border-slate-100">
            {ind.synergy}
          </p>
        </div>
      {/each}
    </div>
  </div>

  <!-- 5.3 Sistema MRV (5 Etapas) -->
  <div class="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6">
    <div>
      <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 font-brand">
        5.3. Sistema de Medición, Reporte y Verificación (MRV)
      </span>
      <h3 class="text-xl sm:text-2xl font-black mt-1 font-brand">
        Trazabilidad Operativa en 5 Etapas (SAP → Auditoría Externa → PHVA)
      </h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {#each MRV_STAGES as stage}
        <div class="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between space-y-3">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-black text-emerald-400 uppercase font-brand">Etapa {stage.step}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-700 text-slate-200 font-bold">{stage.frequency}</span>
            </div>
            <h4 class="text-sm font-black text-white">{stage.title}</h4>
            <p class="text-[11px] text-slate-300 leading-relaxed">{stage.focus}</p>
          </div>
          <div class="pt-2 border-t border-slate-700/80 space-y-1 text-[10px]">
            <span class="text-slate-400 block"><strong>Instrumentos:</strong> {stage.toolsAndStandards.join(' · ')}</span>
            <span class="text-emerald-300 block"><strong>Resp.:</strong> {stage.responsible}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- 5.4 Articulación Multiescala y ODS -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <div class="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
      <div class="flex items-center gap-2 text-[#003876]">
        <Layers class="w-5 h-5" />
        <h3 class="text-base sm:text-lg font-black font-brand">5.4. Articulación Multiescala</h3>
      </div>
      <div class="space-y-3 text-xs">
        <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-200">
          <strong class="text-[#003876] block">Escala Micro (Producto / Planta):</strong>
          <span class="text-slate-700">Gramajes Bon Yurt (175 g), rPET en sobrecopa y biogás PTAR de Sopó.</span>
        </div>
        <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
          <strong class="text-[#2B8A1E] block">Escala Meso (Cadena y Red PRAE):</strong>
          <span class="text-slate-700">Simbiosis de mermas con Ramo, Nutresa y Kellanova + redes de &gt;450 recicladores.</span>
        </div>
        <div class="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
          <strong class="text-amber-900 block">Escala Macro (País · DANE / ENEC):</strong>
          <span class="text-slate-700">Alineación con Cuenta Ambiental de Flujos de Materiales (DANE CAEFM-RS) y ENEC de MinAmbiente.</span>
        </div>
      </div>
    </div>

    <div class="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
      <div class="flex items-center gap-2 text-[#2B8A1E]">
        <Globe class="w-5 h-5" />
        <h3 class="text-base sm:text-lg font-black text-slate-900 font-brand">Contribución a los Objetivos de Desarrollo Sostenible (ODS)</h3>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {#each ODS_CONTRIBUTIONS as item}
          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span class="text-xs font-black text-[#003876] font-mono-numbers">{item.ods} · {item.title}</span>
            <p class="text-xs text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
