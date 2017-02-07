/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var suma;



		lala = parseInt(document.getElementById('PrecioUno').value);


		lal = parseInt(document.getElementById('PrecioDos').value);


		la = parseInt(document.getElementById('PrecioTres').value);


			suma = lala + lal + la;

				alert("la suma da : "+ suma);
/*
     Precio1= getElementById('PrecioUno').value;
     Precio2= getElementById('PrecioDos').value;
     Precio3= getElementById('PrecioTres').value;
*/	
	/*promedio = suma/3
	total = ((suma*25)/100)s
*/
}
function Promedio () 
{
	var prom;



		lala = parseInt(document.getElementById('PrecioUno').value);


		lal = parseInt(document.getElementById('PrecioDos').value);


		la = parseInt(document.getElementById('PrecioTres').value);


			prom = (lala + lal + la)/3;

				alert("Tu promedio es de : "+ prom);
}
function PrecioFinal () 
{
	var total;
	var iva;


		lala = parseInt(document.getElementById('PrecioUno').value);


		lal = parseInt(document.getElementById('PrecioDos').value);


		la = parseInt(document.getElementById('PrecioTres').value);

			sum= (lala+lal+la)
			iva = ((lala + lal + la)*25)/100;
			total= sum+iva

				alert("el precio del iva es de : "+ iva);
				alert("tu precio con el iva incluido es de : "+ total);


}