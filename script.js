const sky = document.getElementById("sky");

// ⭐ النجوم
for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";

    sky.appendChild(star);
}

// 🏠 الكوخ
const house = document.querySelector(".house");

// 🧙 الأقزام
const dwarfs = [];

const snores = [
    "خرر 😴",
    "ززز 💤",
    "هممم 😪",
    "😴",
    "💭",
    "😪",
    "💤"
];

for (let i = 0; i < 7; i++) {

    const dwarf = document.createElement("div");
    dwarf.className = "dwarf sleep";

    dwarf.innerHTML = `
        <div class="hat"></div>

        <div class="head">
            <div class="eye left"></div>
            <div class="eye right"></div>
        </div>

        <div class="beard"></div>

        <div class="bodyPart"></div>

        <div class="arm left"></div>
        <div class="arm right"></div>

        <div class="leg left"></div>
        <div class="leg right"></div>
    `;

    dwarf.style.left = (10 + i * 34) + "px";

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerHTML = snores[i];

    dwarf.appendChild(bubble);

    house.appendChild(dwarf);

    dwarfs.push({
        body: dwarf,
        bubble: bubble
    });

}

// 💬 يتكلم
function speak(index, text) {

    dwarfs[index].body.classList.remove("sleep");

    dwarfs[index].bubble.style.display = "block";

    dwarfs[index].bubble.innerHTML = text;

}

// 🎬 المشهد

setTimeout(() => {

    speak(0, "😳 يا جدعان... اصحوا بسرعة!!");

}, 2500);

setTimeout(() => {

    speak(1, "🥱 في إيه يابني؟");

}, 5000);

setTimeout(() => {

    speak(2, "😒 سيبونا ننام...");

}, 7000);

setTimeout(() => {

    speak(3, "🍗 أنا كنت بحلم بالأكل!");

}, 9000);

setTimeout(() => {

    speak(4, "😳 هو حصل إيه؟");

}, 11000);

setTimeout(() => {

    speak(5, "👑 سمو الأميرة ملك وصلت!!");

}, 13500);

setTimeout(() => {

    speak(6, "🫡 بسرعة... قفوا صف!");

}, 16000);

setTimeout(() => {

    dwarfs.forEach(d => {

        d.bubble.innerHTML = "🎉 كل سنة وانتي طيبة يا سمو الأميرة ملك";

    });

}, 19000);
