<script lang="ts">
  import Header from './components/Header.svelte';
  import ButterflyDiagram from './components/ButterflyDiagram.svelte';
  import LcaSection from './components/LcaSection.svelte';
  import PrinciplesSection from './components/PrinciplesSection.svelte';
  import StrategiesSection from './components/StrategiesSection.svelte';
  import SimulatorSection from './components/SimulatorSection.svelte';
  import PresentationMode from './components/PresentationMode.svelte';
  import AiExpertModal from './components/AiExpertModal.svelte';
  import LoopDetailModal from './components/LoopDetailModal.svelte';
  import InfographicModal from './components/InfographicModal.svelte';
  import Footer from './components/Footer.svelte';
  import { Bot, Sparkles } from 'lucide-svelte';
  import type { LoopItem } from './types/circular';

  let activeTab = $state<string>('mariposa');
  let isAiModalOpen = $state<boolean>(false);
  let aiInitialPrompt = $state<string>('');
  let aiInitialMode = $state<'expert' | 'evaluator'>('expert');

  let selectedLoop = $state<LoopItem | null>(null);
  let isInfographicOpen = $state<boolean>(false);

  // 13-minute 4-presenter oral presentation countdown timer (+5 min Q&A)
  let presentationTimerRunning = $state<boolean>(false);
  let presentationTimeLeft = $state<number>(13 * 60); // 780 seconds

  $effect(() => {
    let interval: any = null;
    if (presentationTimerRunning && presentationTimeLeft > 0) {
      interval = setInterval(() => {
        if (presentationTimeLeft > 0) {
          presentationTimeLeft--;
        } else {
          presentationTimerRunning = false;
        }
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  });

  function togglePresentationTimer() {
    presentationTimerRunning = !presentationTimerRunning;
  }

  function resetPresentationTimer(minutes: number = 13) {
    presentationTimerRunning = false;
    presentationTimeLeft = minutes * 60;
  }

  function handleAskAi(prompt: string, mode: 'expert' | 'evaluator' = 'expert') {
    aiInitialPrompt = prompt;
    aiInitialMode = mode;
    isAiModalOpen = true;
  }

  function handleOpenAi(mode: 'expert' | 'evaluator' = 'expert') {
    aiInitialPrompt = '';
    aiInitialMode = mode;
    isAiModalOpen = true;
  }
</script>

<div class="min-h-screen flex flex-col bg-[#F4F9FD] text-slate-800 font-sans">
  <!-- Top Navigation Header -->
  <Header
    {activeTab}
    onSelectTab={(tab) => activeTab = tab}
    onOpenAiExpert={(prompt, mode) => {
      if (prompt) handleAskAi(prompt, mode || 'expert');
      else handleOpenAi(mode || 'expert');
    }}
    onOpenInfographic={() => isInfographicOpen = true}
    {presentationTimerRunning}
    {presentationTimeLeft}
    onTogglePresentationTimer={togglePresentationTimer}
    onResetPresentationTimer={resetPresentationTimer}
  />

  <!-- Main Content Area -->
  <main class="flex-1">
    {#if activeTab === 'mariposa'}
      <ButterflyDiagram
        onSelectLoop={(loop) => selectedLoop = loop}
        onAskAi={(prompt) => handleAskAi(prompt, 'expert')}
        onExploreAcv={() => activeTab = 'acv'}
        onOpenInfographic={() => isInfographicOpen = true}
      />
    {:else if activeTab === 'acv'}
      <LcaSection onAskAi={(prompt) => handleAskAi(prompt, 'expert')} />
    {:else if activeTab === 'principios'}
      <PrinciplesSection onAskAi={(prompt) => handleAskAi(prompt, 'expert')} />
    {:else if activeTab === 'estrategias'}
      <StrategiesSection onAskAi={(prompt) => handleAskAi(prompt, 'expert')} />
    {:else if activeTab === 'simulador'}
      <SimulatorSection onAskAi={(prompt) => handleAskAi(prompt, 'expert')} />
    {:else if activeTab === 'presentacion'}
      <PresentationMode
        {presentationTimerRunning}
        {presentationTimeLeft}
        onTogglePresentationTimer={togglePresentationTimer}
        onResetPresentationTimer={resetPresentationTimer}
        onAskAi={(prompt, mode) => handleAskAi(prompt, mode || 'evaluator')}
        onSelectTab={(tab) => activeTab = tab}
      />
    {/if}
  </main>

  <!-- Floating Action Button: "Pregúntale al Experto Circular" -->
  <aside aria-label="Asistente virtual" class="fixed bottom-6 right-6 z-40 no-print">
    <button
      onclick={() => handleOpenAi('expert')}
      class="group relative flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#003876] via-[#002554] to-[#2B8A1E] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/30"
      aria-label="Abrir asistente Pregúntale al Experto Circular"
    >
      <div class="relative">
        <Bot class="w-5 h-5 text-white" />
        <span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#003876] animate-ping"></span>
        <span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#003876]"></span>
      </div>
      <div class="hidden sm:flex flex-col text-left">
        <span class="text-xs font-black tracking-tight leading-none flex items-center gap-1.5 font-brand">
          <span>Pregúntale al Experto Circular</span>
          <Sparkles class="w-3.5 h-3.5 text-emerald-300" />
        </span>
        <span class="text-[10px] text-blue-100 font-medium leading-none mt-1">
          Gemini 2.5 Flash · Rúbrica 5.0
        </span>
      </div>
    </button>
  </aside>

  <!-- Modals -->
  <AiExpertModal
    isOpen={isAiModalOpen}
    onClose={() => isAiModalOpen = false}
    initialPrompt={aiInitialPrompt}
    initialMode={aiInitialMode}
  />

  <LoopDetailModal
    loop={selectedLoop}
    onClose={() => selectedLoop = null}
    onAskAi={(prompt) => handleAskAi(prompt, 'expert')}
  />

  <InfographicModal
    isOpen={isInfographicOpen}
    onClose={() => isInfographicOpen = false}
  />

  <!-- Footer -->
  <Footer onOpenAi={() => handleOpenAi('expert')} />
</div>
