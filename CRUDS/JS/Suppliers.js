var url= "Crudsuppliers.php";

var appProducts = new Vue({
	el: "#appSuppliers",
	data:{
		suppliers:[],
		CompanyName:"",
		ContacName:"",
		ContacTitle:"",
		Address:"",
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
		//BOTONES
		btnAlta: async function()
		{
			const{value: formValues} = await Swal.fire({
				title: 'NUEVO',
				html:
				'<div class="row"><label class="col-sm-3 col-form-label">CompanyName</label><div class="col-sm-7"><input id="CompanyName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ContacName</label><div class="col-sm-7"><input id="ContacName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ContacTitle</label><div class="col-sm-7"><input id="ContacTitle" type="number" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Address</label><div class="col-sm-7"><input id="Address" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">City</label><div class="col-sm-7"><input id="City" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Region</label><div class="col-sm-7"><input id="Region" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">PostalCode</label><div class="col-sm-7"><input id="PostalCode" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Country</label><div class="col-sm-7"><input id="Country" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Phone</label><div class="col-sm-7"><input id="Phone" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Fax</label><div class="col-sm-7"><input id="Fax" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Homepage</label><div class="col-sm-7"><input id="Homepage" type="text" class="form-control"></div></div>',
				focusConfirm: false,
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () => {
					return [
						this.CompanyName = document.getElementById('CompanyName').value,
						this.ContacName = document.getElementById('ContacName').value,
						this.ContacTitle = document.getElementById('ContacTitle').value,
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
			if (CompanyName == "" || ContacTitle == "" || Address == "" || City == "" || Region== "" || PostalCode == "" || Country == "" || Phone == "" || Fax == "" || Homepage == "")
			{
				Swal.fire({
					type: 'info',
					title: 'Datos incompletos',
				})
			}
			else
			{
				this.altaSuppliers();
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 300
				});
				Toast.fire({
					type: 'success',
					title: 'Producto Agregado!'
				})
			}},
		btnEditar: async function(id,CompanyName,ContacTitle,Address,City,Region,PostalCode,Country,Phone,Fax,Homepage)
		{
			await Swal.fire({
				title: 'EDITAR',
				html:
				'<div class="row"><label class="col-sm-3 col-form-label">CompanyName</label><div class="col-sm-7"><input id="CompanyName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ContacName</label><div class="col-sm-7"><input id="ContacName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ContacTitle</label><div class="col-sm-7"><input id="ContacTitle" type="number" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Address</label><div class="col-sm-7"><input id="Address" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">City</label><div class="col-sm-7"><input id="City" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Region</label><div class="col-sm-7"><input id="Region" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">PostalCode</label><div class="col-sm-7"><input id="PostalCode" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Country</label><div class="col-sm-7"><input id="Country" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Phone</label><div class="col-sm-7"><input id="Phone" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Fax</label><div class="col-sm-7"><input id="Fax" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Homepage</label><div class="col-sm-7"><input id="Homepage" type="text" class="form-control"></div></div>',
				focusConfirm: false,
				showCancelButton: true,
			}).then((result) => {
				if (result.value) {
						this.CompanyName = document.getElementById('CompanyName').value,
						this.ContacName = document.getElementById('ContacName').value,
						this.ContacTitle = document.getElementById('ContacTitle').value,
						this.Address = document.getElementById('Address').value,
						this.City = document.getElementById('City').value,
						this.Region = document.getElementById('Region').value,
						this.PostalCode = document.getElementById('PostalCode').value,
						this.Country = document.getElementById('Country').value,
						this.Phone = document.getElementById('Phone').value,
						this.Fax = document.getElementById('Fax').value,
						this.Homepage = document.getElementById('Homepage').value,
					this.editarSuppliers(CompanyName,ContacTitle,Address,City,Region,PostalCode,Country,Phone,Fax,Homepage );
					Swal.fire(
						'!Actualizado!',
						'El registro ha sido actualizado',
						'success'
						)
				}
			})},
		btnBorrar: function(id)
		{
			Swal.fire({
				title: 'Esta seguro de borrar el registro: '+ id + " ?",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Borrar'
			}).then((result) => {
				if (result.value) 
				{
					this.borrarSupplier(id);
					Swal.fire(
						'!Eliminado!',
						'El registro ha sido borrado.',
						'success'
					)
				}
			})},	
		//----------------------------------------------
		// Funcion para listar productos
		listarSuppliers: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.products = response.data;
				//console.log (this.moviles);
			});
		},

		altaSuppliers: function()
		{
			axios.post(url,{opcion:1,CompanyName:this.CompanyName,ContacTitle:this.ContacTitle,Address:this.Address,City:this.City,Region:this.Region,PostalCode:this.PostalCode,Country:this.Country,Phone:this.Phone,Fax:this.Fax,Homepage:this.Homepage}).then(response =>{
				this.listarSuppliers();
			});
			this.CompanyName="";
			this.ContacTitle="";
			this.Address="";
			this.City="";
			this.Region="";
			this.PostalCode="";
			this.Country="";
			this.Phone="";
			this.Fax="";
			this.Homepage="";

		},

		editarSuppliers: function(id,CompanyName,ContacTitle,Address,City,Region,PostalCode,Country,Phone,Fax,Homepage)
		{
			axios.post(url,{opcion:2,CompanyName:CompanyName,ContacTitle:ContacTitle,Address:Address,City:City,Region:Region,PostalCode:PostalCode,Country:Country,Phone:Phone,Fax:Fax,Homepage:Homepage}).then(response =>{
				this.listarSuppliers();
			});
		},

		borrarSuppliers: function(id)
		{
			axios.post(url,{opcion:3, id:id}).then(response =>{
				this.listarSuppliers();
			});
		},				
	},
	created: function()
	{
		this.listarSuppliers(); 
	},
	computed:
	{

	}
});