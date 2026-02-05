// Button Click Example
document.getElementById("button-1").onclick = () => {
    console.log("BUTTON CLICKED");
};

// Link Click Example
// e is the event (Clicking)
//e.currentTarget is the element the event was performed on (the link)
document.getElementById("click-link").onclick = (e) => {
    e.preventDefault(); // Not go to the links destination
    e.currentTarget.innerHTML = "Clicked!";
};