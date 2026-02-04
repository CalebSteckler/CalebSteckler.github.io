window.onload = () => {
    document.getElementById("show-button").onclick = showTriangle;
    document.getElementById("frame-image").onclick = showBorder;
    document.getElementById("date-field").onchange = showMessage;
}; //Establish

const showTriangle = () => {
    const triangle = document.getElementById("triangle");
    triangle.classList.add("visible");
};

const showBorder = () => {
    const image =  document.getElementById("frame-image");
    image.style.border = "yellow solid 2px";
}

const showMessage = () => {
    const dateField = document.getElementById("date-field");
    const messageP = document.getElementById("messageP");
    const date = new Date(dateField.value + "T00:00");
    const formattedDate = date.toLocaleDateString('en-US');
    messageP.innerHTML = "You Picked: " + formattedDate;
}