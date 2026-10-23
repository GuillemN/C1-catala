# Entrenador Oficial de Català C1 · Proves i Activitats

Plataforma web interactiva dissenyada per preparar i practicar les proves oficials de **Llengua Catalana Nivell C1** (Diploma d'usuari experimentat, Govern d'Andorra / Marc Europeu Comú de Referència).

---

## 🌟 Característiques Principals

1. **Autocorrecció Immediata («et diu si és correcte o no»):**
   - Comprovació instantània en fer clic o prémer `Enter`.
   - Distinció visual clara: verd per a respostes correctes i vermell per a errors.
   - **Explicació normativa detallada:** cada pregunta inclou la regla gramatical o ortogràfica (accents, dièresis, dobles esses, combinació de pronoms febles com *l'hi* o *li'n*, verbs irregulars, etc.).

2. **Banc Ampli d'Activitats:**
   - **Examen Oficial CAT-C1-39** complet (Derivació, Frases fetes, Opció adequada, Text amb buits/cloze, Flexió, Transformacions).
   - **Nou Model d'Examen C1** complet (Derivació, Frases fetes, Opció adequada, Text amb buits/cloze, Flexió, Transformacions).
   - **Banc Temàtic Extra** amb desenes d'activitats de reforç categoritzades:
     - 🌱 *Derivació i Lèxic Culte*
     - 💡 *Frases Fetes i Modismes*
     - 🎯 *Precisió Lèxica, Parònims i Barbarismes a evitar*
     - 🧩 *Textos amb buits (Connectors textuals)*
     - ⚙️ *Flexió Nominal i Verbal d'alta dificultat*
     - 🔄 *Transformacions d'Oracions i Pronoms Febles Combinats*
   - 📖 **Comprensió Lectora Interactiva:** text oficial *«El sucre de la fruita: perjudicial o saludable?»* amb preguntes tipus test.
   - 💡 **Diccionari de Frases Fetes:** cercador interactiu de modismes típics C1 amb el seu significat.

3. **Modes d'Estudi:**
   - **🎯 Mode Pràctica Lliure:** respon activitat a activitat amb pistes (*💡 Pista*), visualització de solució (*👁️ Solució*) i navegació per graella.
   - **⏱️ Mode Simulacre d'Examen:** prova cronometrada (65 minuts oficials) amb avaluació sobre 20 punts i llindar d'aptitud (mínim 14/20 = 70%).
   - **⚠️ Mode Repassar Errors:** llista que recull exclusivament les preguntes que heu fallat per repetir-les fins a dominar-les.

4. **Experiència d'Usuari Moderna:**
   - Disseny responsiu i net (ordinador, tauleta i mòbil).
   - Mode fosc i clar (🌙/☀️).
   - So suau d'èxit/error (Web Audio API nativa, silenciable 🔊/🔇).
   - Registre automàtic de progrés, encerts, errors i ratxes a `localStorage`.

---

## 🚀 Com Executar l'Aplicació

Podeu obrir directament l'arxiu `index.html` amb qualsevol navegador web (doble clic), o bé iniciar un servidor local amb:

```bash
# Amb Node.js:
npx serve .
# O simplement:
node -e "const http = require('http'), fs = require('fs'), path = require('path'); http.createServer((q,s)=>{let f=path.join(__dirname, q.url==='/'?'index.html':q.url.split('?')[0]); fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);s.end()}else{s.writeHead(200);s.end(d)}})}).listen(3000,()=>console.log('http://localhost:3000'))"
```
