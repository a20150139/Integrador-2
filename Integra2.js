alert("Hola, buenos dias");
var nom=prompt("Ingrese su nombre");
var preg1=prompt("¿Cómo se llama el día de Primavera?\nA:Primer dia de Primavera\nB:Equinoccio de Primavera\nC:Equinoccio de Invierno");
if(preg1=="B","b"){
    preg1= 25
}
else{
    preg1=0
}
document.write("Tienes ", preg1 );
var preg2=prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA:6 meses de luz\nB:6 meses de oscuridad\nC:6 meses de alternancia");
if(preg2=="A","a"){
    preg2= 25
}
else{
    preg2=0
}
var total=preg1+preg2
if (total>= 25){
    document.write( nom, " sabes de Primavera");
}
else{
    document.write( nom, " te falta");
}