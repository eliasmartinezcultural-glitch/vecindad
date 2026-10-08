(() => {
  const D = window.VECINDAD_DATA;
  const S = window.VECINDAD_SOURCES || [];
  const $ = s => document.querySelector(s);
  const doors = $("#doors"), search = $("#search"), modal = $("#modal"), modalTitle = $("#modalTitle"), modalBody = $("#modalBody");

  function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
  function renderDoors(filter=""){
    const q=filter.trim().toLowerCase();
    const list=D.doors.filter(d=>!q || [d.title,d.desc,...d.tags].join(" ").toLowerCase().includes(q));
    doors.innerHTML=list.length ? list.map((d,i)=>`<button class="door" data-topic="${esc(d.id)}" style="--i:${i}">
      <span class="door-icon">${d.icon}</span><span class="door-number">${String(i+1).padStart(2,"0")}</span>
      <strong>${esc(d.title)}</strong><small>${esc(d.desc)}</small><span class="door-tags">${d.tags.slice(0,3).map(t=>`#${esc(t)}`).join(" ")}</span><span class="door-arrow">↗</span>
    </button>`).join("") : `<div class="empty">No encontramos esa puerta todavía.<br><b>Probá formular la duda con otras palabras.</b></div>`;
  }
  function openTopic(id){
    const d=D.doors.find(x=>x.id===id), t=D.topics[id] || D.topics.investigar;
    if(!d) return;
    modalTitle.textContent=d.title;
    modalBody.innerHTML=`
      <div class="topic-hero"><span class="big-icon">${d.icon}</span><div><p class="topic-question">${esc(t.question)}</p><div class="mini-tags">${d.tags.map(x=>`<span>#${esc(x)}</span>`).join("")}</div></div></div>
      <div class="topic-flow">${t.route.map((x,i)=>`<div><b>${String(i+1).padStart(2,"0")}</b><span>${esc(x)}</span></div>`).join("")}</div>
      <h3>Preguntas que abren la investigación</h3><ul class="question-list">${t.questions.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      <div class="source-note"><b>Regla de VECINDAD</b><br>Esta pantalla enseña el método. La respuesta final debe apoyarse en documentos y fuentes verificables.</div>`;
    modal.hidden=false; document.body.classList.add("locked"); setTimeout(()=>$(".close")?.focus(),20);
  }
  function close(){modal.hidden=true;document.body.classList.remove("locked");}
  doors.addEventListener("click",e=>{const b=e.target.closest("[data-topic]");if(b)openTopic(b.dataset.topic);});
  search.addEventListener("input",e=>renderDoors(e.target.value));
  $("#aboutBtn").addEventListener("click",()=>openTopic("investigar"));
  $("#caseBtn").addEventListener("click",()=>{
    modalTitle.textContent="Un caso empieza con una pregunta";
    modalBody.innerHTML=`<div class="case-example"><span class="case-label">EJEMPLO DIDÁCTICO · NO ES UN CASO REAL</span><h3>“Escuché que el municipio gastó dinero en una obra.”</h3><p>Antes de repetirlo como hecho, VECINDAD separa la afirmación en piezas:</p><div class="check-grid">
      <div><b>1 · ¿Quién lo dijo?</b><span>Identificar el origen.</span></div><div><b>2 · ¿Qué obra?</b><span>Precisar lugar, fecha y objeto.</span></div><div><b>3 · ¿Qué documento?</b><span>Buscar presupuesto, contratación y ejecución.</span></div><div><b>4 · ¿Qué significa “gastó”?</b><span>No confundir presupuesto con pago efectivo.</span></div><div><b>5 · ¿Quién controla?</b><span>Identificar la autoridad competente.</span></div><div><b>6 · ¿Qué falta?</b><span>Marcar lo que todavía no se puede afirmar.</span></div>
    </div><div class="evidence-row"><span>🟢 DOCUMENTADO</span><span>🟡 EN INVESTIGACIÓN</span><span>🔴 NO COMPROBADO</span></div></div>`;
    modal.hidden=false;document.body.classList.add("locked");
  });
  document.addEventListener("click",e=>{if(e.target.matches("[data-close]") || e.target.closest("[data-close]"))close();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)close();});
  renderDoors();
})();