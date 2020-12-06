<!DOCTYPE html>
<html>
	<head>
		<title>Lucky Aide</title>
		<meta charset="utf-8">
		<!-- Archivos CSS -->
		<link rel="stylesheet" href="CSS/img-estilo.css">
		<link rel="stylesheet" type="text/css" href="CSS//estilo-index.css">
		<link rel="stylesheet" href="CSS/estilo-index.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
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
		<!--Carrousel-->
		<!-- Contenedor de imagenes formato carrusel-->
		<center>
		<div id="img-prodctos">
				<!-- Asignando la funcion en js a las etiquetas <a> para llamar a la funcion y abrir la ventana flotante-->
				<div class="slide hi-slide">
				     <div class="hi-prev"></div>
				     	<div class="hi-next"></div>	
				          <ul>
				            <!-- imagenes -->
				            <li><a href="javascript:mostrar();"><img src="IMG-PRODUCTOS/IMG1.jpg" class="img1" id="1"></a></li>

				            <li><a href="javascript:mostrar();"><img src="IMG-PRODUCTOS/IMG2.jpg" class="img2" id="2"></a></li>

				            <li><a href="javascript:mostrar();"><img src="IMG-PRODUCTOS/IMG3.jpg" class="img2" id="3"></a></li>
				            
				            <li><a href="javascript:mostrar();"><img src="IMG-PRODUCTOS/IMG4.jpg" class="img3" id="4"></a></li>
				          </ul>	        				
				</div>
			</div>
			</center>

			<!--Llama al js para el carrusel-->
			<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
			<script type="text/javascript" src="JS/jquery.hislide.js" ></script>
			<script>
				$('.slide').hiSlide();
			</script>


		<!-- Imagenes -->
		<div class="imagenes">
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG1.jpg" alt="" id="1">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG2.jpg" alt="" id="2">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG3.jpg" alt="" id="3">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG4.jpg" alt="" id="4">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG1.jpg" alt="" id="1">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG2.jpg" alt="" id="2">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG3.jpg" alt="" id="3">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG4.jpg" alt="" id="4">
				</div>
			</div>
        </div>

		<!-- Ventana flotante -->
		<div class="ven-producto" id="flotante">
			<!-- Asignando la funcion en js a una etiqueta para llamar a la funcion y cerrar la ventana flotante-->
			<a href="javascript:cerrar();" id="cerrar">x</a><br>
			<div class="s-img">
				
			</div>
		</div>

		<!-- Archivos JS -->
		<script src="https://kit.fontawesome.com/a076d05399.js"></script>
		<script src="JS/estilo-index.js"></script>

	</body>
</html>