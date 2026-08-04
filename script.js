const birthday = new Date("2026-08-15T00:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;


    if (distance <= 0) {

        document.getElementById("timer").innerHTML = 
        "Happy Birthday Malak ❤️";

        document.getElementById("nextBtn").disabled = false;

        clearInterval(timer);

        return;
    }


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


},1000);
