<script lang="ts">
  import {
    Flame,
    Truck,
    Building,
    Store,
    Home,
    Recycle,
    Layers,
    Sparkles,
    Users,
    Settings,
    Package,
    Droplet,
    Zap,
    AlertCircle,
    FileSpreadsheet,
    Image as ImageIcon,
    ChevronDown,
    ChevronUp
  } from 'lucide-svelte';
  import { LCA_PHASES, LCA_HOTSPOTS_AND_GAPS, PROJECT_IDENTITY } from '../data/circularData';

  interface Props {
    onAskAi: (prompt: string) => void;
  }

  let { onAskAi }: Props = $props();

  let activePhaseId = $state(1);
  let showSlideVisual = $state(false);

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
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003876] text-xs font-bold mb-2">
        <FileSpreadsheet class="w-3.5 h-3.5" />
        <span>Componente 1 · Diagnóstico ACV (Estándares GRI 301, 302, 303, 305, 306)</span>
      </div>
      <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-brand">
        Análisis de Ciclo de Vida (ACV · 6 Fases)
      </h2>
      <p class="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
        Mapeo completo de la cuna a la tumba para <strong>{PROJECT_IDENTITY.product}</strong> bajo <strong>{PROJECT_IDENTITY.route}</strong>.
      </p>
    </div>

    <button
      onclick={() => (showSlideVisual = !showSlideVisual)}
      class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer self-start md:self-auto"
    >
      <ImageIcon class="w-4 h-4 text-[#003876]" />
      <span>{showSlideVisual ? 'Ocultar Lámina Oficial' : 'Ver Lámina Oficial (Diapositiva 3)'}</span>
      {#if showSlideVisual}<ChevronUp class="w-3.5 h-3.5" />{:else}<ChevronDown class="w-3.5 h-3.5" />{/if}
    </button>
  </div>

  {#if showSlideVisual}
    <div class="rounded-3xl overflow-hidden border-2 border-blue-200 bg-white shadow-lg p-3 space-y-2">
      <img
        src="/images/slides/slide_visual_1.png"
        alt="Infografía oficial Componente 1: Ciclo de vida del producto Bonyurt"
        class="w-full h-auto rounded-2xl object-contain max-h-[540px] mx-auto bg-slate-50"
      />
      <p class="text-[11px] text-center text-slate-500 font-medium">
        Lámina oficial de la presentación ejecutiva (Diapositiva 3): 6 fases del ciclo de vida, ideas de reutilización y soluciones de vencidos.
      </p>
    </div>
  {/if}

  <!-- Scope & System Boundary Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-blue-50 text-[#003876] flex items-center justify-center font-black text-base shrink-0 font-brand">
        175 g
      </div>
      <div>
        <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Unidad Funcional</span>
        <h3 class="text-base font-bold text-slate-900">175 g de mezcla láctea (yogurt y cereales)</h3>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">{PROJECT_IDENTITY.functionalUnit}</p>
      </div>
    </div>

    <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-emerald-50 text-[#2B8A1E] flex items-center justify-center font-black text-sm shrink-0 font-brand">
        C2C
      </div>
      <div>
        <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Límites del Sistema</span>
        <h3 class="text-base font-bold text-slate-900">De la Cuna a la Tumba con Circularidad</h3>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">{PROJECT_IDENTITY.systemBoundaries} ({PROJECT_IDENTITY.presence}).</p>
      </div>
    </div>
  </div>

  <!-- Horizontal Phase Stepper -->
  <div class="bg-slate-50 p-3 sm:p-4 rounded-3xl border border-slate-200">
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
      {#each LCA_PHASES as phase}
        {@const Icon = getPhaseIcon(phase.id)}
        <button
          onclick={() => (activePhaseId = phase.id)}
          class={`relative p-3 rounded-2xl text-left transition-all cursor-pointer border-2 ${
            activePhaseId === phase.id
              ? 'bg-[#003876] text-white border-[#003876] shadow-md'
              : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
          }`}
        >
          {#if phase.isHotspot}
            <span class="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-black bg-amber-400 text-slate-950">
              Hotspot
            </span>
          {/if}
          <Icon class={`w-5 h-5 mb-2 ${activePhaseId === phase.id ? 'text-amber-300' : 'text-[#003876]'}`} />
          <span class="text-[10px] font-mono-numbers opacity-75 block">Fase {phase.id}</span>
          <span class="text-xs font-bold block leading-tight mt-0.5">{phase.shortTitle}</span>
        </button>
      {/each}
    </div>
  </div>

  <!-- Selected Phase Deep Dive -->
  <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-sm space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-1">
          {#each activePhase.griIndicators as gri}
            <span class="text-[10px] font-black px-2 py-0.5 rounded-md bg-blue-50 text-[#003876] border border-blue-200">
              {gri}
            </span>
          {/each}
          <span class="text-xs text-slate-400 font-medium">{activePhase.durationOrScope}</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 font-brand">{activePhase.name}</h3>
      </div>

      <button
        onclick={() => onAskAi(`Detalla las entradas, salidas GRI y oportunidades circulares de la fase ACV "${activePhase.name}" en Bon Yurt Alpina.`)}
        class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#003876] text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto"
      >
        <Sparkles class="w-3.5 h-3.5 text-blue-600" />
        <span>Consultar Fase con IA</span>
      </button>
    </div>

    {#if activePhase.isHotspot && activePhase.hotspotReason}
      <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-950">
        <AlertCircle class="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong class="block font-black uppercase text-[10px] tracking-wider text-amber-800">Punto Crítico (Hotspot) Detectado</strong>
          <p class="mt-0.5 leading-relaxed">{activePhase.hotspotReason}</p>
        </div>
      </div>
    {/if}

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
        <div class="flex items-center gap-1.5 font-black text-slate-800 uppercase text-[11px]">
          <Users class="w-4 h-4 text-[#003876]" />
          <span>Actores y Procesos</span>
        </div>
        <ul class="space-y-1.5 text-slate-700 list-disc pl-4">
          {#each activePhase.actors as actor}<li>{actor}</li>{/each}
        </ul>
        <div class="pt-2 border-t border-slate-200">
          <span class="font-bold text-slate-900 block mb-1">Procesos:</span>
          {#each activePhase.processes as proc}
            <p class="text-slate-600 leading-relaxed mb-1">• {proc}</p>
          {/each}
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2">
        <div class="flex items-center gap-1.5 font-black text-[#003876] uppercase text-[11px]">
          <Package class="w-4 h-4" />
          <span>Entradas (GRI 301–303)</span>
        </div>
        <div class="space-y-2 text-slate-700">
          <div>
            <strong>Materiales:</strong>
            {#each activePhase.inputs.material as m}<p>• {m}</p>{/each}
          </div>
          <p class="flex items-start gap-1.5"><Droplet class="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" /><span><strong>Agua:</strong> {activePhase.inputs.water}</span></p>
          <p class="flex items-start gap-1.5"><Zap class="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" /><span><strong>Energía:</strong> {activePhase.inputs.energy}</span></p>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
        <div class="flex items-center gap-1.5 font-black text-slate-800 uppercase text-[11px]">
          <Settings class="w-4 h-4 text-slate-600" />
          <span>Salidas (GRI 305–306)</span>
        </div>
        <div class="space-y-1.5 text-slate-700">
          {#each activePhase.outputs.products as pr}<p><strong>Producto:</strong> {pr}</p>{/each}
          {#each activePhase.outputs.waste as w}<p class="text-rose-700"><strong>Residuos:</strong> {w}</p>{/each}
          <p><strong>Emisiones/Aguas:</strong> {activePhase.outputs.emissions}</p>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-[#E8F5E9] border border-[#81C784] space-y-2">
        <div class="flex items-center gap-1.5 font-black text-[#1B5E20] uppercase text-[11px]">
          <Recycle class="w-4 h-4" />
          <span>Oportunidad Circular</span>
        </div>
        <p class="text-slate-800 font-medium leading-relaxed">{activePhase.circularOpportunity}</p>
      </div>
    </div>
  </div>

  <!-- 1.2 Puntos Críticos (Hotspots) y Brechas de Reporte Ruta A -->
  <div class="space-y-4">
    <h3 class="text-lg sm:text-xl font-black text-slate-900 font-brand">
      1.2. Puntos Críticos (Hotspots) y Brechas de Reporte (Ruta A)
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each LCA_HOTSPOTS_AND_GAPS as item}
        <div class={`p-5 rounded-2xl border space-y-1.5 ${
          item.type === 'Hotspot'
            ? 'bg-white border-amber-200'
            : 'bg-blue-50/60 border-blue-200'
        }`}>
          <div class="flex items-center justify-between gap-2">
            <span class={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
              item.type === 'Hotspot'
                ? 'bg-amber-100 text-amber-900'
                : 'bg-[#003876] text-white'
            }`}>
              {item.id}. {item.type}
            </span>
            <span class="text-[11px] font-bold text-slate-500">{item.phaseRef}</span>
          </div>
          <h4 class="text-sm font-black text-slate-900">{item.title}</h4>
          <p class="text-xs text-slate-700 leading-relaxed">{item.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
