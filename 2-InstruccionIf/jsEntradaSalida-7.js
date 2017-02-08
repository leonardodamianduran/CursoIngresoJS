/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var resta;
	var numero1;
	var numero2;

		numeroUno = parseInt(document.getElementById('numeroUno').value);
		numeroDos = parseInt(document.getElementById('numeroDos').value);
				
			resta = numeroUno-numeroDos;

				alert("la resta da : "+ resta);
}

function multiplicar()
{ 
	var mul;
	var numero1;
	var numero2;

		numeroUno = parseInt(document.getElementById('numeroUno').value);
		numeroDos = parseInt(document.getElementById('numeroDos').value);
				
			mul	= numeroUno*numeroDos;

				alert("la multiplicacion da : "+ mul);
}

function dividir()
{
	var dividir;
	var numero1;
	var numero2;

		numeroUno = parseInt(document.getElementById('numeroUno').value);
		numeroDos = parseInt(document.getElementById('numeroDos').value);
				
			dividir	= numeroUno/numeroDos;

				alert("la divicion da : "+ dividir);

}
