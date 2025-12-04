document.addEventListener("DOMContentLoaded", () => {
  setFooter();
  renderRoleResponsibilities();
  setupForm();
});

function setFooter() {
  const year = new Date().getFullYear();
  const text = `© ${year} Raphael Daveal - Sales Development Representative at Swift Insight`;
  const ids = ["footer-copy", "footer-copy-2", "footer-copy-3"];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text;
    }
  });
}

function renderRoleResponsibilities() {
  const list = document.getElementById("role-list");
  if (!list) {
    return;
  }

  const responsibilities = [
    {
      title: "Prospect Research",
      desc: "Use LinkedIn Sales Navigator to search for companies and decision makers that match the ideal customer profile."
    },
    {
      title: "Outbound Outreach",
      desc: "Send connection requests and follow up messages that feel personal and relevant, not automated or spammy."
    },
    {
      title: "Lead Qualification",
      desc: "Ask simple questions to learn current situation, interest, and fit before a lead is passed forward."
    },
    {
      title: "Pipeline Support",
      desc: "Update lead records so the team can clearly see who has been contacted, who replied, and who needs follow up."
    },
    {
      title: "Content Posting",
      desc: "Help prepare and publish short posts on the company page that share wins, insights, or useful information."
    },
    {
      title: "Comment Engagement",
      desc: "Respond to comments on company and leadership posts, keep conversations going, and flag strong buying signals."
    }
  ];

  list.innerHTML = responsibilities
    .map(item => {
      return `<div class="card centered">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>`;
    })
    .join("");
}

function setupForm() {
  const form = document.getElementById("contactForm");
  if (!form) {
    return;
  }

  const output = document.getElementById("form-output");
  const savedList = document.getElementById("saved-list");
  const clearBtn = document.getElementById("clearSaved");

  function loadMessages() {
    const stored = localStorage.getItem("sdr_messages");
    return stored ? JSON.parse(stored) : [];
  }

  function saveMessages(messages) {
    localStorage.setItem("sdr_messages", JSON.stringify(messages));
  }

  function renderSaved() {
    if (!savedList) {
      return;
    }

    const messages = loadMessages();

    if (!messages.length) {
      savedList.innerHTML = "No saved messages.";
      return;
    }

    savedList.innerHTML = messages
      .map(msg => {
        const dateLabel = new Date(msg.date).toLocaleString();
        return `<div class="card">
          <p><strong>${msg.name}</strong> (${msg.email})</p>
          <p>${msg.message || "No message provided"}</p>
          <p>${dateLabel}</p>
        </div>`;
      })
      .join("");
  }

  form.addEventListener("submit", event => {
    event.preventDefault();

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const messageValue = document.getElementById("message").value.trim();

    if (!nameValue || !emailValue) {
      output.textContent = "Please fill in the required fields.";
      return;
    }

    const messages = loadMessages();
    const newEntry = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
      date: new Date().toISOString()
    };

    messages.unshift(newEntry);
    saveMessages(messages);
    form.reset();
    output.textContent = "Message saved locally.";
    renderSaved();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem("sdr_messages");
      renderSaved();
    });
  }

  renderSaved();
}