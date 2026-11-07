import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI client if GEMINI_API_KEY is available
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
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
  * Loop Regenerativo (Retorno a la naturaleza): Envases de la línea Bio biodegradables en PLA/PHA compostables y etiquetas desprendibles de papel semilla de caléndula, albahaca o lechuga.
  * Loop en Cascada (Transformación de subproductos): Kumis a quesos análogos o sueros enriquecidos (validación sanitaria crítica: cadena de frío ininterrumpida máx 4°C y control microbiológico libre de Listeria y Salmonella); y aprovechamiento de mermas de cereales con aliados industriales (Ramo, Jet, Kellanova/Nutresa) para dietas animales y biogás.
  * Loop Corto (Consumo y aprovechamiento): Cuchara crujiente comestible de galleta horneada enriquecida con fibra de avena (aw < 0.5, resistente 20 min en yogurt, rotulado de gluten).
- Ala Derecha (Ciclo Técnico - Azul / Conservación del valor de los materiales):
  * Loop Corto (Reutilización): Reutilización de vasos y tapas en manualidades hogareñas (maceteros autorregables, portalápices, bloques modulares encajables).
  * Loop Local (Recuperación comunitaria): Concurso intercolegiado "Bon Yurt Transforma", puntos ecológicos "Come-Vasos" en cafeterías escolares, articulación con proyectos PRAE y canje por útiles escolares.
  * Loop en Cascada (Simbiosis industrial): Alianza con empresas de extrusión para transformar plástico PS/PP recuperado en madera plástica para pupitres escolares rurales (norma de seguridad: no apto para contacto alimentario directo, certificado contra lixiviación y resistencia mecánica) y cajas de cartón 100% reciclado con Smurfit Westrock.

4. COMPONENTE 3: PRINCIPIOS ELLEN MACARTHUR & JERARQUÍA 9R (10% DE LA RÚBRICA):
- Principio 1 Ellen MacArthur: Eliminar residuos y contaminación desde el diseño (Nivel 4 de madurez - reducción de calibre de pared -18% y adiós a cuchara plástica virgen).
- Principio 2 Ellen MacArthur: Circular productos y materiales en su valor más alto (Nivel 4 de madurez - simbiosis industrial con Ramo/Nutresa y transformación a mobiliario escolar).
- Principio 3 Ellen MacArthur: Regenerar los sistemas naturales (Nivel 3 de madurez - ganadería regenerativa y envases compostables Bio certificados EN 13432 / ASTM D6400).
- 9R aplicadas: R2 Reducir (ahorro de 420 t de resina virgen al año), R3 Reutilizar (upcycling escolar), R8 Reciclar (cierre de ciclo formal trazable).

5. COMPONENTE 4: ESTRATEGIAS RESOLVE & HOJA DE RUTA (25% DE LA RÚBRICA - MAYOR PESO):
- Estrategia 1: Insumos Circulares y Línea Bio (Ecodiseño radical con biopolímeros, papel semilla y cuchara de galleta).
- Estrategia 2: Estrategia Posconsumo Lúdica Escolar (Red PRAE, "Bon Yurt Transforma" y Come-Vasos).
- Estrategia 3: Simbiosis Industrial y Valorización Biológica (Aprovechamiento de kumis, cereales cruzados con Ramo/Jet y madera plástica para escuelas rurales).
- Matriz de Priorización: Alto Impacto y Alta Facilidad (Estrategias 1 y 2 en el corto plazo; Estrategia 3 en mediano/largo plazo por desarrollo de I+D).

6. COMPONENTE 5: INDICADORES Y SISTEMA MRV (20% DE LA RÚBRICA):
- 7 Indicadores Ficha Técnica:
  1. % Contenido de material reciclado/bio: (Peso material reciclado / Peso total) * 100.
  2. Tasa de aprovechamiento postindustrial: >95%.
  3. Intensidad energética: kWh/tonelada de Bon Yurt.
  4. Intensidad hídrica: m³/tonelada de producto.
  5. Tasa de retorno escolar PRAE: % de envases devueltos sobre puestos en mercado.
  6. Huella de carbono evitada (Alcance 3): Toneladas CO2eq evitadas por ecodiseño y alianzas lecheras.
  7. % de cucharas plásticas sustituidas por cuchara comestible (Meta: 100%).
- Sistema MRV en 5 Etapas:
  1. Medición Operativa (Básculas calibradas en planta Sopó y centros de acopio, sensores IoT de cadena de frío).
  2. Reporte Interno (Tablero gerencial PowerBI / Looker mensual a la Dirección de Sostenibilidad).
  3. Reporte Externo Normativo (Resolución 1407/2018 de MinAmbiente, Ley 2232 de plásticos de un solo uso, informe anual ANLA, GRI 301/306).
  4. Verificación Independiente (Auditoría de tercera parte ICONTEC / Bureau Veritas bajo ISO 14021 / ISAE 3000).
  5. Ajuste y Mejora Continua (Ciclo PHVA anual evaluado por el Comité Directivo de Alpina S.A.S. BIC).

7. PENSAMIENTO CRÍTICO Y LIMITACIONES (10% DE LA RÚBRICA):
- Reconocimiento de barreras reales:
  * Barrera sanitaria: El kumis que perdió cadena de frío (>4°C) NO puede reprocesarse para humanos; debe ir a digestión anaerobia o alimentos pecuarios.
  * Barrera de infraestructura: En Colombia la mayoría de municipios no cuenta con plantas de compostaje industrial para PLA/PHA; por eso la estrategia combina reciclaje mecánico de PP/PS con la línea Bio piloto.
  * Barrera económica: El costo de biopolímeros y cuchara comestible es 25-35% superior a resinas fósiles, financiado por primas verdes de marca y alianzas de co-branding.

REGLAS DE RESPUESTA:
- Responde siempre en español, con lenguaje profesional, riguroso y sintético.
- Si el usuario te pide simular una pregunta de sustentación o evaluar una respuesta, actúa como el docente evaluador, señala fortalezas, brechas según la rúbrica y cómo responder de manera contundente citando datos exactos.
- Cita siempre las fuentes técnicas oficiales del plan.
`;

// API route for chat with Gemini
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history, mode } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Mensaje requerido' });
    }

    if (!ai) {
      const fallbackResponse = generateSmartFallback(message);
      return res.json({ reply: fallbackResponse, source: 'knowledge_engine' });
    }

    const modePrompt = mode === 'evaluator'
      ? 'MODO DOCENTE/JURADO EVALUADOR: Evalúa la respuesta del estudiante frente a los criterios de la rúbrica de clase (Ciclo de vida, Mariposa, Principios, Estrategias, MRV). Dale retroalimentación constructiva, calificación sugerida y el dato técnico clave para un 5.0.'
      : 'MODO EXPERTO TÉCNICO: Responde de manera concisa (2 a 4 párrafos o viñetas claras), con datos cuantitativos precisos del proyecto Bon Yurt Alpina.';

    const conversationPrompt = `
${SYSTEM_KNOWLEDGE}

${modePrompt}

HISTORIAL RECIENTE:
${(history || []).map((h: { sender: string; text: string }) => `${h.sender === 'user' ? 'Usuario' : 'Experto'}: ${h.text}`).join('\n')}

PREGUNTA / COMENTARIO DEL ESTUDIANTE O DOCENTE:
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
    const fallbackResponse = generateSmartFallback(req.body?.message || '');
    return res.json({
      reply: fallbackResponse,
      source: 'knowledge_engine_fallback',
      notice: 'Respuesta generada con la base de datos técnica del proyecto.',
    });
  }
});

function generateSmartFallback(msg: string): string {
  const lower = msg.toLowerCase();

  if (lower.includes('kumis') || lower.includes('queso') || lower.includes('frío') || lower.includes('frio') || lower.includes('sanitaria')) {
    return 'Respecto al aprovechamiento de Kumis a quesos (Loop en cascada biológico): Se investiga el uso de lotes no conformes de kumis por volumen o consistencia para la producción de quesos análogos o sueros enriquecidos. Como nota sanitaria crítica, se requiere validación estricta e ininterrumpida de la cadena de frío (máximo 4°C) y control microbiológico certificado libre de patógenos (Listeria y Salmonella) antes de cualquier reproceso.';
  }

  if (lower.includes('macarthur') || lower.includes('ellen') || lower.includes('principio') || lower.includes('9r')) {
    return 'El proyecto aplica los 3 principios de la Fundación Ellen MacArthur y las 9R:\n1. Eliminar residuos y contaminación desde el diseño (Nivel 4 de madurez): Rediseño de vaso (-18% peso) y cuchara comestible de galleta.\n2. Circular productos y materiales en su valor más alto (Nivel 4): Simbiosis industrial de plásticos a mobiliario escolar y alianzas con Nutresa/Ramo.\n3. Regenerar la naturaleza (Nivel 3): Envases biodegradables Bio, etiquetas germinables con semillas y silvopastoreo lechero.\nJerarquía 9R: R2 Reducir (420 t resina virgen/año), R3 Reutilizar (upcycling escolar) y R8 Reciclar (madera plástica).';
  }

  if (lower.includes('unidad funcional') || lower.includes('acv') || lower.includes('límite') || lower.includes('limite') || lower.includes('hotspot')) {
    return 'La Unidad Funcional definida en el Análisis de Ciclo de Vida (ACV) es de 175 gramos de mezcla láctea (vaso termoformado con ~150 g de base láctea + sobrecopa transparente con toppings crujientes de aliados como Jet, Chocoramo o cereales). Los límites corresponden a un enfoque "Cuna a la Tumba con Cierre Circular" (Cradle-to-Cradle), cubriendo 6 fases. Los 3 Hotspots clave son: emisiones entéricas en hatos, cadena de frío en transporte/CEDI y empaques plásticos posconsumo.';
  }

  if (lower.includes('cuchara') || lower.includes('galleta') || lower.includes('bio') || lower.includes('etiqueta') || lower.includes('semilla')) {
    return 'En las estrategias de insumos circulares:\n• Cuchara comestible: Fabricada con galleta horneada enriquecida con fibra de avena (aw < 0.5) para eliminar 45 millones de cucharas de plástico virgen al año.\n• Línea Bio: Envases en biopolímeros (PLA/PHA) compostables certificados bajo norma EN 13432 / ASTM D6400.\n• Etiquetas con semillas: Papel germinable con semillas de caléndula o lechuga para que los niños las siembren tras consumir el Bon Yurt.';
  }

  if (lower.includes('prae') || lower.includes('colegio') || lower.includes('transforma') || lower.includes('come-vasos') || lower.includes('escuela')) {
    return 'La estrategia posconsumo comunitaria se articula con los Proyectos Ambientales Escolares (PRAE) en colegios colombianos mediante el concurso "Bon Yurt Transforma". Los estudiantes recogen y limpian los vasos en puntos ecológicos "Come-Vasos", acumulando ecopuntos canjeables por útiles escolares y dotando a escuelas rurales con parques infantiles y pupitres de madera plástica reciclada.';
  }

  if (lower.includes('mrv') || lower.includes('1407') || lower.includes('resolución') || lower.includes('indicador') || lower.includes('etapas')) {
    return 'El sistema MRV (Monitoreo, Reporte y Verificación) opera en 5 fases:\n1. Medición Operativa (básculas en planta Sopó y centros de acopio).\n2. Reporte Interno (tableros mensuales en PowerBI/Looker).\n3. Reporte Externo (cumplimiento de la Resolución 1407/2018 y Ley 2232 de MinAmbiente, con estándares GRI 301/306 y reporte a la ANLA).\n4. Verificación Independiente (auditoría de tercera parte ICONTEC / Bureau Veritas).\n5. Ajuste y Mejora (ciclo PHVA anual revisado por Comité Directivo).';
  }

  return 'El Plan de Economía Circular de Bon Yurt Alpina articula el Ciclo Biológico (envases Bio, cuchara comestible de galleta, aprovechamiento de kumis y cereales con Ramo/Nutresa) y el Ciclo Técnico (reutilización DIY, red de colegios PRAE "Bon Yurt Transforma" y reciclaje a pupitres escolares). Cumple la Ruta A de la guía y garantiza el cierre integral según el Diagrama de Mariposa de la Fundación Ellen MacArthur.';
}

// Serve Vite dev server or static build
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, () => {
    console.log(`Bon Yurt Circular Svelte 5 App running at http://localhost:${port}`);
  });
}

startServer();
