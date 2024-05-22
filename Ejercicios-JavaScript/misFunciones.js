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