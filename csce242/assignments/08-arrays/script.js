const rockingSongs = ["Treaty Oak", "Test 2", "Test 3", "Treaty Oak", "Treaty Oak"];
const slowSongs = ["Sturgill Simpson", "Sturgill Simpson", "Sturgill Simpson", "Sturgill Simpson", "Sturgill Simpson"];
const rockingIDs = ["rE-4FDZnXDw?si=Uv5QpxPjKaOWRmzd", "2", "3", "4", "5"];
const slowIDs = ["qOpAXzr1W1U?si=6tb96BsRlSsJQd8K", "7", "8", "9", "10"];
document.getElementById("mood-input").onchange = () => {
    const moodSelect = document.getElementById("mood-input");
    const selectedMood = moodSelect.value;
    const songList = document.getElementById("song-list");
    const videoContainer = document.getElementById("video-container");
    
    
    if(selectedMood === "rocking") {
        rockingSongs.forEach((rockSong) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            songList.append(li);
            li.append(a);
            a.innerHTML = rockSong;
            a.href = "#";
            a.onclick = () => {
                let id = rockingIDs[rockingSongs.indexOf(rockSong)];
                videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?si=Uv5QpxPjKaOWRmzd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            };
            
        });
    } else if(selectedMood === "slow") {
        slowSongs.forEach((slowSong) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            songList.append(li);
            li.append(a);
            a.innerHTML = slowSong;
            a.href = "#";
            a.onclick = () => {
                videoContainer.innerHTML = slowIDs[slowSong];
            };
        });
    }
}