function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;



switch (mesDelAño) 
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "abril":
    case "mayo":
    case "junio":
       alert("Falta para el invierno");
        break;    
    case "julio":
    case "agosto":
       alert("abrigate hace frio");
        break;    
    case "septiembre":  
    case "octubre":
    case "noviembre":
    case "diciembre":
       alert("Ya pasamos el frio, ahora calor!!!.");
        break;    
                                  

                

}


}//FIN DE LA FUNCIÓN