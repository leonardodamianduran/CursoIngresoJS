/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var total;

	
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById("Ancho").value;

	parseInt(largo);
	parseInt(ancho);

	total=((ancho*2)+(largo*2))*3;
	//document.write(total);
	alert(total);
}
function Circulo () 
{
	var radio;
	var total;

	radio=document.getElementById("Radio").value;
	parseInt(radio);
	total=((radio*2)*3.14)*3;
	alert(total);

}
function Materiales () 
{
	var largo;
	var ancho;
	var total;
	var cal;
	var cem;
	var metro;
	
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById("Ancho").value;

	parseInt(largo);
	parseInt(ancho);

	metro=(largo*ancho)
	cal=metro*3
	cem=metro*2
	alert("las cal que vas a usar son: "+cal)
	alert("los cementos que vas a usar: "+cem)
}