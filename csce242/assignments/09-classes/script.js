class Song {
    constructor(title, artist, album, year, genre, cover, iframeID)
    {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.cover = cover;
        this.iframeID = iframeID;
    }

    getItem() {
        const li = document.createElement("li");
        li.href = "#";
        li.classList.add("one");

        li.onclick = () => {
            modalBody.innerHTML = `
            <section class="one"><iframe width="500" height="315" src="https://www.youtube.com/embed/${this.iframeID}?si=o0gPPwGnWK6N8JNL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section>
            <section class="one">
            <h2 class="modal-text">${this.title}</h2>
            <p class="modal-text"><strong>By:</strong> ${this.artist}</p>
            <p class="modal-text"><strong>Album:</strong> ${this.album}, ${this.year}</p>
            <p class="modal-text"><strong>Genre:</strong> ${this.genre}</p>
            </section>`;
            modal.style.display = "block";
        }

        //title
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        li.append(h3);
        h3.classList.add("song-title");

        //Artist
        const p = document.createElement("p");
        p.innerHTML = "By: " + this.artist;
        li.append(p);
        p.classList.add("song-artist");

        //Album
        const img = document.createElement("img");
        img.src = this.cover;
        li.append(img);
        img.classList.add("song-album");

        return li;
    }
}

const songs = [];
songs.push(new Song("Bohemian Rhapsody", "Queen", "A Night at the Opera", 1975, "Rock", "images/queen-cover.jpg", "fJ9rUzIMcZQ?si=R6EXDol_IgASPsWu"));
songs.push(new Song("Stairway to Heaven", "Led Zeppelin", "Led Zeppelin IV", 1971, "Rock", "images/led-zeppelin-cover.jpg", "QkF3oxziUI4?si=BZ_ur8v86g8pNDI0"));
songs.push(new Song("Hotel California", "Eagles", "Hotel California", 1976, "Rock", "images/hotel-california-cover.jpg", "dLl4PZtxia8?si=2FNOvs4cf9OV8E-0"));
songs.push(new Song("Sweet Child o Mine", "Guns N' Roses", "Appetite for Destruction", 1987, "Rock", "images/guns-cover.jpg", "1w7OgIMMRc4?si=gKg4WwFLRU3XD4op"));

songs.forEach((song) => {
    const div = document.getElementById("songs");
    const ul = document.createElement("ul");
    div.append(ul);
    ul.append(song.getItem());
});

const modal = document.getElementById("songModal");
const closeBtn = document.querySelector(".close");
const modalBody = document.getElementById("modalBody");

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};