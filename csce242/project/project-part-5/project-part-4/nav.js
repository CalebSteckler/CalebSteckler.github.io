document.getElementById("mobile-nav-button").onclick = () => {
    const mobileNav = document.getElementById("mobile-nav-button");
    const mainNavList = document.getElementById("main-nav-list");
    mainNavList.classList.toggle("visible");
    mainNavList.classList.toggle("invisible");
    mainNavList.classList.toggle("slide-in");
}