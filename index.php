<!DOCTYPE html>
<html>
	<head>
		<title>Lucky Aide</title>
		<meta charset="utf-8">
		<!-- Archivos CSS -->
		<link rel="stylesheet" href="CSS/img-estilo.css">
		<link rel="stylesheet" type="text/css" href="CSS//estilo-index.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
		<!-- Archivos JS -->
		<script src="https://kit.fontawesome.com/a076d05399.js"></script>
		<meta name="viewport" content="width=device-width, user-scalable=no">
	</head>
	<body>
		<!-- Sección superior de la pagina -->
		<header>
		<!-- Logo e iconos del modo oscuro -->
			<div class="contenedor">
				<img src="IMG/logolucky.jpg" id="logo">
		<!-- Barra de buscar -->
				<form>
					<fieldset>
						<input type="text" name="buscar" class="buscar">
						<button type="submit" placeholder="Buscar"><i class="fas fa-search"></i></button>
					</fieldset>
				</form>
			</div>
		</header>

		<br><br><br><br><br><br><br><br> 

		<!-- Contenedor de imagenes formato carrusel-->
		<center>
		<div id="img-prodctos">
			<!-- Imaganes -->
			<div class="fila">
				<!-- Asignando la funcion en js a las etiquetas <a> para llamar a la funcion y abrir la ventana flotante-->
        		<a href="javascript:mostrar();"><img src="IMG-PRODUCTOS/IMG1.jpg" class="img1" id="1"></a>
				<a href="javascript:mostrar();"><img src="IMG-PRODUCTOS/IMG2.jpg" class="img2" id="2"></a>
				<a href="javascript:mostrar();"><img src="IMG-PRODUCTOS/IMG3.jpg" class="img2" id="3"></a>
				<a href="javascript:mostrar();"><img src="IMG-PRODUCTOS/IMG4.jpg" class="img3" id="4"></a>
			</div>		
		</div>
		</center>

		<!-- Ventana flotante -->
		<div class="ven-producto" id="flotante">
			<!-- Asignando la funcion en js a una etiqueta para llamar a la funcion y cerrar la ventana flotante-->
			<a href="javascript:cerrar();" class="fas fa-times" id="cerrar"></a>
		</div>

		<!-- Sección de iconos de los circulos verdes al pie de la pagina
		<center>	
			<div id="contenedorImg">
				<div class="abajo"><i class="fas fa-shopping-cart"></i></div>
				<div class="abajo"><i class="fas fa-database"></i></div>
				<div class="abajo"><i class="fas fa-file-signature"></i></div>	
			</div>
		</center>-->

		<script>
			//Crear la función para aparecer/desaparecer la ventana flotante de info
			function mostrar(){
				//Tomar el valor del div por medio su id
				//Se usa .style.display="block" para llamar a la hoja de estilos CSS y modificar codigo
				document.getElementById("flotante").style.display="block";
			}
			//Se repite la funcion pero esta vez para cerrar
			function cerrar(){
				document.getElementById("flotante").style.display="none";
			}
		</script>

	</body>
</html>