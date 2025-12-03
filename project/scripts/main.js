function setFooterText(){
  const text = `Raphael Daveal - SDR at Swift Insight © ${new Date().getFullYear()}`;
  const ids = ['footer-copy','footer-copy-2','footer-copy-3','footer-copy-4','footer-copy-5'];
  ids.forEach(id => document.getElementById(id) ? document.getElementById(id).textContent = text : null);
}
function renderWorkList(){
  const items = [
    { title: "LinkedIn outreach", desc: "Daily prospecting, messaging and qualification." },
    { title: "CRM hygiene", desc: "Updating statuses, tagging and automations." },
    { title: "Instagram scraper", desc: "AI-filtered lead extraction for LATAM cellphone sellers." },
    { title: "WhatsApp detection", desc: "Number extraction and group identification." },
    { title: "Reporting", desc: "Weekly metrics and pipeline dashboards." },
    { title: "RecurScan", desc: "Recurring transaction detection proof of concept." }
  ];
  const target = document.getElementById('work-list');
  if(!target) return;
  target.innerHTML = items.map(i => `<div class="card"><h3>${i.title}</h3><p>${i.desc}</p></div>`).join('');
}
function contactHandler(){
  const form = document.getElementById('contactForm');
  const output = document.getElementById('form-output');
  const savedList = document.getElementById('saved-list');
  const clearBtn = document.getElementById('clearSaved');
  function load(){ return JSON.parse(localStorage.getItem('sd_portfolio_msgs') || '[]'); }
  function render(){ if(!savedList) return; const arr = load(); savedList.innerHTML = arr.length ? arr.map(s => `<div style="padding:8px;border:1px solid #eee;margin-bottom:8px;border-radius:6px"><strong>${s.name}</strong> <span style="color:var(--muted)">(${new Date(s.date).toLocaleString()})</span><div style="margin-top:6px">${s.message || '<em>No message</em>'}</div></div>`).join('') : '<p style="color:var(--muted)">No saved messages</p>'; }
  if(!form){ render(); return; }
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email){ output.textContent = 'Please fill required fields.'; return; }
    if(!/^\S+@\S+\.\S+$/.test(email)){ output.textContent = 'Enter a valid email.'; return; }
    const all = load();
    all.unshift({ name, email, message, date: new Date().toISOString() });
    localStorage.setItem('sd_portfolio_msgs', JSON.stringify(all));
    output.textContent = 'Message saved.';
    form.reset();
    render();
  });
  if(clearBtn){ clearBtn.addEventListener('click', function(){ localStorage.removeItem('sd_portfolio_msgs'); render(); }); }
  render();
}
function init(){
  setFooterText();
  renderWorkList();
  contactHandler();
}
document.addEventListener('DOMContentLoaded', init);