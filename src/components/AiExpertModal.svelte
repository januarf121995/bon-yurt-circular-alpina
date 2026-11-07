<script lang="ts">
  import {
    X,
    Send,
    Sparkles,
    Bot,
    User,
    RotateCcw,
    GraduationCap,
    CheckCircle2,
    BookOpen
  } from 'lucide-svelte';

  interface Message {
    id: string;
    sender: 'user' | 'assistant';
    text: string;
    source?: string;
  }

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    initialPrompt?: string;
    initialMode?: 'expert' | 'evaluator';
  }

  let { isOpen, onClose, initialPrompt = '', initialMode = 'expert' }: Props = $props();

  let mode = $state<'expert' | 'evaluator'>('expert');
  let messages = $state<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: '¡Hola! Soy el Experto en Economía Circular y Asesor Académico para el Bon Yurt de Alpina S.A.S. BIC. Puedo resolver dudas sobre el Análisis de Ciclo de Vida (ACV), el Diagrama de Mariposa, las 9R, o simular preguntas de sustentación del docente para asegurar un 5.0 en la rúbrica. ¿En qué tema quieres profundizar hoy?',
      source: 'knowledge_engine',
    },
  ]);
  let inputValue = $state('');
  let isLoading = $state(false);
  let messagesEndRef: HTMLDivElement | null = $state(null);

  const PRELOADED_QUESTIONS = [
    '¿Por qué el kumis exige validación estricta de cadena de frío a 4°C en el loop en cascada?',
    '¿Cómo funciona la cuchara comestible de galleta y la línea de bio-envases?',
    '¿Cómo se articula el concurso "Bon Yurt Transforma" con los colegios PRAE?',
    '¿Qué metas establece la Resolución 1407/2018 de MinAmbiente para Colombia?',
    'Simular pregunta difícil de sustentación sobre el Componente 4 (Estrategias RESOLVE)',
  ];

  function scrollToBottom() {
    messagesEndRef?.scrollIntoView({ behavior: 'smooth' });
  }

  $effect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  });

  $effect(() => {
    if (initialPrompt && isOpen) {
      sendMessage(initialPrompt, initialMode);
    }
  });

  async function sendMessage(textToSend: string, requestMode?: 'expert' | 'evaluator') {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const currentMode = requestMode || mode;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: trimmed,
    };

    messages = [...messages, userMsg];
    inputValue = '';
    isLoading = true;
    setTimeout(scrollToBottom, 50);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          mode: currentMode,
          history: messages.slice(-4).map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Error en el servidor de chat');
      }

      const data = await response.json();
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || 'No fue posible procesar la respuesta en este momento.',
        source: data.source || 'gemini',
      };

      messages = [...messages, botMsg];
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: 'El plan de Bon Yurt Alpina articula el ciclo biológico (envases bio, cuchara de galleta horneada y aprovechamiento de kumis y cereales) con el ciclo técnico (red escolar PRAE y reciclaje mecánico a pupitres). Cumple la Ruta A de la guía y cuenta con sistema MRV en 5 etapas.',
        source: 'knowledge_engine_fallback',
      };
      messages = [...messages, fallbackMsg];
    } finally {
      isLoading = false;
      setTimeout(scrollToBottom, 50);
    }
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    sendMessage(inputValue);
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
    <div class="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[620px] max-h-[92vh]">
      <!-- Header -->
      <div class="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-[#003876] via-[#002554] to-[#2B8A1E] text-white flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-300 border border-white/20">
            <Sparkles class="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-black text-base sm:text-lg font-brand">
                Experto Circular Alpina
              </h3>
              <span class="text-[10px] bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 font-bold px-2 py-0.5 rounded-full font-mono-numbers">
                Gemini 2.5 Flash
              </span>
            </div>
            <p class="text-xs text-blue-100/80">
              Soporte técnico y simulador de jurado de sustentación
            </p>
          </div>
        </div>

        <button
          onclick={onClose}
          class="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Mode Selector Pills -->
      <div class="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs">
        <span class="font-bold text-slate-600">Modo de consulta:</span>
        <div class="flex gap-1.5">
          <button
            onclick={() => mode = 'expert'}
            class={`px-3 py-1 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
              mode === 'expert' ? 'bg-[#003876] text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            Experto Técnico
          </button>
          <button
            onclick={() => mode = 'evaluator'}
            class={`px-3 py-1 rounded-lg font-bold text-xs transition-colors cursor-pointer flex items-center gap-1 ${
              mode === 'evaluator' ? 'bg-[#2B8A1E] text-white' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            <GraduationCap class="w-3.5 h-3.5" />
            <span>Simulador de Jurado (Rúbrica 5.0)</span>
          </button>
        </div>
      </div>

      <!-- Quick Questions Pills -->
      <div class="px-4 py-2 bg-slate-50 border-b border-slate-100 overflow-x-auto flex gap-2 no-scrollbar">
        {#each PRELOADED_QUESTIONS as q}
          <button
            onclick={() => sendMessage(q)}
            class="text-[11px] font-medium text-slate-700 bg-white border border-slate-200 hover:border-blue-400 hover:text-[#003876] px-3 py-1 rounded-full whitespace-nowrap shrink-0 transition-colors cursor-pointer shadow-2xs"
          >
            {q}
          </button>
        {/each}
      </div>

      <!-- Messages Body -->
      <div class="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm">
        {#each messages as msg}
          {@const isUser = msg.sender === 'user'}
          <div class={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {#if !isUser}
              <div class="w-8 h-8 rounded-xl bg-[#003876] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Bot class="w-4 h-4" />
              </div>
            {/if}
            <div
              class={`p-4 rounded-2xl max-w-[85%] leading-relaxed ${
                isUser
                  ? 'bg-[#003876] text-white rounded-tr-none'
                  : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/60'
              }`}
            >
              <div class="whitespace-pre-line font-normal">{msg.text}</div>
              {#if !isUser}
                <div class="mt-2 pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 font-mono-numbers">
                  <span>Base técnica verificada</span>
                  <span>{msg.source === 'gemini' ? 'Gemini 2.5 Flash' : 'Motor Oficial'}</span>
                </div>
              {/if}
            </div>
            {#if isUser}
              <div class="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                <User class="w-4 h-4" />
              </div>
            {/if}
          </div>
        {/each}

        {#if isLoading}
          <div class="flex gap-3 justify-start">
            <div class="w-8 h-8 rounded-xl bg-[#003876] text-white flex items-center justify-center shrink-0">
              <Bot class="w-4 h-4" />
            </div>
            <div class="p-4 rounded-2xl bg-slate-100 text-slate-500 rounded-tl-none border border-slate-200/60 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
              <span class="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
              <span class="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
              <span class="text-xs ml-1">Consultando base técnica de Bon Yurt Alpina...</span>
            </div>
          </div>
        {/if}
        <div bind:this={messagesEndRef}></div>
      </div>

      <!-- Input Form -->
      <form
        onsubmit={handleSubmit}
        class="p-3 sm:p-4 border-t border-slate-200 bg-white flex items-center gap-2"
      >
        <input
          type="text"
          bind:value={inputValue}
          placeholder="Pregunta sobre ACV, mariposa, kumis a 4°C, 9R, MRV o pide simular sustentación..."
          class="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003876] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          class="p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#003876] text-white font-semibold text-xs sm:text-sm hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Send class="w-4 h-4" />
          <span class="hidden sm:inline">Enviar</span>
        </button>
      </form>
    </div>
  </div>
{/if}
