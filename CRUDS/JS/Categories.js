//VARIABLE QUE ME DICE DONDE ESTA EL CRUD
var url = "../CRUDS/Crudcategories.php"

//CREO UNA VARIABLE DE VUE.JS PARA MANEJAR EL SWEETALERT Y EL CRUD_CUSTOMERS
var appCategories = new Vue({
	el: '#appCategories',
	data:{
		Categories:[],
		CategoryID:"",
		CategoryName:"",
		Description:""
	},
	methods:
	{
		//MUESTRA UN FORMULARIO PARA ENVIAR DATOS A altaCustomers
		btnAlta: async function()
		{
			await Swal.fire({
				title: "Nuevo",
				html:
				"<label>CategoryName: <input type='text' id='CategoryName'></label><br><label>Description: <input type='text' id='Description'></label>",
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () =>{
					return[
						this.CategoryName = document.getElementById('CategoryName').value,
						this.Description = document.getElementById('Description').value,
					]
				}
			})
			if (this.CategoryName == "" || this.Description == "") 
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

		btnEditar: async function(CategoryID, CategoryName, Description)
		{
			await Swal.fire({
				title:"Editar",
				html:
				"<label>CategoryID: <input type='text' id='CategoryID' value='"+CategoryID+"' readonly></label><br><label>CategoryName: <input type='text' id='CategoryName' value='"+CategoryName+"'></label><br><label>Description: <input type='text' id='Description' value='"+Description+"'></label>",
				focusConfirm: false,
				showCancelButton: true
			}).then((result) =>{
				if (result.value) 
				{

					CategoryName= document.getElementById('CategoryName').value,
					Description= document.getElementById('Description').value,

					this.editarShippers(ShipperID, CompanyName, Phone);
					Swal.fire(
						'!Actualizado!',
						'El registro ha sido actualizado',
						'success'
					)
				}
			})
		},

		btnBorrar: function(CategoryID)
		{
			Swal.fire({
				title: 'Esta seguro de borrar el registro: '+ CategoryID +'?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Borrar'
			}).then((result) =>{
				if (result.value) 
				{
					this.borrarCategories(CategoryID);
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
		altaCategories: function()
		{
			axios.post(url,{opcion:1, CategoryID:this.CategoryID,CategoryName:this.CategoryName,Description:this.Description}).then(response =>{
				this.listarCategories();
			})

			this.CategoryName=""; 
			this.Description="";

		},

		//EDITA LAS CELDAS, RECIBE PARAMETROS Y LOS ENVIA AL PHP
		editarCategories: function(CategoryID, CategoryName, Description)
		{
			axios.post(url,{opcion:2, CategoryID:CategoryID, CategoryName:CategoryName, Description:Description}).then(response =>{
				this.listarCategories();
			})
		},

		borrarCategories: function(CategoryID)
		{
			axios.post(url,{opcion:3, CategoryID:CategoryID}).then(response =>{
				this.listarCategories();
			});
		},

		//LLAMA E IMPRIME EN LA PANTALLA LOS DATOS DE LA BASE DE DATOS
		listarCategories: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.Categories = response.data;
			});
		},	
	},
	created: function()
	{
		this.listarCategories();
	}	
})