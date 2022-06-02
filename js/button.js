btnN1=document.getElementById("btn-n1");

btnN1.addEventListener("keyup",function(){
    alert("Luciana");
})
btnN2=document.getElementById("btn-n2");

btnN2.addEventListener("click",function(){
    alert("Patricio");
})
btnN4=document.getElementById("btn-n4");

btnN4.addEventListener("click",function(){
    alert("Jota");
})
btnN5=document.getElementById("btn-n5");

btnN5.addEventListener("click",function(){
    alert("Angie");
})

nombre = document.getElementById("nombre");
btnN3 =document.getElementById("btn-n3");
btnN3.addEventListener("click",mostrarTexto);
function mostrarTexto(){
    alert(nombre.value)
}