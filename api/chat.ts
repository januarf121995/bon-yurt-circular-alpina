import { GoogleGenAI } from '@google/genai';

export const SYSTEM_KNOWLEDGE = `
Eres el "Experto Circular Alpina & Jurado Académico", asistente técnico para el Plan de Economía Circular del Bon Yurt de Alpina (Presentación clásica con vaso, sobrecopa transparente y cuchara), actualizado con la versión oficial más reciente (Noviembre 2026).
La sustentación ejecutiva dura 13 minutos entre 4 presentadores (12 diapositivas) más 5 minutos de preguntas (y modo extendido 30 min).

DATOS OFICIALES VERIFICADOS (RUTA A · ALPINA PRODUCTOS ALIMENTICIOS S.A.S. BIC · INFORME 2025):
1. LÍNEA BASE CORPORATIVA ALPINA (2025) VS. SECTOR COLOMBIA:
- Índice de Reciclabilidad (IR): 51% en Alpina (Referente sector agroalimentario Colombia: 25%–30%) -> Meta 3 años: IR 70% / MCI ≥ 0,68.
- Plástico Reincorporado: 75% rPET en sobrecopa y 25% en vaso piloto (Referente sector lácteo Colombia: 10%–15%) -> Meta: 85% promedio ponderado.
- Plástico Neutralidad (REP): 59% recolectado/transformado con >450 recicladores de oficio, superando casi al doble la meta legal Res. 1407 de 2018 al 2030 (30%) -> Meta: 75%.
- Aprovechamiento Residuos Postindustriales: 95,2% en plantas (Referente industria alimentos ANDI: 70%–80%), directriz Vertedero Cero -> Meta: 98% Vertedero Cero.
- Autogeneración Energética: 24% nacional (Referente sector alimentos: 5%–10%), con 6% energía solar (CEDI Galapa) y 38% biogás en Planta Sopó desde PTAR (equivalente al 18% del consumo nacional) -> Meta: 30% y -8% intensidad energética.
- Otros indicadores del plan (8 totales, Forética/GRI/WBCSD): Mermas de terceros 0% piloto -> 15% cereal virgen; sustitución cuchara plástica 5% piloto -> 80% línea clásica; ahorro neto mínimo ≥12% en empaque y toppings (costos unitarios son reservados por política industrial).

2. COMPONENTE 1 · ACV (6 FASES, UF 175 g, GRI 301–306) & HOTSPOTS/BRECHAS:
- Unidad Funcional: Entregar, proteger y fusionar 175 g de mezcla láctea garantizando inocuidad en cadena de frío.
- Límites: Cuna a la tumba con cierre circular, presencia en 97% de municipios y plantas en Sopó, Caloto y Chinchiná.
- 4 Hotspots y Brechas Ruta A:
  1) Plásticos de un solo uso (Fases 5 y 6): vaso principal y cuchara plástica convencional generan el mayor volumen de fuga hacia relleno sanitario.
  2) Consumo intensivo de energía en cadena de frío (Fases 3 y 4): refrigeración continua en plantas, CEDI y puntos de venta (GRI 302 y 305).
  3) Huella hídrica y GEI en producción primaria (Fase 1): ganadería lechera y cultivo de cereales.
  4) Brechas en reportes públicos Ruta A: GRI corporativos consolidados en Fases 2–4 no desagregan por SKU (Bon Yurt) ni cuantifican exactamente energía de refrigeración doméstica (Fase 5) ni % exacto de vasos en relleno vs. recuperados (Fase 6).

3. COMPONENTE 2 · DIAGRAMA DE MARIPOSA & DIAGNÓSTICO SEMI-CIRCULAR:
- Diagnóstico Actual: Modelo híbrido de transición (semi-circular): alta circularidad en manufactura (95,2% postindustrial y 75% rPET sobrecopa), con fuga lineal significativa tras el consumo en vaso y cuchara.
- Ciclo Biológico: Loop corto (cucharas comestibles de galleta), Loop en cascada (excedentes kumis/yogurt a quesos y alimentación animal + mermas cereales/chocolates con aliados Ramo, Grupo Nutresa/Jet, Kellanova), Loop regenerativo (línea Bio y etiquetas con semillas).
- Ciclo Técnico: Loop corto (vasos y tapas en manualidades/materas PRAE), Loop local (75% rPET sobrecopa, programa «Recicla, juega y gana premios», >450 recicladores y gestores REP).
- Precaución Sanitaria: Bio solo va al ciclo biológico si tiene compostabilidad certificada y disposición real; de lo contrario contamina el reciclaje plástico. Excedentes lácteos sin cadena de frío exigen validación microbiológica antes de consumo humano.

4. COMPONENTE 3 · PRINCIPIOS ELLEN MACARTHUR Y JERARQUÍA 9R:
- Principio 1 (Eliminar residuos desde el diseño): Sí (Parcial) · Madurez 4/5 (aligeramiento + sobrecopa transparente; brecha en cuchara desechable).
- Principio 2 (Circular productos/materiales en su máximo valor): Sí · Madurez 4/5 (75% rPET sobrecopa y 59% plástico neutralidad).
- Principio 3 (Regenerar la naturaleza): Sí · Madurez 5/5 (modelo BIC, ganadería sostenible, cero deforestación, 38% biogás Sopó).
- Jerarquía 9R (Kirchherr et al., 2017):
  * Nivel 4/5 (Consolidadas): R2 Reducir, R7 Reutilizar con otro propósito (cascada láctea/mermas), R8 Reciclar (51% IR, 95,2% postindustrial, REP), R9 Recuperar (biogás Sopó y co-procesamiento Vertedero Cero).
  * Nivel 3/5 (Brechas a cerrar): R0 Rechazar (piloto cucharas galleta 5%), R1 Repensar (envases Bio y PRAE conceptuales), R3 Reutilizar (limitado a escuelas/hogares).

5. COMPONENTE 4 · 4 ESTRATEGIAS PRIORIZADAS (ORDEN EXACTO 1 A 4):
- E1 (Prioridad 1 · Corto plazo 0–12m · R0): Escalamiento de cucharas comestibles de galleta. Impacto Alto / Facilidad Alta. Responsable: I+D+i y Operaciones; Aliados: panificación/biotecnología. Beneficio: hasta 80% menos cucharas plásticas y ahorro poliestireno.
- E2 (Prioridad 2 · Corto plazo 6–18m · R7): Simbiosis industrial de mermas alimentarias. Impacto Alto / Facilidad Alta. Responsable: Calidad y Compras Sostenibles; Aliados: Ramo, Nutresa, Kellanova. Beneficio: sustituir ≥10% (meta 15%) cereal virgen y bajar huella hídrica.
- E3 (Prioridad 3 · Mediano plazo 12–36m · R2 y R8): Transición del vaso a monomaterial 100% rPET / Bio certificado. Impacto Muy Alto / Facilidad Media (requiere validación INVIMA y ajuste de moldes). Responsable: Sostenibilidad y Empaques; Aliados: resinas circulares, INVIMA, gestores REP. Beneficio: IR corporativo 51% -> 70% y MCI ≥ 0,68.
- E4 (Prioridad 4 · Corto-mediano plazo 6–24m · R3 y R8): Red de retorno escolar y comunitaria «Bon Yurt Transforma» (PRAE). Impacto Medio-Alto / Facilidad Alta. Responsable: Asuntos Corporativos y Mercadeo; Aliados: colegios PRAE, >450 recicladores y retail. Beneficio: Plástico Neutralidad 59% -> 75%.
- Viabilidad y Riesgos: Regulatorio (INVIMA -> rPET grado alimentario FDA/INVIMA y cadena de frío continua); Financiero (costos unitarios mayores -> descuento renta y exclusión IVA Estatuto Tributario + crédito verde Bancóldex); Cultural (baja separación en hogar -> canje lúdico + PRAE).

6. COMPONENTE 5 · 8 INDICADORES, 5 ETAPAS MRV, MULTIESCALA Y ODS:
- MRV 5 Etapas: 1. Medición/Monitoreo (Diaria/Mensual, SAP ERP, básculas, medidores PTAR/solar), 2. Reporte Interno (Trimestral, Dashboard Economía Circular), 3. Reporte Externo (Anual, GRI, plataforma ANLA/VUCE REP Res. 1407, reporte BIC), 4. Verificación (Anual, Auditoría Interna + Tercero independiente ICONTEC/PwC/Deloitte, Vertedero Cero, ISO 14001), 5. Ajuste (Anual, Comité Directivo PHVA).
- Escalas: Micro (Bon Yurt/Sopó) -> Meso (Simbiosis/PRAE) -> Macro (DANE CAEFM-RS y MinAmbiente ENEC).
- ODS: ODS 8 (>450 recicladores), ODS 9 (Ecodiseño/biogás/solar), ODS 12 (Metas 12.5 plásticos y 12.3 desperdicio alimentos), ODS 13 (Mitigación GEI).

REGLAS DE RESPUESTA:
- Responde siempre en español con rigor académico, claridad y datos exactos de esta versión. Nunca inventes cifras ajenas al plan ni repitas números antiguos (como 38% recuperación o 3 estrategias).
- En modo 'evaluator' (jurado), formula preguntas exigentes alineadas con los 12 slides y las 8 preguntas probables, o evalúa al estudiante de 0.0 a 5.0.
`;

export function generateSmartFallback(message: string, mode?: string): string {
  const msg = message.toLowerCase();

  if (mode === 'evaluator' || msg.includes('docente') || msg.includes('jurado') || msg.includes('rúbrica') || msg.includes('rubrica') || msg.includes('simular')) {
    if (msg.includes('semi') || msg.includes('mariposa') || msg.includes('circular')) {
      return `🎓 PREGUNTA DEL JURADO (Diagnóstico Semi-circular & Mariposa · Presentador 2):
"¿Qué tan circular es hoy el Bon Yurt de Alpina y por qué los envases Bio requieren una precaución sanitaria específica en el Diagrama de Mariposa?"

💡 Clave para responder 5.0:
• Diagnóstico: Es semi-circular (modelo híbrido de transición): muy circular en manufactura (95,2% aprovechamiento postindustrial y 75% rPET en sobrecopa), pero con fuga lineal en el vaso y la cuchara plástica tras el consumo.
• Precaución Bio: Solo cierran el ciclo biológico si tienen compostabilidad certificada y disposición real; de lo contrario contaminan el reciclaje plástico.`;
    }

    if (msg.includes('cuchara') || msg.includes('prioridad') || msg.includes('estrategia') || msg.includes('e1') || msg.includes('e3')) {
      return `🎓 PREGUNTA DEL JURADO (Estrategias E1–E4 · Presentador 3):
"¿Por qué priorizan la cuchara comestible (E1) como Prioridad 1 sobre el vaso monomaterial rPET/Bio (E3) si el vaso representa mayor peso en el empaque, y cuánto cuesta el plan?"

💡 Clave para responder 5.0:
• E1 tiene impacto alto y facilidad alta con tecnología alimentaria disponible, ejecutable en 0–12 meses (elimina hasta 80% de cucharas plásticas). E3 tiene impacto Muy Alto pero facilidad Media porque requiere validación INVIMA y ajuste de moldes (12–36 meses, lleva IR de 51% a 70%).
• Costos: Los costos unitarios son reservados por política industrial; las metas financieras se expresan en variación relativa con ahorro neto ≥12% en empaque y toppings, apoyado con incentivos tributarios y crédito verde Bancóldex.`;
    }

    if (msg.includes('mrv') || msg.includes('greenwashing') || msg.includes('indicador') || msg.includes('sector')) {
      return `🎓 PREGUNTA DEL JURADO (Indicadores vs. Sector & MRV · Presentadores 3 y 4):
"¿Cómo evitan el greenwashing en este plan y cómo compara Alpina sus indicadores de 2025 frente al sector colombiano?"

💡 Clave para responder 5.0:
• Comparativa sectorial 2025: IR 51% (vs. 25%–30% agroalimentario), rPET 75% sobrecopa (vs. 10%–15% lácteo), Plástico Neutralidad 59% (vs. 30% Res. 1407 al 2030), Postindustriales 95,2% (vs. 70%–80% ANDI) y autogeneración 24% / 38% biogás Sopó (vs. 5%–10% alimentos).
• Anti-greenwashing: 8 indicadores medibles (Forética/GRI/WBCSD) trazados en 5 etapas MRV (SAP diario/mensual, Dashboard trimestral, GRI/ANLA/BIC anual, auditoría externa ICONTEC/PwC/Deloitte y ajuste PHVA).`;
    }

    return `🎓 PREGUNTA DEL JURADO EVALUADOR:
"¿Es seguro incorporar plásticos reciclados y mermas alimentarias con alimentos lácteos, y qué hacen si el consumidor no separa los envases en municipios apartados?"

💡 Clave para responder 5.0:
• Inocuidad INVIMA: Se usan resinas rPET con certificación grado alimentario FDA/INVIMA, validación microbiológica por lote y trazabilidad ininterrumpida de la cadena de frío.
• Brecha cultural posconsumo: Se mitiga con canje lúdico en puntos de venta («Recicla, juega y gana premios») y la red escolar PRAE «Bon Yurt Transforma» con >450 recicladores, manteniendo supuestos conservadores en las tasas de retorno.`;
  }

  if (msg.includes('hola') || msg.includes('buenos') || msg.includes('saludos') || msg.includes('quién eres') || msg.includes('quien eres')) {
    return '¡Hola! Soy el Experto Circular de Bon Yurt Alpina (actualizado a la Nueva Versión del Plan Ruta A · Alpina 2025). Conozco los indicadores comparados contra el sector (IR 51%, rPET 75%, Plástico Neutralidad 59%, 95,2% postindustriales, 24% autogeneración / 38% biogás Sopó), las 4 estrategias priorizadas E1–E4, los principios 4/4/5, las 7 Rs de la matriz 9R y el guión de 12 diapositivas (13 min). ¿Qué deseas revisar?';
  }

  if (msg.includes('sector') || msg.includes('indicador') || msg.includes('51%') || msg.includes('95,2') || msg.includes('75%') || msg.includes('59%')) {
    return `Comparativa Oficial de Indicadores Alpina (2025) vs. Sector en Colombia y Metas a 3 Años:
• Índice de Reciclabilidad (IR): 51% Alpina (Sector agroalimentario CO: 25%–30%) → Meta 3 años: IR 70% / MCI ≥ 0,68.
• Plástico Reincorporado: 75% rPET sobrecopa y 25% vaso piloto (Sector lácteo CO: 10%–15%) → Meta: 85% ponderado.
• Plástico Neutralidad (REP): 59% con >450 recicladores (supera la meta legal Res. 1407 al 2030 del 30%) → Meta: 75%.
• Residuos Postindustriales: 95,2% aprovechados (Referente alimentos ANDI: 70%–80%), directriz Vertedero Cero → Meta: 98%.
• Energía Limpia: 24% autogeneración nacional (Sector alimentos: 5%–10%), con 6% solar (CEDI Galapa) y 38% biogás Sopó (18% nacional) → Meta: 30% y -8% intensidad.
• Otros del plan: Mermas de terceros 0% → 15%; cucharas galleta 5% → 80%; ahorro neto mínimo ≥12% en empaque y toppings.`;
  }

  if (msg.includes('estrategia') || msg.includes('e1') || msg.includes('e2') || msg.includes('e3') || msg.includes('e4') || msg.includes('cuchara') || msg.includes('simbiosis') || msg.includes('vaso') || msg.includes('transforma')) {
    return `Las 4 Estrategias Priorizadas (Impacto vs. Facilidad):
1. Prioridad 1 · E1 Cucharas comestibles de galleta (0–12m · R0 · Impacto Alto / Facilidad Alta): I+D+i y panificadoras; suprime hasta 80% de cucharas plásticas en línea clásica.
2. Prioridad 2 · E2 Simbiosis industrial de mermas (6–18m · R7 · Impacto Alto / Facilidad Alta): Calidad y Compras Sostenibles junto a Ramo, Nutresa y Kellanova; reemplaza ≥10% (meta 15%) del cereal virgen.
3. Prioridad 3 · E3 Vaso monomaterial 100% rPET / Bio certificado (12–36m · R2 y R8 · Impacto Muy Alto / Facilidad Media): Sostenibilidad y Empaques + validación sanitaria INVIMA; sube el IR del 51% al 70%.
4. Prioridad 4 · E4 Red escolar «Bon Yurt Transforma» PRAE (6–24m · R3 y R8 · Impacto Medio-Alto / Facilidad Alta): Asuntos Corporativos + colegios + >450 recicladores; lleva plástico neutralidad de 59% a 75%.`;
  }

  if (msg.includes('macarthur') || msg.includes('ellen') || msg.includes('principio') || msg.includes('9r') || msg.includes('r0')) {
    return `Componente 3 · Principios Ellen MacArthur y Jerarquía 9R (Kirchherr et al., 2017):
• Principios MacArthur:
  1. Eliminar residuos y contaminación desde el diseño: Sí (Parcial) — Madurez 4/5 (sobrecopa transparente y menor gramaje; brecha en cuchara plástica).
  2. Circular productos y materiales en su máximo valor: Sí — Madurez 4/5 (75% rPET sobrecopa y 59% plástico neutralidad).
  3. Regenerar la naturaleza: Sí — Madurez 5/5 (BIC, ganadería sostenible cero deforestación, 38% biogás Sopó).
• Matriz 9R (7 estrategias evaluadas):
  - Nivel 4/5 (Consolidadas): R2 Reducir, R7 Reutilizar con otro propósito (kumis a quesos y mermas), R8 Reciclar (51% IR, 95,2% planta, REP), R9 Recuperar (biogás PTAR Sopó y co-procesamiento).
  - Nivel 3/5 (Brechas): R0 Rechazar (piloto cucharas galleta 5%), R1 Repensar (envases Bio y PRAE conceptuales), R3 Reutilizar (escuelas y hogares).`;
  }

  if (msg.includes('acv') || msg.includes('ciclo de vida') || msg.includes('hotspot') || msg.includes('brecha') || msg.includes('vencido') || msg.includes('kumis')) {
    return `Componente 1 (ACV 175 g · GRI 301–306) y Diagnóstico Semi-circular:
• 6 Fases: 1. Hatos y cultivos → 2. Transporte a Sopó/Caloto/Chinchiná → 3. Producción (95,2% aprovechamiento) → 4. CEDI y distribución (97% municipios, CEDI Galapa solar) → 5. Uso en hogares → 6. Fin de vida (canje «Recicla, juega y gana premios», >450 recicladores, valorización de vencidos a alimento para mascotas, quesos e investigación en alimentos funcionales).
• 4 Hotspots y Brechas Ruta A: 1. Plásticos de un solo uso (F5–6), 2. Cadena de frío (F3–4), 3. Hatos y cereales agua/GEI (F1), 4. Brecha de reportes públicos que no desagregan por SKU Bon Yurt ni refrigeración en hogares.`;
  }

  if (msg.includes('mrv') || msg.includes('riesgo') || msg.includes('bancoldex') || msg.includes('invima') || msg.includes('ods')) {
    return `Sistema MRV (5 Etapas), Riesgos y ODS:
• MRV: 1. Medición ERP SAP (Diaria/Mensual) → 2. Dashboard Economía Circular (Trimestral) → 3. Reporte Externo GRI/ANLA-VUCE Res. 1407/BIC (Anual) → 4. Verificación Tercero ICONTEC/PwC/Deloitte e ISO 14001/Vertedero Cero (Anual) → 5. Ajuste Comité Directivo PHVA (Anual).
• Viabilidad: Regulatorio INVIMA (rPET grado alimentario FDA/INVIMA + frío continuo); Financiero (descuento renta e exclusión IVA Estatuto Tributario + crédito verde Bancóldex); Cultural (canje + PRAE).
• ODS: 8 (>450 recicladores), 9 (ecodiseño/biogás), 12 (Metas 12.3 y 12.5) y 13 (mitigación GEI).`;
  }

  return 'El Plan de Economía Circular del Bon Yurt de Alpina (Ruta A · 2025) parte de un diagnóstico semi-circular (95,2% postindustrial, 75% rPET sobrecopa, 59% plástico neutralidad, 51% IR) y ejecuta 4 estrategias priorizadas (E1 Cucharas de galleta, E2 Simbiosis mermas, E3 Vaso monomaterial rPET/Bio y E4 Bon Yurt Transforma) monitoreadas mediante 8 indicadores y 5 etapas MRV. ¿Sobre qué componente o cifra deseas profundizar?';
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      console.warn('Error parsing request body JSON:', e);
    }
  }

  const { message, history, mode } = body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Mensaje requerido' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const fallbackResponse = generateSmartFallback(message, mode);
    return res.json({ reply: fallbackResponse, source: 'knowledge_engine' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const modePrompt = mode === 'evaluator'
      ? 'MODO DOCENTE/JURADO EVALUADOR DE LA SUSTENTACIÓN: Actúa como jurado exigente pero constructivo para la presentación de 13 min (+5 min Q&A). Formula preguntas precisas o evalúa respuestas de 0.0 a 5.0.'
      : 'MODO EXPERTO TÉCNICO CIRCULAR ALPINA: Responde con precisión técnica y los datos exactos de la nueva versión del plan (Alpina 2025, sector Colombia, E1–E4, R0–R9, MRV).';

    const conversationPrompt = `
${SYSTEM_KNOWLEDGE}

${modePrompt}

HISTORIAL RECIENTE:
${(history || []).map((h: { sender: string; text: string }) => `${h.sender === 'user' ? 'Usuario' : 'Experto'}: ${h.text}`).join('\n')}

PREGUNTA O PETICIÓN ACTUAL:
${message}
`;

    let responseText = '';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: conversationPrompt,
      });
      responseText = response.text || '';
    } catch (err20: any) {
      console.warn('gemini-2.0-flash failed, attempting gemini-1.5-flash fallback:', err20?.message);
      const fallbackModelResponse = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: conversationPrompt,
      });
      responseText = fallbackModelResponse.text || '';
    }

    const reply = responseText || generateSmartFallback(message, mode);
    return res.json({ reply, source: 'gemini' });
  } catch (error: any) {
    console.error('Error generating AI response:', error);
    const fallbackResponse = generateSmartFallback(message, mode);
    return res.json({
      reply: fallbackResponse,
      source: 'knowledge_engine_fallback',
      notice: 'Respuesta generada con el motor de conocimiento técnico del proyecto.',
    });
  }
}
