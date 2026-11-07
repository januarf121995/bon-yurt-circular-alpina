import { GoogleGenAI } from '@google/genai';

const SYSTEM_KNOWLEDGE = `
Eres el "Experto Circular Alpina & Jurado Académico", asistente técnico de alta solvencia científica y pedagógica para el Plan de Implementación de Economía Circular de Bon Yurt de Alpina ("Cerrar el ciclo, es nutrir el futuro").
Tu misión es preparar a los estudiantes para su sustentación final de 30 minutos frente al docente y evaluadores, garantizando la calificación máxima (5.0 / 5.0) en los 7 criterios de la rúbrica oficial de la guía de clase.

DATOS TÉCNICOS Y ESTRUCTURA OFICIAL (RUTA A - EMPRESA CON AVANCES: ALPINA S.A.S. BIC):
1. CONTEXTO CORPORATIVO & RUTA DE TRABAJO:
- Empresa: Alpina Productos Alimenticios S.A.S. BIC (plantas en Sopó, Caloto, Chinchiná; cobertura en el 97% de municipios de Colombia).
- Ruta A: Empresa con reportes consolidados (GRI, memoria ESG, metas REP). El foco es contrastar lo declarado con lo practicado, cerrar brechas de downcycling y proponer el siguiente nivel de madurez tecnológica y social sin incurrir en greenwashing.

2. COMPONENTE 1: DIAGNÓSTICO DE ANÁLISIS DE CICLO DE VIDA (ACV - 15% DE LA RÚBRICA):
- Unidad Funcional: Entregar, proteger y fusionar 175 g de mezcla láctea (vaso termoformado con ~150 g de base láctea yogurt/kumis + sobrecopa transparente con ~25 g de toppings crocantes de aliados como Jet, Chocoramo o cereales + cuchara integrada).
- Límites del Sistema: De la Cuna a la Tumba con Cierre Circular ("Cradle-to-Cradle"), abarcando 6 fases:
  1. Extracción materias primas (hatos lecheros con ganadería regenerativa/silvopastoreo, cultivo de cereales y cacao, resinas PS/PP y biopolímeros).
  2. Proveedores y transporte de entrada (rutas refrigeradas isotérmicas con trazabilidad térmica, canastillas retornables y cajas de cartón 100% reciclado).
  3. Producción y transformación (Planta Sopó: pasteurización, fermentación, circuito cerrado CIP con reúso de agua de último enjuague, cogeneración con biogás de PTAR).
  4. Empaque y distribución (termoformado, envasado aséptico, reemplazo de cuchara plástica virgen por cuchara comestible horneada, sobrecopas transparentes monomaterial, logística refrigerada capilar nacional).
  5. Uso y consumo (rituales de consumo de niños y jóvenes, programa "Enjuaga, Aplana y Separa", ecodiseño apilable para upcycling).
  6. Transformación posconsumo (recolección comunitaria escolar PRAE "Come-Vasos", reciclaje formal a madera plástica para pupitres rurales y compostaje de línea Bio y papel semilla).
- Puntos Críticos (Hotspots):
  * Hotspot 1: Emisiones entéricas en hatos lecheros (mitigado con silvopastoreo).
  * Hotspot 2: Consumo energético y refrigerante en transporte y CEDI (mitigado con logística optimizada).
  * Hotspot 3: Generación de empaques plásticos posconsumo de un solo uso (cucharita y foil), mitigados con sustitución comestible y acuerdos REP.
- Indicadores GRI integrados: GRI 301 (Materiales), 302 (Energía), 303 (Agua), 305 (Emisiones GEI), 306 (Residuos).

3. COMPONENTE 2: ANÁLISIS DE CIRCULARIDADES (DIAGRAMA DE MARIPOSA - 15% DE LA RÚBRICA):
- Ala Izquierda (Ciclo Biológico - Verde / Regeneración de recursos naturales):
  * Loop Regenerativo: Envases de la línea Bio biodegradables en PLA/PHA compostables y etiquetas desprendibles de papel semilla de caléndula, albahaca o lechuga.
  * Loop en Cascada: Kumis a quesos análogos o sueros enriquecidos (validación sanitaria crítica: cadena de frío ininterrumpida máx 4°C y control microbiológico libre de Listeria y Salmonella); y aprovechamiento de mermas de cereales con aliados industriales (Ramo, Jet, Kellanova/Nutresa) para dietas animales y biogás.
  * Loop Corto: Cuchara crujiente comestible de galleta horneada enriquecida con fibra de avena (aw < 0.5, resistente 20 min en yogurt, rotulado de gluten).
- Ala Derecha (Ciclo Técnico - Azul / Conservación del valor de los materiales):
  * Loop Corto: Reutilización de vasos y tapas en manualidades hogareñas (maceteros autorregables, portalápices, bloques modulares encajables).
  * Loop Local: Concurso intercolegiado "Bon Yurt Transforma", puntos ecológicos "Come-Vasos" en cafeterías escolares, articulación con proyectos PRAE y canje por útiles escolares.
  * Loop en Cascada: Alianza con empresas de extrusión para transformar plástico PS/PP recuperado en madera plástica para pupitres escolares rurales (norma de seguridad: no apto para contacto alimentario directo, certificado contra lixiviación y resistencia mecánica) y cajas de cartón 100% reciclado con Smurfit Westrock.

4. COMPONENTE 3: PRINCIPIOS ELLEN MACARTHUR & JERARQUÍA 9R (10% DE LA RÚBRICA):
- Principio 1 Ellen MacArthur: Eliminar residuos y contaminación desde el diseño (Nivel 4 de madurez - reducción de calibre de pared -18% y adiós a cuchara plástica virgen).
- Principio 2 Ellen MacArthur: Circular productos y materiales en su valor más alto (Nivel 4 de madurez - simbiosis industrial con Ramo/Nutresa y transformación a mobiliario escolar).
- Principio 3 Ellen MacArthur: Regenerar los sistemas naturales (Nivel 3 de madurez - ganadería regenerativa y envases compostables Bio certificados EN 13432 / ASTM D6400).
- 9R aplicadas: R2 Reducir (ahorro de 420 t de resina virgen al año), R3 Reutilizar (upcycling escolar), R8 Reciclar (cierre de ciclo formal trazable).

5. COMPONENTE 4: ESTRATEGIAS RESOLVE & HOJA DE RUTA (25% DE LA RÚBRICA):
- Estrategia 1: Insumos Circulares y Línea Bio (biopolímeros, papel semilla y cuchara de galleta).
- Estrategia 2: Estrategia Posconsumo Lúdica Escolar (Red PRAE, "Bon Yurt Transforma" y Come-Vasos).
- Estrategia 3: Simbiosis Industrial y Valorización Biológica (Aprovechamiento de kumis a quesos, cereales con Ramo/Jet y madera plástica para escuelas rurales).

6. COMPONENTE 5: INDICADORES Y SISTEMA MRV (20% DE LA RÚBRICA):
- 7 Indicadores Ficha Técnica en escalas Micro (Planta Sopó), Meso (Red PRAE 250 colegios) y Macro (Metas REP Colombia).
- Sistema MRV en 5 Etapas: 1. Medición Operativa, 2. Reporte Interno, 3. Reporte Externo Normativo (Resolución 1407/2018), 4. Verificación Independiente (ICONTEC), 5. Ajuste y Mejora Continua (Ciclo PHVA).

REGLAS DE RESPUESTA:
- Responde siempre en español, con lenguaje profesional, riguroso, motivador y sintético.
- Si es simulación de jurado, formula preguntas directas sobre los criterios de la guía, o evalúa las respuestas otorgando retroalimentación técnica y nota sugerida (0.0 a 5.0).
`;

function generateSmartFallback(message: string, mode?: string): string {
  const msg = message.toLowerCase();

  // Mode: Evaluator / Jurado simulator
  if (mode === 'evaluator' || msg.includes('docente') || msg.includes('jurado') || msg.includes('rúbrica') || msg.includes('rubrica') || msg.includes('simular')) {
    if (msg.includes('portada') || msg.includes('equipo')) {
      return `🎓 PREGUNTA DEL JURADO (Portada & Contexto):
"Como evaluador, veo que han clasificado a Alpina en la Ruta A. ¿Qué evidencia concreta del último informe de sostenibilidad de Alpina justifica que no están haciendo greenwashing, y por qué seleccionaron exactamente 175 gramos como la Unidad Funcional del Bon Yurt?"

💡 Clave para responder 5.0:
• Citar la meta corporativa de Alpina (>95% de aprovechamiento postindustrial en Sopó) y el cumplimiento de la Resolución 1407/2018.
• Explicar que la UF de 175 g representa la función real del producto: contener e integrar ~150 g de base láctea con ~25 g de cereal garantizando inocuidad en cadena de frío.`;
    }

    if (msg.includes('acv') || msg.includes('ciclo de vida') || msg.includes('hotspot')) {
      return `🎓 PREGUNTA DEL JURADO (Componente 1 · ACV):
"En su análisis de ciclo de vida identifican tres hotspots principales. Expliquen: ¿cuál de esos puntos críticos tiene el mayor factor de emisión en Alcance 3, qué indicador GRI lo mide y cuál es la solución circular concreta que propone el equipo?"

💡 Clave para responder 5.0:
• Identificar el Hotspot 1 (Hatos lecheros: emisiones entéricas de metano CH4 medido bajo GRI 305).
• Demostrar cómo el silvopastoreo intensivo con 250 hatos aliados captura carbono y restaura praderas, mitigando este impacto desde la cuna.`;
    }

    if (msg.includes('mariposa') || msg.includes('circularidad') || msg.includes('bucle') || msg.includes('loop')) {
      return `🎓 PREGUNTA DEL JURADO (Componente 2 · Mariposa de Ellen MacArthur):
"En el Diagrama de Mariposa, ustedes proponen envases biodegradables en la línea Bio y cucharas comestibles. ¿Por qué la guía advierte que la biodegradabilidad por sí sola no garantiza el cierre del ciclo biológico, y qué condición sanitaria impide destinar kumis que perdió frío a consumo humano?"

💡 Clave para responder 5.0:
• Explicar que sin plantas de compostaje industrial certificadas (norma EN 13432), los biopolímeros terminan contaminando el flujo de reciclaje mecánico de plásticos.
• Reiterar el principio de inocuidad: el kumis a más de 4°C o con riesgo microbiológico solo puede redirigirse a biodigestión o nutrición animal, jamás a alimentos humanos.`;
    }

    if (msg.includes('estrategia') || msg.includes('resolve') || msg.includes('prioriz')) {
      return `🎓 PREGUNTA DEL JURADO (Componente 4 · Estrategias RESOLVE - 25% Rúbrica):
"El Componente 4 representa la cuarta parte de su nota final. ¿Cómo justifican que la Estrategia 2 (Red PRAE Come-Vasos) tenga mayor facilidad de implementación en el corto plazo que la Estrategia 3 (Simbiosis industrial de quesos), y quiénes son los aliados externos clave?"

💡 Clave para responder 5.0:
• La Red PRAE aprovecha infraestructura educativa existente y alianzas con recicladores de oficio (Resolución 1407), requiriendo baja inversión inicial de capital.
• La simbiosis láctea exige desarrollos biotecnológicos de I+D+I a mediano plazo (1-3 años) para estandarizar formulaciones y superar barreras regulatorias ante el INVIMA.`;
    }

    if (msg.includes('mrv') || msg.includes('indicador')) {
      return `🎓 PREGUNTA DEL JURADO (Componente 5 · Indicadores & Sistema MRV):
"Presenten dos indicadores de su ficha técnica: uno a escala Micro y otro a escala Meso. ¿Quién es el responsable de medirlos y cómo se auditan en la etapa 4 del ciclo MRV?"

💡 Clave para responder 5.0:
• Micro: % Contenido de material reciclado en empaque (medido mensualmente por Ingeniería de Empaques en planta).
• Meso: Tasa de retorno escolar PRAE (medida trimestralmente mediante pesaje conjunto con recicladores).
• Etapa 4: Auditoría de tercera parte independiente (ICONTEC / Bureau Veritas) bajo norma ISO 14021 / ISAE 3000.`;
    }

    return `🎓 PREGUNTA GENERAL DEL JURADO EVALUADOR:
"Equipo de Bon Yurt Alpina: Su propuesta busca transformar un producto tradicional en un referente de economía circular. ¿Cuál consideran que es la mayor limitación financiera y cultural de su propuesta y cómo la han mitigado en su hoja de ruta?"

💡 Clave para responder 5.0:
• Financiera: El costo superior de los biopolímeros (25-35%), mitigado por economías de escala y la prima de valor de marca de la línea Bio.
• Cultural: El hábito de descarte de empaques sucios por parte de los niños, mitigado con la lúdica del contenedor "Come-Vasos" y el canje de ecopuntos por kits escolares.`;
  }

  // Topic-specific technical responses
  if (msg.includes('hola') || msg.includes('buenos') || msg.includes('saludos') || msg.includes('quién eres') || msg.includes('quien eres')) {
    return '¡Hola! Soy el Experto Circular de Bon Yurt Alpina y tu asesor para la sustentación final de clase. Conozco cada cifra del documento técnico (Ruta A, 175 g de UF, 6 fases ACV, los 6 loops del Diagrama de Mariposa, 9R y MRV). Puedes pedirme datos específicos, argumentos para la rúbrica o activar el "Simulador de Jurado" para practicar preguntas de examen.';
  }

  if (msg.includes('kumis') || msg.includes('queso') || msg.includes('frío') || msg.includes('frio') || msg.includes('sanitaria')) {
    return 'Respecto al aprovechamiento de Kumis a quesos (Loop en cascada biológico):\n• Lotes no conformes por volumen o viscosidad se investigan para derivación a quesos análogos o sueros desmineralizados.\n• Precaución sanitaria crítica: Se exige verificación estricta de la cadena de frío (máximo 4°C ininterrumpida) y análisis microbiológico libre de patógenos (Listeria monocytogenes y Salmonella). Lotes con alteración sensorial o quiebre térmico NO pueden destinarse a consumo humano y se derivan a biodigestión o alimentos pecuarios.';
  }

  if (msg.includes('macarthur') || msg.includes('ellen') || msg.includes('principio') || msg.includes('9r')) {
    return 'El proyecto aplica los 3 principios de Ellen MacArthur y las 9R con evidencia rigurosa:\n1. Eliminar residuos desde el diseño (Nivel 4): Aligeramiento del 18% del peso del vaso y sustitución de la cuchara plástica por cuchara horneada comestible de avena.\n2. Circular materiales en su valor más alto (Nivel 4): Simbiosis industrial de mermas con Ramo/Nutresa y transformación mecánica de vasos en pupitres escolares.\n3. Regenerar la naturaleza (Nivel 3): Silvopastoreo con 250 hatos proveedores y línea Bio en PLA/PHA compostable con papel semilla.\n• Jerarquía 9R: Se priorizan R2 (Reducir 420 t de resina fósil), R3 (Reutilizar en manualidades) y R8 (Reciclar formalmente hacia madera plástica).';
  }

  if (msg.includes('unidad funcional') || msg.includes('acv') || msg.includes('hotspot') || msg.includes('límite') || msg.includes('limite')) {
    return 'Componente 1 · Análisis de Ciclo de Vida (ACV):\n• Unidad Funcional (UF): 175 gramos de mezcla láctea (vaso de yogurt/kumis base de ~150 g + sobrecopa con ~25 g de toppings crocantes de aliados como Jet o Chocoramo + cuchara).\n• Límites del Sistema: Cuna a la Tumba con Cierre Circular ("Cradle-to-Cradle"), abarcando 6 fases desde hatos lecheros hasta la transformación posconsumo.\n• 3 Hotspots clave: 1. Emisiones entéricas en hatos (mitigadas por silvopastoreo), 2. Consumo energético en refrigeración de transporte/CEDI, y 3. Residuos plásticos posconsumo de un solo uso.\n• Estándares GRI: GRI 301 (Materiales), GRI 302 (Energía), GRI 303 (Agua), GRI 305 (Emisiones) y GRI 306 (Residuos).';
  }

  if (msg.includes('cuchara') || msg.includes('galleta') || msg.includes('bio') || msg.includes('semilla') || msg.includes('etiqueta')) {
    return 'Estrategia de Insumos Circulares y Línea Bio:\n• Cuchara comestible: Horneada a base de salvado de avena y harina enriquecida (aw < 0.5), resistente 20 minutos en yogurt espeso sin ablandarse, eliminando 45 millones de cucharitas plásticas al año.\n• Envases Línea Bio: Fabricados con biopolímeros (PLA/PHA) compostables certificados bajo normas EN 13432 y ASTM D6400.\n• Etiquetas germinables: Impresas con tintas vegetales sobre papel semilla de caléndula, albahaca o lechuga para huertos escolares y caseros.';
  }

  if (msg.includes('prae') || msg.includes('colegio') || msg.includes('transforma') || msg.includes('come-vasos') || msg.includes('pupitre')) {
    return 'Estrategia Posconsumo Comunitaria Escolar:\n• Red PRAE: Se articula con los Proyectos Ambientales Escolares de colegios colombianos.\n• Puntos "Come-Vasos": Contenedores lúdicos con sección escurridora para evitar olores y acumulación de vectores.\n• Concurso "Bon Yurt Transforma": Los colegios que más recolectan compiten por parques infantiles y pupitres de madera plástica reciclada, mientras los niños canjean ecopuntos por útiles escolares.\n• Retorno social: Más de 250 colegios vinculados y donación de 1.800 pupitres certificados a escuelas rurales en zonas lecheras.';
  }

  if (msg.includes('mrv') || msg.includes('1407') || msg.includes('resolución') || msg.includes('ley 2232') || msg.includes('indicador')) {
    return 'Componente 5 · Indicadores y Sistema MRV:\n• 7 Fichas Técnicas: Contenido reciclado (%), retorno PRAE (%), aprovechamiento postindustrial (>95%), intensidad energética (kWh/t), intensidad hídrica (m³/t), pupitres donados y CO2eq evitado.\n• 5 Fases MRV: 1. Medición operativa (básculas y sensores IoT en Sopó), 2. Reporte interno (tableros mensuales PowerBI/Looker), 3. Reporte externo (cumplimiento Resolución 1407/2018 ante la ANLA y GRI 301/306), 4. Verificación independiente (auditoría ICONTEC/Bureau Veritas), y 5. Ajuste anual (ciclo PHVA por Comité Directivo Alpina BIC).';
  }

  return 'El Plan de Economía Circular de Bon Yurt Alpina articula armónicamente el Ciclo Biológico (envases bio, cuchara comestible de galleta, aprovechamiento de kumis y cereales) y el Ciclo Técnico (reutilización en el hogar, red PRAE Come-Vasos y reciclaje a pupitres). Cumple con la Ruta A de la guía de clase, demostrando que cerrar el ciclo es nutrir el futuro sin caer en greenwashing.';
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // Safe body parsing for Vercel and Node environments
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
      ? 'MODO DOCENTE/JURADO EVALUADOR DE LA SUSTENTACIÓN: Actúa como el profesor o jurado evaluador estricto pero constructivo. Formula preguntas incisivas sobre los puntos críticos, cita criterios de la rúbrica de clase (Ciclo de Vida, Mariposa, Principios, Estrategias RESOLVE, MRV) o evalúa la respuesta del estudiante otorgando calificación de 0.0 a 5.0 y sugerencias para un 5.0.'
      : 'MODO EXPERTO TÉCNICO CIRCULAR ALPINA: Responde con solvencia técnica, calidez pedagógica y datos exactos del plan del Bon Yurt.';

    const conversationPrompt = `
${SYSTEM_KNOWLEDGE}

${modePrompt}

HISTORIAL RECIENTE:
${(history || []).map((h: { sender: string; text: string }) => `${h.sender === 'user' ? 'Usuario' : 'Experto'}: ${h.text}`).join('\n')}

PREGUNTA O PETICIÓN ACTUAL:
${message}
`;

    // Try gemini-2.0-flash first; if not available, fallback to gemini-1.5-flash
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
