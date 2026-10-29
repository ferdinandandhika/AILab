(() => {
  const cfg = window.APP_CONFIG || {};
  const sb = cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && window.supabase
    ? window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY)
    : null;

  const $ = (s) => document.querySelector(s);
  const I = {
    clock: '<svg viewBox="0 0 24 24" width="13" height="13"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm1 5h-2v6l5 3 1-1.7-4-2.3V7Z"/></svg>',
    slide: '<svg viewBox="0 0 24 24" width="13" height="13"><path fill="currentColor" d="M3 4h18v12H3V4Zm2 2v8h14V6H5Zm4 12h6v2H9v-2Z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" width="13" height="13"><path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8l-5 4V4a1 1 0 0 1 1-1Z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M8 3h11a2 2 0 0 1 2 2v11h-2V5H8V3Zm-3 4h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm0 2v10h11V9H5Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="m9 16.2-3.5-3.5L4 14.2l5 5 11-11-1.4-1.4L9 16.2Z"/></svg>',
    down: '<svg viewBox="0 0 24 24" width="15" height="15"><path fill="currentColor" d="M11 3h2v10l4-4 1.4 1.4L12 16.8l-6.4-6.4L7 9l4 4V3ZM4 19h16v2H4v-2Z"/></svg>',
  };
  const esc = (t = "") => t.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  let DATA = { sessions: [], files: [] };

  // ---------------- LOAD DATA ----------------
  async function load() {
    if (sb) {
      try {
        const [{ data: s, error: e1 }, { data: f, error: e2 }] = await Promise.all([
         sb.from("sessions").select("id,no,title,description,sort,prompts(id,label,prompt,sort),session_files(file_id)").order("sort"),
          sb.from("files").select("id,code,name,path,description").order("id"),
        ]);
        if (e1 || e2) throw e1 || e2;
        DATA = {
          files: f.map((x) => ({ id: x.id, name: x.name, path: x.path, description: x.description })),
          sessions: s.map((x) => ({
            ...x,
            prompts: (x.prompts || []).sort((a, b) => a.sort - b.sort),
            file_ids: (x.session_files || []).map((r) => r.file_id),
          })),
        };
        return;
      } catch (err) {
        console.warn("Supabase gagal, pakai data cadangan:", err);
      }
    }
    DATA = window.FALLBACK_DATA;
  }

  const fileById = (id) => DATA.files.find((f) => f.id === id);

  // ---------------- RENDER ----------------
  function highlight(text, q) {
    const safe = esc(text);
    if (!q) return safe;
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
    return safe.replace(re, "<mark>$1</mark>");
  }

  function render(q = "") {
    const query = q.trim().toLowerCase();
    const list = DATA.sessions
      .map((s) => {
        if (!query) return s;
        const titleHit = s.title.toLowerCase().includes(query);
        const prompts = s.prompts.filter((p) => (p.label + " " + p.prompt).toLowerCase().includes(query));
        return titleHit ? s : prompts.length ? { ...s, prompts } : null;
      })
      .filter(Boolean);

    $("#toc").innerHTML = list
      .map((s) => `<li><a href="#s-${s.no}" data-no="${s.no}"><span class="t-no">${s.no}</span>${esc(s.title)}</a></li>`)
      .join("");

    if (!list.length) {
      $("#sessions").innerHTML = `<div class="empty">Tidak ada prompt yang cocok dengan "<b>${esc(q)}</b>".</div>`;
      return;
    }

    $("#sessions").innerHTML = list
      .map((s) => {
        const files = (s.file_ids || []).map(fileById).filter(Boolean);
        return `
        <article class="s-card" id="s-${s.no}">
          <div class="s-top">
            <div class="s-no">${s.no}</div>
            <div>
              <h3 class="s-title">${highlight(s.title, query)}</h3>
              <div class="meta">
                <span class="chip">${I.clock} ${esc(s.time_range || "")} · ${s.duration} menit</span>
                <span class="chip">${I.slide} Slide ${esc(s.slides || "-")}</span>
                ${s.prompts.length ? `<span class="chip">${I.chat} ${s.prompts.length} prompt</span>` : ""}
              </div>
            </div>
          </div>
          ${s.activities?.length ? `<ul class="acts">${s.activities.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>` : ""}
          ${files.length ? `<div class="s-files">${files.map((f) =>
            `<a class="file-btn" href="${f.path}" download data-fid="${f.id}">${I.down} ${esc(f.name)}.docx</a>`).join("")}</div>` : ""}
          ${s.prompts.length ? `<div class="prompts">${s.prompts.map((p, i) => `
            <div class="p-card">
              <div class="p-head">
                <span class="p-label">${esc(p.label)}</span>
                <button class="copy" data-text="${esc(p.prompt)}" data-pid="${p.id ?? ""}">${I.copy} Copy</button>
              </div>
              <div class="p-body">${highlight(p.prompt, query)}</div>
            </div>`).join("")}</div>` : ""}
        </article>`;
      })
      .join("");
    spy();
  }

  function renderFiles() {
    $("#files").innerHTML = DATA.files
      .map((f) => `
      <div class="f-item">
        <div class="f-ico">W</div>
        <h3>${esc(f.name)}</h3>
        <p>${esc(f.description || "")}</p>
        <a class="btn btn-red" href="${f.path}" download data-fid="${f.id}">${I.down} Download .docx</a>
      </div>`)
      .join("");
    $("#stat-sesi").textContent = DATA.sessions.length;
    $("#stat-prompt").textContent = DATA.sessions.reduce((n, s) => n + s.prompts.length, 0);
    $("#stat-file").textContent = DATA.files.length;
  }

  // ---------------- COPY ----------------
  async function copyText(t) {
    try { await navigator.clipboard.writeText(t); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = t; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
    }
  }
  let toastT;
  function toast(msg) {
    const el = $("#toast"); el.textContent = msg; el.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("show"), 1600);
  }

  document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".copy");
    if (btn) {
      const txt = document.createElement("textarea"); txt.innerHTML = btn.dataset.text;
      await copyText(txt.value);
      btn.classList.add("done"); btn.innerHTML = I.check + " Tersalin";
      setTimeout(() => { btn.classList.remove("done"); btn.innerHTML = I.copy + " Copy"; }, 1500);
      toast("✓ Prompt disalin, tinggal paste di AI");
      if (sb && btn.dataset.pid) sb.rpc("increment_copy", { p_id: Number(btn.dataset.pid) }).then(() => {});
    }
    const dl = e.target.closest("[data-fid]");
    if (dl && sb && typeof DATA.files[0]?.id === "number") {
      sb.rpc("increment_download", { f_id: Number(dl.dataset.fid) }).then(() => {});
    }
  });

  // ---------------- SEARCH & SCROLLSPY ----------------
  let t;
  $("#search").addEventListener("input", (e) => { clearTimeout(t); t = setTimeout(() => render(e.target.value), 150); });

  let obs;
  function spy() {
    obs?.disconnect();
    obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const no = en.target.id.replace("s-", "");
          document.querySelectorAll("#toc a").forEach((a) => a.classList.toggle("active", a.dataset.no === no));
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".s-card").forEach((c) => obs.observe(c));
  }

  // ---------------- INIT ----------------
  load().then(() => { render(); renderFiles(); });
})();
