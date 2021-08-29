function stylowanie1() {
    //ECMASCRIPT 5
    var akapity = document.getElementsByTagName("p");//tablica obiektów p
    for(var i=0; i<akapity.length; i+=2){
        akapity[i].style.color="red";
        akapity[i].style.backgroundColor="yellow";
    }
   }
   function stylowanie2() {
    //ECMASCRIPT 6
    var akapity = document.querySelectorAll("p");//tablica obiektów p
    for(var i=1; i<akapity.length; i+=2){
        akapity[i].style.color="green";
        akapity[i].style.backgroundColor="orange";
    }
   }
document.getElementById("b1").addEventListener("click", stylowanie1);
document.querySelector("#b2").addEventListener("click", stylowanie2);