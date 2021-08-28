function powitanie1() {
    var imie = document.getElementById("imie").value;//ECMASCRIPT 5
    var nazwisko = document.getElementById("nazwisko").value;
    document.getElementById("akapit1").innerHTML = "Witaj " + imie + " " + nazwisko + ". Hej, hej";
}
function powitanie2() {
    var imie = document.querySelector("#imie").value;//ECMASCRIPT 6
    var nazwisko = document.querySelector("#nazwisko").value;
    document.querySelector("#akapit2").innerHTML = `Witaj ${imie} ${nazwisko}. Hej, hej`;
}
//ECMASCRIPT 5
document.getElementById("przycisk1").addEventListener("click", powitanie1);//z () funkcja uruchamia sie od razu po załadowaniu strony
//ECMASCRIPT 6
document.querySelector("#przycisk2").addEventListener("click", powitanie2);