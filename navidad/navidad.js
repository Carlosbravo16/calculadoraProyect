let di = hr = mn = sg = ms = "0" + 0, iniciarTiempo;

const botonIniciar =document.querySelector(".iniciar");
const botonDetener =document.querySelector(".detener");



function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - ahora + 100) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante,reloj,mensaje){
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval( () => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML = `${t.diasFaltantes}d:${t.horasFaltantes}h:${t.minutosFaltantes}m:${t.segundosFaltantes}s`;

        if(t.tiempoFaltante < 1){
            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
        }
    }, 1000)
};


cuentaRegresiva('Nov 25 2023 19:32:00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad!');


