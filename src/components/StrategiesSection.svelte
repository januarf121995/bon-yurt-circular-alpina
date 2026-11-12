<script lang="ts">
  import {
    Target,
    CheckCircle2,
    AlertTriangle,
    ShieldCheck,
    Sparkles,
    Image as ImageIcon,
    ChevronDown,
    ChevronUp,
    Clock,
    Layers
  } from 'lucide-svelte';
  import { PRIORITIZED_STRATEGIES, VIABILITY_RISKS } from '../data/circularData';

  interface Props {
    onAskAi: (prompt: string) => void;
  }

  let { onAskAi }: Props = $props();

  let activeStrategyId = $state('E1');
  let showSlideVisual = $state(false);

  const selectedStrategy = $derived(
    PRIORITIZED_STRATEGIES.find((s) => s.id === activeStrategyId) ||
      PRIORITIZED_STRATEGIES[0]
  );

  function getPriorityColors(rank: number): string {
    switch (rank) {
      case 1:
        return 'bg-emerald-600 text-white';
      case 2:
        return 'bg-[#003876] text-white';
      case 3:
        return 'bg-amber-600 text-white';
      default:
        return 'bg-sky-600 text-white';
    }
  }
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[#2B8A1E] text-xs font-bold mb-2">
        <Target class="w-3.5 h-3.5" />
        <span>Componente 4 · Plan de Implementación & Viabilidad (4 Estrategias Priorizadas)</span>
      </div>
      <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-brand">
        Priorización de Proyectos de Circularidad (E1–E4)
      </h2>
      <p class="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
        Sin repetir programas ya existentes, se priorizan <strong>4 estrategias de alto impacto</strong> para cerrar la fuga lineal posconsumo: <strong>E1</strong> Cucharas comestibles de galleta, <strong>E2</strong> Simbiosis de mermas (Ramo/Nutresa/Kellanova), <strong>E3</strong> Vaso monomaterial 100% rPET/Bio y <strong>E4</strong> Red «Bon Yurt Transforma» (PRAE).
      </p>
    </div>

    <button
      onclick={() => (showSlideVisual = !showSlideVisual)}
      class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer self-start md:self-auto"
    >
      <ImageIcon class="w-4 h-4 text-[#003876]" />
      <span>{showSlideVisual ? 'Ocultar Lámina Oficial' : 'Ver Lámina Oficial (Diapositiva 6)'}</span>
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
        src="/images/slides/slide_visual_4.png"
        alt="Infografía oficial Componente 4: Estrategias E1-E4, Plan de Implementación y Viabilidad"
        class="w-full h-auto rounded-2xl object-contain max-h-[540px] mx-auto bg-slate-50"
      />
      <p class="text-[11px] text-center text-slate-500 font-medium">
        Lámina oficial de la presentación ejecutiva (Diapositiva 6): Matriz de priorización, plan detallado y análisis de viabilidad.
      </p>
    </div>
  {/if}

  <!-- 1. Matriz de Priorización (Impacto vs. Facilidad) - 4 Cards + Interactive 2x2 Matrix -->
  <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
      <div>
        <h3 class="text-base sm:text-lg font-black text-slate-900 font-brand">
          4.1. Matriz de Priorización (Impacto Ambiental y Económico vs. Facilidad)
        </h3>
        <p class="text-xs text-slate-500">
          Haz clic en cualquiera de las 4 estrategias priorizadas para explorar su plan de implementación, aliados y barreras.
        </p>
      </div>
      <button
        onclick={() => onAskAi('Explica el orden de prioridad 1 a 4 entre E1 cucharas de galleta, E2 simbiosis de mermas, E3 vaso monomaterial rPET/Bio y E4 Bon Yurt Transforma según impacto y facilidad de implementación.')}
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#003876] text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer self-start sm:self-auto"
      >
        <Sparkles class="w-3.5 h-3.5 text-blue-600" />
        <span>Consultar Priorización a la IA</span>
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each PRIORITIZED_STRATEGIES as strat}
        <button
          onclick={() => (activeStrategyId = strat.id)}
          class={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
            activeStrategyId === strat.id
              ? 'border-[#003876] bg-blue-50/70 shadow-md -translate-y-0.5'
              : 'border-slate-200 bg-slate-50/80 hover:bg-white hover:border-slate-300'
          }`}
        >
          <div>
            <div class="flex items-center justify-between gap-1 mb-2.5">
              <span class={`text-[11px] font-black px-2.5 py-0.5 rounded-full font-mono-numbers ${getPriorityColors(strat.priorityRank)}`}>
                Prioridad {strat.priorityRank} · {strat.number}
              </span>
              <span class="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                {strat.horizon.split('(')[0].trim()}
              </span>
            </div>

            <h4 class="text-sm font-bold text-slate-900 leading-snug">
              {strat.title}
            </h4>
            <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">
              {strat.principleR}
            </p>
          </div>

          <div class="mt-3 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] font-mono-numbers">
            <div class="bg-white p-1.5 rounded-lg border border-slate-200 text-center">
              <span class="text-slate-400 block text-[9px]">Impacto</span>
              <span class="font-black text-[#2B8A1E] text-xs">{strat.impactLabel}</span>
            </div>
            <div class="bg-white p-1.5 rounded-lg border border-slate-200 text-center">
              <span class="text-slate-400 block text-[9px]">Facilidad</span>
              <span class="font-black text-[#003876] text-xs">{strat.feasibilityLabel}</span>
            </div>
          </div>
        </button>
      {/each}
    </div>

    <!-- Compact Visual 2x2 Quadrant Plot -->
    <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <span class="text-xs font-black uppercase tracking-wider text-slate-700 font-brand">
          Mapa Visual de Cuadrantes (Impacto vs. Facilidad)
        </span>
        <div class="flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
          <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> P1: Cucharas galleta</span>
          <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-[#003876]"></span> P2: Simbiosis mermas</span>
          <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-amber-600"></span> P3: Vaso rPET/Bio</span>
          <span class="inline-flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-sky-600"></span> P4: PRAE Transforma</span>
        </div>
      </div>

      <div class="relative h-56 w-full bg-white rounded-xl border border-slate-200 overflow-hidden">
        <!-- Grid lines -->
        <div class="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
          <div class="border-r border-b border-dashed border-slate-200 p-2 text-[10px] font-bold text-amber-700/70">
            Impacto Muy Alto · Facilidad Media (Mediano Plazo)
          </div>
          <div class="border-b border-dashed border-slate-200 bg-emerald-50/40 p-2 text-right text-[10px] font-bold text-emerald-700">
            Alto Impacto · Alta Facilidad (Quick Wins · Corto Plazo)
          </div>
          <div class="border-r border-dashed border-slate-200 p-2 flex items-end text-[10px] text-slate-400">
            Impacto Moderado · Baja Facilidad
          </div>
          <div class="p-2 flex items-end justify-end text-[10px] font-bold text-sky-700/80">
            Impacto Medio-Alto · Alta Facilidad
          </div>
        </div>

        <!-- Strategy plotted nodes -->
        {#each PRIORITIZED_STRATEGIES as strat}
          {@const leftPct = Math.min(90, Math.max(12, strat.feasibilityScore * 9.5))}
          {@const bottomPct = Math.min(84, Math.max(16, (strat.impactScore - 5) * 16))}
          <button
            onclick={() => (activeStrategyId = strat.id)}
            style={`left: ${leftPct}%; bottom: ${bottomPct}%; transform: translate(-50%, 50%);`}
            class={`absolute z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-black shadow-md transition-transform cursor-pointer hover:scale-110 ${
              activeStrategyId === strat.id ? 'ring-4 ring-amber-300 scale-110' : ''
            } ${getPriorityColors(strat.priorityRank)}`}
            title={`${strat.number}: ${strat.title}`}
          >
            <span>{strat.number}</span>
            <span class="hidden md:inline font-semibold text-[10px] opacity-95">
              {strat.id === 'E1' ? 'Cuchara galleta' : strat.id === 'E2' ? 'Simbiosis' : strat.id === 'E3' ? 'Vaso rPET/Bio' : 'PRAE'}
            </span>
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- 2. Selected Strategy Deep Dive -->
  <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-md space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-1">
          <span class={`text-xs font-black uppercase px-2.5 py-0.5 rounded-full font-brand ${getPriorityColors(selectedStrategy.priorityRank)}`}>
            Prioridad {selectedStrategy.priorityRank} · {selectedStrategy.number}
          </span>
          <span class="text-xs font-bold text-[#2B8A1E]">{selectedStrategy.principleR}</span>
        </div>
        <h3 class="text-xl sm:text-3xl font-black text-slate-900 tracking-tight font-brand">
          {selectedStrategy.title}
        </h3>
        <p class="text-sm font-bold text-[#003876] mt-0.5">
          {selectedStrategy.tagline}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-50 text-[#003876] border border-blue-200">
          <Clock class="w-3.5 h-3.5" />
          {selectedStrategy.horizon}
        </span>
        <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
          <Layers class="w-3.5 h-3.5" />
          Transforma: {selectedStrategy.phaseTransformed}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-7 space-y-5">
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-[10px] uppercase font-black text-slate-400 tracking-wider block mb-1">
            Objetivo de Transformación Circular
          </span>
          <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {selectedStrategy.objective}
          </p>
        </div>

        <div class="space-y-2">
          <span class="text-xs uppercase font-black text-slate-500 tracking-wider block font-brand">
            Acciones Clave del Plan de Implementación
          </span>
          <ul class="space-y-2.5 text-xs text-slate-700">
            {#each selectedStrategy.actions as action}
              <li class="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-200">
                <CheckCircle2 class="w-4 h-4 text-[#2B8A1E] shrink-0 mt-0.5" />
                <span class="leading-relaxed">{action}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div class="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs">
            <span class="text-[10px] uppercase font-bold text-blue-800 block mb-1">
              Responsable Interno en Alpina
            </span>
            <span class="font-bold text-slate-900 block">{selectedStrategy.responsible}</span>
          </div>

          <div class="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
            <span class="text-[10px] uppercase font-bold text-emerald-800 block mb-1">
              Aliados Externos Estratégicos
            </span>
            <span class="font-bold text-slate-900 block">{selectedStrategy.externalAllies.join(' · ')}</span>
          </div>
        </div>

        <div class="space-y-2">
          <span class="text-xs uppercase font-black text-slate-500 tracking-wider flex items-center gap-1.5 font-brand">
            <ShieldCheck class="w-4 h-4 text-amber-500" />
            <span>Riesgo Específico y Mitigación Técnica</span>
          </span>
          {#each selectedStrategy.barriersAndMitigation as item}
            <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-1.5">
              <div class="flex items-start gap-1.5 text-amber-900 font-bold">
                <AlertTriangle class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Barrera: {item.barrier}</span>
              </div>
              <p class="text-slate-700 pl-5 leading-relaxed">
                <strong>Mitigación:</strong> {item.mitigation}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <div class="lg:col-span-5 space-y-4">
        <div class="p-5 rounded-3xl bg-gradient-to-br from-[#E8F5E9] to-emerald-50 border-2 border-[#81C784] space-y-2 shadow-xs">
          <span class="text-[10px] font-black uppercase tracking-wider text-[#1B5E20] font-brand block">
            Beneficio Esperado & Meta Cuantificable
          </span>
          <p class="text-sm sm:text-base font-black text-slate-900 leading-snug">
            {selectedStrategy.expectedImpact}
          </p>
          <p class="text-xs text-emerald-900 pt-1 border-t border-emerald-200/70">
            <strong>Alcance:</strong> {selectedStrategy.targetAudience}
          </p>
        </div>

        <div class="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2.5 space-y-2">
          <img
            src="/images/slides/slide_visual_4.png"
            alt="Resumen visual Componente 4: Estrategias E1-E4"
            class="w-full h-44 object-cover object-top rounded-xl border border-slate-200"
          />
          <p class="text-[11px] text-slate-500 px-1">
            Integración de las 4 estrategias en la arquitectura visual de la presentación ejecutiva.
          </p>
        </div>

        <button
          onclick={() => onAskAi(`Analiza en profundidad la estrategia ${selectedStrategy.number} (${selectedStrategy.title}): ¿cómo se articula con ${selectedStrategy.externalAllies.join(', ')} y qué indicadores del plan impacta?`)}
          class="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#003876] hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <Sparkles class="w-4 h-4 text-amber-300" />
          <span>Profundizar {selectedStrategy.number} con el Asistente IA</span>
        </button>
      </div>
    </div>
  </div>

  <!-- 3. Comparative Implementation Table (4.2) -->
  <div class="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
    <div class="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
      <div>
        <h3 class="text-base sm:text-lg font-black text-slate-900 font-brand">
          4.2. Tabla Resumen del Plan Detallado de Implementación
        </h3>
        <p class="text-xs text-slate-500">Comparativa ejecutiva de responsables, alianzas, plazos y beneficios esperados.</p>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse text-xs">
        <thead class="bg-slate-50 text-slate-600 uppercase text-[10px] font-black tracking-wider border-b border-slate-200">
          <tr>
            <th class="py-3 px-4">Estrategia</th>
            <th class="py-3 px-4">R / Principio</th>
            <th class="py-3 px-4">Responsable</th>
            <th class="py-3 px-4">Aliados Externos</th>
            <th class="py-3 px-4">Plazo</th>
            <th class="py-3 px-4">Beneficio Esperado</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          {#each PRIORITIZED_STRATEGIES as strat}
            <tr
              onclick={() => (activeStrategyId = strat.id)}
              class={`cursor-pointer transition-colors ${
                activeStrategyId === strat.id ? 'bg-blue-50/70' : 'hover:bg-slate-50'
              }`}
            >
              <td class="py-3.5 px-4 font-bold text-slate-900">
                <span class={`inline-block mr-1.5 px-2 py-0.5 rounded-full text-[10px] font-black ${getPriorityColors(strat.priorityRank)}`}>
                  {strat.number}
                </span>
                {strat.title}
              </td>
              <td class="py-3.5 px-4 font-semibold text-[#2B8A1E]">{strat.principleR}</td>
              <td class="py-3.5 px-4 text-slate-700">{strat.responsible}</td>
              <td class="py-3.5 px-4 text-slate-700">{strat.externalAllies.join(', ')}</td>
              <td class="py-3.5 px-4 font-mono-numbers font-bold text-[#003876] whitespace-nowrap">{strat.horizon}</td>
              <td class="py-3.5 px-4 text-slate-700 font-medium">{strat.expectedImpact}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <!-- 4. Análisis de Viabilidad, Riesgos y Fuentes de Apoyo (4.3) -->
  <div class="space-y-4">
    <h3 class="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2 font-brand">
      <ShieldCheck class="w-5 h-5 text-[#003876]" />
      <span>4.3. Análisis de Viabilidad, Riesgos y Fuentes de Apoyo en Colombia</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      {#each VIABILITY_RISKS as item}
        <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-black">
            <AlertTriangle class="w-3.5 h-3.5 text-amber-600" />
            <span>{item.category}</span>
          </div>
          <p class="text-xs text-slate-700 leading-relaxed">
            <strong>Riesgo:</strong> {item.risk}
          </p>
          <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 leading-relaxed">
            <strong>Mitigación y Apoyo:</strong> {item.mitigation}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
