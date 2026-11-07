<script lang="ts">
  import {
    Target,
    CheckCircle2,
    Calendar,
    Users,
    AlertTriangle,
    ShieldCheck,
    Sparkles,
    ArrowRight,
    TrendingUp,
    Clock,
    Factory,
    GraduationCap,
    Lightbulb
  } from 'lucide-svelte';
  import { PRIORITIZED_STRATEGIES } from '../data/circularData';
  import type { PrioritizedStrategy } from '../types/circular';

  interface Props {
    onAskAi: (prompt: string) => void;
  }

  let { onAskAi }: Props = $props();

  let activeStrategyId = $state('strat-1');

  const selectedStrategy = $derived(
    PRIORITIZED_STRATEGIES.find((s) => s.id === activeStrategyId) ||
    PRIORITIZED_STRATEGIES[0]
  );

  function getStrategyImage(key?: string): string {
    switch (key) {
      case 'school':
        return '/images/bonyurt_prae.jpg';
      case 'plant':
        return '/images/alpina_plant.jpg';
      default:
        return '/images/bonyurt_hero.jpg';
    }
  }
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
  <!-- Header with 25% Rubric Weight Badge -->
  <div class="max-w-3xl">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[#2B8A1E] text-xs font-bold mb-2">
      <Target class="w-3.5 h-3.5" />
      <span>Componente 4 · Guía de Clase (Mayor Peso: 25% de la Rúbrica)</span>
    </div>
    <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-brand">
      Estrategias Priorizadas & Hoja de Ruta
    </h2>
    <p class="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
      Las 3 estrategias operativas para cerrar las brechas del Bon Yurt, evaluadas mediante matriz de impacto vs. facilidad, cronograma por horizontes y mitigación de riesgos sanitarios.
    </p>
  </div>

  <!-- 1. Matriz de Priorización (Impacto vs. Facilidad) -->
  <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
      <div>
        <h3 class="text-base sm:text-lg font-black text-slate-900 font-brand">
          Matriz de Priorización: Impacto vs. Facilidad de Implementación
        </h3>
        <p class="text-xs text-slate-500">
          Criterio de la guía: Empezar por estrategias de Alto Impacto y Alta Facilidad (Cuadrante Superior Derecho).
        </p>
      </div>
      <button
        onclick={() => onAskAi('Justifica por qué las 3 estrategias del Bon Yurt están ubicadas en sus cuadrantes de impacto y facilidad de implementación.')}
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#003876] text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer self-start sm:self-auto"
      >
        <Sparkles class="w-3.5 h-3.5 text-blue-600" />
        <span>Consultar Matriz a la IA</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
      {#each PRIORITIZED_STRATEGIES as strat}
        <button
          onclick={() => activeStrategyId = strat.id}
          class={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative ${
            activeStrategyId === strat.id
              ? 'border-[#003876] bg-blue-50/60 shadow-md'
              : 'border-slate-200 bg-slate-50/80 hover:bg-white hover:border-slate-300'
          }`}
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#003876] text-white font-mono-numbers">
              {strat.number}
            </span>
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
              {strat.horizon}
            </span>
          </div>

          <h4 class="text-sm font-bold text-slate-900 leading-snug">
            {strat.title}
          </h4>
          <p class="text-xs text-slate-500 mt-1 line-clamp-2">
            {strat.tagline}
          </p>

          <div class="mt-3 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] font-mono-numbers">
            <div class="bg-white p-1.5 rounded-lg border border-slate-200 text-center">
              <span class="text-slate-400 block text-[9px]">Impacto</span>
              <span class="font-black text-[#2B8A1E] text-sm">{strat.impactScore}/10</span>
            </div>
            <div class="bg-white p-1.5 rounded-lg border border-slate-200 text-center">
              <span class="text-slate-400 block text-[9px]">Facilidad</span>
              <span class="font-black text-[#003876] text-sm">{strat.feasibilityScore}/10</span>
            </div>
          </div>
        </button>
      {/each}
    </div>
  </div>

  <!-- 2. Selected Strategy Deep Dive -->
  <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-md space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-black uppercase text-[#2B8A1E] tracking-wider font-brand">
            Estrategia Priorizada {selectedStrategy.number}
          </span>
          <span class="text-xs font-bold text-slate-400">· {selectedStrategy.principleR}</span>
        </div>
        <h3 class="text-xl sm:text-3xl font-black text-slate-900 tracking-tight font-brand">
          {selectedStrategy.title}
        </h3>
        <p class="text-sm font-bold text-[#003876] mt-0.5">
          {selectedStrategy.tagline}
        </p>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-50 text-[#003876] border border-blue-200">
          Transforma: {selectedStrategy.phaseTransformed}
        </span>
      </div>
    </div>

    <!-- Strategy Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left side: Objectives, Actions, Responsibles & Allies -->
      <div class="lg:col-span-7 space-y-5">
        <!-- Objective -->
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-[10px] uppercase font-black text-slate-400 tracking-wider block mb-1">
            Objetivo Estratégico
          </span>
          <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {selectedStrategy.objective}
          </p>
        </div>

        <!-- Actions -->
        <div class="space-y-2">
          <span class="text-xs uppercase font-black text-slate-500 tracking-wider block font-brand">
            Acciones Clave del Despliegue
          </span>
          <ul class="space-y-2.5 text-xs text-slate-700">
            {#each selectedStrategy.actions as action}
              <li class="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/60 border border-slate-100">
                <CheckCircle2 class="w-4 h-4 text-[#2B8A1E] shrink-0 mt-0.5" />
                <span class="leading-relaxed">{action}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Responsibles & Allies -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div class="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs">
            <span class="text-[10px] uppercase font-bold text-blue-800 block mb-1">
              Responsable Interno
            </span>
            <span class="font-bold text-slate-900 block">{selectedStrategy.responsible}</span>
          </div>

          <div class="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
            <span class="text-[10px] uppercase font-bold text-emerald-800 block mb-1">
              Aliados Externos
            </span>
            <span class="font-bold text-slate-900 block">{selectedStrategy.externalAllies.join(', ')}</span>
          </div>
        </div>

        <!-- Barriers and Mitigation -->
        <div class="space-y-2 pt-2">
          <span class="text-xs uppercase font-black text-slate-500 tracking-wider flex items-center gap-1.5 font-brand">
            <ShieldCheck class="w-4 h-4 text-amber-500" />
            <span>Análisis de Viabilidad, Barreras y Mitigación</span>
          </span>
          {#each selectedStrategy.barriersAndMitigation as item}
            <div class="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1">
              <div class="flex items-center gap-1 text-amber-900 font-bold">
                <AlertTriangle class="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Barrera: {item.barrier}</span>
              </div>
              <p class="text-slate-700 pl-4 leading-relaxed">
                <strong>Mitigación:</strong> {item.mitigation}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right side: Visual & Expected Impact Callout -->
      <div class="lg:col-span-5 space-y-4">
        <div class="relative aspect-4/3 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md group">
          <img
            src={getStrategyImage(selectedStrategy.imageKey)}
            alt={selectedStrategy.title}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
            <span class="text-white text-xs font-bold drop-shadow-md">
              Público Objetivo: {selectedStrategy.targetAudience}
            </span>
          </div>
        </div>

        <!-- Expected Impact Card -->
        <div class="p-4 rounded-2xl bg-[#E8F5E9] border-2 border-[#81C784] space-y-1.5">
          <span class="text-[10px] font-black uppercase tracking-wider text-[#1B5E20] font-brand block">
            Beneficio Esperado & Meta de Impacto
          </span>
          <p class="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
            {selectedStrategy.expectedImpact}
          </p>
        </div>

        <button
          onclick={() => onAskAi(`Analiza detalladamente la viabilidad y riesgos de la Estrategia ${selectedStrategy.number}: ${selectedStrategy.title} para el Bon Yurt de Alpina.`)}
          class="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#003876] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
        >
          <Sparkles class="w-3.5 h-3.5 text-blue-600" />
          <span>Consultar Viabilidad a la IA</span>
        </button>
      </div>
    </div>
  </div>
</section>
