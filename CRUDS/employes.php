<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!--Sweet Alert 2-->
	<link rel="stylesheet" href="plugins/sweetaler2/sweetalert2.min.css">
	<link rel="stylesheet" type="text/css" href="../CSS/estilo_cruds.css">
	<title>Employes</title>
</head>

<body>

	<center><h1>E M P L O Y E S</h1></center>
	<hr class="inicio"><br>
	<div id="appEmployees">
		<input type="button" value="Agregar!" @click="btnAlta"class="btnAgregar">

		<table>
			<thead>
				<tr>
					<th>EmployeeID</th>
					<th>LastName</th>
					<th>FirstName</th>
					<th>Title</th>
					<th>TitleOfCourtesy</th>
					<th>BirthDate</th>
					<th>HireDate</th>
					<th>Address</th>
					<th>City</th>
					<th>Region</th>
					<th>PostalCode</th>
					<th>Country</th>
					<th>HomePhone</th>
					<th>Extension</th>
					<th>Notes</th>
					<th>ReportsTo</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="employee of employees">
					<td>{{employee.EmployeeID}}</td>
					<td>{{employee.LastName}}</td>
					<td>{{employee.FirstName}}</td>
					<td>{{employee.Title}}</td>
					<td>{{employee.TitleOfCourtesy}}</td>
					<td>{{employee.BirthDate}}</td>
					<td>{{employee.HireDate}}</td>
					<td>{{employee.Address}}</td>
					<td>{{employee.City}}</td>
					<td>{{employee.Region}}</td>
					<td>{{employee.PostalCode}}</td>
					<td>{{employee.Country}}</td>
					<td>{{employee.HomePhone}}</td>
					<td>{{employee.Extension}}</td>
					<td>{{employee.Notes}}</td>
					<td>{{employee.ReportsTo}}</td>

					<td><center>
						<input type="button" value="editar" @click="btnEditar(employee.EmployeeID, employee.LastName, employee.FirstName, employee.Title, employee.TitleOfCourtesy, employee.BirthDate, employee.HireDate, employee.Address, employee.City, employee.Region, employee.PostalCode, employee.Country, employee.HomePhone, employee.Extension, employee.Notes, employee.ReportsTo)" class="btnEditar">
						<input type="button" value="borrar" @click="btnBorrar(employee.EmployeeID)"class="btnBorrar"></center>
					</td>
				</tr>
			</tbody>
		</table>
	</div>


	<!--<label>Last Name: <input type="text" id="LastName"></label><br><label>First Name: <input type="text" id="FirstName"></label><br><label>Title: <input type="text" id="Title"></label><br><label>Title Of Courtesy: <input type="text" id="TitleOfCourtesy"></label><br><label>BirthDate: <input type="date" id="BirthDate"></label><br><label>HireDate: <input type="date" id="HireDate"></label><br><label>Address: <input type="text" id="Address"></label><br><label>City: <input type="text" id="City"></label><br><label>Region: <input type="text" id="Region"></label><br><label>PostalCode: <input type="text" id="PostalCode"></label><br><label>Country: <input type="text" id="Country"></label><br><label>HomePhone: <input type="text" id="HomePhone"></label><br><label>Extension: <input type="text" id="Extension"></label><br><label>Notes: <br><textarea id="Notes" rows="5" cols="35"></textarea></label><br><label>ReportsTo: <input type="text" id="ReportsTo"></label><br>-->
<!-------------------------JS------------------------------->	
	<!--jQuery-->
	<script src="jquery/jquery-3.5.1.min.js"></script>

	<!--Vue.JS-->
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

	<!--Axios-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>

	<!--Sweetalert 2-->
	<script src="plugins/sweetaler2/sweetalert2.all.min.js"></script>

	<script type="text/javascript" src="JS/employes.js"></script>
</body>
</html>