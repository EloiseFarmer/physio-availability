const grid = document.getElementById("availability-grid");

// Create grid container
const gridElement = document.createElement("div");
gridElement.className = "grid";

// Header row
gridElement.appendChild(makeHeader("Site / Practitioner"));

dates.forEach(date => {
  gridElement.appendChild(makeHeader(date));
});

// Rows
data.forEach(site => {
  // Site row
  gridElement.appendChild(makeLabel(site.site, true));
  dates.forEach(() => gridElement.appendChild(makeEmptyCell()));

  // Practitioner rows
  site.practitioners.forEach(prac => {
    gridElement.appendChild(makeLabel("↳ " + prac.name));

    prac.availability.forEach(value => {
      gridElement.appendChild(makeCell(value));
    });
  });
});

grid.appendChild(gridElement);

// Helpers
function makeHeader(text) {
  const div = document.createElement("div");
  div.className = "header";
  div.textContent = text;
  return div;
}

function makeLabel(text, isSite = false) {
  const div = document.createElement("div");
  div.className = "label";
  if (isSite) div.style.fontWeight = "bold";
  div.textContent = text;
  return div;
}

function makeCell(value) {
  const div = document.createElement("div");
  div.className = "cell";
  div.style.backgroundColor = availabilityColor(value);
  return div;
}

function makeEmptyCell() {
  const div = document.createElement("div");
  div.className = "cell";
  div.style.background = "#fff";
  return div;
}

function availabilityColor(value) {
  if (value > 0.7) return "#4caf50";     // green
  if (value > 0.4) return "#ffeb3b";     // amber
  if (value > 0.2) return "#ff9800";     // orange
  return "#f44336";                      // red
}
