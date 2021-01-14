function año(){
    var nac=document.getElementById("ingresar").value;
    var edad 
    edad=nac-2020
    if (edad<=17) {
        alert("es menor de edad"+edad)
    } else {
        alert("es mayor de edad"+edad)
    }
}