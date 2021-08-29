
function zmiana() {
   
    var obraz = document.querySelector("#hipcio");
    if(obraz.style.display=="none") {
        obraz.style.display="inline-block";
        document.querySelector("#klik").innerHTML="Ukryj";
    }
    else
    {
        obraz.style.display="none";
        document.querySelector("#klik").innerHTML="Pokaż";
    } 
}
document.querySelector("#klik").addEventListener("click",zmiana);