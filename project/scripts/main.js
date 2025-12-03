document.addEventListener("DOMContentLoaded", () => {
  setFooter();
  renderWork();
  setupForm();
});

function setFooter() {
  const year = new Date().getFullYear();
  const text = `© ${year} Raphael Daveal - Swift Insight SDR`;
  const ids = ["footer-copy", "footer-copy-2", "footer-copy-3", "footer-copy-4", "footer-copy-5"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

function renderWork() {
  const work = [
    { title: "LinkedIn Outreach", desc: "Daily prospect messaging and sequencing." },
    { title: "CRM Hygiene", desc: "Updating statuses and maintaining clean data." },
    { title: "Instagram Scraper", desc: "Extracting and filtering business profiles." },
    { title: "WhatsApp Detection", desc: "Identifying numbers and group data." },
    { title: "Reporting", desc: "Weekly outreach and KPI summaries." },
    { title: "RecurScan Assistance", desc: "Recurring transaction detection research." }
  ];

  const container = document.getElementById("work-list");
  if (!container) return;

  container.innerHTML = work
    .map(item => `<div class="card"><h3>${item.title}</h3><p>${item.desc}</p></div>`)
    .join("");
}

function setupForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const output = document.getElementById("form-output");
  const savedList = document.getElementById("saved-list");

  function load() {
    return JSON.parse(localStorage.getItem("messages") || "[]");
  }

  function saveMessage(msg) {
    const list = load();
    list.unshift(msg);
    localStorage.setItem("messages", JSON.stringify(list));
  }

  function renderSaved() {
    if (!savedList) return;
    const msgs = load();
    savedList.innerHTML = msgs.length
      ? msgs.map(m => `<div>${m.name} (${m.email}) — ${m.message}</div>`).join("")
      : "No saved messages";
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const msg = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim()
    };

    if (!msg.name || !msg.email) {
      output.textContent = "Fill all required fields.";
      return;
    }

    saveMessage(msg);
    form.reset();
    output.textContent = "Saved.";
    renderSaved();
  });

  document.getElementById("clearSaved").addEventListener("click", () => {
    localStorage.removeItem("messages");
    renderSaved();
  });

  renderSaved();
}
