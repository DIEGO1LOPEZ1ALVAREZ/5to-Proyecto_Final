//VARIABLE QUE ME DICE DONDE ESTA EL CRUD
var url = "../CRUDS/crud_customers.php"

//CREO UNA VARIABLE DE VUE.JS PARA MANEJAR EL SWEETALERT Y EL CRUD_CUSTOMERS
var appCustomers = new Vue({
	el: '#appCustomers',
	data:{
		customers:[],
		CustomerID:"",
		CompanyName:"",
		ContactName:"",
		ContactTitle:"",
		Address:"",
		City:"",
		Region:"",
		PostalCode:"",
		Country:"",
		Phone:"",
		Fax:""
	},
	methods:
	{
		//MUESTRA UN FORMULARIO PARA ENVIAR DATOS A altaCustomers
		btnAlta: async function()
		{
			await Swal.fire({
				title: "Nuevo",
				html:
				"<label>CustomerID: <input type='text' id='CustomerID'></label><br><label>CompanyName: <input type='text' id='CompanyName'></label><br><label>ContactName: <input type='text' id='ContactName'></label><br><label>ContactTitle: <input type='text' id='ContactTitle'></label><br><label>Address: <input type='text' id='Address'></label><br><label>City: <input type='text' id='City'></label><br><label>Region: <input type='text' id='Region'></label><br><label>PostalCode: <input type='text' id='PostalCode'></label><br><label>Country: <input type='text' id='Country'></label><br><label>Phone: <input type='text' id='Phone'></label><br><label>Fax: <input type='text' id='Fax'></label><br>",
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () =>{
					return[
						this.CustomerID = document.getElementById('CustomerID').value,
						this.CompanyName = document.getElementById('CompanyName').value,
						this.ContactName = document.getElementById('ContactName').value,
						this.ContactTitle = document.getElementById('ContactTitle').value,
						this.Address = document.getElementById('Address').value,
						this.City = document.getElementById('City').value,
						this.Region= document.getElementById('Region').value,
						this.PostalCode = document.getElementById('PostalCode').value,
						this.Country = document.getElementById('Country').value,
						this.Phone = document.getElementById('Phone').value,
						this.Fax = document.getElementById('Fax').value,
					]
				}
			})
			if (this.CustomerID == "" || this.CompanyName == "" || this.ContactName == "" || this.ContactTitle == "" || this.Address == "" || this.City == "" || this.PostalCode == "" || this.Country == "" || this.Phone == "") 
			{
				Swal.fire({
				icon: 'warning',
				title: 'Datos incompletos'})
			}
			else
			{
				this.altaCustomers();
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

		btnEditar: async function(CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax)
		{
			await Swal.fire({
				title:"Editar",
				html:
				"<label>CustomerID: <input type='text' id='CustomerID' value='"+CustomerID+"' readonly></label><br><label>CompanyName: <input type='text' id='CompanyName' value='"+CompanyName+"'></label><br><label>ContactName: <input type='text' id='ContactName' value='"+ContactName+"'></label><br><label>ContactTitle: <input type='text' id='ContactTitle' value='"+ContactTitle+"'></label><br><label>Address: <input type='text' id='Address' value='"+Address+"'></label><br><label>City: <input type='text' id='City' value='"+City+"'></label><br><label>Region: <input type='text' id='Region' value='"+Region+"'></label><br><label>PostalCode: <input type='text' id='PostalCode' value='"+PostalCode+"'></label><br><label>Country: <input type='text' id='Country' value='"+Country+"'></label><br><label>Phone: <input type='text' id='Phone' value='"+Phone+"'></label><br><label>Fax: <input type='text' id='Fax' value='"+Fax+"'></label><br>",
				focusConfirm: false,
				showCancelButton: true
			}).then((result) =>{
				if (result.value) 
				{
					CustomerID= document.getElementById('CustomerID').value,
					CompanyName= document.getElementById('CompanyName').value,
					ContactName= document.getElementById('ContactName').value,
					ContactTitle= document.getElementById('ContactTitle').value,
					Address= document.getElementById('Address').value,
					City= document.getElementById('City').value,
					Region= document.getElementById('Region').value,
					PostalCode= document.getElementById('PostalCode').value,
					Country= document.getElementById('Country').value,
					Phone= document.getElementById('Phone').value,
					Fax= document.getElementById('Fax').value

					this.editarCustomers(CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax);
					Swal.fire(
						'!Actualizado!',
						'El registro ha sido actualizado',
						'success'
					)
				}
			})
		},

		btnBorrar: function(CustomerID)
		{
			Swal.fire({
				title: 'Esta seguro de borrar el registro: '+ CustomerID +'?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Borrar'
			}).then((result) =>{
				if (result.value) 
				{
					this.borrarCustomer(CustomerID);
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
		altaCustomers: function()
		{
			axios.post(url,{opcion:1, CustomerID:this.CustomerID, CompanyName:this.CompanyName, ContactName:this.ContactName, ContactTitle:this.ContactTitle, Address:this.Address, City:this.City, Region:this.Region, PostalCode:this.PostalCode, Country:this.Country, Phone:this.Phone, Fax:this.Fax}).then(response =>{
				this.listarCustomers();
			})

			this.CustomerID="";
			this.CompanyName=""; 
			this.ContactName ="";
			this.ContactTitle ="";
			this.Address ="";
			this.City ="";
			this.Region="";
			this.PostalCode=""; 
			this.Country ="";
			this.Phone ="";
			this.Fax ="";
		},

		//EDITA LAS CELDAS, RECIBE PARAMETROS Y LOS ENVIA AL PHP
		editarCustomers: function(CustomerID, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax)
		{
			axios.post(url,{opcion:2, CustomerID:CustomerID, CompanyName:CompanyName, ContactName:ContactName, ContactTitle:ContactTitle, Address:Address, City:City, Region:Region, PostalCode:PostalCode, Country:Country, Phone:Phone, Fax:Fax}).then(response =>{
				this.listarCustomers();
			})
		},

		borrarCustomer: function(CustomerID)
		{
			axios.post(url,{opcion:3, CustomerID:CustomerID}).then(response =>{
				this.listarCustomers();
			});
		},

		//LLAMA E IMPRIME EN LA PANTALLA LOS DATOS DE LA BASE DE DATOS
		listarCustomers: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.customers = response.data;
			});
		},	
	},
	created: function()
	{
		this.listarCustomers();
	}	
})