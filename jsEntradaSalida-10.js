/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var resto;
	var numero1;
	var numero2;
	var total;
		importe = parseInt(document.getElementById('importe').value);
		//resultado = parseInt(document.getElementById('resultado').value);
				
			resto	= ((importe*25)/100);
			total = (importe-resto);
				alert("Tu descuento va ah ser de : "+ resto);
				document.write( "Tu sueldo apartir de ahora sera de : "+total );
}
