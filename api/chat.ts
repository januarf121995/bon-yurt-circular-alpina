import { GoogleGenAI } from '@google/genai';

let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  } catch (err) {
    console.error('Error initializing GoogleGenAI:', err);
  }
}

const SYSTEM_KNOWLEDGE = `
Eres el "Experto Circular Alpina & Jurado Académico", asistente técnico de alta solvencia científica y pedagógica para el Plan de Implementación de Economía Circular de Bon Yurt de Alpina ("Cerrar el ciclo, es nutrir el futuro").
Tu misión es preparar a los estudiantes para su sustentación final de 30 minutos frente al docente y evaluadores, garantizando la calificación máxima (5.0 / 5.0) en los 7 criterios de la rúbrica oficial de la guía de clase.

DATOS TÉCNICOS Y ESTRUCTURA OFICIAL (RUTA A - EMPRESA CON AVANCES: ALPINA S.A.S. BIC):
1. CONTEXTO CORPORATIVO & RUTA DE TRABAJO:
- Empresa: Alpina Productos Alimenticios S.A.S. BIC (plantas en Sopó, Caloto, Chinchiná; cobertura en el 97% de municipios de Colombia).
- Ruta A: Empresa con reportes consolidados (GRI, memoria ESG, metas REP). El foco es contrastar lo declarado con lo practicado, cerrar brechas de downcycling y proponer el siguiente nivel de madurez tecnológica y social sin incurrir en greenwashing.

2. COMPONENTE 1: DIAGNÓSTICO DE ANÁLISIS DE CICLO DE VIDA (ACV - 15% DE LA RÚBRICA):
- Unidad Funcional: Entregar, proteger y fusionar 175 g de mezcla láctea (vaso termoformado con ~150 g de base láctea yogurt/kumis + sobrecopa transparente con ~25 g de toppings crocantes de aliados como Jet, Chocoramo o cereales + cuchara integrada).
- Límites del Sistema: De la Cuna a la Tumba con Cierre Circular ("Cradle-to-Cradle"), abarcando 6 fases.
- Puntos Críticos (Hotspots):
  * Hotspot 1: Emisiones entéricas en hatos lecheros (mitigado con silvopastoreo).
  * Hotspot 2: Consumo energético y refrigerante en transporte y CEDI (mitigado con logística optimizada).
  * Hotspot 3: Generación de empaques plásticos posconsumo de un solo uso (cucharita y foil), mitigados con sustitución comestible y acuerdos REP.
- Indicadores GRI integrados: GRI 301 (Materiales), 302 (Energía), 303 (Agua), 305 (Emisiones GEI), 306 (Residuos).

3. COMPONENTE 2: ANÁLISIS DE CIRCULARIDADES (DIAGRAMA DE MARIPOSA - 15% DE LA RÚBRICA):
- Ala Izquierda (Ciclo Biológico - Verde / Regeneración de recursos naturales):
  * Loop Regenerativo: Envases de la línea Bio biodegradables en PLA/PHA compostables y etiquetas desprendibles de papel semilla.
  * Loop en Cascada: Kumis a quesos análogos o sueros enriquecidos (validación sanitaria crítica: cadena de frío ininterrumpida máx 4°C y control microbiológico libre de patógenos); mermas de cereales con aliados industriales (Ramo, Jet, Nutresa).
  * Loop Corto: Cuchara crujiente comestible de galleta horneada enriquecida con fibra de avena (aw < 0.5, resistente 20 min en yogurt, rotulado de alérgenos).
- Ala Derecha (Ciclo Técnico - Azul / Conservación del valor de los materiales):
  * Loop Corto: Reutilización de vasos y tapas en manualidades hogareñas (maceteros, portalápices, bloques modulares).
  * Loop Local: Concurso intercolegiado "Bon Yurt Transforma", puntos ecológicos "Come-Vasos", articulación con proyectos PRAE y canje por útiles escolares.
  * Loop en Cascada: Transformación de plástico PS/PP en madera plástica para pupitres escolares rurales (no apto para contacto alimentario directo, certificado contra lixiviación y resistencia mecánica) y cartón reciclado con Smurfit Westrock.

4. COMPONENTE 3: PRINCIPIOS ELLEN MACARTHUR & JERARQUÍA 9R (10% DE LA RÚBRICA):
- Principios MacArthur: 1. Eliminar residuos desde el diseño (Nivel 4), 2. Circular productos en su valor más alto (Nivel 4), 3. Regenerar la naturaleza (Nivel 3).
- 9R aplicadas: R2 Reducir (420 t resina virgen/año, -18% calibre de vaso), R3 Reutilizar (upcycling escolar), R8 Reciclar (madera plástica certificada).

5. COMPONENTE 4: ESTRATEGIAS RESOLVE & HOJA DE RUTA (25% DE LA RÚBRICA):
- Estrategia 1: Insumos Circulares y Línea Bio (biopolímeros, papel semilla y cuchara comestible de galleta).
- Estrategia 2: Estrategia Posconsumo Lúdica Escolar (Red PRAE, "Bon Yurt Transforma" y Come-Vasos).
- Estrategia 3: Simbiosis Industrial y Valorización Biológica (Aprovechamiento de kumis a quesos, cereales con Ramo/Jet y madera plástica para escuelas rurales).

6. COMPONENTE 5: INDICADORES Y SISTEMA MRV (20% DE LA RÚBRICA):
- 7 Indicadores Ficha Técnica en escalas Micro (Planta Sopó), Meso (Red PRAE 250 colegios) y Macro (Metas REP Colombia).
- Sistema MRV en 5 Etapas: 1. Medición Operativa, 2. Reporte Interno, 3. Reporte Externo Normativo (Resolución 1407/2018), 4. Verificación Independiente (ICONTEC), 5. Ajuste y Mejora Continua (Ciclo PHVA).

REGLAS DE RESPUESTA:
- Responde siempre en español, con lenguaje profesional, riguroso y sintético.
- Cita siempre las fuentes técnicas oficiales del plan.
`;

function generateSmartFallback(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes('kumis') || lower.includes('queso') || lower.includes('frío') || lower.includes('frio') || lower.includes('sanitaria')) {
    return 'Respecto al aprovechamiento de Kumis a quesos (Loop en cascada biológico): Se investiga el uso de lotes no conformes de kumis por volumen o consistencia para la producción de quesos análogos o sueros enriquecidos. Como nota sanitaria crítica, se requiere validación estricta e ininterrumpida de la cadena de frío (máximo 4°C) y control microbiológico certificado libre de patógenos (Listeria y Salmonella) antes de cualquier reproceso.';
  }
  if (lower.includes('macarthur') || lower.includes('ellen') || lower.includes('principio') || lower.includes('9r')) {
    return 'El proyecto aplica los 3 principios de la Fundación Ellen MacArthur y las 9R:\n1. Eliminar residuos y contaminación desde el diseño (Nivel 4 de madurez): Rediseño de vaso (-18% peso) y cuchara comestible de galleta.\n2. Circular productos y materiales en su valor más alto (Nivel 4): Simbiosis industrial de plásticos a mobiliario escolar y alianzas con Nutresa/Ramo.\n3. Regenerar la naturaleza (Nivel 3): Envases biodegradables Bio, etiquetas germinables con semillas y silvopastoreo lechero.\nJerarquía 9R: R2 Reducir (420 t resina virgen/año), R3 Reutilizar (upcycling escolar) y R8 Reciclar (madera plástica).';
  }
  if (lower.includes('unidad funcional') || lower.includes('acv') || lower.includes('hotspot')) {
    return 'La Unidad Funcional definida en el Análisis de Ciclo de Vida (ACV) es de 175 gramos de mezcla láctea. Los límites corresponden a un enfoque "Cuna a la Tumba con Cierre Circular" (Cradle-to-Cradle), cubriendo 6 fases. Los 3 Hotspots clave son: emisiones entéricas en hatos, cadena de frío en transporte/CEDI y empaques plásticos posconsumo.';
  }
  if (lower.includes('cuchara') || lower.includes('galleta') || lower.includes('bio') || lower.includes('semilla')) {
    return 'En las estrategias de insumos circulares:\n• Cuchara comestible: Fabricada con galleta horneada enriquecida con fibra de avena (aw < 0.5) para eliminar 45 millones de cucharas de plástico virgen al año.\n• Línea Bio: Envases en biopolímeros (PLA/PHA) compostables certificados bajo norma EN 13432 / ASTM D6400.\n• Etiquetas con semillas: Papel germinable con semillas de caléndula o lechuga para huertos escolares.';
  }
  if (lower.includes('prae') || lower.includes('colegio') || lower.includes('transforma') || lower.includes('come-vasos')) {
    return 'La estrategia posconsumo comunitaria se articula con los Proyectos Ambientales Escolares (PRAE) en colegios colombianos mediante el concurso "Bon Yurt Transforma". Los estudiantes recogen y limpian los vasos en puntos ecológicos "Come-Vasos", acumulando ecopuntos canjeables por útiles escolares y dotando a escuelas rurales con pupitres de madera plástica reciclada.';
  }
  return 'El Plan de Economía Circular de Bon Yurt Alpina articula el Ciclo Biológico (envases Bio, cuchara comestible de galleta, aprovechamiento de kumis y cereales) y el Ciclo Técnico (reutilización DIY, red PRAE y reciclaje a pupitres escolares). Cumple la Ruta A de la guía y garantiza el cierre integral según el Diagrama de Mariposa de la Fundación Ellen MacArthur.';
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { message, history, mode } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Mensaje requerido' });
  }

  if (!ai) {
    const fallbackResponse = generateSmartFallback(message);
    return res.json({ reply: fallbackResponse, source: 'knowledge_engine' });
  }

  try {
    const modePrompt = mode === 'evaluator'
      ? 'MODO DOCENTE/JURADO EVALUADOR: Evalúa la respuesta del estudiante frente a los criterios de la rúbrica de clase. Dale retroalimentación constructiva, calificación sugerida y el dato técnico clave para un 5.0.'
      : 'MODO EXPERTO TÉCNICO: Responde de manera concisa (2 a 4 párrafos o viñetas claras), con datos cuantitativos precisos del proyecto Bon Yurt Alpina.';

    const conversationPrompt = `
${SYSTEM_KNOWLEDGE}

${modePrompt}

HISTORIAL RECIENTE:
${(history || []).map((h: { sender: string; text: string }) => `${h.sender === 'user' ? 'Usuario' : 'Experto'}: ${h.text}`).join('\n')}

PREGUNTA / COMENTARIO:
${message}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: conversationPrompt,
    });

    const reply = response.text || 'No fue posible generar una respuesta en este momento.';
    return res.json({ reply, source: 'gemini' });
  } catch (error: any) {
    console.error('Error generating AI response:', error);
    const fallbackResponse = generateSmartFallback(message);
    return res.json({
      reply: fallbackResponse,
      source: 'knowledge_engine_fallback',
      notice: 'Respuesta generada con la base de datos técnica del proyecto.',
    });
  }
}
