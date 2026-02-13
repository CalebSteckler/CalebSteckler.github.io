const selectCountryButton = document.getElementById("btn-select-country");
const searchCountry = document.getElementById("search-country");

selectCountryButton.onclick = () => {
    selectCountryButton.classList.add("hidden");
    searchCountry.classList.remove("hidden");
    searchCountry.classList.add("visible");
}