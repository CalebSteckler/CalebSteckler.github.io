import { COUNTRIES } from "./countries.js";
let currentResults = [];
let activeIndex = -1;
const selectCountryButton = document.getElementById("btn-select-country");
const searchCountry = document.getElementById("search-country");
const input = document.getElementById("search-country");
const box = document.getElementById("suggestions");

let flagHelper = (countryCode) => {
    let countryCodeLower = countryCode.toLowerCase();
    return `<img src="https://flagcdn.com/16x12/${countryCodeLower}.png" 
    srcset="https://flagcdn.com/32x24/${countryCodeLower}.png 2x, 
    https://flagcdn.com/48x36/${countryCodeLower}.png 3x" 
    width="40" height="40" alt="${countryCode}">`;
};

selectCountryButton.onclick = () => {
    selectCountryButton.classList.add("hidden");
    searchCountry.classList.remove("hidden");
    searchCountry.classList.add("visible");
}

function debounce(fn, delay = 80) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

function openBox() {
  box.classList.add("open");
}
function closeBox() {
  box.classList.remove("open");
  box.innerHTML = "";
  activeIndex = -1;
  currentResults = [];
}

function render(list) {
  box.innerHTML = "";

  if (list.length === 0) {
    closeBox();
    return;
  }

  const frag = document.createDocumentFragment();

  list.forEach((c, i) => {
    const row = document.createElement("div");
    row.className = "suggestion";
    row.setAttribute("role", "option");
    row.dataset.index = String(i);

    const img = document.createElement("img");
    img.src = `https://flagcdn.com/40x30/${c.iso2.toLowerCase()}.png`;
    img.alt = `${c.name} flag`;
    img.loading = "lazy";

    const name = document.createElement("span");
    name.className = "name";
    name.textContent = c.name;

    row.appendChild(img);
    row.appendChild(name);

    frag.appendChild(row);

    // Click handler for each suggestion
    row.onclick = () => {
        selectCountry(c);
    }
  });

  box.appendChild(frag);
  openBox();
}

function updateActive() {
  const items = box.querySelectorAll(".suggestion");
  items.forEach((el) => el.classList.remove("active"));
  if (activeIndex >= 0 && items[activeIndex]) {
    items[activeIndex].classList.add("active");
    items[activeIndex].scrollIntoView({ block: "nearest" });
  }
}

function selectCountry(country) {
    const overlay = document.getElementById("modalOverlay");
    input.value = country.name;
    closeBox();
    console.log("Selected country:", country.name, country.iso2);
    // Modal Open with country details can be implemented here
    overlay.classList.remove("inactive");
    overlay.classList.add("active");

    loadCountryInfo(country);
}

const modalClose = () => {
    const overlay = document.getElementById("modalOverlay");
    const closeBtn = document.getElementById("closeModal");
    closeBtn.onclick = () => {
        overlay.classList.toggle("inactive");
    }
}
modalClose();

const loadCountryInfo = (country) => {
  const modalCountryName = document.createElement("h2");
  const countryContent = document.getElementById("country-content");
  countryContent.innerHTML = "";
  modalCountryName.id = "modalCountryName";
  modalCountryName.innerHTML = country.name;
  countryContent.appendChild(modalCountryName);
  const fredData = document.createElement("p");
  fredData.id = "fredData";
  countryContent.appendChild(fredData);
  fredData.classList.add("fred-data");
  getFredData(fredData);
}



const getFredData = (container) => {
  fetch('http://localhost:3000/api/series/UNRATE')
    .then(response => response.json())
    .then(data => {
      const observations = data.observations;
      const latestObs = observations[observations.length - 1];

      container.innerHTML = latestObs.value;
      console.log('FRED Data:', latestObs.value);
    })
    .catch(error => console.error('Error:', error));
}

const exists = (id) => {
    return document.getElementById(id) !== null;
}

const handleInput = debounce(() => {
  const q = input.value.trim().toLowerCase();
  if (!q) {
    closeBox();
    return;
  }
  let results = COUNTRIES.filter((c) => c.name.toLowerCase().startsWith(q)).slice(0, 10);

  if (results.length === 0) {
    results = COUNTRIES.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 10);
  }

  currentResults = results;
  render(results);
}, 80);

input.addEventListener("input", handleInput);

input.addEventListener("keydown", (e) => {
  if (!box.classList.contains("open")) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex = Math.min(activeIndex + 1, currentResults.length - 1);
    updateActive();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex = Math.max(activeIndex - 1, 0);
    updateActive();
  } else if (e.key === "Enter") {
    if (activeIndex >= 0 && currentResults[activeIndex]) {
      e.preventDefault();
      selectCountry(currentResults[activeIndex]);
    }
  } else if (e.key === "Escape") {
    closeBox();
  }
});
