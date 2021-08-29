
//ECMASCRIPT  5
document.getElementById("przycisk1").addEventListener("click", function () {
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    document.getElementById("akapit1").innerHTML = "Witaj " + imie + " " + nazwisko + ". Hej, hej";
});



//ECMASCRIPT 6 z funkcją strzałkową
document.querySelector("#przycisk2").addEventListener("click", ()=>{
    var imie = document.querySelector("#imie").value;
    var nazwisko = document.querySelector("#nazwisko").value;
    document.querySelector("#akapit2").innerHTML = `Witaj ${imie} ${nazwisko}. Hej, hej`;
});