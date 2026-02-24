class Dog {
    constructor(title, breed, age, size, img) {
        this.title = title;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.img = img;
    }

    get item() {
        const dogSection = document.createElement("section");
        dogSection.classList.add("dog");

        //title
        const a1 = document.createElement("a");
        a1.href = "#";
        const h3 = document.createElement("h3");
        a1.append(h3);
        h3.innerHTML = this.title;
        dogSection.append(a1);

        //image
        const img = document.createElement("img");
        img.src = `images/classes/${this.img}`;

        //more info section
        const infoSection = this.moreInfo();
        dogSection.append(infoSection);

        a1.onclick = () => {
            dogSection.querySelector("ul").classList.toggle("hidden");
        }

        return dogSection;
    }

    moreInfo() {
        const ul = document.createElement("ul");
        ul.classList.add("hidden");
        ul.append(this.infoLi("Breed", this.breed));
        ul.append(this.infoLi("Age", this.age));
        ul.append(this.infoLi("Size", this.size));

        return ul;
    }

    infoLi(label, value) {
        const li = document.createElement("li");
        li.innerHTML = `${label}: ${value}`;
        return li;
    }
}

const dogs = [];

dogs.push(new Dog("coco", "yorkie", 5, "small", "images/classes/yorkie.png")); 
dogs.push(new Dog("bella", "golden retriever", 3, "medium", "images/classes/golden-retriever.png"));
dogs.push(new Dog("max", "labrador", 2, "large", "images/classes/labrador.png"));


dogs.forEach((dog) => {
    const div = document.getElementById("dogs");
    div.append(dog.item);





    /*
    const table = document.getElementById("dog-table");
    const tr = document.createElement("tr");
    table.append(tr);
    const td = document.createElement("td");
    td.innerHTML = dog.title;
    tr.append(td);
    */
});
