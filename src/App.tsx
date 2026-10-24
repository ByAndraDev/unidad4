import { useState, type ReactNode } from "react";
import { topics, steps, resources, criteria, columns, questions, rubric, levelNames } from "./data";

const sections = [
  ["intro", "Misión"], ["tareas", "Encargo"], ["proceso", "Ruta"], ["recursos", "Bitácora"],
  ["actividad", "Laboratorio"], ["evaluacion", "Criterios"], ["conclusion", "Cierre"],
] as const;

function Section({ id, title, index, children }: { id: string; title: string; index: string; children: ReactNode }) {
  return (
    <section id={id} className="content-section">
      <div className="section-heading">
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");

  const copy = async () => {
    const text = questions.map((q, i) => `${i + 1}. ${q.text}\n${answers[q.id] ?? ""}`).join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setMsg("Respuestas copiadas al portapapeles.");
    } catch {
      setMsg("No se pudo copiar; selecciona el texto manualmente.");
    }
  };

  return (
    <div className="site-shell">
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" /> CUADERNO DE CAMPO <span className="eyebrow-divider">/</span> UNIDAD 04</p>
            <h1>Redes que<br /><em>llegan lejos.</em></h1>
            <p className="hero-description">
              Una misión para conectar sensores, territorio y datos. Investiga las redes WAN que hacen posible el IoT más allá del WiFi.
            </p>
            <a className="hero-link" href="#intro">Abrir misión <span aria-hidden="true">↓</span></a>
          </div>

          <div className="network-art" role="img" aria-label="Ilustración de sensores conectados a una red de largo alcance">
            <div className="art-coordinate">19°42&apos; N<br />98°58&apos; O</div>
            <svg viewBox="0 0 520 420" role="img" aria-hidden="true">
              <path className="route route-a" d="M74 286 185 208 280 252 421 116" />
              <path className="route route-b" d="M74 286 216 356 280 252 421 116" />
              <path className="route route-c" d="M185 208 216 356" />
              <circle className="pulse-ring" cx="280" cy="252" r="72" />
              <circle className="pulse-ring pulse-ring-delay" cx="280" cy="252" r="99" />
              <g className="map-node node-one" transform="translate(74 286)">
                <circle r="20" /><path d="M-6 0h12M0-6v12" />
              </g>
              <g className="map-node node-two" transform="translate(185 208)">
                <circle r="15" /><path d="M-5 0h10M0-5v10" />
              </g>
              <g className="map-node node-three" transform="translate(216 356)">
                <circle r="15" /><path d="M-5 0h10M0-5v10" />
              </g>
              <g className="tower" transform="translate(280 252)">
                <circle className="tower-core" r="26" />
                <path d="M-9 15 0-14 9 15M-5 4h10M-3 10h6M-18-7a25 25 0 0 1 0 26M18-7a25 25 0 0 0 0 26M-26-15a37 37 0 0 1 0 42M26-15a37 37 0 0 0 0 42" />
              </g>
              <g className="cloud-node" transform="translate(421 116)">
                <circle r="24" /><path d="M-12 5h24M-8 0l8-8 8 8M0-8v18" />
              </g>
              <circle className="map-spark" cx="364" cy="319" r="3" />
              <circle className="map-spark" cx="126" cy="113" r="2" />
              <circle className="map-spark" cx="449" cy="229" r="2" />
            </svg>
            <div className="art-label label-field"><span>01 / CAMPO</span><strong>200 sensores</strong></div>
            <div className="art-label label-gateway"><span>02 / ENLACE</span><strong>WAN · 60 km</strong></div>
            <div className="art-label label-cloud"><span>03 / DESTINO</span><strong>Datos útiles</strong></div>
            <div className="art-caption">HIDALGO, MX <span>●</span> ESCENARIO DE ESTUDIO</div>
          </div>
          <div className="hero-bottom"><span>TECNOLOGÍA EN TERRITORIO</span><span>26° N · UNA RED, MUCHOS CAMINOS</span></div>
        </div>
      </header>

      <nav aria-label="Secciones de la WebQuest" className="section-nav">
        <ul>
          {sections.map(([id, label], i) => (
            <li key={id}>
              <a href={`#${id}`}><span>0{i + 1}</span>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        <Section id="intro" index="01" title="La misión">
          <div className="mission-card">
            <div className="mission-tag">PLANTEAMIENTO</div>
            <div className="mission-copy">
              <p className="mission-lead">El campo está lejos. Los datos no pueden esperar.</p>
              <p>Una empresa agrícola de Hidalgo quiere monitorear humedad y temperatura en 200 parcelas dispersas en 60 km. No hay WiFi ni cables, y los sensores deben funcionar con batería durante años.</p>
              <p>Eres parte del equipo de ingeniería contratado para elegir la red WAN más adecuada. Compara la <strong>conectividad celular</strong>, <strong>LoRa y LoRaWAN</strong> y <strong>Sigfox</strong>, y recomienda una solución con argumentos.</p>
            </div>
            <div className="mission-stats">
              <div><strong>200</strong><span>parcelas</span></div>
              <div><strong>60<span className="stat-unit"> km</span></strong><span>de alcance</span></div>
              <div><strong>3</strong><span>tecnologías</span></div>
            </div>
          </div>
        </Section>

        <Section id="tareas" index="02" title="El encargo">
          <div className="section-intro">
            <p>Trabajen en equipos de 3 o 4 integrantes. Exploren las tres tecnologías y preparen una propuesta para el escenario.</p>
            <span className="mini-label">TRES FRECUENCIAS DE INVESTIGACIÓN</span>
          </div>
          <div className="topic-grid">
            {topics.map((t, i) => (
              <article key={t.id} className={`topic-card topic-${i + 1}`}>
                <div className="topic-top"><span className="topic-id">{t.id}</span><span className="topic-mark">↗</span></div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <span className="topic-rule" />
              </article>
            ))}
          </div>
          <div className="deliverable">
            <span className="deliverable-label">ENTREGABLE FINAL</span>
            <p>Una <strong>tabla comparativa</strong>, un <strong>diagrama de arquitectura</strong> y una <strong>presentación de 5 minutos</strong>.</p>
          </div>
        </Section>

        <Section id="proceso" index="03" title="La ruta">
          <p className="section-intro-text">Siete movimientos para pasar de la investigación a una decisión defendible.</p>
          <ol className="route-list">
            {steps.map((s, i) => (
              <li key={s}><span className="route-number">{String(i + 1).padStart(2, "0")}</span><span>{s}</span></li>
            ))}
          </ol>
        </Section>

        <Section id="recursos" index="04" title="Bitácora de fuentes">
          <p className="section-intro-text">Contrasta la información con documentación oficial y registra de dónde viene cada dato.</p>
          <div className="resource-list">
            {resources.map((r, i) => (
              <div className="resource-row" key={r.label}>
                <span className="resource-index">0{i + 1}</span>
                <strong>{r.label}</strong>
                <p>{r.text}</p>
                <span className="resource-arrow" aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="actividad" index="05" title="Mesa de análisis">
          <div className="activity-heading">
            <div><span className="mini-label">PARTE A</span><h3>Tabla comparativa</h3></div>
            <p>Completen cada celda con hallazgos verificables.</p>
          </div>
          <div className="table-wrap">
            <table className="comparison-table">
              <thead><tr><th>Criterio</th>{columns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {criteria.map((c) => (
                  <tr key={c}><th scope="row">{c}</th>{columns.map((col) => <td key={col}><input aria-label={`${c} – ${col}`} /></td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="activity-heading questions-heading">
            <div><span className="mini-label">PARTE B</span><h3>Preguntas guía</h3></div>
            <p>Guarda tus ideas y llévalas a la conversación del equipo.</p>
          </div>
          <div className="question-list">
            {questions.map((q, i) => (
              <div key={q.id} className="question-item">
                <label htmlFor={q.id}><span>{String(i + 1).padStart(2, "0")}</span>{q.text}</label>
                <textarea id={q.id} value={answers[q.id] ?? ""} onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })} />
              </div>
            ))}
          </div>
          <div className="copy-row">
            <button type="button" onClick={copy}>Copiar mis respuestas <span aria-hidden="true">↗</span></button>
            <span role="status" aria-live="polite">{msg}</span>
          </div>
        </Section>

        <Section id="evaluacion" index="06" title="Cómo se evalúa">
          <p className="section-intro-text">La propuesta cuenta tanto como la investigación: expliquen por qué su red responde al problema.</p>
          <div className="table-wrap">
            <table className="rubric-table">
              <thead><tr><th>Criterio</th>{levelNames.map((l) => <th key={l}>{l}</th>)}</tr></thead>
              <tbody>
                {rubric.map((r) => <tr key={r.criterion}><th scope="row">{r.criterion}</th>{r.levels.map((l) => <td key={l}>{l}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="conclusion" index="07" title="Antes de desconectar">
          <div className="closing-card">
            <span className="closing-kicker">IDEA DE CIERRE / 01</span>
            <p className="closing-lead">No existe una red WAN perfecta.<br /><em>Existe la red adecuada para el contexto.</em></p>
            <p>La elección depende de la cobertura, el consumo, el costo y la cantidad de datos. Explica cuándo conviene la red celular, cuándo LoRaWAN y por qué Sigfox ha tenido un camino más difícil.</p>
            <div className="reflection"><span>PARA REFLEXIONAR</span><p>¿Qué cambiaría si monitorearas lo mismo dentro de una ciudad con buena cobertura 4G?</p></div>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <span>WEBQUEST <b>·</b> UNIDAD 04</span>
        <span>REDES DE ÁREA AMPLIA <span className="footer-star">✳</span></span>
      </footer>
    </div>
  );
}
