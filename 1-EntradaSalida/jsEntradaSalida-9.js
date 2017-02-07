/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	
	var sueldo;
	var resto;
	var resultado;
	//var aumento;

		sueldo = parseInt(document.getElementById('sueldo').value);
		resultado = parseInt(document.getElementById('resultado').value);
				
			resto	= ((sueldo)*10)/100;
			resultado = (resto+sueldo)
				alert("su aumento es de :"+ resto );
				alert("su sueldo va ah ser de : " + resultado);
	
}
