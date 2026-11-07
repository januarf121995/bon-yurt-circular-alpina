<script lang="ts">
  import { X, ZoomIn, Download, ExternalLink, ShieldAlert } from 'lucide-svelte';

  interface Props {
    isOpen: boolean;
    onClose: () => void;
  }

  let { isOpen, onClose }: Props = $props();
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fade-in">
    <div class="relative bg-white rounded-3xl max-w-5xl w-full shadow-2xl border-2 border-blue-400 overflow-hidden flex flex-col max-h-[95vh]">
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 border-b border-slate-200 bg-[#003876] text-white flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
            <ZoomIn class="w-5 h-5" />
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-black text-base sm:text-lg font-brand text-white">
                Infografía Oficial de Referencia (REFERENCIA OFICIAL)
              </h3>
              <span class="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full">
                Fuente Oficial
              </span>
            </div>
            <p class="text-xs text-blue-100/90">
              Diagrama de Mariposa del Bon Yurt de Alpina · "Cerrar el ciclo, es nutrir el futuro"
            </p>
          </div>
        </div>

        <button
          onclick={onClose}
          class="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Notice: Read-only reference -->
      <div class="px-4 py-2 bg-blue-50 border-b border-blue-200 text-xs text-blue-900 flex items-center gap-2">
        <ShieldAlert class="w-4 h-4 text-[#003876] shrink-0" />
        <span>
          <strong>Referencia Intacta:</strong> Visualizador de alta resolución correspondiente al archivo original en la carpeta <code>REFERENCIA OFICIAL</code>.
        </span>
      </div>

      <!-- Image Canvas Container -->
      <div class="flex-1 overflow-auto p-2 sm:p-4 bg-slate-900/90 flex items-center justify-center">
        <img
          src="/images/infografia_oficial.jpg"
          alt="Diagrama de Mariposa Oficial Bon Yurt Alpina"
          class="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
        />
      </div>

      <!-- Modal Footer -->
      <div class="p-3 sm:p-4 border-t border-slate-200 bg-white flex items-center justify-between text-xs">
        <span class="text-slate-500 hidden sm:inline">
          Alpina S.A.S. BIC · Plan de Implementación de Economía Circular
        </span>
        <button
          onclick={onClose}
          class="px-5 py-2 rounded-xl bg-[#003876] text-white font-bold hover:bg-blue-800 transition-colors cursor-pointer ml-auto"
        >
          Cerrar Visor
        </button>
      </div>
    </div>
  </div>
{/if}
