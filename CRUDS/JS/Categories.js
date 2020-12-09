var url= "Crudcategories.php";

var appProducts = new Vue({
	el: "#appSuppliers",
	data:{
		Categories:[],
		categoriName:"",
		Description:"",
	},
	methods:
	{
		//BOTONES
		btnAlta: async function()
		{
			const{value: formValues} = await Swal.fire({
				title: 'NUEVO',
				html:
				'<div class="row"><label class="col-sm-3 col-form-label">categoriName</label><div class="col-sm-7"><input id="categoriName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Description</label><div class="col-sm-7"><input id="Description" type="text" class="form-control"></div></div>'
				focusConfirm: false,
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () => {
					return [
						this.categoriName = document.getElementById('categoriName').value,
						this.Description = document.getElementById('Description').value,
					]
				}
			})
			if (categoriName == "" || Description == "" )
			{
				Swal.fire({
					type: 'info',
					title: 'Datos incompletos',
				})
			}
			else
			{
				this.altaCategories();
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

		//Boton de editar
		btnEditar: async function(id,CompanyName,ContacTitle,Address,City,Region,PostalCode,Country,Phone,Fax,Homepage)
		{
			await Swal.fire({
				title: 'EDITAR',
				html:
				'<div class="row"><label class="col-sm-3 col-form-label">categoriName</label><div class="col-sm-7"><input id="categoriName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Description</label><div class="col-sm-7"><input id="Description" type="text" class="form-control"></div></div>'
				focusConfirm: false,
				showCancelButton: true,
			}).then((result) => {
				if (result.value) {
						this.categoriName = document.getElementById('categoriName').value,
						this.Description = document.getElementById('Description').value,
					this.editarCategories(CompanyName,ContacTitle,Address,City,Region,PostalCode,Country,Phone,Fax,Homepage );
					Swal.fire(
						'!Actualizado!',
						'El registro ha sido actualizado',
						'success'
						)
				}
			})},
		//Boton borrar
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
					this.borrarCategories(id);
					Swal.fire(
						'!Eliminado!',
						'El registro ha sido borrado.',
						'success'
					)
				}
			})},	
		//----------------------------------------------
		// Funcion para listar productos
		listarCategorires: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.products = response.data;
				//console.log (this.moviles);
			});
		},

		altaCategories: function()
		{
			axios.post(url,{opcion:1,categoriName:this.categoriName,Description:this.Description}).then(response =>{
				this.listarCategorires();
			});
			this.categoriName="";
			this.Description="";

		},

		editarCategories: function(id,categoriName,Description)
		{
			axios.post(url,{opcion:2,categoriName:categoriName,Description,Description}).then(response =>{
				this.listarCategorires();
			});
		},

		borrarCategories: function(id)
		{
			axios.post(url,{opcion:3, id:id}).then(response =>{
				this.listarCategorires();
			});
		},				
	},
	created: function()
	{
		this.listarCategorires(); 
	},
	computed:
	{

	}
});