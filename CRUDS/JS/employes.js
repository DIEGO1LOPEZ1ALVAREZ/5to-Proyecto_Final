//VARIABLE QUE ME DICE DONDE ESTA EL CRUD
var url = "../CRUDS/crud_employes.php"

//CREO UNA VARIABLE DE VUE.JS PARA MANEJAR EL SWEETALERT Y EL CRUD_EMPLOYES.PHP
var appEmployees = new Vue({
	el: '#appEmployees',
	data:{
		employees:[],
		EmployeeID:"",
		LastName:"",
		FirstName:"",
		Title:"",
		TitleOfCourtesy:"",
		BirthDate:"",
		HireDate:"",
		Address:"",
		City:"",
		Region:"",
		PostalCode:"",
		Country:"",
		HomePhone:"",
		Extension:"",
		Notes:"",
		ReportsTo:""
	},
	methods:
	{
		//MUESTRA UN FORMULARIO PARA ENVIAR DATOS A altaEmployes
		btnAlta: async function()
		{
			await Swal.fire({
				title: "Nuevo",
				html:
				"<label>Last Name: <input type='text' id='LastName'></label><br><label>First Name: <input type='text' id='FirstName'></label><br><label>Title: <input type='text' id='Title'></label><br><label>Title Of Courtesy: <input type='text' id='TitleOfCourtesy'></label><br><label>BirthDate: <input type='date' id='BirthDate'></label><br><label>HireDate: <input type='date' id='HireDate'></label><br><label>Address: <input type='text' id='Address'></label><br><label>City: <input type='text' id='City'></label><br><label>Region: <input type='text' id='Region'></label><br><label>PostalCode: <input type='text' id='PostalCode'></label><br><label>Country: <input type='text' id='Country'></label><br><label>HomePhone: <input type='text' id='HomePhone'></label><br><label>Extension: <input type='text' id='Extension'></label><br><label>Notes: <br><textarea id='Notes' rows='5' cols='35'></textarea></label><br><label>ReportsTo: <input type='number' id='ReportsTo'></label><br>",
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () => {
					return[
						this.LastName = document.getElementById('LastName').value,
						this.FirstName = document.getElementById('FirstName').value,
						this.Title = document.getElementById('Title').value,
						this.TitleOfCourtesy = document.getElementById('TitleOfCourtesy').value,
						this.BirthDate = document.getElementById('BirthDate').value,
						this.HireDate = document.getElementById('HireDate').value,
						this.Address = document.getElementById('Address').value,
						this.City = document.getElementById('City').value,
						this.Region = document.getElementById('Region').value,
						this.PostalCode = document.getElementById('PostalCode').value,
						this.Country = document.getElementById('Country').value,
						this.HomePhone = document.getElementById('HomePhone').value,
						this.Extension = document.getElementById('Extension').value,
						this.Notes = document.getElementById('Notes').value,
						this.ReportsTo = document.getElementById('ReportsTo').value,
					]
				}
			})
			if (this.LastName == "" || this.FirstName == "" || this.Title == "" || this.TitleOfCourtesy == "" || this.BirthDate == "" || this.HireDate == "" || this.Address == "" || this.City == "" || this.Region == "" || this.PostalCode == "" || this.Country == "" || this.HomePhone == "" || this.Extension == "" || this.Notes == "") 
			{
				Swal.fire({
				icon: 'warning',
				title: 'Datos incompletos'})
			}
			else
			{
				if (this.ReportsTo == "") 
				{
					this.ReportsTo='null'
				}
				this.altaEmployees();
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000
				});
				Toast.fire({
					type: 'success',
					title: 'Producto Agregado!'
				})
			}
		},

		//MUESTRA UN FORMULARIO PARA EDITAR LOS DATOS Y ENVIARLOS A editarEmployee
		btnEditar: async function(EmployeeID,LastName,FirstName,Title,TitleOfCourtesy,BirthDate,HireDate,Address,City,Region,PostalCode,Country,HomePhone,Extension,Notes,ReportsTo)
		{
			//var hi = ReportsTo;
			await Swal.fire({
				title: 'Editar',
				html:
				"<label>Last Name: <input type='text' id='LastName' value='"+LastName+"'></label><br><label>First Name: <input type='text' id='FirstName' value='"+FirstName+"'></label><br><label>Title: <input type='text' id='Title' value='"+Title+"'></label><br><label>Title Of Courtesy: <input type='text' id='TitleOfCourtesy' value='"+TitleOfCourtesy+"'></label><br><label>BirthDate: <input type='date' id='BirthDate' value='"+BirthDate+"'></label><br><label>HireDate: <input type='date' id='HireDate' value='"+HireDate+"'></label><br><label>Address: <input type='text' id='Address' value='"+Address+"'></label><br><label>City: <input type='text' id='City' value='"+City+"'></label><br><label>Region: <input type='text' id='Region' value='"+Region+"'></label><br><label>PostalCode: <input type='text' id='PostalCode' value='"+PostalCode+"'></label><br><label>Country: <input type='text' id='Country' value='"+Country+"'></label><br><label>HomePhone: <input type='text' id='HomePhone' value='"+HomePhone+"'></label><br><label>Extension: <input type='text' id='Extension' value='"+Extension+"'></label><br><label>Notes: <br><textarea id='Notes' rows='5' cols='35'>"+Notes+"</textarea></label><br><label>ReportsTo: <input type='number' id='ReportsTo' value='"+ ReportsTo +"'></label><br>",
				focusConfirm: false,
				showCancelButton: true
			}).then((result) => {
				if (result.value) 
				{
					LastName = document.getElementById('LastName').value,
					FirstName = document.getElementById('FirstName').value,
					Title = document.getElementById('Title').value,
					TitleOfCourtesy = document.getElementById('TitleOfCourtesy').value,
					BirthDate = document.getElementById('BirthDate').value,
					HireDate = document.getElementById('HireDate').value,
					Address = document.getElementById('Address').value,
					City = document.getElementById('City').value,
					Region = document.getElementById('Region').value,
					PostalCode = document.getElementById('PostalCode').value,
					Country = document.getElementById('Country').value,
					HomePhone = document.getElementById('HomePhone').value,
					Extension = document.getElementById('Extension').value,
					Notes = document.getElementById('Notes').value,
					ReportsTo = document.getElementById('ReportsTo').value

					if (ReportsTo == "") 
					{
						ReportsTo='null'
					}

					this.editarEmployee(EmployeeID,LastName,FirstName,Title,TitleOfCourtesy,BirthDate,HireDate,Address,City,Region,PostalCode,Country,HomePhone,Extension,Notes,ReportsTo);
					Swal.fire(
						'!Actualizado!',
						'El registro ha sido actualizado',
						'success'
						)
				}
			})
		},

		btnBorrar: function(EmployeeID)
		{
			Swal.fire({
				title: 'Esta seguro de borrar el registro: '+ EmployeeID +'?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Borrar'
			}).then((result) =>{
				if (result.value) 
				{
					this.borrarEmployee(EmployeeID);
					Swal.fire(
						'!Eliminado!',
						'El registro ha sido borrado.',
						'success'
					)
				}
			})
		},







		/*METODOS PARA ENVIAR AL CRUD_EMPLOYES.PHP
						|
						|
						|
						|
						|
						V
		*/

		//ENVIA AL PHP LOS DATOS RESULTANTES DE LA FUNCION btnAlta
		altaEmployees: function()
		{
			axios.post(url,{opcion:1, LastName:this.LastName, FirstName:this.FirstName, Title:this.Title, TitleOfCourtesy:this.TitleOfCourtesy, BirthDate:this.BirthDate, HireDate:this.HireDate, Address:this.Address, City:this.City, Region:this.Region, PostalCode:this.PostalCode, Country:this.Country, HomePhone:this.HomePhone, Extension:this.Extension, Notes:this.Notes, ReportsTo:this.ReportsTo}).then(response =>{
				this.listarEmployees();
			})

			this.LastName = "";
			this.FirstName = "";
			this.Title = "";
			this.TitleOfCourtesy = "";
			this.BirthDate = "";
			this.HireDate = "";
			this.Address =""; 
			this.City = "";
			this.Region = "";
			this.PostalCode = "";
			this.Country = "";
			this.HomePhone = "";
			this.Extension = "";
			this.Notes = "";
			this.ReportsTo = "";		
		},

		//EDITA LAS CELDAS, RECIBE PARAMETROS Y LOS ENVIA AL PHP
		editarEmployee: function(EmployeeID,LastName,FirstName,Title,TitleOfCourtesy,BirthDate,HireDate,Address,City,Region,PostalCode,Country,HomePhone,Extension,Notes,ReportsTo)		{
			axios.post(url,{opcion:2, EmployeeID:EmployeeID, LastName:LastName, FirstName:FirstName, Title:Title, TitleOfCourtesy:TitleOfCourtesy, BirthDate:BirthDate, HireDate:HireDate, Address:Address, City:City, Region:Region, PostalCode:PostalCode, Country:Country, HomePhone:HomePhone, Extension:Extension, Notes:Notes, ReportsTo:ReportsTo}).then(response =>{
				this.listarEmployees();
			});
		},

		borrarEmployee: function(EmployeeID)
		{
			axios.post(url,{opcion:3, EmployeeID:EmployeeID}).then(response =>{
				this.listarEmployees();
			});
		},

		//LLAMA E IMPRIME EN LA PANTALLA LOS DATOS DE LA BASE DE DATOS
		listarEmployees: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.employees = response.data;
			});
		},

	},
	created: function()
	{
		this.listarEmployees();
	}
})