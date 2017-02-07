/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
/*var resto;
	//var numero1;
	//var numero2;
	var total;
		sueldo = (document.getElementById('sueldo').value);
		resultado = (document.getElementById('resultado').value);
				//parseInt(sueldo);
				//parseInt(resto);
			resto	= ((sueldo*10)/100);
			total = (resto) + (sueldo);
				alert("Tu aumento va ah ser de : " + resto);
				alert("tu sueldo va ah ser de : "+ total);
				//document.write( "Tu sueldo apartir de ahora sera de : "+ total );
	*/
	
	var sueldo;
	var resto;
	var resultado;
	//var aumento;

		sueldo = parseInt(document.getElementById('sueldo').value);
		resultado = parseInt(document.getElementById('resultado').value);
			//parseInt(sueldo);
			//parseInt(resultado)
			resto	= ((sueldo)*10)/100;
			resultado = (resto+sueldo)
				alert("su aumento es de :"+ resto );
				alert("su sueldo va ah ser de : " + resultado);	
				document.write( "te podes ir tranquilo vas a cobrar todo esto =) : "+ resultado );
}
