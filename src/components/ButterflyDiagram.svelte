<script lang="ts">
  import {
    Sprout,
    Workflow,
    Utensils,
    RefreshCw,
    GraduationCap,
    Factory,
    Leaf,
    Cpu,
    Sparkles,
    ArrowRight,
    TrendingUp,
    Users,
    Lightbulb,
    Globe,
    Info,
    ExternalLink,
    CheckCircle2
  } from 'lucide-svelte';
  import { BUTTERFLY_LOOPS, KEY_RESULTS_INFOGRAPHIC } from '../data/circularData';
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

  function renderResultIcon(iconName: string) {
    switch (iconName) {
      case 'Leaf': return Leaf;
      case 'TrendingUp': return TrendingUp;
      case 'Users': return Users;
      case 'Sparkles': return Lightbulb;
      case 'Globe': return Globe;
      default: return Leaf;
    }
  }

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
      case 'tec-cascada':
        return '/images/alpina_plant.jpg';
      default:
        return '/images/bonyurt_hero.jpg';
    }
  }
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
  <!-- Top Banner Exact to Official Infographic -->
  <div class="text-center relative">
    <!-- Curved dark blue top pill -->
    <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#003876] text-white shadow-md border-2 border-white mb-2">
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      <span class="text-xs sm:text-sm font-extrabold tracking-wide uppercase font-brand">
        Diagrama de Mariposa – Economía Circular
      </span>
      <span class="text-emerald-300 font-bold">🌱</span>
    </div>

    <!-- Title and Subtitle -->
    <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-[#003876] font-brand tracking-tight">
      Bon Yurt de Alpina
    </h1>
    <p class="text-base sm:text-xl font-bold italic text-blue-900 mt-1">
      "Cerrar el ciclo, es nutrir el futuro"
    </p>

    <!-- Quick action to compare with official image -->
    <div class="mt-2 flex items-center justify-center gap-3">
      <button
        onclick={onOpenInfographic}
        class="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200 border border-emerald-300 px-3 py-1 rounded-full font-bold transition-colors cursor-pointer"
      >
        <ExternalLink class="w-3.5 h-3.5" />
        <span>Abrir Infografía Oficial (REFERENCIA OFICIAL)</span>
      </button>
      <span class="text-xs text-slate-400">· Ruta A: Alpina S.A.S. BIC</span>
    </div>
  </div>

  <!-- Main Butterfly Canvas Container with Milk Splash and Sky Background -->
  <div class="relative bg-gradient-to-b from-[#EBF5FB] via-white to-[#F0F9ED] rounded-3xl p-4 sm:p-8 border-2 border-blue-200 shadow-xl overflow-hidden">
    <!-- SVG Milk Splash Backdrops -->
    <div class="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
      <svg viewBox="0 0 1000 600" class="w-full h-full text-blue-100 fill-current">
        <path d="M 500,200 C 420,150 350,180 320,240 C 290,300 330,380 400,420 C 470,460 530,460 600,420 C 670,380 710,300 680,240 C 650,180 580,150 500,200 Z" opacity="0.6" />
        <path d="M 500,250 C 460,180 380,210 370,280 C 360,350 420,400 500,410 C 580,400 640,350 630,280 C 620,210 540,180 500,250 Z" opacity="0.4" />
      </svg>
    </div>

    <!-- Cycle Headers (Biological on Left, Technical on Right) -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-slate-200">
      <!-- Left Header: Ciclo Biológico -->
      <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#E8F5E9] border-2 border-[#81C784] shadow-xs">
        <div class="w-10 h-10 rounded-xl bg-[#2B8A1E] text-white flex items-center justify-center font-bold shadow-xs">
          <Leaf class="w-6 h-6" />
        </div>
        <div>
          <h2 class="text-base sm:text-lg font-black text-[#1B5E20] font-brand leading-tight">
            Ciclo Biológico
          </h2>
          <p class="text-xs text-[#2E7D32] font-semibold">
            Regeneración de recursos naturales y nutrientes para el suelo
          </p>
        </div>
      </div>

      <!-- Right Header: Ciclo Técnico -->
      <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#E3F2FD] border-2 border-[#64B5F6] shadow-xs">
        <div class="w-10 h-10 rounded-xl bg-[#003876] text-white flex items-center justify-center font-bold shadow-xs">
          <RefreshCw class="w-6 h-6" />
        </div>
        <div>
          <h2 class="text-base sm:text-lg font-black text-[#0D47A1] font-brand leading-tight">
            Ciclo Técnico
          </h2>
          <p class="text-xs text-[#1565C0] font-semibold">
            Conservación del valor de los materiales, upcycling y madera plástica
          </p>
        </div>
      </div>
    </div>

    <!-- 3-Column Interactive Butterfly: Left Wing (Bio) | Center (Bon Yurt) | Right Wing (Technical) -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-6">
      <!-- ================= LEFT WING: CICLO BIOLÓGICO (4 cols) ================= -->
      <div class="lg:col-span-4 space-y-4">
        {#each bioLoops as loop}
          <button
            type="button"
            onclick={() => onSelectLoop(loop)}
            class="w-full text-left relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border-2 border-[#81C784] hover:border-[#2B8A1E] hover:shadow-lg transition-all cursor-pointer group"
          >
            <!-- Content on left -->
            <div class="flex-1 pr-3">
              <div class="flex items-center gap-1.5 mb-1">
                <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] border border-[#A5D6A7]">
                  {loop.title}
                </span>
                <span class="text-[10px] text-slate-400 font-medium">({loop.shortSubtitle})</span>
              </div>
              <ul class="text-xs text-slate-700 font-medium space-y-1">
                {#if loop.id === 'bio-regenerativo'}
                  <li class="flex items-start gap-1.5">
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#2B8A1E] shrink-0 mt-0.5" />
                    <span>Envases de la línea Bio biodegradables</span>
                  </li>
                  <li class="flex items-start gap-1.5">
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#2B8A1E] shrink-0 mt-0.5" />
                    <span>Etiquetas compostables con semillas</span>
                  </li>
                {:else if loop.id === 'bio-cascada'}
                  <li class="flex items-start gap-1.5">
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#2B8A1E] shrink-0 mt-0.5" />
                    <span>Kumis → Quesos</span>
                  </li>
                  <li class="flex items-start gap-1.5">
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#2B8A1E] shrink-0 mt-0.5" />
                    <span>Mermas de cereales (Ramo, Jet, Nutresa)</span>
                  </li>
                {:else}
                  <li class="flex items-start gap-1.5">
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#2B8A1E] shrink-0 mt-0.5" />
                    <span>Cucharas de galleta</span>
                  </li>
                  <li class="flex items-start gap-1.5">
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#2B8A1E] shrink-0 mt-0.5" />
                    <span>Aprovechamiento de material orgánico</span>
                  </li>
                {/if}
              </ul>
              <div class="mt-2 text-[10px] text-[#2B8A1E] font-bold underline flex items-center gap-1">
                <span>Inspeccionar protocolo sanitario</span>
                <ArrowRight class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <!-- Round Medallion on Right Edge facing the center cup -->
            <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 border-[#2B8A1E] overflow-hidden shadow-md shrink-0 bg-emerald-50">
              <img
                src={getMedallionImage(loop.id)}
                alt={loop.title}
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </button>
        {/each}
      </div>

      <!-- ================= CENTER: BON YURT ALPINA (4 cols) ================= -->
      <div class="lg:col-span-4 flex flex-col items-center text-center px-2 py-4">
        <div class="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-white to-[#E3F2FD] p-5 border-2 border-blue-300 shadow-xl">
          <!-- Curving Milk Waves -->
          <div class="relative mx-auto aspect-square max-w-[220px] rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-inner group">
            <img
              src="/images/bonyurt_hero.jpg"
              alt="Bon Yurt de Alpina"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#003876]/70 via-transparent to-transparent flex items-end justify-center p-3">
              <span class="text-white text-xs font-black tracking-wider uppercase font-brand drop-shadow-md">
                175 g Mezcla Láctea + Toppings
              </span>
            </div>
          </div>

          <!-- Central Brand Pill exact to Infographic -->
          <div class="mt-4 inline-block px-5 py-2.5 rounded-full bg-[#003876] text-white shadow-lg border-2 border-white">
            <h3 class="text-base sm:text-lg font-black font-brand leading-none">
              Bon Yurt
            </h3>
            <span class="text-xs font-semibold text-emerald-300 block mt-0.5">
              Nutrición que conecta con el planeta
            </span>
          </div>

          <!-- Unit and Scope Specs -->
          <div class="mt-4 p-3 rounded-xl bg-white/90 border border-blue-100 text-left text-xs space-y-1 font-medium">
            <div class="flex justify-between text-slate-500">
              <span>Unidad Funcional:</span>
              <span class="font-bold text-slate-800">175 g (Vaso + Sobrecopa)</span>
            </div>
            <div class="flex justify-between text-slate-500">
              <span>Enfoque de Ciclo:</span>
              <span class="font-bold text-[#2B8A1E]">Cradle-to-Cradle</span>
            </div>
            <div class="flex justify-between text-slate-500">
              <span>Planta Núcleo:</span>
              <span class="font-bold text-[#003876]">Sopó, Cundinamarca</span>
            </div>
          </div>

          <button
            onclick={onExploreAcv}
            class="mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#003876] hover:bg-blue-800 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Ver Diagnóstico ACV (6 Fases)</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <!-- ================= RIGHT WING: CICLO TÉCNICO (4 cols) ================= -->
      <div class="lg:col-span-4 space-y-4">
        {#each tecLoops as loop}
          <button
            type="button"
            onclick={() => onSelectLoop(loop)}
            class="w-full text-left relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border-2 border-[#64B5F6] hover:border-[#003876] hover:shadow-lg transition-all cursor-pointer group"
          >
            <!-- Round Medallion on Left Edge facing the center cup -->
            <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 border-[#003876] overflow-hidden shadow-md shrink-0 bg-blue-50">
              <img
                src={getMedallionImage(loop.id)}
                alt={loop.title}
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <!-- Content on right -->
            <div class="flex-1 pl-3 text-right">
              <div class="flex items-center justify-end gap-1.5 mb-1">
                <span class="text-[10px] text-slate-400 font-medium">({loop.shortSubtitle})</span>
                <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E3F2FD] text-[#0D47A1] border border-[#90CAF9]">
                  {loop.title}
                </span>
              </div>
              <ul class="text-xs text-slate-700 font-medium space-y-1">
                {#if loop.id === 'tec-corto'}
                  <li class="flex items-start justify-end gap-1.5">
                    <span>Reutilización de vasos, tapas y empaques</span>
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#003876] shrink-0 mt-0.5" />
                  </li>
                  <li class="flex items-start justify-end gap-1.5">
                    <span>Manualidades y nuevos usos</span>
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#003876] shrink-0 mt-0.5" />
                  </li>
                {:else if loop.id === 'tec-local'}
                  <li class="flex items-start justify-end gap-1.5">
                    <span>PRAE y concursos escolares</span>
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#003876] shrink-0 mt-0.5" />
                  </li>
                  <li class="flex items-start justify-end gap-1.5">
                    <span>Canje de envases por premios</span>
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#003876] shrink-0 mt-0.5" />
                  </li>
                {:else}
                  <li class="flex items-start justify-end gap-1.5">
                    <span>Aprovechamiento empaques (cartón)</span>
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#003876] shrink-0 mt-0.5" />
                  </li>
                  <li class="flex items-start justify-end gap-1.5">
                    <span>Reciclaje de plásticos a pupitres</span>
                    <CheckCircle2 class="w-3.5 h-3.5 text-[#003876] shrink-0 mt-0.5" />
                  </li>
                {/if}
              </ul>
              <div class="mt-2 text-[10px] text-[#003876] font-bold underline flex items-center justify-end gap-1">
                <ArrowRight class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                <span>Ver alianza y trazabilidad</span>
              </div>
            </div>
          </button>
        {/each}
      </div>
    </div>

    <!-- Bottom Scenic Illustration: Hatos Lecheros (Left) + Planta Alpina / Reciclaje / Camión (Right) -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 p-4 rounded-2xl bg-white/80 border border-slate-200">
      <!-- Left: Ganadería Sostenible -->
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl shrink-0">
          🐄
        </div>
        <div>
          <span class="text-xs font-black text-[#1B5E20] uppercase font-brand block">
            Retorno Biológico: Silvopastoreo & Suelo
          </span>
          <p class="text-[11px] text-slate-600 leading-tight">
            Más de 250 hatos aliados en Cundinamarca y Boyacá capturando carbono y cerrando el ciclo de nutrientes orgánicos.
          </p>
        </div>
      </div>

      <!-- Right: Planta Sopó, Contenedor y Camión -->
      <div class="flex items-center gap-3 justify-end text-right">
        <div>
          <span class="text-xs font-black text-[#0D47A1] uppercase font-brand block">
            Cierre Técnico: Planta Sopó & Rutas REP
          </span>
          <p class="text-[11px] text-slate-600 leading-tight">
            Contenedores "Come-Vasos", reciclaje mecánico a pupitres escolares y flota con telemetría de frío.
          </p>
        </div>
        <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl shrink-0">
          🏭
        </div>
      </div>
    </div>

    <!-- Bottom Section: The 5 Key Results Exact to Infographic -->
    <div class="relative z-10 mt-8 pt-6 border-t-2 border-slate-200">
      <div class="text-center mb-5">
        <div class="inline-block px-5 py-1.5 rounded-full bg-[#003876] text-white shadow-xs font-brand text-xs sm:text-sm font-extrabold uppercase">
          Resultados clave
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {#each KEY_RESULTS_INFOGRAPHIC as item}
          {@const IconComponent = renderResultIcon(item.icon)}
          <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between text-center space-y-2">
            <div class="mx-auto w-10 h-10 rounded-full bg-emerald-50 text-[#2B8A1E] flex items-center justify-center border border-emerald-200">
              <IconComponent class="w-5 h-5" />
            </div>
            <div>
              <h4 class="text-xs font-bold text-slate-900 leading-tight">
                {item.title}
              </h4>
              <p class="text-[11px] text-slate-500 mt-1 leading-snug">
                {item.desc}
              </p>
            </div>
            <div class="pt-2 border-t border-slate-100 text-xs font-black text-[#003876] font-mono-numbers">
              {item.metric}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
