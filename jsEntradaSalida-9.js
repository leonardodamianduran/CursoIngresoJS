/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var resto;
	var numero1;
	var numero2;
	var total;
		sueldo = parseInt(document.getElementById('sueldo').value);
		//resultado = parseInt(document.getElementById('resultado').value);
				
			resto	= ((sueldo*10)/100);
			total = (resto+sueldo);
				alert("Tu aumento va ah ser de : "+ resto);
				document.write( "Tu sualdo apartir de ahora sera de : "+total );
}
