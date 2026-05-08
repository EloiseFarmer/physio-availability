const container = document.getElementById("availability-grid");

// clear whatever was there before
container.innerHTML = "";

/**
 * Loop over sites
 * Each site gets its OWN grid
 */
data.forEach(site => {
  // ---- Site title ----
  const siteTitle = document.createElement("h2");
  siteTitle.textContent = site.site;
  siteTitle.style.marginTop = "30px";
  container.appendChild(siteTitle);

  // ---- Create a grid for THIS site ----
  const grid = document.createElement("div");
  grid.className = "grid";

  // ---- Header row ----
  grid.appendChild(makeHeader("Site / Practitioner"));
  dates.forEach(d => grid.appendChild(makeHeader(d)));

  // ---- Practitioner rows ----
  site.practitioners.forEach(practitioner => {
    grid.appendChild(makeLabel("↳ " + practitioner.name));

    practitioner.availability.forEach(value => {
      grid.appendChild(makeCell(value));
    });
  });

  container.appendChild(grid);
});

/* --------------------
 Helper functions
--------------------- */

function makeHeader(text) {
  const div = document.createElement("div");
  div.className = "header";
  div.textContent = text;
  return div;
}

function makeLabel(text) {
  const div = document.createElement("div");
  div.className = "label";
  div.textContent = text;
  return div;
}

function makeCell(value) {
  const div = document.createElement("div");
  div.className = "cell";

  div.style.background =
    value > 0.7 ? "#4caf50" :
    value > 0.4 ? "#ffeb3b" :
    value > 0.2 ? "#ff9800" :
                  "#f44336";

  return div;
}
