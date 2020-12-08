/*
    Las siguientes funciones, tratan de lo mismo. Se crea una funcion con el nombre
    de la categoria a mostrar, dentro de ella, se toma el valor de dicha categoria y se hace vivisible 
    por medio de una etiqueta <a> en el codigo HTML que es la que llama a la funcion
*/

function mostrarBeverages(){
	document.getElementById("imgBeverages").style.display="block";
	document.getElementById("imgDairyProducts").style.display="none";
    document.getElementById("imgCondiments").style.display="none";
    document.getElementById("imgConfections").style.display="none";
    document.getElementById("imgCereals").style.display="none";
    document.getElementById("imgMeat").style.display="none";
    document.getElementById("imgProduce").style.display="none";
}

function mostrarCondiments(){
    document.getElementById("imgCondiments").style.display="block";
    document.getElementById("imgBeverages").style.display="none";
    document.getElementById("imgConfections").style.display="none";
    document.getElementById("imgCDairyProducts").style.display="none";
    document.getElementById("imgCereals").style.display="none";
    document.getElementById("imgMeat").style.display="none";
    document.getElementById("imgProduce").style.display="none";
}
function mostrarConfections()
{
	document.getElementById("imgConfections").style.display="block";
	document.getElementById("imgCondiments").style.display="none";
	document.getElementById("imgBeverages").style.display="none";
	document.getElementById("imgDairyProducts").style.display="none";
	document.getElementById("imgCereals").style.display="none";
	document.getElementById("imgMeat").style.display="none";
	document.getElementById("imgProduce").style.display="none";
}
function mostrarDairyProducts()
{
	document.getElementById("imgDairyProducts").style.display="block";
	document.getElementById("imgConfections").style.display="none";
	document.getElementById("imgCondiments").style.display="none";
	document.getElementById("imgBeverages").style.display="none";
	document.getElementById("imgCereals").style.display="none";
	document.getElementById("imgMeat").style.display="none";
	document.getElementById("imgProduce").style.display="none";
}
function mostrarCereals()
{
	document.getElementById("imgCereals").style.display="block";
	document.getElementById("imgDairyProducts").style.display="none";
	document.getElementById("imgConfections").style.display="none";
	document.getElementById("imgCondiments").style.display="none";
	document.getElementById("imgBeverages").style.display="none";
	document.getElementById("imgMeat").style.display="none";
	document.getElementById("imgProduce").style.display="none";
}
function mostrarMeat()
{
	document.getElementById("imgMeat").style.display="block";
	document.getElementById("imgCereals").style.display="none";
	document.getElementById("imgDairyProducts").style.display="none";
	document.getElementById("imgConfections").style.display="none";
	document.getElementById("imgCondiments").style.display="none";
	document.getElementById("imgBeverages").style.display="none";
	document.getElementById("imgProduce").style.display="none";
}
function mostrarProduce
{
	document.getElementById("imgProduce").style.display="block";
	document.getElementById("imgMeat").style.display="none";
	document.getElementById("imgCereals").style.display="none";
	document.getElementById("imgDairyProducts").style.display="none";
	document.getElementById("imgConfections").style.display="none";
	document.getElementById("imgCondiments").style.display="none";
	document.getElementById("imgBeverages").style.display="none";
}