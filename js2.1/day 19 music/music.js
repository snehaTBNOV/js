var audioPlayer=document.getElementById('audioplayer')
var palybtn=document.getElementById('play-button')
var pausebtn=document.getElementById('pause-button')
var repeat=document.getElementById('repeat-button')
var slow=document.getElementById('slow-button')
var normal=document.getElementById('normal-button')
var fast=document.getElementById('fast-button')
var inc=document.getElementById('increment')
var dec=document.getElementById('decrement')
var progress=document.getElementById('progress')

console.log(document.getElementsByTagName("audio"))
//u can se played=true,currenttime=0,playbackRate=1 ,duration --so how many seconds passed ,speed
palybtn.addEventListener('click',function(){
    audioPlayer.play()
})
pausebtn.addEventListener('click',function(){
    audioPlayer.pause()
})
repeat.addEventListener('click',function(){
    audioPlayer.currentTime=0
})
slow.addEventListener('click',function(){
    audioPlayer.playbackRate=0.5
})
normal.addEventListener('click',function(){
    audioPlayer.playbackRate=1 
})
fast.addEventListener('click',function(){
    audioPlayer.playbackRate=2
})
inc.addEventListener('click',function(){
    audioPlayer.currentTime=audioPlayer.currentTime+10
})
dec.addEventListener('click',function(){
    audioPlayer.currentTime=audioPlayer.currentTime-10
})


// ---------

audioPlayer.addEventListener('timeupdate',function(){
    // console.log(audioPlayer.currentTime)
    progress.style.width=(audioPlayer.currentTime)/(audioPlayer.duration)*100 + '%'
})


// local storage--right click , go to app,file

localStorage.setItem('username', 'john_doe');
localStorage.setItem('theme', 'dark');
const username = localStorage.getItem('username');
const theme = localStorage.getItem('theme');
localStorage.clear();
localStorage.removeItem('theme');
let arr=[1,2,3,4,5]
console.log(localStorage.getItem(JSON.stringify(arr)))

// carossel for tht use slick jsss