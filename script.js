function groupData(data) {
  const grouped = {};

  data.forEach(item => {
    if (!grouped[item.site]) {
      grouped[item.site] = {};
    }
    if (!grouped[item.site][item.practitioner]) {
      grouped[item.site][item.practitioner] = [];
    }
    grouped[item.site][item.practitioner].push(item);
  });

  return grouped;
}

function renderAvailability() {
  const container = document.getElementById("availability-container");
  container.innerHTML = "";

  const groupedData = groupData(availabilityData);

  Object.keys(groupedData).forEach(site => {
    const siteDiv = document.createElement("div");
    siteDiv.className = "site";
    siteDiv.innerHTML = `<h2>${site}</h2>`;

    Object.keys(groupedData[site]).forEach(practitioner => {
      const practitionerDiv = document.createElement("div");
      practitionerDiv.className = "practitioner";
      practitionerDiv.innerHTML = `<h3>${practitioner}</h3>`;

      groupedData[site][practitioner].forEach(entry => {
        const label = document.createElement("div");
        label.textContent = entry.date;

        const bar = document.createElement("div");
        bar.className = "availability-bar";

        const available = document.createElement("div");
        const unavailable = document.createElement("div");

        const availablePct = (entry.availableSlots / entry.totalSlots) * 100;

        available.className = "available";
        unavailable.className = "unavailable";
        available.style.width = availablePct + "%";
        unavailable.style.width = (100 - availablePct) + "%";

        bar.appendChild(available);
        bar.appendChild(unavailable);

        practitionerDiv.appendChild(label);
        practitionerDiv.appendChild(bar);
      });

      siteDiv.appendChild(practitionerDiv);
    });

    container.appendChild(siteDiv);
  });
}

renderAvailability();
