<script lang="ts">
  import {
    Award,
    CheckCircle2,
    Sparkles,
    AlertTriangle,
    BookOpen,
    Image as ImageIcon,
    ChevronDown,
    ChevronUp
  } from 'lucide-svelte';
  import {
    ELLEN_MACARTHUR_PRINCIPLES,
    NINE_R_STRATEGIES
  } from '../data/circularData';

  interface Props {
    onAskAi: (prompt: string) => void;
  }

  let { onAskAi }: Props = $props();
  let filterLevel = $state<'all' | 'brechas' | 'consolidadas'>('all');
  let showSlideVisual = $state(false);

  const filteredNineR = $derived.by(() => {
    if (filterLevel === 'brechas') return NINE_R_STRATEGIES.filter((s) => s.maturityScore <= 3);
    if (filterLevel === 'consolidadas') return NINE_R_STRATEGIES.filter((s) => s.maturityScore >= 4);
    return NINE_R_STRATEGIES;
  });
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003876] text-xs font-bold mb-2">
        <BookOpen class="w-3.5 h-3.5" />
        <span>Componente 3 · Principios Ellen MacArthur & Jerarquía 9R (Kirchherr et al., 2017)</span>
      </div>
      <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-brand">
        Principios de Circularidad & Matriz 9R
      </h2>
      <p class="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
        Evaluación cuantificada con evidencia corporativa verificable (Alpina, 2025): madurez de los <strong>3 Principios MacArthur (4/5 · 4/5 · 5/5)</strong> y análisis de brechas en <strong>7 estrategias de la jerarquía 9R</strong> (R0, R1, R2, R3, R7, R8, R9).
      </p>
    </div>

    <button
      onclick={() => (showSlideVisual = !showSlideVisual)}
      class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer self-start md:self-auto"
    >
      <ImageIcon class="w-4 h-4 text-[#003876]" />
      <span>{showSlideVisual ? 'Ocultar Lámina Oficial' : 'Ver Lámina Oficial (Diapositiva 5)'}</span>
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
        src="/images/slides/slide_visual_3.png"
        alt="Infografía oficial Componente 3: Principios Ellen MacArthur y Jerarquía 9R"
        class="w-full h-auto rounded-2xl object-contain max-h-[540px] mx-auto bg-slate-50"
      />
      <p class="text-[11px] text-center text-slate-500 font-medium">
        Lámina oficial de la presentación ejecutiva (Diapositiva 5): Evaluación 4/5, 4/5 y 5/5 y matriz 9R aplicada a Bon Yurt.
      </p>
    </div>
  {/if}

  <!-- 1. Ellen MacArthur 3 Principles Matrix -->
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2 font-brand">
        <Award class="w-5 h-5 text-amber-500" />
        <span>3.1. Evaluación de los 3 Principios de la Fundación Ellen MacArthur</span>
      </h3>
      <span class="text-xs font-bold text-slate-500 hidden sm:inline">Ruta A · Informe de Sostenibilidad 2025</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each ELLEN_MACARTHUR_PRINCIPLES as principle}
        <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg font-brand ${
                principle.status === 'Sí (Parcial)'
                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                  : 'bg-blue-50 text-[#003876] border border-blue-200'
              }`}>
                Aplica: {principle.status}
              </span>
              <div class={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black border ${
                principle.maturityLevel === 5
                  ? 'bg-emerald-600 text-white border-emerald-700'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300'
              }`}>
                <CheckCircle2 class="w-3.5 h-3.5" />
                <span>Madurez {principle.maturityLevel}/5</span>
              </div>
            </div>

            <h4 class="text-base font-bold text-slate-900 leading-snug">
              {principle.name}
            </h4>
            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {principle.description}
            </p>

            <!-- Maturity Progress Gauge -->
            <div class="mt-3">
              <div class="flex gap-1.5">
                {#each [1, 2, 3, 4, 5] as pip}
                  <div
                    class={`h-1.5 flex-1 rounded-full ${
                      pip <= principle.maturityLevel
                        ? principle.maturityLevel === 5
                          ? 'bg-emerald-600'
                          : 'bg-[#003876]'
                        : 'bg-slate-200'
                    }`}
                  ></div>
                {/each}
              </div>
            </div>

            <div class="mt-4 pt-3 border-t border-slate-100 space-y-2">
              <span class="text-[10px] uppercase font-black text-slate-400 tracking-wider">
                Evidencia Verificable en Alpina (Ruta A)
              </span>
              <ul class="space-y-2 text-xs text-slate-700">
                {#each principle.bonYurtEvidence as ev}
                  <li class="flex items-start gap-2 leading-relaxed">
                    <span class={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                      ev.startsWith('Brecha') ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}></span>
                    <span>{ev}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-800 font-bold bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 gap-2">
            <span>Síntesis</span>
            <span class="font-mono-numbers text-right">{principle.impactMetric}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- 2. Matriz de Evidencia de la Jerarquía de las 9R (7 estrategias) -->
  <div class="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div>
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 font-brand">
          3.2. Matriz de Evidencia de la Jerarquía de las 9R (Kirchherr et al., 2017)
        </span>
        <h3 class="text-xl sm:text-2xl font-black tracking-tight mt-1 font-brand">
          R0 · R1 · R2 · R3 · R7 · R8 · R9: Madurez y Detección de Brechas
        </h3>
        <p class="text-xs text-slate-400 mt-1 max-w-2xl">
          Mientras R2, R7, R8 y R9 operan en madurez <strong class="text-emerald-300">4/5</strong>, las estrategias más internas (<strong class="text-amber-300">R0 Rechazar, R1 Repensar y R3 Reutilizar</strong>) están en nivel <strong class="text-amber-300">3/5</strong> y definen la hoja de ruta E1–E4.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <div class="inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700 text-xs">
          <button
            onclick={() => (filterLevel = 'all')}
            class={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              filterLevel === 'all' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            Todas (7)
          </button>
          <button
            onclick={() => (filterLevel = 'brechas')}
            class={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              filterLevel === 'brechas' ? 'bg-amber-600 text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            Brechas 3/5 (3)
          </button>
          <button
            onclick={() => (filterLevel = 'consolidadas')}
            class={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              filterLevel === 'consolidadas' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            Nivel 4/5 (4)
          </button>
        </div>

        <button
          onclick={() => onAskAi('Analiza la jerarquía de las 9R en Bon Yurt Alpina: ¿por qué R0, R1 y R3 están en nivel 3/5 mientras R2, R7, R8 y R9 están en 4/5, y cómo las cierran las estrategias E1–E4?')}
          class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer border border-slate-700 shadow-xs"
        >
          <Sparkles class="w-3.5 h-3.5 text-emerald-400" />
          <span>Consultar 9R a la IA</span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each filteredNineR as strat}
        <div class={`p-5 rounded-2xl border space-y-3.5 flex flex-col justify-between ${
          strat.maturityScore <= 3
            ? 'bg-slate-800/95 border-amber-500/40'
            : 'bg-slate-800/80 border-slate-700'
        }`}>
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-2.5">
                <span class={`text-2xl font-black font-mono-numbers px-2.5 py-1 rounded-xl ${
                  strat.maturityScore <= 3
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {strat.code}
                </span>
                <div>
                  <span class="text-sm font-black text-white block leading-tight">
                    {strat.name}
                  </span>
                  <span class="text-[10px] text-slate-400 block">{strat.lifecyclePhase}</span>
                </div>
              </div>

              <span class={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                strat.status === 'Parcial'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
              }`}>
                {strat.status}
              </span>
            </div>

            <p class="text-xs font-semibold text-slate-200 leading-relaxed">
              {strat.application}
            </p>
            <p class="text-[11px] text-slate-400 leading-relaxed border-t border-slate-700/70 pt-2">
              {strat.reductionDetail}
            </p>
          </div>

          <div class="pt-1">
            <div class="flex justify-between text-xs text-slate-400 mb-1.5 font-mono-numbers">
              <span>Madurez: Nivel {strat.maturityScore}/5</span>
              <span class={strat.maturityScore <= 3 ? 'text-amber-300 font-bold' : 'text-emerald-400 font-bold'}>
                {strat.progressPercentage}%
              </span>
            </div>
            <div class="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
              <div
                class={`h-full rounded-full transition-all duration-500 ${
                  strat.maturityScore <= 3 ? 'bg-amber-400' : 'bg-emerald-500'
                }`}
                style={`width: ${strat.progressPercentage}%`}
              ></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Anti-Greenwashing Quality Callout -->
  <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3.5 text-xs text-amber-900 leading-relaxed">
    <AlertTriangle class="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
    <div>
      <span class="font-bold uppercase tracking-wider block font-brand mb-0.5">
        Rigor Verificable contra el Greenwashing (Ruta A · Alpina 2025)
      </span>
      <span>
        Cada calificación de madurez parte de evidencia pública auditada: <strong>95,2% de aprovechamiento de residuos postindustriales</strong>, <strong>75% de rPET en sobrecopa</strong>, <strong>59% de plástico neutralidad con más de 450 recicladores</strong>, <strong>51% en Índice de Reciclabilidad</strong> y <strong>38% de electricidad por biogás en Planta Sopó</strong>. Las brechas de cuchara y vaso quedan explícitas en R0, R1 y R3 para cerrarlas con E1–E4.
      </span>
    </div>
  </div>
</section>
