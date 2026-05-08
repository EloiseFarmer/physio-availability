const container = document.getElementById("availability-grid");
container.innerHTML = "";

// BIG obvious heading
const heading = document.createElement("h2");
heading.textContent = "CLICK A SITE BELOW (TEST MODE)";
heading.style.background = "#ffdddd";
heading.style.padding = "10px";
container.appendChild(heading);

data.forEach(site => {
  const siteHeader = document.createElement("div");
  siteHeader.textContent = "▶ CLICK ME: " + site.site;
  siteHeader.style.cursor = "pointer";
  siteHeader.style.fontWeight = "bold";
  siteHeader.style.fontSize = "18px";
  siteHeader.style.marginTop = "20px";
  siteHeader.style.padding = "10px";
  siteHeader.style.background = "#e0f0ff";

  container.appendChild(siteHeader);

  siteHeader.addEventListener("click", () => {
    console.log("CLICK DETECTED FOR:", site.site);
    alert("You clicked " + site.site);
    siteHeader.style.background = "#c0ffc0";
  });
});
