//Crear la función para aparecer la ventana flotante de info
function mostrar(){
    //Tomar el valor del div por medio su id
    //Se usa .style.display="block" para llamar a la hoja de estilos CSS y modificar codigo
    document.getElementById("flotante").style.display="block";
}
//Se repite la funcion pero esta vez para cerrar
function cerrar(){
    document.getElementById("flotante").style.display="none";
}