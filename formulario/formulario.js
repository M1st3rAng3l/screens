var fecha = new Date();
var dia_letra = fecha.getDay();
var dia = fecha.getDate();
var mes = fecha.getMonth();
var año = fecha.getFullYear();

switch(dia_letra) 
{
    case 0: 
        dia_letra = "Domingo"; 
        break;
    case 1: 
        dia_letra = "Lunes"; 
        break;
    case 2: 
        dia_letra = "Martes"; 
        break;
    case 3: 
        dia_letra = "Miércoles"; 
        break;
    case 4: 
        dia_letra = "Jueves"; 
        break;
    case 5: 
        dia_letra = "Viernes"; 
        break;
    case 6: 
        dia_letra = "Sábado"; 
        break;
    default: 
        dia_letra = "Domingo"; 
        break;
}
switch(mes) 
{
    case 0: 
        mes = "Enero"; 
        break;
    case 1: 
        mes = "Febrero"; 
        break;
    case 2: 
        mes = "Marzo"; 
        break;
    case 3: 
        mes = "Abril"; 
        break;
    case 4: 
        mes = "Mayo"; 
        break;
    case 5: 
        mes = "Junio"; 
        break;
    case 6: 
        mes = "Julio";
        break;
    case 7: 
        mes = "Agosto"; 
        break;
    case 8: 
        mes = "Septiembre"; 
        break;
    case 9: 
        mes = "Octubre"; 
        break;
    case 10: 
        mes = "Noviembre"; 
        break;
    case 11: 
        mes = "Diciembre";
        break;
    default: 
        mes = ""; 
        break;
}
mifecha = dia_letra +", "+ dia+" de "+ mes+" de "+año;
document.getElementById('fecha').innerHTML = mifecha;

