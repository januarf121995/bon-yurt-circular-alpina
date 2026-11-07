<script lang="ts">
  import {
    Flame,
    Truck,
    Building,
    Store,
    Home,
    Recycle,
    Layers,
    Clock,
    Sparkles,
    Users,
    Settings,
    Package,
    Droplet,
    Zap,
    Wind,
    AlertCircle,
    CheckCircle2,
    FileSpreadsheet
  } from 'lucide-svelte';
  import { LCA_PHASES } from '../data/circularData';
  import type { LcaPhase } from '../types/circular';

  interface Props {
    onAskAi: (prompt: string) => void;
  }

  let { onAskAi }: Props = $props();

  let activePhaseId = $state(1);

  const activePhase = $derived(
    LCA_PHASES.find((p) => p.id === activePhaseId) || LCA_PHASES[0]
  );

  function getPhaseIcon(id: number) {
    switch (id) {
      case 1: return Flame;
      case 2: return Truck;
      case 3: return Building;
      case 4: return Store;
      case 5: return Home;
      case 6: return Recycle;
      default: return Layers;
    }
  }
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
  <!-- Header -->
  <div class="max-w-3xl">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003876] text-xs font-bold mb-2">
      <FileSpreadsheet class="w-3.5 h-3.5" />
      <span>Componente 1 · Guía de Clase (Peso: 15% de la Rúbrica)</span>
    </div>
    <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-brand">
      Diagnóstico de Análisis de Ciclo de Vida (ACV)
    </h2>
    <p class="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
      Inventario cualitativo y semicuantitativo de entradas, procesos, salidas e impactos desde la extracción de insumos hasta el cierre de ciclo en Colombia, cruzado con estándares <strong>GRI 301 a 306</strong>.
    </p>
  </div>

  <!-- Scope & System Boundary Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-blue-50 text-[#003876] flex items-center justify-center font-black text-lg shrink-0 font-brand">
        175g
      </div>
      <div>
        <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
          Unidad Funcional (UF)
        </span>
        <h3 class="text-base font-bold text-slate-900">
          Entregar, proteger y fusionar 175 g de mezcla láctea
        </h3>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">
          Vaso de base láctea (~150 g de yogurt o kumis) + sobrecopa transparente de cereales/toppings (~25 g de aliados como Jet, Chocoramo o Zucaritas) garantizando inocuidad en cadena de frío.
        </p>
      </div>
    </div>

    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-emerald-50 text-[#2B8A1E] flex items-center justify-center font-black text-lg shrink-0 font-brand">
        C2C
      </div>
      <div>
        <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
          Límites del Sistema
        </span>
        <h3 class="text-base font-bold text-slate-900">
          De la Cuna a la Tumba con Cierre Circular ("Cradle-to-Cradle")
        </h3>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">
          Abarca las 6 fases: extracción agropecuaria, logística de frío, producción en planta Sopó, red nacional de distribución, consumo en loncheras y valorización posconsumo (PRAE y pupitres).
        </p>
      </div>
    </div>
  </div>

  <!-- Stepper Track for 6 Phases -->
  <div class="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xs">
    <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
      <span class="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
        <Clock class="w-4 h-4 text-slate-400" />
        Línea de Tiempo del Ciclo de Vida (6 Fases Oficiales)
      </span>
      <span class="text-xs font-bold text-[#003876]">
        Fase seleccionada: {activePhase.shortTitle}
      </span>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
      {#each LCA_PHASES as phase}
        {@const IconComponent = getPhaseIcon(phase.id)}
        {@const isSelected = activePhaseId === phase.id}
        <button
          onclick={() => activePhaseId = phase.id}
          class={`p-3 rounded-2xl text-left transition-all border cursor-pointer focus:outline-none relative ${
            isSelected
              ? 'bg-blue-50 border-[#003876] shadow-xs'
              : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
          }`}
        >
          {#if phase.isHotspot}
            <span class="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-rose-500 border-2 border-white" title="Punto Crítico (Hotspot)"></span>
          {/if}
          <div class="flex items-center justify-between mb-1.5">
            <span
              class={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center font-mono-numbers ${
                isSelected ? 'bg-[#003876] text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              {phase.id}
            </span>
            <span class={isSelected ? 'text-[#003876]' : 'text-slate-400'}>
              <IconComponent class="w-4 h-4" />
            </span>
          </div>
          <h4 class={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-[#003876]' : 'text-slate-800'}`}>
            {phase.shortTitle}
          </h4>
          <span class="text-[10px] text-slate-500 line-clamp-1 block mt-0.5">
            {phase.isHotspot ? '🔥 Punto Crítico' : 'Flujo Estándar'}
          </span>
        </button>
      {/each}
    </div>
  </div>

  <!-- Deep Dive Detail Card for Selected Phase -->
  <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
    <!-- Phase Header & AI Query -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
      <div>
        <div class="flex items-center gap-2 flex-wrap mb-1">
          <span class="text-xs font-black uppercase text-[#2B8A1E] tracking-wider font-brand">
            Fase 0{activePhase.id} de 06
          </span>
          {#if activePhase.isHotspot}
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
              Hotspot Ambiental Prioritario
            </span>
          {/if}
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-brand">
          {activePhase.name}
        </h3>
        <p class="text-xs text-slate-500 font-medium mt-0.5">
          Alcance operativo: {activePhase.durationOrScope}
        </p>
      </div>

      <button
        onclick={() => onAskAi(`Analiza detalladamente las entradas, procesos, salidas y puntos críticos de la ${activePhase.name} del Bon Yurt Alpina frente a los indicadores GRI.`)}
        class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#003876] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors cursor-pointer self-start sm:self-auto shadow-2xs"
      >
        <Sparkles class="w-3.5 h-3.5 text-blue-600" />
        <span>Consultar Fase a la IA</span>
      </button>
    </div>

    <!-- Hotspot & GRI Indicators Bar -->
    <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
      <div class="flex items-center gap-2">
        <span class="font-bold text-slate-700">Estándares GRI cubiertos:</span>
        <div class="flex flex-wrap gap-1.5">
          {#each activePhase.griIndicators as gri}
            <span class="px-2 py-0.5 rounded-md bg-white border border-slate-300 font-mono-numbers font-semibold text-slate-800 text-[11px]">
              {gri}
            </span>
          {/each}
        </div>
      </div>
      {#if activePhase.isHotspot && activePhase.hotspotReason}
        <span class="text-rose-700 font-semibold text-xs flex items-center gap-1">
          <AlertCircle class="w-3.5 h-3.5 shrink-0" />
          <span>{activePhase.hotspotReason}</span>
        </span>
      {/if}
    </div>

    <!-- 4 Pillars: Actores, Procesos, Entradas, Salidas -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <!-- 1. Actores (Quién) -->
      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <div class="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
          <Users class="w-4 h-4 text-blue-600" />
          <span>Actores (¿Quién?)</span>
        </div>
        <ul class="space-y-2 text-xs text-slate-700">
          {#each activePhase.actors as actor}
            <li class="flex items-start gap-2 leading-relaxed">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
              <span>{actor}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- 2. Procesos (Qué se hace) -->
      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <div class="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
          <Settings class="w-4 h-4 text-emerald-600" />
          <span>Procesos (¿Qué se hace?)</span>
        </div>
        <ul class="space-y-2 text-xs text-slate-700">
          {#each activePhase.processes as proc}
            <li class="flex items-start gap-2 leading-relaxed">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
              <span>{proc}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- 3. Entradas (Materiales, Agua, Energía) -->
      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <div class="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
          <Package class="w-4 h-4 text-indigo-600" />
          <span>Entradas (Insumos)</span>
        </div>
        <div class="space-y-2 text-xs text-slate-700">
          <div>
            <span class="font-bold text-slate-900 block text-[11px]">Materiales:</span>
            <ul class="mt-1 space-y-1">
              {#each activePhase.inputs.material as mat}
                <li class="flex items-start gap-1.5 text-slate-600">
                  <span>•</span>
                  <span>{mat}</span>
                </li>
              {/each}
            </ul>
          </div>
          <div class="pt-1.5 border-t border-slate-200">
            <span class="font-bold text-slate-900 text-[11px] flex items-center gap-1">
              <Droplet class="w-3 h-3 text-cyan-600" /> Agua:
            </span>
            <p class="text-slate-600 mt-0.5">{activePhase.inputs.water}</p>
          </div>
          <div class="pt-1.5 border-t border-slate-200">
            <span class="font-bold text-slate-900 text-[11px] flex items-center gap-1">
              <Zap class="w-3 h-3 text-amber-500" /> Energía / Luz:
            </span>
            <p class="text-slate-600 mt-0.5">{activePhase.inputs.energy}</p>
          </div>
        </div>
      </div>

      <!-- 4. Salidas (Producto, Residuos, Emisiones, Subproductos) -->
      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <div class="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
          <Wind class="w-4 h-4 text-rose-500" />
          <span>Salidas e Impactos</span>
        </div>
        <div class="space-y-2 text-xs text-slate-700">
          <div>
            <span class="font-bold text-emerald-800 block text-[11px]">Producto generado:</span>
            <p class="text-slate-600">{activePhase.outputs.products.join(', ')}</p>
          </div>
          <div class="pt-1.5 border-t border-slate-200">
            <span class="font-bold text-slate-900 text-[11px]">Residuos sólidos:</span>
            <p class="text-slate-600">{activePhase.outputs.waste.join(', ')}</p>
          </div>
          <div class="pt-1.5 border-t border-slate-200">
            <span class="font-bold text-slate-900 text-[11px]">Emisiones directas:</span>
            <p class="text-slate-600">{activePhase.outputs.emissions}</p>
          </div>
          {#if activePhase.outputs.byproducts.length > 0}
            <div class="pt-1.5 border-t border-slate-200">
              <span class="font-bold text-emerald-700 text-[11px]">Subproductos en cascada:</span>
              <p class="text-slate-600">{activePhase.outputs.byproducts.join(', ')}</p>
            </div>
          {/if}
        </div>
      </div>
    </div>

    <!-- Circular Opportunity Callout -->
    <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-300 flex items-start gap-3.5">
      <div class="w-9 h-9 rounded-xl bg-[#2B8A1E] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
        <Sparkles class="w-5 h-5" />
      </div>
      <div>
        <h4 class="text-xs uppercase font-black text-[#1B5E20] tracking-wider font-brand">
          Oportunidad de Economía Circular en esta Fase
        </h4>
        <p class="text-xs sm:text-sm text-slate-800 mt-1 leading-relaxed font-medium">
          {activePhase.circularOpportunity}
        </p>
      </div>
    </div>
  </div>
</section>
