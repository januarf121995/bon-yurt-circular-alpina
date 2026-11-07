<script lang="ts">
  import { Printer, ShieldCheck, ExternalLink, Leaf } from 'lucide-svelte';

  interface Props {
    onOpenAi: () => void;
  }

  let { onOpenAi }: Props = $props();

  function handlePrint() {
    window.print();
  }
</script>

<footer class="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 py-10 px-4 sm:px-6 lg:px-8 mt-16 no-print">
  <div class="max-w-7xl mx-auto space-y-6">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
      <!-- Brand & Project -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-[#003876] text-white flex items-center justify-center font-bold text-sm border border-blue-400">
          <svg viewBox="0 0 100 60" class="w-6 h-4 text-white fill-current">
            <path d="M 10 50 L 35 15 L 50 35 L 70 8 L 90 50 Z" />
          </svg>
        </div>
        <div>
          <span class="text-white font-black text-sm block font-brand">
            Plan de Implementación de Economía Circular: Bon Yurt de Alpina S.A.S. BIC
          </span>
          <span class="text-slate-400 text-[11px] italic">
            "Cerrar el ciclo, es nutrir el futuro" · Sopó, Cundinamarca, Colombia
          </span>
        </div>
      </div>

      <!-- Action: Print -->
      <div class="flex items-center gap-2">
        <button
          onclick={handlePrint}
          class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer text-xs font-bold border border-slate-700"
        >
          <Printer class="w-3.5 h-3.5" />
          <span>Imprimir Síntesis de Clase</span>
        </button>
      </div>
    </div>

    <!-- Academic & Legal Framework References -->
    <div class="flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400 pt-2">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-slate-300 font-bold">Marco Técnico:</span>
        <span>Fundación Ellen MacArthur (Circulytics)</span>
        <span>·</span>
        <span>Resolución 1407/2018 MinAmbiente</span>
        <span>·</span>
        <span>Ley 2232 de 2022</span>
        <span>·</span>
        <span>Estándares GRI 301 / 306</span>
        <span>·</span>
        <span>Kirchherr et al. (2017) 9R</span>
      </div>
      <div class="text-slate-400">
        Framework: <strong>Svelte 5 (Cero Desperdicio VDOM)</strong> + <strong>Gemini 2.5 Flash</strong>
      </div>
    </div>
  </div>
</footer>
