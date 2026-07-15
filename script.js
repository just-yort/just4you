const music = document.getElementById("music");

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}

function showGift(){

document.getElementById("gift").style.display="flex";

}

function closeGift(){

document.getElementById("gift").style.display="none";

}
function acceptSurprise() {

    document.getElementById("welcome").style.display = "none";

    const music = document.getElementById("music");

    music.play();

}

function moveButton(){

    const btn = document.getElementById("noBtn");

    btn.style.position="absolute";

    btn.style.left=Math.random()*80+"%";

    btn.style.top=Math.random()*80+"%";
}

function showMemories(){

    const items = document.querySelectorAll(".gallery img, .gallery video");

    items.forEach(item=>{
        item.classList.add("show");
    });

}
function showMemories(){

    document.querySelectorAll(".memory-card")
        .forEach(card=>{
            card.classList.add("show");
        });

}