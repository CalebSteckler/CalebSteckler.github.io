const rockingSongs = ["Bad State of Mind - Treaty Oak", "Chase You Down - Braxton Keith", "Taking Water - Billy Strings", "No Way to Know - The Red Clay Strays", "Diamondhead - J.R. Carroll"];
const slowSongs = ["Sam - Sturgill Simpson", "Can I take My Hounds to Heaven - Tyler Childers", "Fraulein - Colter Wall", "Cowpoke - Colter Wall", "Folsom Prison Blues - Johnny Cash"];
const rockingIDs = ["rE-4FDZnXDw?si=Uv5QpxPjKaOWRmzd", "KtxUuMVUBfc?si=pJMaMiy79fbLd9xX", "xD7K0x0UusE?si=RLyyTOIk1mHqjdws", "tyGmusvf09o?si=gFFU2A0soWdPynaS", "KmTeepdXyHk?si=4fj3pV1qY9uME0xJ"];
const slowIDs = ["qOpAXzr1W1U?si=6tb96BsRlSsJQd8K", "I6hyYqC7110?si=G5o_kS5XReGUVo7F", "zUYqNKkJS7k?si=1GG2W0_eIiWKFO4f", "Qy69ucV_sRg?si=opNEpZ5QI9okbL2a", "AeZRYhLDLeU?si=rqxNz1gPm8_BrD8g"];
document.getElementById("mood-input").onchange = () => {
    const moodSelect = document.getElementById("mood-input");
    const selectedMood = moodSelect.value;
    const songList = document.getElementById("song-list");
    const videoContainer = document.getElementById("video-container");
    
    
    if(selectedMood === "rocking") {
        songList.innerHTML = "";
        videoContainer.innerHTML = "";
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
        songList.innerHTML = "";
        videoContainer.innerHTML = "";
        slowSongs.forEach((slowSong) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            songList.append(li);
            li.append(a);
            a.innerHTML = slowSong;
            a.href = "#";
            a.onclick = () => {
                let id = slowIDs[slowSongs.indexOf(slowSong)];
                videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?si=6tb96BsRlSsJQd8K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            };
        });
    }
}