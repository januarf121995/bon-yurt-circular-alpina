<script lang="ts">
  import {
    Leaf,
    RefreshCw,
    ArrowRight,
    CheckCircle2,
    ExternalLink,
    Sparkles,
    AlertTriangle,
    Image as ImageIcon,
    ChevronDown,
    ChevronUp,
    TrendingUp
  } from 'lucide-svelte';
  import {
    BUTTERFLY_LOOPS,
    KEY_RESULTS_INFOGRAPHIC,
    CIRCULARITY_FLOWS_TABLE,
    SEMI_CIRCULAR_DIAGNOSIS
  } from '../data/circularData';
  import type { LoopItem } from '../types/circular';

  interface Props {
    onSelectLoop: (loop: LoopItem) => void;
    onAskAi: (prompt: string) => void;
    onExploreAcv: () => void;
    onOpenInfographic: () => void;
  }

  let { onSelectLoop, onAskAi, onExploreAcv, onOpenInfographic }: Props = $props();

  const bioLoops = BUTTERFLY_LOOPS.filter((l) => l.cycle === 'biological');
  const tecLoops = BUTTERFLY_LOOPS.filter((l) => l.cycle === 'technical');
  let showSlideVisual = $state(false);

  function getMedallionImage(loopId: string): string {
    switch (loopId) {
      case 'bio-regenerativo':
        return '/images/medallion_sprout.svg';
      case 'bio-cascada':
        return '/images/medallion_cheese.svg';
      case 'bio-corto':
        return '/images/medallion_spoon.svg';
      case 'tec-corto':
        return '/images/medallion_upcycling.svg';
      case 'tec-local':
        return '/images/bonyurt_prae.jpg';
      default:
        return '/images/bonyurt_hero.jpg';
    }
  }
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
  <!-- Top Banner -->
  <div class="text-center relative space-y-2">
    <div class="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#003876] text-white shadow-md border-2 border-white">
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      <span class="text-xs sm:text-sm font-extrabold tracking-wide uppercase font-brand">
        Componente 2 · Diagrama de Mariposa – Economía Circular
      </span>
    </div>

    <h1 class="text-3xl sm:text-5xl font-black text-[#003876] font-brand tracking-tight">
      Bon Yurt de Alpina
    </h1>
    <p class="text-sm sm:text-lg font-bold text-slate-600 max-w-2xl mx-auto">
      Modelo híbrido de transición (<strong class="text-amber-700">semi-circular</strong>): alta circularidad en planta (<strong>95,2%</strong>) con fuga lineal posconsumo en vaso y cuchara.
    </p>

    <div class="pt-1 flex flex-wrap items-center justify-center gap-2.5">
      <button
        onclick={onOpenInfographic}
        class="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200 border border-emerald-300 px-3 py-1.5 rounded-full font-bold transition-colors cursor-pointer"
      >
        <ExternalLink class="w-3.5 h-3.5" />
        <span>Ver Infografía Base</span>
      </button>
      <button
        onclick={() => (showSlideVisual = !showSlideVisual)}
        class="inline-flex items-center gap-1.5 text-xs text-[#003876] bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-full font-bold transition-colors cursor-pointer"
      >
        <ImageIcon class="w-3.5 h-3.5" />
        <span>{showSlideVisual ? 'Ocultar Lámina Diapositiva 4' : 'Ver Lámina Oficial (Diapositiva 4)'}</span>
        {#if showSlideVisual}<ChevronUp class="w-3.5 h-3.5" />{:else}<ChevronDown class="w-3.5 h-3.5" />{/if}
      </button>
    </div>
  </div>

  {#if showSlideVisual}
    <div class="rounded-3xl overflow-hidden border-2 border-blue-200 bg-white shadow-lg p-3 space-y-2">
      <img
        src="/images/slides/slide_visual_2.png"
        alt="Infografía oficial Componente 2: Diagrama de Mariposa Bon Yurt"
        class="w-full h-auto rounded-2xl object-contain max-h-[540px] mx-auto bg-slate-50"
      />
      <p class="text-[11px] text-center text-slate-500 font-medium">
        Lámina oficial de la presentación ejecutiva (Diapositiva 4): Ciclos Biológico y Técnico aplicados al Bon Yurt.
      </p>
    </div>
  {/if}

  <!-- Main Butterfly Interactive Canvas -->
  <div class="relative bg-gradient-to-b from-[#EBF5FB] via-white to-[#F0F9ED] rounded-3xl p-4 sm:p-8 border-2 border-blue-200 shadow-xl overflow-hidden">
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-slate-200">
      <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#E8F5E9] border-2 border-[#81C784] shadow-xs">
        <div class="w-10 h-10 rounded-xl bg-[#2B8A1E] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
          <Leaf class="w-6 h-6" />
        </div>
        <div>
          <h2 class="text-base sm:text-lg font-black text-[#1B5E20] font-brand leading-tight">
            Ciclo Biológico
          </h2>
          <p class="text-xs text-[#2E7D32] font-semibold">
            Regeneración de capital natural: cucharas de galleta, kumis/mermas y envases Bio certificados
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#E3F2FD] border-2 border-[#64B5F6] shadow-xs">
        <div class="w-10 h-10 rounded-xl bg-[#003876] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
          <RefreshCw class="w-6 h-6" />
        </div>
        <div>
          <h2 class="text-base sm:text-lg font-black text-[#0D47A1] font-brand leading-tight">
            Ciclo Técnico
          </h2>
          <p class="text-xs text-[#1565C0] font-semibold">
            Conservación de polímeros: sobrecopa 75% rPET, &gt;450 recicladores REP y red PRAE
          </p>
        </div>
      </div>
    </div>

    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-6">
      <!-- Left Wing: Biological Loops -->
      <div class="lg:col-span-4 space-y-4">
        {#each bioLoops as loop}
          <button
            type="button"
            onclick={() => onSelectLoop(loop)}
            class="w-full text-left relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border-2 border-[#81C784] hover:border-[#2B8A1E] hover:shadow-lg transition-all cursor-pointer group"
          >
            <div class="flex-1 pr-3 space-y-1">
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] border border-[#A5D6A7] inline-block">
                {loop.highlightBadge}
              </span>
              <h3 class="text-xs sm:text-sm font-black text-slate-900 leading-snug">{loop.title}</h3>
              <p class="text-[11px] text-slate-600 leading-relaxed">{loop.tagline}</p>
              <div class="pt-1 text-[10px] text-[#2B8A1E] font-bold underline flex items-center gap-1">
                <span>Ver protocolo y actores</span>
                <ArrowRight class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div class="w-16 h-16 rounded-full border-3 border-[#2B8A1E] overflow-hidden shadow-md shrink-0 bg-emerald-50">
              <img src={getMedallionImage(loop.id)} alt={loop.title} class="w-full h-full object-cover" />
            </div>
          </button>
        {/each}
      </div>

      <!-- Center: Bon Yurt Core -->
      <div class="lg:col-span-4 flex flex-col items-center text-center px-2 py-4">
        <div class="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-white to-[#E3F2FD] p-5 border-2 border-blue-300 shadow-xl space-y-3">
          <div class="relative mx-auto aspect-square max-w-[200px] rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-inner">
            <img src="/images/bonyurt_hero.jpg" alt="Bon Yurt de Alpina" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#003876]/80 via-transparent to-transparent flex items-end justify-center p-2.5">
              <span class="text-white text-[11px] font-black tracking-wider uppercase font-brand">
                Unidad Funcional: 175 g
              </span>
            </div>
          </div>

          <div class="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-left">
            <span class="text-[10px] font-black uppercase text-amber-800 block">
              2.3. Diagnóstico Actual
            </span>
            <p class="text-xs font-bold text-slate-900 mt-0.5">{SEMI_CIRCULAR_DIAGNOSIS.status}</p>
            <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
              95,2% aprovechamiento en planta · Brecha lineal tras el consumo en vaso (~25% piloto) y cuchara plástica.
            </p>
          </div>

          <div class="flex gap-2">
            <button
              onclick={onExploreAcv}
              class="flex-1 py-2 px-3 rounded-xl bg-[#003876] hover:bg-blue-900 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Ver Fases ACV
            </button>
            <button
              onclick={() => onAskAi('Explica el diagnóstico semi-circular del Bon Yurt en el Diagrama de Mariposa y los bucles prioritarios del ciclo biológico y técnico.')}
              class="py-2 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-bold transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <Sparkles class="w-3.5 h-3.5" />
              <span>IA</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Wing: Technical Loops -->
      <div class="lg:col-span-4 space-y-4">
        {#each tecLoops as loop}
          <button
            type="button"
            onclick={() => onSelectLoop(loop)}
            class="w-full text-left relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border-2 border-[#64B5F6] hover:border-[#003876] hover:shadow-lg transition-all cursor-pointer group"
          >
            <div class="flex-1 pr-3 space-y-1">
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E3F2FD] text-[#0D47A1] border border-[#90CAF9] inline-block">
                {loop.highlightBadge}
              </span>
              <h3 class="text-xs sm:text-sm font-black text-slate-900 leading-snug">{loop.title}</h3>
              <p class="text-[11px] text-slate-600 leading-relaxed">{loop.tagline}</p>
              <div class="pt-1 text-[10px] text-[#003876] font-bold underline flex items-center gap-1">
                <span>Ver recuperación y REP</span>
                <ArrowRight class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div class="w-16 h-16 rounded-full border-3 border-[#003876] overflow-hidden shadow-md shrink-0 bg-blue-50">
              <img src={getMedallionImage(loop.id)} alt={loop.title} class="w-full h-full object-cover" />
            </div>
          </button>
        {/each}

        <!-- Sanitary Precaution Card inside Technical Wing -->
        <div class="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-xs space-y-1.5">
          <div class="flex items-center gap-1.5 text-amber-900 font-black">
            <AlertTriangle class="w-4 h-4 text-amber-600 shrink-0" />
            <span>Precaución Sanitaria y Técnica</span>
          </div>
          <p class="text-[11px] text-amber-950 leading-relaxed">
            {SEMI_CIRCULAR_DIAGNOSIS.sanitaryPrecaution}
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Strip: 4 Verified Corporate Baseline Cards -->
    <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
      {#each KEY_RESULTS_INFOGRAPHIC as stat}
        <div class="p-3.5 rounded-2xl bg-white/95 border border-slate-200 shadow-2xs space-y-1">
          <div class="flex items-center justify-between">
            <span class={`text-2xl font-black font-mono-numbers ${stat.color}`}>{stat.value}</span>
            <TrendingUp class="w-4 h-4 text-emerald-600" />
          </div>
          <p class="text-xs font-bold text-slate-900 leading-snug">{stat.label}</p>
          <p class="text-[10px] text-slate-500">{stat.sublabel}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- 2.1 Tabla de Clasificación de Flujos y Circularidades -->
  <div class="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
    <div class="p-5 sm:p-6 border-b border-slate-100">
      <h3 class="text-base sm:text-lg font-black text-slate-900 font-brand">
        2.1. Clasificación de Flujos, Fugas Actuales y Oportunidad de Bucle más Interno
      </h3>
      <p class="text-xs text-slate-500 mt-0.5">
        Mapeo completo de los 7 flujos materiales de Bon Yurt entre línea base, pérdida de valor y estrategia de cierre.
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse text-xs">
        <thead class="bg-slate-50 text-slate-600 uppercase text-[10px] font-black tracking-wider border-b border-slate-200">
          <tr>
            <th class="py-3 px-4">Flujo / Iniciativa</th>
            <th class="py-3 px-4">Ciclo</th>
            <th class="py-3 px-4">Línea Base</th>
            <th class="py-3 px-4">Bucle Actual</th>
            <th class="py-3 px-4">Fuga o Pérdida</th>
            <th class="py-3 px-4">Oportunidad Bucle Interno</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          {#each CIRCULARITY_FLOWS_TABLE as row}
            <tr class="hover:bg-slate-50/80">
              <td class="py-3 px-4 font-bold text-slate-900">{row.material}</td>
              <td class="py-3 px-4">
                <span class={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  row.cycle === 'Biológico'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-blue-100 text-[#003876]'
                }`}>
                  {row.cycle}
                </span>
              </td>
              <td class="py-3 px-4 text-slate-700">{row.baselineAmount}</td>
              <td class="py-3 px-4 font-semibold text-slate-800">{row.currentLoop}</td>
              <td class="py-3 px-4 text-rose-700 font-medium">{row.leakageOrLoss}</td>
              <td class="py-3 px-4 text-[#2B8A1E] font-semibold">{row.innerLoopOpportunity}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>
