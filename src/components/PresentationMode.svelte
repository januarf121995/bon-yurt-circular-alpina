<script lang="ts">
  import {
    Presentation,
    Clock,
    ChevronLeft,
    ChevronRight,
    Award,
    CheckCircle2,
    Sparkles,
    Printer,
    HelpCircle,
    BookOpen,
    Target,
    Layers,
    FileSpreadsheet,
    Scale
  } from 'lucide-svelte';
  import { PRESENTATION_SLIDES, RUBRIC_CRITERIA } from '../data/circularData';

  interface Props {
    presentationTimerRunning: boolean;
    presentationTimeLeft: number;
    onTogglePresentationTimer: () => void;
    onResetPresentationTimer: () => void;
    onAskAi: (prompt: string, mode?: 'expert' | 'evaluator') => void;
    onSelectTab: (tab: string) => void;
  }

  let {
    presentationTimerRunning,
    presentationTimeLeft,
    onTogglePresentationTimer,
    onResetPresentationTimer,
    onAskAi,
    onSelectTab,
  }: Props = $props();

  let currentSlideIndex = $state(0);

  const currentSlide = $derived(PRESENTATION_SLIDES[currentSlideIndex]);

  function nextSlide() {
    if (currentSlideIndex < PRESENTATION_SLIDES.length - 1) {
      currentSlideIndex++;
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
    }
  }

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  let activeView = $state<'slides' | 'rubric'>('slides');
</script>

<svelte:window onkeydown={(e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
}} />

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
  <!-- Top Presentation Control Bar -->
  <div class="bg-white rounded-3xl p-5 border-2 border-blue-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 rounded-2xl bg-[#003876] text-white flex items-center justify-center font-bold shadow-md">
        <Presentation class="w-6 h-6" />
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h2 class="text-lg sm:text-xl font-black text-slate-900 font-brand">
            Modo Sustentación Oral (Máximo 30 minutos)
          </h2>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
            9 Diapositivas Oficiales
          </span>
        </div>
        <p class="text-xs text-slate-500">
          Usa las flechas del teclado (← / →) para cambiar de diapositiva o presiona F11 para pantalla completa.
        </p>
      </div>
    </div>

    <!-- Timer & View Selector -->
    <div class="flex items-center gap-3">
      <!-- 30-min timer controller -->
      <div class="flex items-center bg-slate-100 border border-slate-300 rounded-2xl px-3 py-1.5 gap-2">
        <button
          onclick={onTogglePresentationTimer}
          class={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            presentationTimerRunning
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-[#003876] text-white'
          }`}
        >
          {presentationTimerRunning ? 'Pausar' : 'Iniciar 30 min'}
        </button>
        <span class={`font-mono-numbers font-black text-base ${presentationTimeLeft < 300 ? 'text-rose-600 animate-pulse' : 'text-slate-800'}`}>
          {formatTime(presentationTimeLeft)}
        </span>
        <button
          onclick={onResetPresentationTimer}
          class="text-xs text-slate-400 hover:text-slate-700 ml-1 font-bold cursor-pointer"
          title="Reiniciar a 30:00"
        >
          ↺
        </button>
      </div>

      <!-- Toggle between slides and rubric -->
      <div class="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
        <button
          onclick={() => activeView = 'slides'}
          class={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
            activeView === 'slides' ? 'bg-white text-[#003876] shadow-xs' : 'text-slate-600'
          }`}
        >
          Diapositivas ({currentSlideIndex + 1}/9)
        </button>
        <button
          onclick={() => activeView = 'rubric'}
          class={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
            activeView === 'rubric' ? 'bg-white text-[#003876] shadow-xs' : 'text-slate-600'
          }`}
        >
          Rúbrica de Evaluación (100%)
        </button>
      </div>
    </div>
  </div>

  {#if activeView === 'slides'}
    <!-- Slide Card -->
    <div class="bg-gradient-to-br from-white via-blue-50/20 to-emerald-50/20 rounded-3xl p-6 sm:p-10 border-2 border-blue-300 shadow-xl min-h-[460px] flex flex-col justify-between space-y-6">
      <!-- Slide Header -->
      <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div class="flex items-center gap-2">
          <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#003876] text-white font-mono-numbers">
            {currentSlide.sectionCode}
          </span>
          <span class="text-xs font-bold text-slate-400">
            Diapositiva {currentSlide.id} de 9
          </span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 font-mono-numbers">
            <Clock class="w-3.5 h-3.5 text-amber-700" />
            <span>Tiempo sugerido: {currentSlide.timeAllocation}</span>
          </span>
        </div>
      </div>

      <!-- Slide Main Content -->
      <div class="space-y-4 my-auto">
        <div>
          <h3 class="text-2xl sm:text-4xl font-black text-slate-900 font-brand tracking-tight">
            {currentSlide.title}
          </h3>
          <p class="text-sm sm:text-base font-bold text-[#003876] mt-1">
            {currentSlide.subtitle}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-4">
          {#each currentSlide.keyPoints as point, idx}
            <div class="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3">
              <span class="w-6 h-6 rounded-lg bg-emerald-100 text-[#2B8A1E] font-black font-mono-numbers text-xs flex items-center justify-center shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Slide Navigation & AI Practice Simulator -->
      <div class="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- AI Jurado Evaluador Simulator -->
        <button
          onclick={() =>
            onAskAi(
              `Actúa como el docente evaluador de la sustentación oral de 30 minutos. Hazme una pregunta difícil y técnica sobre la diapositiva "${currentSlide.title}" (${currentSlide.subtitle}) para evaluar si nuestro equipo merece la nota máxima de 5.0 en la rúbrica.`,
              'evaluator'
            )
          }
          class="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-xl transition-all cursor-pointer shadow-2xs"
        >
          <Sparkles class="w-4 h-4 text-[#2B8A1E]" />
          <span>Simular Pregunta del Docente para esta Diapositiva</span>
        </button>

        <!-- Stepper Buttons -->
        <div class="flex items-center gap-2">
          <button
            onclick={prevSlide}
            disabled={currentSlideIndex === 0}
            class="p-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>

          <span class="text-xs font-bold font-mono-numbers text-slate-600 px-3">
            {currentSlideIndex + 1} / {PRESENTATION_SLIDES.length}
          </span>

          <button
            onclick={nextSlide}
            disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
            class="p-2.5 rounded-xl bg-[#003876] text-white hover:bg-blue-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-xs"
            aria-label="Siguiente diapositiva"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  {:else}
    <!-- Rubric Checklist View -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-md space-y-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 font-brand">
            Rúbrica Oficial de Evaluación (Total: 100%)
          </h3>
          <p class="text-xs sm:text-sm text-slate-600">
            Alineación estricta para asegurar una calificación de <strong>Excelente (4.5 a 5.0)</strong> en los 7 criterios.
          </p>
        </div>
        <button
          onclick={() => window.print()}
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
        >
          <Printer class="w-3.5 h-3.5" />
          <span>Imprimir para Jurados</span>
        </button>
      </div>

      <div class="space-y-4">
        {#each RUBRIC_CRITERIA as crit}
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-lg bg-[#003876] text-white font-mono-numbers font-bold text-xs flex items-center justify-center">
                  0{crit.number}
                </span>
                <h4 class="text-sm font-bold text-slate-900">
                  {crit.name}
                </h4>
              </div>
              <span class="text-xs font-black text-[#2B8A1E] bg-emerald-100 px-3 py-0.5 rounded-full font-mono-numbers self-start sm:self-auto">
                Peso: {crit.weight}%
              </span>
            </div>

            <!-- Rubric Level Description -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3 rounded-xl bg-white border border-emerald-200">
                <span class="text-[10px] uppercase font-bold text-emerald-800 block mb-0.5">
                  Requisito para Excelente (4.5 a 5.0)
                </span>
                <p class="text-slate-700 leading-snug">{crit.excellentCriteria}</p>
              </div>

              <div class="p-3 rounded-xl bg-emerald-50/80 border border-emerald-300">
                <span class="text-[10px] uppercase font-black text-[#1B5E20] block mb-0.5 font-brand">
                  Cumplimiento en Bon Yurt Alpina (5.0 Asegurado)
                </span>
                <p class="text-slate-900 font-semibold leading-snug">{crit.bonYurtFulfillment}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>
