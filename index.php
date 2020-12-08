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

		<div class="menu">
			<!-- Cada uno de estas etiquetas, aparece su respectiva categoria y manda llamar al archivo estilo-index.js -->
			<a href="javascript: mostrarBeverages();">Beverages</a>
			<a href="javascript: mostrarCondiments();">Condiments</a>
			<a href="javascript: mostrarConfections();">Confections</a>
			<a href="javascript: mostrarDairyProducts();">Dairy Products</a>
			<a href="javascript: mostrarCereals();">Grains / Cereals</a>
			<a href="javascript: mostrarMeat();">Meat / Poultry</a>
			<a href="javascript: mostrarProduce();">Produce</a>
		</div>

			<!--Llama al js para el carrusel-->
			<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
			<script type="text/javascript" src="JS/jquery.hislide.js" ></script>
			<script>
				$('.slide').hiSlide();
			</script>

		<!-- QUEDA PENTIENTE DE COLOCAR LA PARTE DE IMAGENES EN OTRO ARCHIVO PARA OPTIMIZARLO -->
		<!-- Imagenes -->
		<div class="imgBeverages" id="imgBeverages">
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG1.jpg" alt="" id="1">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG2.jpg" alt="" id="2">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG24.jpg" alt="" id="3">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG34.jpg" alt="" id="4">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG35.jpg" alt="" id="1">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG38.jpg" alt="" id="2">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG39.jpg" alt="" id="3">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG43.jpg" alt="" id="4">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG67.jpg" alt="" id="1">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG70.jpg" alt="" id="2">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG75.jpg" alt="" id="3">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG76.jpg" alt="" id="4">
				</div>
			</div><br>
		</div>
		


		<div class="imgCondiments" id="imgCondiments">
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG3.jpg" alt="" id="3">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG4.jpg" alt="" id="4">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG5.jpg" alt="" id="5">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG6.jpg" alt="" id="6">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG8.jpg" alt="" id="8">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG15.jpg" alt="" id="15">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG44.jpg" alt="" id="44">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG61.jpg" alt="" id="61">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG63.jpg" alt="" id="63">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG65.jpg" alt="" id="65">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG66.jpg" alt="" id="66">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG77.jpg" alt="" id="77">
				</div>
			</div><br>



			<div class="imgConfections" id="imgConfections">
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG16.jpg" alt="" id="16">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG19.jpg" alt="" id="19">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG20.jpg" alt="" id="20">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG21.jpg" alt="" id="21">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG25.jpg" alt="" id="25">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG26.jpg" alt="" id="26">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG27.jpg" alt="" id="27">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG47.jpg" alt="" id="47">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG48.jpg" alt="" id="48">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG49.jpg" alt="" id="49">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG50.jpg" alt="" id="50">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG62.jpg" alt="" id="62">
				</div>
			</div><br>
		</div>



		<div class="imgDairyProducts" id="imgDairyProducts">
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG11.jpg" alt="" id="11">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG12.jpg" alt="" id="12">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG31.jpg" alt="" id="31">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG32.jpg" alt="" id="32">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG33.jpg" alt="" id="33">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG59.jpg" alt="" id="59">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG60.jpg" alt="" id="60">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG69.jpg" alt="" id="69">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG71.jpg" alt="" id="71">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG72.jpg" alt="" id="72">
				</div>
			</div><br>
		</div>



		<div class="imgCereals" id="imgCereals">
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG22.jpg" alt="" id="22">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG23.jpg" alt="" id="23">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG42.jpg" alt="" id="42">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG52.jpg" alt="" id="52">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG56.jpg" alt="" id="56">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG57.jpg" alt="" id="57">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG64.jpg" alt="" id="64">
				</div>
			</div>
		</div>



		<div class="imgMeat" id="imgMeat">
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG9.jpg" alt="" id="9">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG17.jpg" alt="" id="17">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG29.jpg" alt="" id="29">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG53.jpg" alt="" id="53">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG54.jpg" alt="" id="54">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG55.jpg" alt="" id="55">
				</div>
			</div>
		</div>



		<div class="imgProduce" id="imgProduce">
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG7.jpg" alt="" id="7">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG14.jpg" alt="" id="14">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG28.jpg" alt="" id="28">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG51.jpg" alt="" id="51">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG74.jpg" alt="" id="74">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG10.jpg" alt="" id="10">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG13.jpg" alt="" id="13">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG18.jpg" alt="" id="18">
				</div>
			</div><br>
			<div class="fila1">
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG30.jpg" alt="" id="30">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG36.jpg" alt="" id="36">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG37.jpg" alt="" id="37">
				</div>
				<div class="img">
					<img src="IMG-PRODUCTOS/IMG740.jpg" alt="" id="40">
				</div>
			</div><br>
		</div>
		<!-- Archivos JS -->
		<script src="https://kit.fontawesome.com/a076d05399.js"></script>
		<script src="JS/estilo-index.js"></script>

	</body>
</html>