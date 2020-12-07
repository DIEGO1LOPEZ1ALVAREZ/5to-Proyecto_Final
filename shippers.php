<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!--Sweet Alert 2-->
	<link rel="stylesheet" href="plugins/sweetaler2/sweetalert2.min.css">
	<title>Shippers</title>
</head>

<body>

	<div id="appShippers">
		<input type="button" value="Agregar!" @click="btnAlta">

		<table border="1">
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

					<td>
						<input type="button" value="editar" @click="btnEditar(shipper.ShipperID, shipper.CompanyName, shipper.Phone)">
						<input type="button" value="borrar" @click="btnBorrar(shipper.ShipperID)">
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


	<script type="text/javascript" src="shippers.js"></script>
</body>
</html>