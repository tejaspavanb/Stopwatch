const display= document.getElementById("time");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

function start(){
 if(!isRunning){
    startTime=Date.now();
    timer=setInterval(update,10);
    isRunning=true;
 }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        isRunning=false;
        elapsedTime=Date.now()-startTime;
    }

}

function reset(){
    clearInterval(timer);
timer=null;
startTime=0;
elapsedTime=0;
isRunning=false;
display.innerHTML="00:00.00";
}

function update(){
    elapsedTime=Date.now()-startTime;
    let seconds= Math.floor(elapsedTime/1000);
    let minutes= Math.floor(seconds/60);
    let hours= Math.floor(minutes/60);
    seconds=seconds%60;
    minutes=minutes%60;
  
    display.textContent=`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${(elapsedTime%100).toString().padStart(2,"0")}`
}

