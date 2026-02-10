// Button Click Example
//document.getElementById("button-1").onclick = () => {
//    console.log("BUTTON CLICKED");
//};

// Link Click Example
// e is the event (Clicking)
//e.currentTarget is the element the event was performed on (the link)

document.getElementById("click-link").onclick = (e) => {
    e.preventDefault(); // Not go to the links destination
    e.currentTarget.innerHTML = "Clicked!";
}; 

// Start and stop the ball bouncing
document.getElementById("btn-bounce").onclick = (e) => {
    const ball = document.getElementById("ball");
    if(e.currentTarget.innerHTML.toLowerCase() == "start") {
        e.currentTarget.innerHTML = "Stop";
        ball.classList.add("bounce");
    } else {
        e.currentTarget.innerHTML = "Start";
        ball.classList.remove("bounce");
    }
}

// Plant Water
document.getElementById("txt-num-days").onchange = (e) => {
    const plantMessage = document.getElementById("p-plant-message");
    const numEntered = parseInt(e.currentTarget.value);

    if(numEntered <= 0) {
        plantMessage.innerHTML = "Good Job, you fed your plant today!";
    } else if(numEntered <=2) {
        plantMessage.innerHTML = "Im getting thirsty";
    } else if (numEntered <= 5) {
        plantMessage.innerHTML = "Im starting to wilt";
    } else if (numEntered > 5) {
        plantMessage.innerHTML = "Im dead."
    }
}

document.getElementById("txt-num-days").onkeyup = (e) => {
    const plantMessage = document.getElementById("p-plant-message");
    const numEntered = parseInt(e.currentTarget.value);
    
    //plantMessage.innerHTML = numEntered;

    if(numEntered <= 0) {
        plantMessage.innerHTML = "Good Job, you fed your plant today!";
    } else if(numEntered <=2) {
        plantMessage.innerHTML = "Im getting thirsty";
    } else if (numEntered <= 5) {
        plantMessage.innerHTML = "Im starting to wilt";
    } else if (numEntered > 5) {
        plantMessage.innerHTML = "Im dead."
    }
}

// toggle nav
document.getElementById('toggle-nav').onclick = (e) => {
    document.querySelector('#main-nav ul').classList.toggle("hide-small");
}