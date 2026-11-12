import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_KNOWLEDGE, generateSmartFallback } from './api/chat.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history, mode } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Mensaje requerido' });
    }

    if (!ai) {
      const fallbackResponse = generateSmartFallback(message, mode);
      return res.json({ reply: fallbackResponse, source: 'knowledge_engine' });
    }

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
    const fallbackResponse = generateSmartFallback(req.body?.message || '', req.body?.mode);
    return res.json({
      reply: fallbackResponse,
      source: 'knowledge_engine_fallback',
      notice: 'Respuesta generada con el motor de conocimiento técnico del proyecto.',
    });
  }
});

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
