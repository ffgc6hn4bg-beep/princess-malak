let birthday = new Date(2026, 7, 15, 0, 0, 0).getTime();


function updateTimer(){

let now = new Date().getTime();

let distance = birthday - now;


let days = Math.floor(distance / (1000 * 60 * 60 * 24));

let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);

let minutes = Math.floor((distance / (1000 * 60)) % 60);

let seconds = Math.floor((distance / 1000) % 60);



document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;


}


setInterval(updateTimer,1000);

updateTimer();



// فتح NEXT مؤقتًا عشان نكمل التصميم
let next = document.getElementById("nextBtn");

next.disabled = false;

next.style.opacity = "1";

next.style.cursor = "pointer";
document.getElementById("nextBtn").onclick = function(){

    document.querySelector(".container").style.display="none";

    document.getElementById("giftPage").style.display="block";

};
