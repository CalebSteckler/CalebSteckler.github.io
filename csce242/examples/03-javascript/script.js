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

//Date

const pDate = document.getElementById("p-date");

setInterval(() => {
    const today = new Date(); //Incorrect Date
    const month = today.getMonth();
    const day = today.getDay();
    const year = today.getYear();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hours = today.getHours();
    pDate.innerHTML = `${hours}:${minutes}:${seconds}, ${month}/${day}/${year}`;
}, 500);

// Donation

const txtDonation = document.getElementById("txt-donation");
const btnDisplay = document.getElementById("btn-display-donation");
const thermometer = document.getElementById("thermometer");

btnDisplay.onclick = () => {
    const errorP = document.getElementById("p-donation-error");
    errorP.innerHTML = ""; // If you click the button twice

    const donationText = txtDonation.value;
    if (isNaN(donationText) || donationText < 0) {
        errorP.innerHTML = "Invalid Amount";
        return;
    }

    donation = parseInt(donationText);
    const percentGoal = donation/5000 * 100;

    document.getElementById("p-donation").innerHTML = `You've reached ${percentGoal}% of your goal!`

    document.querySelector(":root").style.setProperty("--donation", percentGoal + "%");
}


//Counter
const p = document.getElementById("p-count-display");
let count = 0;
let countInterval;
const startButton = document.getElementById("btn-start-count");
const pauseButton = document.getElementById("btn-pause-count");

document.getElementById("btn-start-count").onclick = (e) => {
    countInterval = setInterval(()=>{
        startButton.disabled = true;
        p.innerHTML = "Count: " + count++;
    }, 500);
}

document.getElementById("btn-pause-count").onclick = (e) => {
    clearInterval(countInterval);
}

document.getElementById("btn-reset-count").onclick = () => {
    count = 0;
    p.innerHTML = "Count: " + count;
    clearInterval(countInterval);
}