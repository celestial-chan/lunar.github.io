// ================= SPLASH TEXT =================
window.onload = () => {
  const words = [
    "old skyblock gamer",
    "vibe coder (allegedly)",
    "2000s UI enjoyer",
    "frutiger aero core",
    "grinding pixels..."
  ];

  const el = document.getElementById("splashtext");
  if (el) {
    el.textContent = words[Math.floor(Math.random() * words.length)];
  }
};

// ================= PAGE SWITCH =================
function showPage(page) {
  const content = document.getElementById("content");

  if (page === "info") {
    content.innerHTML = `
      <h2>profile</h2>
      <p>life is like roblox</p>
      <p>just a coder + gamer doing random stuff</p>
    `;
  }

  if (page === "skyblock") {
    content.innerHTML = `
      <h2>skyblock</h2>
      <p>prison server grind</p>

      <div class="image-box">
        <img src="image/prison.png" alt="prison server">
      </div>
    `;
  }

  if (page === "projects") {
    content.innerHTML = `
      <h2>projects</h2>
      <p>I forgor 💀</p>
    `;
  }

  if (page === "settings") {
    content.innerHTML = `
      <h2>settings</h2>
      <label>
        <input type="checkbox" id="skip">
        skip splash text
      </label>
    `;
  }
}
