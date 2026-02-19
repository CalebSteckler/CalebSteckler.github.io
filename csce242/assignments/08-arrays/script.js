const rockingSongs = ["Treaty Oak", "Treaty Oak", "Treaty Oak", "Treaty Oak", "Treaty Oak"];
const slowSongs = ["Sturgill Simpson", "Sturgill Simpson", "Sturgill Simpson", "Sturgill Simpson", "Sturgill Simpson"];

document.getElementById("mood-input").onchange = () => {
    const moodSelect = document.getElementById("mood-input");
    const selectedMood = moodSelect.value;
    const songList = document.getElementById("song-list");
    
    
    if(selectedMood === "rocking") {
        rockingSongs.forEach((rockSong) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            rockingSongs.append(li);
            li.append(a);
            a.innerHTML = rockSong;
        });
    }
}