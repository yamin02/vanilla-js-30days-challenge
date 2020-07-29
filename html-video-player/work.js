// get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressbar = player.querySelector(".progress_filled");
const togglebutn = player.querySelector(".toggle");
const skipbutton = player.querySelectorAll(".skip");
const range = player.querySelectorAll(".player_slider");

// see the function
function toggleplay()  {
    if(video.paused){
        video.play();
    } else {video.pause(); }  //video[video.paused ? 'play' : 'paused']();    
} 
function updatebutton() {
    const icon = this.paused ? "play it" : "pause now";
    togglebutn.textContent = icon;
    console.log(icon);
}

function skip(){ 
    yamx = parseFloat(this.dataset.skip) ;
    console.log(yamx);
    video.currentTime += yamx ;
}
//hande range for volume and play speed
//look how the video[playbackRate] or video[volume] are used
function handlerange(){
    video[this.name] = this.value; 
    console.log(this.value);
}
//incomplete need knowledge of flex box
function handleprogress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressbar.style.flexBasis = `${percent}%`
}

video.addEventListener("click",toggleplay);
video.addEventListener("pause",updatebutton);
video.addEventListener("play",updatebutton);

togglebutn.addEventListener("click",toggleplay);
for(const m of skipbutton) {
    m.addEventListener("click",skip) ;
}

for (const ra of range){
    ra.addEventListener('change', handlerange)
}