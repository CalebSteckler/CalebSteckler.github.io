document.getElementById("arrow-next").onclick = (e) => {
    e.preventDefault();
    const currentImage = document.querySelector("#slideshow img:not(.hidden)");
    let nextImage = currentImage.nextElementSibling;

    if(nextImage == null){
        nextImage = document.querySelector("#slideshow img:first-child");
    }
    
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
};

document.getElementById("arrow-prev").onclick = (e) => {
    e.preventDefault();
    const currentImage = document.querySelector("#slideshow img:not(.hidden)");
    let prevImage = currentImage.previousElementSibling;

    if(prevImage == null){
        prevImage = document.querySelector("#slideshow img:last-child");
    }
    
    currentImage.classList.add("hidden");
    prevImage.classList.remove("hidden");
};

//get current slide
const getCurrentSlide = () => {
    return document.querySelector("#slideshow img:not(.hidden)");
};

//slide 
const slide = (current, next) => {
    current.classList.add("hidden");
    next.classList.remove("hidden");
};