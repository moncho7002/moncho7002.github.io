 
 let cont = 0;
 
 function agregar() {
    cont++;
   document.getElementById("cantidad").innerHTML = cont;
 }

 function quitar() {
    if (cont > 0) {
        cont--;
        document.getElementById("cantidad").innerHTML = cont;
    }
 }