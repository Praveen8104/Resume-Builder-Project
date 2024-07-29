// var jyo = false;
var ic = document.getElementById("jyo");
var ico =document.getElementById("crossmark");
fun=()=>{
    // if(jyo===false){
        
        var ic = document.getElementById("jyo");
        ic.style.display="none";
        var sb=document.getElementById("sidebar");
        sb.style.opacity="1";
        sb.style.width="300px";
        sb.style.transition="all 0.5s ease";
        var nb=document.getElementById("navbar");
        nb.style.opacity="1";
        nb.style.width="300px";
        nb.style.transition="all 0.5s ease";
        ico.style.display="block";
}
jyo1=()=>{
    var ico =document.getElementById("crossmark");
        ico.style.display="none";
        var sb=document.getElementById("sidebar");
        sb.style.opacity="0";
        sb.style.width="0px";
        sb.style.transition="all 0.5s ease";
        var nb=document.getElementById("navbar");
        nb.style.opacity="0";
        nb.style.width="0px";
        nb.style.transition="all 0.5s ease";
        ic.style.display="block";
}
const submitSuccess = () => {
    alert("Data Submitted Successfully");
}