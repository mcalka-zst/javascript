function stylowanie(){
    var akapit = document.querySelector("#akapit");
    akapit.style.color="red";
    akapit.style.background="yellow";
    akapit.style.fontStyle="italic";
    akapit.style.fontWeight="bold";
    akapit.style.border="solid 2px brown";
}
function stylowanie2(){
    var akapit = document.querySelector("#akapit");
    akapit.style.fontSize="25px";
}
document.querySelector("#b1").addEventListener("click",stylowanie);
document.querySelector("#akapit").addEventListener("mouseover",stylowanie2);
document.querySelector("#akapit").addEventListener("mouseout",()=>{
    var akapit = document.querySelector("#akapit");
    akapit.style.fontSize="16px"; 
});