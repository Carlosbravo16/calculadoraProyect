let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ("../proyecto5/sound/botonbailar.mp3");
let botonAudio = new Audio ("../proyecto5/sound/audio.mp3")

function bailar(){
    if (esqueleto == "off"){
        esqueleto = "on"
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
            botonAudio.play();
        })

        console.log("On");
    }else{
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.pause();
        })
        console.log("Off")
    }
}