<script lang="ts">
  import {
    X,
    AlertTriangle,
    Users,
    ShieldCheck,
    CheckCircle2,
    Sparkles,
    Sprout,
    Workflow,
    Utensils,
    RefreshCw,
    GraduationCap,
    Factory
  } from 'lucide-svelte';
  import type { LoopItem } from '../types/circular';

  interface Props {
    loop: LoopItem | null;
    onClose: () => void;
    onAskAi: (prompt: string) => void;
  }

  let { loop, onClose, onAskAi }: Props = $props();

  let activeSubTab = $state<'justification' | 'actors' | 'strategy' | 'sanitary'>('justification');

  function renderIcon(name: string) {
    switch (name) {
      case 'Sprout': return Sprout;
      case 'Workflow': return Workflow;
      case 'Utensils': return Utensils;
      case 'RefreshCw': return RefreshCw;
      case 'GraduationCap': return GraduationCap;
      case 'Factory': return Factory;
      default: return RefreshCw;
    }
  }
</script>

{#if loop}
  {@const isBio = loop.cycle === 'biological'}
  {@const IconComponent = renderIcon(loop.iconName)}
  <div class="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
    <div class="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
      <!-- Modal Header -->
      <div class={`p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between gap-4 ${
        isBio ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-white' : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-white'
      }`}>
        <div class="flex items-start gap-3.5">
          <div class={`p-3 rounded-2xl shadow-sm text-white ${isBio ? 'bg-[#2B8A1E]' : 'bg-[#003876]'}`}>
            <IconComponent class="w-6 h-6" />
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full text-white ${
                isBio ? 'bg-[#2B8A1E]' : 'bg-[#003876]'
              }`}>
                {isBio ? 'Ciclo Biológico' : 'Ciclo Técnico'}
              </span>
              <span class="text-xs font-bold text-slate-500">
                {loop.shortSubtitle}
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-brand">
              {loop.title}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
              {loop.tagline}
            </p>
          </div>
        </div>

        <button
          onclick={onClose}
          class="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Sub-tab navigation -->
      <div class="flex border-b border-slate-200 px-5 sm:px-6 bg-slate-50/60 overflow-x-auto gap-2">
        <button
          onclick={() => activeSubTab = 'justification'}
          class={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'justification'
              ? isBio
                ? 'border-[#2B8A1E] text-[#1B5E20]'
                : 'border-[#003876] text-[#003876]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Justificación Técnica
        </button>
        <button
          onclick={() => activeSubTab = 'actors'}
          class={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'actors'
              ? isBio
                ? 'border-[#2B8A1E] text-[#1B5E20]'
                : 'border-[#003876] text-[#003876]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Actores ({loop.actors.length})
        </button>
        <button
          onclick={() => activeSubTab = 'strategy'}
          class={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'strategy'
              ? isBio
                ? 'border-[#2B8A1E] text-[#1B5E20]'
                : 'border-[#003876] text-[#003876]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Estrategia Paso a Paso
        </button>
        <button
          onclick={() => activeSubTab = 'sanitary'}
          class={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === 'sanitary'
              ? isBio
                ? 'border-[#2B8A1E] text-[#1B5E20]'
                : 'border-[#003876] text-[#003876]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShieldCheck class="w-4 h-4 text-amber-500" />
          <span>Precauciones Sanitarias</span>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed flex-1">
        {#if activeSubTab === 'justification'}
          <div class="space-y-4">
            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 class="text-xs uppercase font-black text-slate-400 tracking-wider mb-2 font-brand">
                Fundamentación Ambiental y de Circularidad
              </h4>
              <p class="text-slate-800 leading-relaxed font-normal text-sm sm:text-base">
                {loop.justification}
              </p>
            </div>

            <div class="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <h4 class="text-xs uppercase font-black text-slate-400 tracking-wider mb-2 font-brand">
                Meta Cuantitativa de Desempeño
              </h4>
              <div class="flex items-center gap-3 text-slate-900 font-bold text-sm sm:text-base">
                <div class={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isBio ? 'bg-emerald-100 text-[#2B8A1E]' : 'bg-blue-100 text-[#003876]'
                }`}>
                  <CheckCircle2 class="w-5 h-5" />
                </div>
                <span>{loop.metricsGoal}</span>
              </div>
            </div>
          </div>
        {:else if activeSubTab === 'actors'}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {#each loop.actors as actor}
              <div class="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-xs transition-all">
                <div class="flex items-center gap-2 mb-1.5">
                  <Users class="w-4 h-4 text-slate-500" />
                  <span class="font-bold text-slate-900 text-xs sm:text-sm">
                    {actor.category}
                  </span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  {actor.description}
                </p>
              </div>
            {/each}
          </div>
        {:else if activeSubTab === 'strategy'}
          <div class="space-y-3">
            {#each loop.implementationStrategy as step}
              <div class="flex items-start gap-3.5 p-3.5 rounded-2xl border border-slate-200 bg-slate-50">
                <div class={`px-2.5 py-1 rounded-xl text-xs font-black text-white shrink-0 font-brand ${
                  isBio ? 'bg-[#2B8A1E]' : 'bg-[#003876]'
                }`}>
                  {step.step}
                </div>
                <div>
                  <h5 class="font-bold text-slate-900 text-sm mb-1">
                    {step.title}
                  </h5>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        {:else if activeSubTab === 'sanitary'}
          <div class="space-y-3">
            <div class="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs flex items-center gap-2.5">
              <AlertTriangle class="w-5 h-5 text-amber-600 shrink-0" />
              <span>
                <strong>Aseguramiento de Calidad:</strong> Parámetros no negociables para garantizar inocuidad alimentaria (INVIMA/FDA) y seguridad estructural.
              </span>
            </div>

            {#each loop.sanitaryNotes as note}
              <div class="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1.5">
                <div class="flex items-center justify-between gap-2">
                  <h5 class="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldCheck class="w-4 h-4 text-[#2B8A1E]" />
                    <span>{note.title}</span>
                  </h5>
                  <span class={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full font-mono-numbers ${
                    note.criticality === 'Alta' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-800'
                  }`}>
                    Criticidad {note.criticality}
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {note.description}
                </p>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Modal Footer -->
      <div class="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
        <button
          onclick={() => {
            onClose();
            onAskAi(`Explícame en detalle cómo se implementa el ${loop.title} (${loop.tagline}) en el proyecto Bon Yurt Alpina y qué requisitos sanitarios son clave.`);
          }}
          class="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-700 bg-white border border-slate-300 hover:border-blue-400 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
        >
          <Sparkles class="w-3.5 h-3.5 text-blue-600" />
          <span>Consultar a la IA sobre este Loop</span>
        </button>

        <button
          onclick={onClose}
          class="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  </div>
{/if}
