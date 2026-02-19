const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 13; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = randomNumber(50, 550) + "px";
    bubble.style.animationDuration = randomNumber(3, 5) + "s";
    document.getElementById("water").appendChild(bubble);

    bubble.onanimationiteration = () => {
        randomLeft = randomNumber(50, 550);
        bubble.style.left = randomLeft + "px";
    }
}