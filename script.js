// ===== النجوم =====

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

// ===== الأقزام =====

const dwarfsContainer=document.getElementById("dwarfs");

const dialog=document.getElementById("dialogText");

const button=document.getElementById("nextButton");

const talks=[

"😴 خررررر...",

"🥱 خمس دقايق كمان...",

"😪 سيبونا ننام...",

"🍗 أنا كنت بحلم بالأكل...",

"😳 يا جدعان... اصحوا بسرعة!!",

"👑 سمو الأميرة ملك وصلت!!",

"🫡 بسرعة... قفوا انتباه."

];

const dwarfs=[];

for(let i=0;i<7;i++){

let d=document.createElement("div");

d.className="dwarf";

d.style.left=(i*50)+"px";

d.innerHTML=`

<div class="hat"></div>

<div class="head">

<div class="eye left"></div>

<div class="eye right"></div>

</div>

<div class="beard"></div>

<div class="body"></div>

`;

dwarfsContainer.appendChild(d);

dwarfs.push(d);

}

// ===== الحوار =====

let step=0;

function nextScene(){

dialog.style.display="block";

dialog.innerHTML=talks[step];

if(step==4){

dwarfs.forEach((d,index)=>{

d.style.transform="translateY(-15px)";

});

}

if(step==5){

dwarfs.forEach((d,index)=>{

d.style.left=(index*45+20)+"px";

});

}

if(step==6){

button.style.display="block";

}

step++;

if(step<talks.length){

setTimeout(nextScene,2500);

}

}

setTimeout(nextScene,2500);

// ===== الزر =====

button.onclick=()=>{

location.href="message.html";

};
