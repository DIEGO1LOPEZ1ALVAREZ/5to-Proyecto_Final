//VARIABLE QUE ME DICE DONDE ESTA EL CRUD
var url = "../CRUDS/crud_shippers.php"

//CREO UNA VARIABLE DE VUE.JS PARA MANEJAR EL SWEETALERT Y EL CRUD_CUSTOMERS
var appShippers = new Vue({
	el: '#appShippers',
	data:{
		shippers:[],
		ShipperID:"",
		CompanyName:"",
		Phone:""
	},
	methods:
	{
		//MUESTRA UN FORMULARIO PARA ENVIAR DATOS A altaCustomers
		btnAlta: async function()
		{
			await Swal.fire({
				title: "Nuevo",
				html:
				"<label>CompanyName: <input type='text' id='CompanyName'></label><br><label>Phone: <input type='text' id='Phone'></label>",
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () =>{
					return[
						this.CompanyName = document.getElementById('CompanyName').value,
						this.Phone = document.getElementById('Phone').value,
					]
				}
			})
			if (this.CompanyName == "" || this.Phone == "") 
			{
				Swal.fire({
				icon: 'warning',
				title: 'Datos incompletos'})
			}
			else
			{
				this.altaShippers();
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

		btnEditar: async function(ShipperID, CompanyName, Phone)
		{
			await Swal.fire({
				title:"Editar",
				html:
				"<label>ShipperID: <input type='text' id='ShipperID' value='"+ShipperID+"' readonly></label><br><label>CompanyName: <input type='text' id='CompanyName' value='"+CompanyName+"'></label><br><label>Phone: <input type='text' id='Phone' value='"+Phone+"'></label>",
				focusConfirm: false,
				showCancelButton: true
			}).then((result) =>{
				if (result.value) 
				{

					CompanyName= document.getElementById('CompanyName').value,
					Phone= document.getElementById('Phone').value,

					this.editarShippers(ShipperID, CompanyName, Phone);
					Swal.fire(
						'!Actualizado!',
						'El registro ha sido actualizado',
						'success'
					)
				}
			})
		},

		btnBorrar: function(ShipperID)
		{
			Swal.fire({
				title: 'Esta seguro de borrar el registro: '+ ShipperID +'?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Borrar'
			}).then((result) =>{
				if (result.value) 
				{
					this.borrarShipper(ShipperID);
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
		altaShippers: function()
		{
			axios.post(url,{opcion:1, CompanyName:this.CompanyName, Phone:this.Phone}).then(response =>{
				this.listarShippers();
			})

			this.CompanyName=""; 
			this.Phone="";

		},

		//EDITA LAS CELDAS, RECIBE PARAMETROS Y LOS ENVIA AL PHP
		editarShippers: function(ShipperID, CompanyName, Phone)
		{
			axios.post(url,{opcion:2, ShipperID:ShipperID, CompanyName:CompanyName, Phone:Phone}).then(response =>{
				this.listarShippers();
			})
		},

		borrarShipper: function(ShipperID)
		{
			axios.post(url,{opcion:3, ShipperID:ShipperID}).then(response =>{
				this.listarShippers();
			});
		},

		//LLAMA E IMPRIME EN LA PANTALLA LOS DATOS DE LA BASE DE DATOS
		listarShippers: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.shippers = response.data;
			});
		},	
	},
	created: function()
	{
		this.listarShippers();
	}	
})