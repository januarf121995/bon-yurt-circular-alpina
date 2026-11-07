<script lang="ts">
  import {
    Award,
    CheckCircle2,
    ShieldCheck,
    Sparkles,
    AlertTriangle,
    Layers,
    BookOpen
  } from 'lucide-svelte';
  import {
    ELLEN_MACARTHUR_PRINCIPLES,
    NINE_R_STRATEGIES
  } from '../data/circularData';

  interface Props {
    onAskAi: (prompt: string) => void;
  }

  let { onAskAi }: Props = $props();
</script>

<section class="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
  <!-- Header -->
  <div class="max-w-3xl">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003876] text-xs font-bold mb-2">
      <BookOpen class="w-3.5 h-3.5" />
      <span>Componente 3 · Guía de Clase (Peso: 10% de la Rúbrica)</span>
    </div>
    <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-brand">
      Principios Ellen MacArthur & Jerarquía 9R
    </h2>
    <p class="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
      Matriz de evidencia contra el <em>greenwashing</em>: evaluación razonada del nivel de madurez (escala 1 a 5) y articulación con los bucles de mayor conservación de valor de las 9R.
    </p>
  </div>

  <!-- 1. Ellen MacArthur 3 Principles Matrix -->
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2 font-brand">
        <Award class="w-5 h-5 text-amber-500" />
        <span>Matriz de Evidencia: 3 Principios de la Fundación Ellen MacArthur</span>
      </h3>
      <span class="text-xs text-slate-500 hidden sm:inline">Ruta A · Alpina S.A.S. BIC</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each ELLEN_MACARTHUR_PRINCIPLES as principle}
        <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-black uppercase tracking-wider text-[#003876] bg-blue-50 px-2.5 py-1 rounded-lg font-brand">
                Principio 0{principle.id}
              </span>
              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black border border-emerald-300">
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-600" />
                <span>Nivel {principle.maturityLevel}/5</span>
              </div>
            </div>

            <h4 class="text-base font-bold text-slate-900 leading-snug">
              {principle.name}
            </h4>
            <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {principle.description}
            </p>

            <div class="mt-4 pt-3 border-t border-slate-100 space-y-2">
              <span class="text-[10px] uppercase font-black text-slate-400 tracking-wider">
                Evidencias en Bon Yurt
              </span>
              <ul class="space-y-2 text-xs text-slate-700">
                {#each principle.bonYurtEvidence as ev}
                  <li class="flex items-start gap-2 leading-relaxed">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                    <span>{ev}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800 font-bold bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
            <span>Impacto Clave</span>
            <span class="font-mono-numbers">{principle.impactMetric}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- 2. Jerarquía 9R Aplicada -->
  <div class="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 font-brand">
          Jerarquía de Circularidad (Kirchherr et al., 2017)
        </span>
        <h3 class="text-xl sm:text-2xl font-black tracking-tight mt-1 font-brand">
          Las 9R en Acción: R2 (Reducir), R3 (Reutilizar) y R8 (Reciclar)
        </h3>
        <p class="text-xs text-slate-400 mt-1 max-w-2xl">
          Priorización de los bucles más internos y de mayor conservación de valor antes de recurrir a la valorización energética.
        </p>
      </div>
      <button
        onclick={() => onAskAi('Explícame cómo se aplican específicamente R2 Reducir, R3 Reutilizar y R8 Reciclar en el caso de Bon Yurt Alpina evitando el greenwashing.')}
        class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer self-start sm:self-auto border border-slate-700 shadow-xs"
      >
        <Sparkles class="w-3.5 h-3.5 text-emerald-400" />
        <span>Consultar 9R a la IA</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      {#each NINE_R_STRATEGIES as strat}
        <div class="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-3xl font-black text-emerald-400 font-mono-numbers">
              {strat.code}
            </span>
            <div class="text-right">
              <span class="text-xs font-bold uppercase tracking-wider text-white block">
                {strat.name}
              </span>
              <span class="text-[10px] text-slate-400">{strat.group}</span>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-bold text-slate-200 leading-snug">
              {strat.application}
            </h4>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
              {strat.reductionDetail}
            </p>
          </div>

          <div>
            <div class="flex justify-between text-xs text-slate-400 mb-1.5 font-mono-numbers">
              <span>Madurez: Nivel {strat.maturityScore}/5</span>
              <span class="text-emerald-400 font-bold">{strat.progressPercentage}%</span>
            </div>
            <div class="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
              <div
                class="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={`width: ${strat.progressPercentage}%`}
              ></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Anti-Greenwashing Quality Callout -->
  <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3.5 text-xs text-amber-900 leading-relaxed">
    <AlertTriangle class="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
    <div>
      <span class="font-bold uppercase tracking-wider block font-brand mb-0.5">
        Criterio de Calidad de la Guía de Clase: Evitar Greenwashing
      </span>
      <span>
        Toda afirmación en el proyecto cuenta con métrica y fecha: decir "reciclamos" no es suficiente. Bon Yurt declara <strong>420 toneladas de resina virgen reducidas</strong>, <strong>45 millones de cucharitas plásticas sustituidas</strong> por galleta horneada y trazabilidad hacia <strong>1.800 pupitres en escuelas rurales</strong>.
      </span>
    </div>
  </div>
</section>
