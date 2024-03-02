const playListContainerTag = document.getElementsByClassName('playListContainer')[0];
const audioTag = document.getElementsByClassName('audioTag')[0];
const currentAndTotleTimeTag = document.getElementsByClassName('currentAndTotleTime')[0];

const tracks = [
    { trackId: "music/track1.mp3", title: 'ဒဿ'},
    { trackId: "music/track5.mp3", title: 'Unforgettable'},
    { trackId: "music/track6.mp3", title: 'Why??'},
    { trackId: "music/track7.mp3", title: 'Heat Waves'}
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement('div');
    trackTag.addEventListener('click', () => {
        const trackId = tracks[i].trackId;
        audioTag.src = trackId;
        audioTag.play(); 
    });
    trackTag.classList.add('trackItem');
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playListContainerTag.append(trackTag);
};

let durationText = "00:00"
audioTag.addEventListener('loadeddata', () => {
    const duration = Math.floor(audioTag.duration);
    durationText = createMinandSecText(duration)
});

audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    const currentTimeText =  createMinandSecText(currentTime);
    const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
    currentAndTotleTimeTag.textContent = currentTimeTextAndDurationText;
    currentAndTotleTimeTag.style.color = "yellow";
    currentAndTotleTimeTag.style.fontSize = "20px"
    
});

const createMinandSecText = (total) =>{
    const min = Math.floor(total / 60);
    const sec = total%60;

    const minText = min < 10 ? "0" + min.toString() : min;
    const secText = sec < 10 ? "0" + sec.toString() : sec;

    return minText + ":" + secText


}