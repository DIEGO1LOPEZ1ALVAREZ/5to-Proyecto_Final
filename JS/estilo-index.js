/*
    Las siguientes funciones, tratan de lo mismo. Se crea una funcion con el nombre
    de la categoria a mostrar, dentro de ella, se toma el valor de dicha categoria y se hace vivisible 
    por medio de una etiqueta <a> en el codigo HTML que es la que llama a la funcion
*/

function mostrarBeverages(){
    document.getElementById("imgBeverages").style.display="block";
    document.getElementById("imgCondiments").style.display="none";
}

function mostrarCondiments(){
    document.getElementById("imgCondiments").style.display="block";
    document.getElementById("imgBeverages").style.display="none";
}