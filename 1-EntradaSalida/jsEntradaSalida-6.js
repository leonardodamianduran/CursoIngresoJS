/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()

{
	var sumar;
	var numero1;
	var numero2;

		numeroUno = parseInt(document.getElementById('numeroUno').value);
		numeroDos = parseInt(document.getElementById('numeroDos').value);
				
			sumar	= numeroUno+numeroDos;

				alert("la suma da : "+ sumar);

}

