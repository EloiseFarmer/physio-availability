const container = document.getElementById("availability-grid");
container.innerHTML = "";

data.forEach(site => {

  // ----- SITE HEADER (CLICKABLE) -----
  const siteHeader = document.createElement("div");
  siteHeader.textContent = "▶ " + site.site;
  siteHeader.style.cursor = "pointer";
  siteHeader.style.fontWeight = "bold";
  siteHeader.style.marginTop = "30px";
  siteHeader.style.userSelect = "none";

  container.appendChild(siteHeader);

  // ----- COLLAPSIBLE CONTAINER -----
  const siteContent = document.createElement("div");
  siteContent.style.display = "none";
  siteContent.style.marginLeft = "20px";

  // ----- GRID FOR THIS SITE -----
  const grid = document.createElement("div");
  grid.className = "grid";

  // Header row
  grid.appendChild(makeHeader("Practitioner"));
  dates.forEach(d => grid.appendChild(makeHeader(d)));

  // Practitioner rows
  site.practitioners.forEach(practitioner => {
    grid.appendChild(makeLabel(practitioner.name));
    practitioner.availability.forEach(v => grid.appendChild(makeCell(v)));
  });

  siteContent.appendChild(grid);
  container.appendChild(siteContent);

  // ----- TOGGLE LOGIC -----
  siteHeader.addEventListener("click", () => {
    const isOpen = siteContent.style.display === "block";
    siteContent.style.display = isOpen ? "none" : "block";
    siteHeader.textContent = (isOpen ? "▶ " : "▼ ") + site.site;
  });
});

/* ---------- helpers ---------- */

function makeHeader(text) {
  const d = document.createElement("div");
  d.className = "header";
  d.textContent = text;
  return d;
}

function makeLabel(text) {
  const d = document.createElement("div");
  d.className = "label";
  d.textContent = text;
  return d;
}

function makeCell(value) {
  const d = document.createElement("div");
  d.className = "cell";

  d.style.background =
    value > 0.7 ? "#4caf50" :
    value > 0.4 ? "#ffeb3b" :
    value > 0.2 ? "#ff9800" :
                  "#f44336";

  return d;
}
``
