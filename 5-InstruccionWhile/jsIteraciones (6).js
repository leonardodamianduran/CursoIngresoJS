function Mostrar()
{
/*
	var contador=0;
	var acumulador=0;
	var numero;
	var total=prompt("ingrese digito");
	var prom;


while (contador<5)
{
	suma=total
	acumulador=acumulador+total
	numero=prompt("ingrese numero");
	numero=parseInt(numero);
	contador++
	console.log(contador);
}



prom=acumulador/5
alert(acumulador);
alert(prom);
*/
var contador=0;
var acumulador=0;
var numero;
var total=prompt("igrese digito");

while	(contador<5)
{

	numero=parseInt(numero);
	numero=prompt("ingrese numero")
	contador++
	/*
	while (numero<-10 || numero>10)
	{
	numero=prompt("ingrese numero entre -10 y 10");
	numero=parseInt(numero);
	
	}
*/
acumulador= acumulador+numero;
promedio=acumulador/5;
}
/*
acumulador=acumulador+numero 
promedio=acumulador/5
alert (promedio);

*/
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN