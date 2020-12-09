<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!--Sweet Alert 2-->
	<link rel="stylesheet" href="plugins/sweetaler2/sweetalert2.min.css">

	<link rel="stylesheet" type="text/css" href="../CSS/estilo_cruds.css">
	<title>Shippers</title>
</head>

<body>

	<center><h1>S H I P P E R S</h1></center>
	<hr class="inicio"><br>
	<div id="appShippers">
		<input type="button" value="Agregar!" @click="btnAlta" class="btnAgregar">

		<table>
			<thead>
				<tr>
					<th>ShipperID</th>
					<th>CompanyName</th>
					<th>Phone</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="shipper of shippers">
					<td>{{shipper.ShipperID}}</td>
					<td>{{shipper.CompanyName}}</td>
					<td>{{shipper.Phone}}</td>

					<td><center>
						<input type="button" value="Editar" @click="btnEditar(shipper.ShipperID, shipper.CompanyName, shipper.Phone)"class="btnEditar">
						<input type="button" value="Borrar" @click="btnBorrar(shipper.ShipperID)"class="btnBorrar"></center>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<!-- -->


<!-------------------------JS------------------------------->	
	<!--jQuery-->
	<script src="jquery/jquery-3.5.1.min.js"></script>

	<!--Vue.JS-->
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

	<!--Axios-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>

	<!--Sweetalert 2-->
	<script src="plugins/sweetaler2/sweetalert2.all.min.js"></script>


	<script type="text/javascript" src="JS/shippers.js"></script>
</body>
</html>