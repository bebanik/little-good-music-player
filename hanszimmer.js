console.log("Welcome to Musically");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Cornfield Chase", filePath: "Hans Zimmer/1.mp3", coverPath: "images/intersteller.jpg"},
    {songName: "Ripple in the Sand", filePath: "Hans Zimmer/2.mp3", coverPath: "images/dune2.jpg"},
    {songName: "Flight", filePath: "Hans Zimmer/3.mp3", coverPath: "images/man-of-steel-handcuffs-737c72e2a76646408fe694d448b51b8c.jpg"},
    {songName: "Time", filePath: "Hans Zimmer/4.mp3", coverPath: "images/inception.jpg"},
    {songName: "Themyscira", filePath: "Hans Zimmer/5.mp3", coverPath: "images/WW84.jpeg"},
    {songName: "No Time For Caution", filePath: "Hans Zimmer/6.mp3", coverPath: "images/intersteller2.jpg"},
    {songName: "Poisoned Chalice", filePath: "Hans Zimmer/7.mp3", coverPath: "images/davinci.jpg"},
    {songName: "STAY", filePath: "Hans Zimmer/8.mp3", coverPath: "images/intersteller3.jpg"},
    {songName: "Is She Still With You ?", filePath: "Hans Zimmer/9.mp3", coverPath: "images/batman-vs-superman-superman-teaser-i24819.jpg"},
    {songName: "Dream is Collapsing", filePath: "Hans Zimmer/10.mp3", coverPath: "images/Inception2.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Hans Zimmer/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Hans Zimmer/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Hans Zimmer/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})




// Property of Rishabh Banik
// Sourav Tiwari
//Rishi Mohanty
//Anurag Singh