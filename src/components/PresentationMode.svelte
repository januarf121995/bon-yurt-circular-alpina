<script lang="ts">
  import {
    Presentation,
    Clock,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Printer,
    HelpCircle,
    Mic,
    Users,
    ArrowRight
  } from 'lucide-svelte';
  import {
    PRESENTATION_SLIDES,
    PRESENTERS_SCHEDULE,
    PROBABLE_QA,
    RUBRIC_CRITERIA,
    CONCLUSIONS_AND_LIMITATIONS
  } from '../data/circularData';

  interface Props {
    presentationTimerRunning: boolean;
    presentationTimeLeft: number;
    onTogglePresentationTimer: () => void;
    onResetPresentationTimer: (minutes?: number) => void;
    onAskAi: (prompt: string, mode?: 'expert' | 'evaluator') => void;
    onSelectTab: (tab: string) => void;
  }

  let {
    presentationTimerRunning,
    presentationTimeLeft,
    onTogglePresentationTimer,
    onResetPresentationTimer,
    onAskAi,
    onSelectTab
  }: Props = $props();

  let currentSlideIndex = $state(0);
  let activeView = $state<'slides' | 'qa' | 'rubric'>('slides');

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
</script>

<svelte:window onkeydown={(e) => {
  if (activeView === 'slides') {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  }
}} />

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
  <!-- Top Control Bar -->
  <div class="bg-white rounded-3xl p-5 border-2 border-blue-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 rounded-2xl bg-[#003876] text-white flex items-center justify-center font-bold shadow-md shrink-0">
        <Presentation class="w-6 h-6" />
      </div>
      <div>
        <div class="flex flex-wrap items-center gap-2">
          <h2 class="text-lg sm:text-xl font-black text-slate-900 font-brand">
            Sustentación Ejecutiva (13 min · 4 Presentadores + 5 min Q&A)
          </h2>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
            12 Diapositivas Oficiales
          </span>
        </div>
        <p class="text-xs text-slate-500">
          Guión completo palabra por palabra, láminas infográficas integradas y banco de 8 preguntas probables del jurado.
        </p>
      </div>
    </div>

    <!-- Timer & View Tabs -->
    <div class="flex flex-wrap items-center gap-3">
      <div class="flex items-center bg-slate-100 border border-slate-300 rounded-2xl px-3 py-1.5 gap-2">
        <button
          onclick={onTogglePresentationTimer}
          class={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            presentationTimerRunning
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-[#003876] text-white'
          }`}
        >
          {presentationTimerRunning ? 'Pausar' : 'Iniciar'}
        </button>
        <span class={`font-mono-numbers font-black text-base ${presentationTimeLeft < 180 ? 'text-rose-600 animate-pulse' : 'text-slate-800'}`}>
          {formatTime(presentationTimeLeft)}
        </span>
        <button
          onclick={() => onResetPresentationTimer(13)}
          class="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-200 cursor-pointer"
          title="Reiniciar a 13:00 (Guión 4 presentadores)"
        >
          13m
        </button>
        <button
          onclick={() => onResetPresentationTimer(30)}
          class="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-200 cursor-pointer"
          title="Modo extendido 30:00"
        >
          30m
        </button>
      </div>

      <div class="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
        <button
          onclick={() => (activeView = 'slides')}
          class={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
            activeView === 'slides' ? 'bg-white text-[#003876] shadow-xs' : 'text-slate-600'
          }`}
        >
          Slides ({currentSlideIndex + 1}/12)
        </button>
        <button
          onclick={() => (activeView = 'qa')}
          class={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
            activeView === 'qa' ? 'bg-white text-[#003876] shadow-xs' : 'text-slate-600'
          }`}
        >
          Preguntas (8)
        </button>
        <button
          onclick={() => (activeView = 'rubric')}
          class={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
            activeView === 'rubric' ? 'bg-white text-[#003876] shadow-xs' : 'text-slate-600'
          }`}
        >
          Rúbrica
        </button>
      </div>
    </div>
  </div>

  <!-- 4-Presenter Timeline Strip -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
    {#each PRESENTERS_SCHEDULE as slot}
      {@const isCurrent = currentSlide.presenter === slot.presenter && activeView === 'slides'}
      <button
        onclick={() => {
          activeView = 'slides';
          const targetSlide = Number(slot.slides.split('–')[0]) - 1;
          currentSlideIndex = Math.max(0, targetSlide);
        }}
        class={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
          isCurrent
            ? 'bg-[#003876] text-white border-[#003876] shadow-md'
            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
        }`}
      >
        <div class="flex items-center justify-between text-[11px] font-black mb-1">
          <span class="inline-flex items-center gap-1"><Users class="w-3.5 h-3.5" /> {slot.presenter}</span>
          <span class={`px-2 py-0.5 rounded-full text-[10px] font-mono-numbers ${isCurrent ? 'bg-amber-400 text-slate-950' : 'bg-blue-50 text-[#003876]'}`}>
            Slides {slot.slides} · {slot.time}
          </span>
        </div>
        <p class={`text-xs font-semibold leading-snug ${isCurrent ? 'text-blue-100' : 'text-slate-600'}`}>
          {slot.topic}
        </p>
      </button>
    {/each}
  </div>

  {#if activeView === 'slides'}
    <!-- Slide Card -->
    <div class="bg-gradient-to-br from-white via-blue-50/20 to-emerald-50/20 rounded-3xl p-6 sm:p-8 border-2 border-blue-300 shadow-xl space-y-6">
      <!-- Slide Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#003876] text-white font-mono-numbers">
            Diapositiva {currentSlide.id} / 12
          </span>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
            {currentSlide.presenter} · {currentSlide.presenterTheme}
          </span>
        </div>

        <span class="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 font-mono-numbers">
          <Clock class="w-3.5 h-3.5 text-amber-700" />
          <span>Duración en guión: {currentSlide.duration}</span>
        </span>
      </div>

      <!-- Title & Subtitle -->
      <div>
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 font-brand tracking-tight">
          {currentSlide.title}
        </h3>
        <p class="text-sm sm:text-base font-bold text-[#003876] mt-1">
          {currentSlide.subtitle}
        </p>
      </div>

      <!-- Optional Official Infographic Image (Slides 3-7) + Script + Key Points -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div class={currentSlide.slideImage ? 'lg:col-span-6 space-y-4' : 'lg:col-span-7 space-y-4'}>
          <!-- Spoken Script Teleprompter Card -->
          <div class="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
            <div class="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
              <Mic class="w-4 h-4" />
              <span>Guión Oficial para {currentSlide.presenter}</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
              {currentSlide.scriptText}
            </p>
            {#if currentSlide.bridgeLine}
              <div class="pt-3 border-t border-slate-700 flex items-start gap-2 text-xs text-amber-300 font-bold">
                <ArrowRight class="w-4 h-4 shrink-0 mt-0.5" />
                <span>Frase puente: {currentSlide.bridgeLine}</span>
              </div>
            {/if}
          </div>

          <!-- Extra panel on Slide 12 showing full APA references -->
          {#if currentSlide.id === 12}
            <div class="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
              <span class="font-black uppercase text-[10px] tracking-wider text-slate-500 block">
                Referencias Completas (APA 7ª Edición)
              </span>
              <ul class="space-y-1.5 text-[11px] text-slate-700 list-disc pl-4">
                {#each CONCLUSIONS_AND_LIMITATIONS.references as ref}
                  <li>{ref}</li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>

        <div class={currentSlide.slideImage ? 'lg:col-span-6 space-y-4' : 'lg:col-span-5 space-y-3'}>
          {#if currentSlide.slideImage}
            <div class="rounded-2xl overflow-hidden border-2 border-slate-200 bg-white shadow-sm p-2">
              <img
                src={currentSlide.slideImage}
                alt={currentSlide.title}
                class="w-full h-auto max-h-72 object-contain mx-auto rounded-xl bg-slate-50"
              />
            </div>
          {/if}

          <div class="space-y-2.5">
            <span class="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
              Datos Clave de Soporte en la Diapositiva
            </span>
            {#each currentSlide.keyDataPoints as point, idx}
              <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <span class="w-6 h-6 rounded-lg bg-emerald-100 text-[#2B8A1E] font-black font-mono-numbers text-xs flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <p class="text-xs text-slate-800 leading-relaxed font-medium">{point}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Slide Stepper & AI Juror Simulator -->
      <div class="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onclick={() =>
            onAskAi(
              `Actúa como jurado evaluador. Hazme una pregunta exigente sobre la diapositiva ${currentSlide.id}: "${currentSlide.title}" (${currentSlide.subtitle}) considerando las cifras oficiales de Alpina 2025 y la guía de clase.`,
              'evaluator'
            )
          }
          class="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-xl transition-all cursor-pointer shadow-2xs"
        >
          <Sparkles class="w-4 h-4 text-[#2B8A1E]" />
          <span>Simular Pregunta del Jurado para Slide {currentSlide.id}</span>
        </button>

        <div class="flex items-center gap-1.5 flex-wrap justify-center">
          <button
            onclick={prevSlide}
            disabled={currentSlideIndex === 0}
            class="p-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>

          {#each PRESENTATION_SLIDES as s, i}
            <button
              onclick={() => (currentSlideIndex = i)}
              class={`w-7 h-7 rounded-lg text-xs font-mono-numbers font-bold transition-colors cursor-pointer ${
                currentSlideIndex === i
                  ? 'bg-[#003876] text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {s.id}
            </button>
          {/each}

          <button
            onclick={nextSlide}
            disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
            class="p-2.5 rounded-xl bg-[#003876] text-white hover:bg-blue-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-xs"
            aria-label="Siguiente diapositiva"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  {:else if activeView === 'qa'}
    <!-- Probable Q&A Practice Section -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-md space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 font-brand flex items-center gap-2">
            <HelpCircle class="w-6 h-6 text-[#003876]" />
            <span>Preguntas Probables del Jurado (Bloque Q&A · 5 min)</span>
          </h3>
          <p class="text-xs sm:text-sm text-slate-600">
            8 preguntas clave con respuesta ejecutiva y el presentador asignado según el guión oficial.
          </p>
        </div>
        <button
          onclick={() => onAskAi('Hazme un simulacro rápido de 3 preguntas difíciles de la defensa oral del plan Bon Yurt Alpina y evalúa mis respuestas.', 'evaluator')}
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#003876] text-white text-xs font-bold hover:bg-blue-900 cursor-pointer"
        >
          <Sparkles class="w-4 h-4 text-amber-300" />
          <span>Simulacro Oral con IA</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each PROBABLE_QA as qa}
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-blue-100 text-[#003876]">
                  Pregunta #{qa.id}
                </span>
                <span class="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Responde: {qa.responder}
                </span>
              </div>
              <h4 class="text-sm font-black text-slate-900 leading-snug">{qa.question}</h4>
              <p class="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                {qa.shortAnswer}
              </p>
            </div>
            <button
              onclick={() => onAskAi(`Ensaya conmigo la pregunta: "${qa.question}". Dame una ampliación técnica de 30 segundos para ${qa.responder}.`, 'evaluator')}
              class="text-[11px] font-bold text-[#003876] hover:underline self-start cursor-pointer"
            >
              Ampliar respuesta con IA →
            </button>
          </div>
        {/each}
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
            Cumplimiento verificado con el plan actualizado (Ruta A · Alpina 2025).
          </p>
        </div>
        <button
          onclick={() => window.print()}
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
        >
          <Printer class="w-3.5 h-3.5" />
          <span>Imprimir</span>
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
                <h4 class="text-sm font-bold text-slate-900">{crit.name}</h4>
              </div>
              <span class="text-xs font-black text-[#2B8A1E] bg-emerald-100 px-3 py-0.5 rounded-full font-mono-numbers self-start sm:self-auto">
                Peso: {crit.weight}%
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3 rounded-xl bg-white border border-emerald-200">
                <span class="text-[10px] uppercase font-bold text-emerald-800 block mb-0.5">
                  Requisito para Excelente (4.5 a 5.0)
                </span>
                <p class="text-slate-700 leading-snug">{crit.excellentCriteria}</p>
              </div>
              <div class="p-3 rounded-xl bg-emerald-50/80 border border-emerald-300">
                <span class="text-[10px] uppercase font-black text-[#1B5E20] block mb-0.5 font-brand">
                  Cumplimiento en Bon Yurt Alpina (Nueva Versión)
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
