const sky = document.getElementById("sky");

// النجوم
for(let i=0;i<150;i++){

    let star=document.createElement("div");

    star.className="star";

    let size=Math.random()*3+1;

    star.style.width=size+"px";

    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*2+"s";

    sky.appendChild(star);

}

// إنشاء الأقزام
const house=document.querySelector(".house");

const names=[
"خرر 😴",
"ززز 💤",
"هممم 😪",
"😴",
"💤",
"😪",
"😴"
];

for(let i=0;i<7;i++){

let dwarf=document.createElement("div");

dwarf.className="dwarf sleep";

dwarf.style.left=(15+i*32)+"px";

let bubble=document.createElement("div");

bubble.className="bubble";

bubble.innerHTML=names[i];

dwarf.appendChild(bubble);

house.appendChild(dwarf);

}

// أول مشهد
setTimeout(()=>{

let dwarfs=document.querySelectorAll(".dwarf");

let first=dwarfs[0];

first.classList.remove("sleep");

let talk=first.querySelector(".bubble");

talk.style.display="block";

talk.innerHTML="😳 يا جدعان... اصحوا بسرعة!!";

},3000);
