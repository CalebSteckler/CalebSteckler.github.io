document.getElementById("btn-first-loop").onclick = () => {
    const ul = document.getElementById("ul-first-loop");
    for(let i=0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = `Item ${i+1}`
        ul.append(li);
    }
}

document.getElementById("btn-count").onclick = () => {
    const start = parseInt(document.getElementById("input-start").value);
    const stop = parseInt(document.getElementById("input-stop").value);
    const divNumRange = document.getElementById("number-range");

    if(start > stop) {
        document.getElementById("error-range").innerHTML = "Start must be less than stop";
        return;
    } else {
        for(let i=start; i <= stop; i++) {
            const p = document.createElement("p");
            divNumRange.append(p);
            p.innerHTML = i;

            p.onclick = () => {
                document.getElementById("number-message").innerHTML = `You clicked on ${i}`;
            }
        }
    }
}

document.getElementById("a-show-toys").onclick = (e) => {
    e.preventDefault(); // Don't go to the link destination
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = ""; // Clear the list

    const toys = ["Teddy Bear", "Lego", "Basketball", "Doll", "Car"];

    //Traditional for loop
    for (let i=0; i < toys.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li);
    }

    //Second way preffered
    //(toy, 1)
    toys.forEach((toy)=>{
       const li = document.createElement("li");
       li.innerHTML = toy;
       toyList.append(li);
    });
}

// Associative Arrays
const toyTable = document.getElementById("toy-table");
const toyPrices = [];
toyPrices['Teddy Bear'] = 4.99;
toyPrices['Lego'] = 9.99;
toyPrices['Basketball'] = 10.99;
toyPrices['Doll'] = 15.99;
toyPrices['Car'] = 25.99;

for (let toy in toyPrices) {
    const tr = document.createElement("tr");
    toyTable.append(tr);
    const tdToy = document.createElement("td");
    tdToy.innerHTML = toy;
    tr.append(tdToy);
    const tdPrice = document.createElement("td");
    tdPrice.innerHTML = `$${toyPrices[toy]}`;
    tr.append(tdPrice);

    tr.onclick = () => {
        document.getElementById("p-toy-desc").innerHTML = 
            `The price of ${toy} is ${toyPrices[toy]}`;
    }
}