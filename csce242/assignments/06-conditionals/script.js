

document.getElementById("btn-exercise-1").onclick = (e) => { // Minutes
    const btn1 = document.getElementById("btn-exercise-1");

    const minutesDiv = document.getElementById("minutes");
    minutesDiv.classList.add("visible");

    const countdownDiv = document.getElementById("countdown");
    if (countdownDiv.classList.contains("visible")) {
        countdownDiv.classList.remove("visible");
        countdownDiv.classList.add("invisible");
    }
};

document.getElementById("btn-exercise-2").onclick = (e) => { // Countdown
    const btn2 = document.getElementById("btn-exercise-2");

    const countdownDiv = document.getElementById("countdown");
    countdownDiv.classList.add("visible");

    const minutesDiv = document.getElementById("minutes");
    if (minutesDiv.classList.contains("visible")) {
        minutesDiv.classList.remove("visible");
        minutesDiv.classList.add("invisible");
    }
};

document.getElementById("btn-small-nav-exercise-1").onclick = (e) => { // Minutes - Small Nav
    const btn1 = document.getElementById("btn-exercise-1");

    const minutesDiv = document.getElementById("minutes");
    minutesDiv.classList.add("visible");

    const countdownDiv = document.getElementById("countdown");
    if (countdownDiv.classList.contains("visible")) {
        countdownDiv.classList.remove("visible");
        countdownDiv.classList.add("invisible");
    }
};

document.getElementById("btn-small-nav-exercise-2").onclick = (e) => { // Countdown - Small Nav
    const btn2 = document.getElementById("btn-exercise-2");

    const countdownDiv = document.getElementById("countdown");
    countdownDiv.classList.add("visible");

    const minutesDiv = document.getElementById("minutes");
    if (minutesDiv.classList.contains("visible")) {
        minutesDiv.classList.remove("visible");
        minutesDiv.classList.add("invisible");
    }
};

const sliderMinutes = document.getElementById("slider-minutes");

document.getElementById("slider-minutes").oninput = () => {
    const pMinutes = document.getElementById("p-minutes");
    pMinutes.innerHTML = "Minutes: " + sliderMinutes.value;
};

document.getElementById("slider-minutes").onchange = () => {
    const pMessage = document.getElementById("p-message");
    if (sliderMinutes.value >= 45) {
        pMessage.innerHTML = "Time for Brunch!";
    } else if (sliderMinutes.value >= 30 && sliderMinutes.value < 45) {
        pMessage.innerHTML = "We've got time to stop for coffee";
    } else if (sliderMinutes.value >= 15 && sliderMinutes.value < 30) {
        pMessage.innerHTML = "Feel free to take the scenic route this morning.";
    } else if (sliderMinutes.value < 15) {
        pMessage.innerHTML = "Put on your shoes let's roll.";
    }

    let today = new Date();
    let todayHours = today.getHours();
    let todayMinutes = today.getMinutes();
    let totalMinutes = (todayHours * 60) + (todayMinutes);
    let sinceMinutes = totalMinutes - 510;

    const countdownMessage = document.getElementById("countdown-message");
    if (sinceMinutes > 15) {
        countdownMessage.innerHTML = `You've got ${sinceMinutes} minutes until class, take your time.`;
    } else if (sinceMinutes >= 10 && sinceMinutes < 15) {
        countdownMessage.innerHTML = `You've got ${sinceMinutes} minutes until class, let's make it a brisk walk yea?`;
    } else if (sinceMinutes >= 5 && sinceMinutes < 10) {
        countdownMessage.innerHTML = `You've got ${sinceMinutes} minutes until class, how about some running this morning?`
    } else if (sinceMinutes >= 0 && sinceMinutes < 5) {
        countdownMessage.innerHTML = `You've got ${sinceMinutes} minutes until class, a helicopter is about your only chance here kid.`
    } else if (sinceMinutes > -5 && sinceMinutes <= 0) {
        countdownMessage.innerHTML = `You've got ${sinceMinutes} minutes until class, you're tardy!`
    } else if (sinceMinutes > 15 && sinceMinutes <= -5) {
        countdownMessage.innerHTML = `You've got ${sinceMinutes} minutes until class, oh well... I'm sure it was very important anyways.`
    } else if (sinceMinutes < -15) {
        countdownMessage.innerHTML = `You've got ${sinceMinutes} minutes until class, dude really?`
    }
};

// Small Nav

const upArrow = document.getElementById("nav-logo-up");
const downArrow = document.getElementById("nav-logo-down");
const smallNav = document.getElementById("small-nav");

upArrow.onclick = () => {
    downArrow.classList.add("visible-2");
    downArrow.classList.remove("invisible-2");
    upArrow.classList.add("invisible-2");
    upArrow.classList.remove("visible-2");

    smallNav.classList.add("visible-2");
    smallNav.classList.remove("invisible-2");

}

downArrow.onclick = () => {
    upArrow.classList.add("visible-2");
    upArrow.classList.remove("invisible-2");
    downArrow.classList.add("invisible-2");
    downArrow.classList.remove("visible-2");

    smallNav.classList.remove("visible-2");
    smallNav.classList.add("invisible-2");
}