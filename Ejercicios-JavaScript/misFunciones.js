/**
 * Descripción
 * permite convertir metro, pie, pulgada y yarda
 * @method convertirunidades
 * @param {string} nombre
 * @param {string} valor
 */
function convertirunidades(nombre, valor) {
    if (isNaN(valor)) {
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("yarda").value = "";
        document.getElementById("pie").value = "";
        alert("el valor ingresado no es correcto")
    }
    if (nombre === "pulgada") {
        document.getElementById("metro").value = valor * 0.0254;
        document.getElementById("pie").value = valor * 0.0833;
        document.getElementById("yarda").value = valor * 0.027777777777778;
    }
    if (nombre === "pie") {
        document.getElementById("metro").value = valor * 0.3048;
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor * 0.333333333;
    }
    if (nombre === "yarda") {
        document.getElementById("metro").value = valor * 0.9144;
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;
    }
}
function convertirGR(id){
    if(id==="grados") {
        let grad = document.getElementById("grados").value;
        let rad=grad*Math.PI/180;
        document.getElementById("radianes").value=rad;
    }else if (id==="radianes"){
        let rad=document.getElementById("radianes").value;
        let grad=rad*180/Math.PI;
        document.getElementById("grados").value=grad;

    }

}
function CargarEventListener(){
    document.getElementById("myCanvas").addEventListener("mousemove", dibujar);}
function dibujar(event) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);
    canvas.onmousedown = function () {
        baandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };
    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
    }
}
    function borrarcanvas(){
    const canvas =document.getElementById("myCanvas");
    canvas.width=canvas.width;

}

function dibujarcuadriculado(){
    const canvas=document.getElementById("myCanvas");
    const ctx=canvas.getContext("2d");
    const paso=20;
    const anchomax=canvas.width;
    const alturamax=canvas.height;
//lineas horizontales
    for(let i=paso;i<alturamax;) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchomax, i);
        ctx.stroke();
        ctx.closePath();
        i+=paso;
    }
    //lineas verticales
    for(let i=paso;i<anchomax;) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturamax);
        ctx.stroke();
        ctx.closePath();
        i += paso;
    }
    //eje x
    ctx.strokeStyle= "#e800ff"
    ctx.beginPath();
    ctx.moveTo(0,alturamax/2);
    ctx.lineTo(anchomax,alturamax/2);
    cx.stroke();
    ctx.closePath();
//eje y

    ctx.beginPath();
    ctx.moveTo(anchomax/2,0);
    ctx.lineTo(anchomax/2,alturamax);
    cx.stroke();
    ctx.closePath();
    }