<script lang="ts">
  import {
    Sparkles,
    Presentation,
    Clock,
    FileSpreadsheet,
    Menu,
    X,
    Image as ImageIcon,
    GraduationCap,
    Award
  } from 'lucide-svelte';

  interface Props {
    activeTab: string;
    onSelectTab: (tab: string) => void;
    onOpenAiExpert: (prompt?: string, mode?: 'expert' | 'evaluator') => void;
    onOpenInfographic: () => void;
    presentationTimerRunning: boolean;
    presentationTimeLeft: number;
    onTogglePresentationTimer: () => void;
    onResetPresentationTimer: () => void;
  }

  let {
    activeTab,
    onSelectTab,
    onOpenAiExpert,
    onOpenInfographic,
    presentationTimerRunning,
    presentationTimeLeft,
    onTogglePresentationTimer,
    onResetPresentationTimer,
  }: Props = $props();

  let mobileMenuOpen = $state(false);

  const navItems = [
    { id: 'mariposa', label: 'Mariposa Circular', badge: 'Comp. 2' },
    { id: 'acv', label: 'Diagnóstico ACV', badge: 'Comp. 1' },
    { id: 'principios', label: 'Principios & 9R', badge: 'Comp. 3' },
    { id: 'estrategias', label: 'Estrategias & Hoja de Ruta', badge: 'Comp. 4 (25%)' },
    { id: 'simulador', label: 'Simulador & MRV', badge: 'Comp. 5 (20%)' },
    { id: 'presentacion', label: 'Modo Sustentación (30 min)', badge: 'Rúbrica' },
  ];

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
</script>

<header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20 gap-4">
      <!-- Zone 1: Alpina Official Brand Wordmark -->
      <button
        onclick={() => onSelectTab('mariposa')}
        class="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
      >
        <!-- Alpina Mountain Crest Logo Badge -->
        <div class="relative w-12 h-12 rounded-2xl bg-[#003876] flex flex-col items-center justify-center text-white shadow-md border-2 border-white group-hover:scale-105 transition-transform overflow-hidden">
          <!-- Stylized white mountain peak -->
          <svg viewBox="0 0 100 60" class="w-8 h-5 text-white fill-current mt-0.5">
            <path d="M 10 50 L 35 15 L 50 35 L 70 8 L 90 50 Z" />
          </svg>
          <span class="text-[10px] font-bold tracking-wider -mt-1 italic font-brand text-blue-100">Alpina</span>
        </div>

        <div class="flex flex-col">
          <div class="flex items-center gap-2">
            <span class="text-xl sm:text-2xl font-black tracking-tight text-[#003876] font-brand leading-none">
              Bon Yurt
            </span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
              Circular
            </span>
          </div>
          <span class="text-[11px] text-slate-500 font-medium italic mt-0.5">
            "Cerrar el ciclo, es nutrir el futuro" · Sopó
          </span>
        </div>
      </button>

      <!-- Zone 2: Desktop Navigation with Rubric Badges -->
      <nav class="hidden xl:flex items-center gap-1.5">
        {#each navItems as item}
          <button
            onclick={() => onSelectTab(item.id)}
            class={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center ${
              activeTab === item.id
                ? 'bg-blue-50 text-[#003876] shadow-xs border border-blue-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>{item.label}</span>
            <span class={`text-[9px] font-semibold tracking-tight ${activeTab === item.id ? 'text-blue-600' : 'text-slate-400'}`}>
              {item.badge}
            </span>
          </button>
        {/each}
      </nav>

      <!-- Zone 3: Action Buttons & 30-min Timer -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- 30-minute Oral Presentation Timer -->
        <div class="hidden md:flex items-center bg-slate-100 border border-slate-200 rounded-xl px-2.5 py-1 text-xs">
          <button
            onclick={onTogglePresentationTimer}
            class={`p-1 rounded-lg transition-colors cursor-pointer mr-1.5 ${
              presentationTimerRunning ? 'bg-amber-500 text-white' : 'bg-white text-slate-700 shadow-2xs'
            }`}
            title={presentationTimerRunning ? 'Pausar cronómetro' : 'Iniciar cronómetro de clase (30 min)'}
          >
            <Clock class="w-3.5 h-3.5" />
          </button>
          <div class="flex flex-col text-left">
            <span class="text-[9px] font-bold uppercase text-slate-400 leading-none">Sustentación</span>
            <span class={`font-mono-numbers font-black text-xs leading-none mt-0.5 ${presentationTimeLeft < 300 ? 'text-rose-600 animate-pulse' : 'text-slate-800'}`}>
              {formatTime(presentationTimeLeft)}
            </span>
          </div>
          <button
            onclick={onResetPresentationTimer}
            class="text-[10px] text-slate-400 hover:text-slate-700 ml-2 font-medium cursor-pointer"
            title="Reiniciar a 30:00"
          >
            ↺
          </button>
        </div>

        <!-- Official Infographic Quick View Button -->
        <button
          onclick={onOpenInfographic}
          class="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all cursor-pointer shadow-2xs"
          title="Ver infografía oficial de referencia"
        >
          <ImageIcon class="w-3.5 h-3.5 text-emerald-600" />
          <span>Infografía Oficial</span>
        </button>

        <!-- AI Assistant / Jurado Evaluador -->
        <button
          onclick={() => onOpenAiExpert()}
          class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-linear-to-r from-[#003876] via-blue-800 to-[#2B8A1E] rounded-xl hover:opacity-95 shadow-xs transition-all active:scale-95 cursor-pointer border border-white/20"
        >
          <Sparkles class="w-3.5 h-3.5 text-emerald-300 animate-spin-slow" />
          <span class="hidden sm:inline">Experto Circular IA</span>
          <span class="sm:hidden">IA</span>
        </button>

        <!-- Mobile hamburger toggle -->
        <button
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          class="xl:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 cursor-pointer"
          aria-label="Abrir menú"
        >
          {#if mobileMenuOpen}
            <X class="w-5 h-5" />
          {:else}
            <Menu class="w-5 h-5" />
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile dropdown navigation -->
    {#if mobileMenuOpen}
      <div class="xl:hidden py-3 border-t border-slate-100 space-y-1">
        {#each navItems as item}
          <button
            onclick={() => {
              onSelectTab(item.id);
              mobileMenuOpen = false;
            }}
            class={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold rounded-lg text-left ${
              activeTab === item.id ? 'bg-blue-50 text-[#003876]' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>{item.label}</span>
            <span class="text-[10px] text-slate-400 font-normal">{item.badge}</span>
          </button>
        {/each}
        <div class="pt-2 flex items-center justify-between border-t border-slate-100 px-3">
          <button
            onclick={() => {
              onOpenInfographic();
              mobileMenuOpen = false;
            }}
            class="text-xs text-emerald-700 font-bold flex items-center gap-1.5"
          >
            <ImageIcon class="w-3.5 h-3.5" />
            <span>Ver Infografía Oficial</span>
          </button>
          <div class="flex items-center gap-1 text-xs font-mono-numbers">
            <Clock class="w-3.5 h-3.5 text-slate-400" />
            <span class="font-bold">{formatTime(presentationTimeLeft)}</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
</header>
