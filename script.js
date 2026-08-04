let birthday = new Date("August 15, 2026 00:00:00").getTime();


let timer = setInterval(function(){


let now = new Date().getTime();

let distance = birthday - now;


let days = Math.floor(distance/(1000*60*60*24));

let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

let minutes = Math.floor((distance%(1000*60*60))/(1000*60));

let seconds = Math.floor((distance%(1000*60))/1000);


document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;



if(distance <=0){

document.getElementById("nextBtn").disabled=false;

document.getElementById("timer").innerHTML=
"Happy Birthday Malak ❤️";


clearInterval(timer);

}


},1000);
