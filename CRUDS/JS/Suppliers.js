//VARIABLE QUE ME DICE DONDE ESTA EL CRUD
var url = "../CRUDS/Crudsuppliers.php"

//CREO UNA VARIABLE DE VUE.JS PARA MANEJAR EL SWEETALERT Y EL CRUD_CUSTOMERS
var appSuppliers = new Vue({
	el: '#appSuppliers',
	data:{
		Suppliers:[],
		SupplierId:"",
		CompanyName:"",
		ContactName:"",
		ContactTitle:"",
		Addresss:"",
		City:"",
		Region:"",
		PostalCode:"",
		Country:"",
		Phone:"",
		Fax:"",
		Homepage:""
	},
	methods:
	{
		//MUESTRA UN FORMULARIO PARA ENVIAR DATOS A altaCustomers
		btnAlta: async function()
		{
			await Swal.fire({
				title: "Nuevo",
				html:
				"<label>SupplierId: <input type='text' id='SupplierId'></label><br><label>CompanyName: <input type='text' id='CompanyName'></label> </label><br><label>ContactName: <input type='text' id='ContactName'></label>  </label><br><label>ContactTitle: <input type='text' id='ContactTitle'></label>  </label><br><label>Address: <input type='text' id='Address'></label>  </label><br><label>City: <input type='text' id='City'></label>  </label><br><label>Region: <input type='text' id='Region'></label>  </label><br><label>PostalCode: <input type='text' id='PostalCode'></label>  </label><br><label>Country: <input type='text' id='Country'></label></label><br><label>Phone: <input type='text' id='Phone'></label>  </label><br><label>Fax: <input type='text' id='Fax'></label>  </label><br><label>Homepage: <input type='text' id='Homepage'></label>",
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () =>{
					return[
						this.CompanyName = document.getElementById('CompanyName').value,
						this.ContactName = document.getElementById('ContactName').value,
						this.ContactTitle = document.getElementById('ContactTitle').value,
						this.Address = document.getElementById('Address').value,
						this.City = document.getElementById('City').value,
						this.Region = document.getElementById('Region').value,
						this.PostalCode = document.getElementById('PostalCode').value,
						this.Country = document.getElementById('Country').value,
						this.Phone = document.getElementById('Phone').value,
						this.Fax = document.getElementById('Fax').value,
						this.Homepage = document.getElementById('Homepage').value,

					]
				}
			})
			if (this.CompanyName == "" || this.ContactTitle  == "" || this.Address == "" || this.ContactName == "" || this.City == "" || this.Region == "" || this.PostalCode == "" || this.Country == "" || this.Phone == "" || this.fax == "" || this.Homepage == "") 
			{
				Swal.fire({
				icon: 'warning',
				title: 'Datos incompletos'})
			}
			else
			{
				this.altaCategories();
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

		btnEditar: async function(SupplierId, CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone , Fax, Homepage)
		{
			await Swal.fire({
				title:"Editar",
				html:
				"<label></label><br><label>CompanyName: <input type='text' id='CompanyName' value="+CompanyName+"></label> </label><br><label>ContactName: <input type='text' id='ContactName' value="+ContactName+"></label>  </label><br><label>ContactTitle: <input type='text' id='ContactTitle' value="+ContactTitle+"></label>  </label><br><label>Address: <input type='text' id='Address' value="+Address+"></label>  </label><br><label>City: <input type='text' id='City' value="+City+"></label>  </label><br><label>Region: <input type='text' id='Region' value="+Region+"></label>  </label><br><label>PostalCode: <input type='text' id='PostalCode' value="+PostalCode+"></label>  </label><br><label>Country: <input type='text' id='Country' value="+Country+"></label></label><br><label>Phone: <input type='text' id='Phone' value="+Phone+"></label>  </label><br><label>Fax: <input type='text' id='Fax' value="+Fax+"></label>  </label><br><label>Homepage: <input type='text' id='Homepage' value="+Homepage+"></label>",
				focusConfirm: false,
				showCancelButton: true
			}).then((result) =>{
				if (result.value) 
				{

					CompanyName = document.getElementById('CompanyName').value,
					ContactName = document.getElementById('ContactName').value,
					ContactTitle = document.getElementById('ContactTitle').value,
					Address = document.getElementById('Address').value,
					City = document.getElementById('City').value,
					Region = document.getElementById('Region').value,
					PostalCode = document.getElementById('PostalCode').value,
					Country = document.getElementById('Country').value,
					Phone = document.getElementById('Phone').value,
					Fax = document.getElementById('Fax').value,
					Homepage = document.getElementById('Homepage').value,

					this.editarSupplier( CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone , Fax, Homepage);
					Swal.fire(
						'!Actualizado!',
						'El registro ha sido actualizado',
						'success'
					)
				}
			})
		},

		btnBorrar: function(SupplierId)
		{
			Swal.fire({
				title: 'Esta seguro de borrar el registro: '+ SupplierId +'?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Borrar'
			}).then((result) =>{
				if (result.value) 
				{
					this.borrarSupplier(SupplierId);
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
		altaSupplier: function()
		{
			axios.post(url,{opcion:1, SupplierId:this.SupplierId, CompanyName:this.CompanyName, ContactName:this.ContactName, ContactTitle:this.ContactTitle, Address:this.Address, City:this.City, Region:this.Region, PostalCode:this.PostalCode, Country:this.Country, Phone:this.Phone, Fax:this.Fax, Homepage:this.Homepage}).then(response =>{
				this.listarSupplier();
			})

				this.CompanyName = "";
				this.ContactName = "";
				this.ContactTitle = "";
				this.Address = "";
				this.City ="";
				this.Region = "";
				this.PostalCode =""; 
				this.Country ="";
				this.Phone = "";
				this.Fax = "";
				this.Homepage =""; 

		},

		//EDITA LAS CELDAS, RECIBE PARAMETROS Y LOS ENVIA AL PHP
		editarSupplier: function()
		{
			axios.post(url,{opcion:2, CompanyName:CompanyName, ContactName:ContactName, ContactTitle:ContactTitle, Address:Address, City:City, Region:Region, PostalCode:PostalCode, Country:Country, Phone:Phone, Fax:Fax, Homepage:Homepage}).then(response =>{
				this.listarSupplier();
			})
		},

		borrarSupplier: function(SupplierId)
		{
			axios.post(url,{opcion:3,SupplierId:SupplierId}).then(response =>{
				this.listarSupplier();
			});
		},

		//LLAMA E IMPRIME EN LA PANTALLA LOS DATOS DE LA BASE DE DATOS
		listarSupplier: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.Suppliers = response.data;
			});
		},	
	},
	created: function()
	{
		this.listarSupplier();
	}	
})