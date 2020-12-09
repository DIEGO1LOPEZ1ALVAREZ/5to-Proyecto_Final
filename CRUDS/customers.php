<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!--Sweet Alert 2-->
	<link rel="stylesheet" href="plugins/sweetaler2/sweetalert2.min.css">
	<link rel="stylesheet" type="text/css" href="../CSS/estilo_cruds.css">
	<title>Customers</title>
</head>

<body>

	<center><h1>E M P L O Y E S</h1></center>
	<hr class="inicio"><br>

	<div id="appCustomers">
		<input type="button" value="Agregar!" @click="btnAlta" class="btnAgregar">

		<table>
			<thead>
				<tr>
					<th>CustomerID</th>
					<th>CompanyName</th>
					<th>ContactName</th>
					<th>ContactTitle</th>
					<th>Address</th>
					<th>City</th>
					<th>Region</th>
					<th>PostalCode</th>
					<th>Country</th>
					<th>Phone</th>
					<th>Fax</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="customer of customers">
					<td>{{customer.CustomerID}}</td>
					<td>{{customer.CompanyName}}</td>
					<td>{{customer.ContactName}}</td>
					<td>{{customer.ContactTitle}}</td>
					<td>{{customer.Address}}</td>
					<td>{{customer.City}}</td>
					<td>{{customer.Region}}</td>
					<td>{{customer.PostalCode}}</td>
					<td>{{customer.Country}}</td>
					<td>{{customer.Phone}}</td>
					<td>{{customer.Fax}}</td>

					<td>
						<input type="button" value="editar" @click="btnEditar(customer.CustomerID, customer.CompanyName, customer.ContactName, customer.ContactTitle, customer.Address, customer.City, customer.Region, customer.PostalCode, customer.Country, customer.Phone, customer.Fax)"class="btnEditar">
						<input type="button" value="borrar" @click="btnBorrar(customer.CustomerID)"class="btnBorrar">
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

	<script type="text/javascript" src="JS/customers.js"></script>
</body>
</html>