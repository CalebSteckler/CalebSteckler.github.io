const getFish = async () => { // When hitting a backend, use async
    const url = "https://portiaportia.github.io/json/fish.json";
    const response = await fetch(url); // awiat is only for async functions
    return response.json();
};

const showFish = async () => {
    const fish = await getFish();
    console.log(fish);

    const fishDiv = document.getElementById("fish");

    fish.forEach(
        (fish) => {
            const section = document.createElement("section");
            fishDiv.append(section);
            section.classList.add("fish");
            section.classList.add("one");

            const h3 = document.createElement("h3");
            h3.innerHTML = fish.title;
            section.append(h3);

            const p = document.createElement("p");
            p.innerHTML = fish.length;
            section.append(p);

            const h4 = document.createElement("h4");
            h4.innerHTML = "Colors: ";
            section.append(h4);

            const ul = document.createElement("ul");
            section.append(ul);

            //loop through colors
            fish.colors.forEach((color) => {
                const li = document.createElement("li");
                li.innerHTML = color;
                ul.append(li);
            })
            
            const img = document.createElement("img");
            img.src = `https://portiaportia.github.io/json/${fish.img}`;
            section.prepend(img);
        }

    );
};

showFish();