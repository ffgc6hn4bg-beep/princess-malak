let birthday = new Date(2026, 7, 15, 0, 0, 0).getTime();


setInterval(function(){

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



},1000);



// فتح NEXT مؤقتًا أثناء تصميم الموقع
window.onload = function(){

    document.getElementById("nextBtn").disabled = false;

};
