//VARIABLE QUE ME DICE DONDE ESTA EL CRUD
var url = "../CRUDS/Crudproducts.php"

//CREO UNA VARIABLE DE VUE.JS PARA MANEJAR EL SWEETALERT Y EL CRUD_CUSTOMERS
var appProducts = new Vue({
	el: '#appProducts',
	data:{
		Products:[],
		ProductID:"",
		ProductName:"",
		QuantityPerUnit:"",
		UnitPrice:"",
		UnitsInStock:"",
		UnitsOnOrder:"",
		Reorderlevel:"",
		Discontinued:""
	},
	methods:
	{
		//MUESTRA UN FORMULARIO PARA ENVIAR DATOS A altaCustomers
		btnAlta: async function()
		{
			await Swal.fire({
				title: "Nuevo",
				html:
				"<label>ProductName: <input type='text' id='ProductName'></label> <br><label>QuantityPerUnit: <input type='text' id='QuantityPerUnit'></label>  <br><label>UnitPrice: <input type='text' id='UnitPrice'></label>  <br><label>UnitsInStock: <input type='text' id='UnitsInStock'></label>  <br><label>UnitsOnOrder: <input type='text' id='UnitsOnOrder'></label>  <br><label>Reorderlevel: <input type='text' id='Reorderlevel'></label>  <br><label>Discontinued: <input type='text' id='Discontinued'></label>",
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () =>{
					return[
						this.ProductName = document.getElementById('ProductName').value,
						this.QuantityPerUnit = document.getElementById('QuantityPerUnit').value,
						this.UnitPrice = document.getElementById('UnitPrice').value,
						this.UnitsInStock = document.getElementById('UnitsInStock').value,
						this.UnitsOnOrder = document.getElementById('UnitsOnOrder').value,
						this.Reorderlevel = document.getElementById('Reorderlevel').value,
						this.Discontinued = document.getElementById('Discontinued').value,
					]
				}
			})
			if (this.ProductName =="" || this.QuantityPerUnit == "" || this.UnitPrice == "" || this.UnitsInStock == "" || this.UnitsOnOrder == "" || this.Reorderlevel == "" || this. Discontinued == "") 
			{
				Swal.fire({
				icon: 'warning',
				title: 'Datos incompletos'})
			}
			else
			{
				this.altaProducts();
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

		btnEditar: async function()
		{
			await Swal.fire({
				title:"Editar",
				html:
				"<label>ProductName: <input type='text' id='ProductName' value="+ProductName+"></label><br><label>SupplierID: <input type='text' id='SupplierID' value="+SupplierID+"></label>  <br><label>CategoryID: <input type='text' id='CategoryID' value="+CategoryID+"></label>  <br><label>QuantityPerUnit: <input type='text' id='QuantityPerUnit' value="+QuantityPerUnit+"></label>  <br><label>UnitPrice: <input type='text' id='UnitPrice' value="+UnitPrice+"></label>  <br><label>UnitsInStock: <input type='text' id='UnitsInStock' value="+UnitsInStock+"></label>  <br><label>UnitsOnOrder: <input type='text' id='UnitsOnOrder' value="+UnitsOnOrder+"></label>  <br><label>Reorderlevel: <input type='text' id='Reorderlevel' value="+Reorderlevel+"></label>  <br><label>Discontinued: <input type='text' id='Discontinued' value="+Discontinued+"></label>",
				focusConfirm: false,
				showCancelButton: true
			}).then((result) =>{
				if (result.value) 
				{

					ProductName = document.getElementById('ProductName').value,
					QuantityPerUnit = document.getElementById('QuantityPerUnit').value,
					UnitPrice = document.getElementById('UnitPrice').value,
					UnitsInStock = document.getElementById('UnitsInStock').value,
					UnitsOnOrder = document.getElementById('UnitsOnOrder').value,
					Reorderlevel = document.getElementById('Reorderlevel').value,
					Discontinued = document.getElementById('Discontinued').value,

					this.editarProducts(ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, Reorderlevel, Discontinued);
					Swal.fire(
						'!Actualizado!',
						'El registro ha sido actualizado',
						'success'
					)
				}
			})
		},

		btnBorrar: function(ProductID)
		{
			Swal.fire({
				title: 'Esta seguro de borrar el registro: '+ ProductID +'?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Borrar'
			}).then((result) =>{
				if (result.value) 
				{
					this.borrarProducts(CategoryID);
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
		altaProducts: function()
		{
			axios.post(url,{opcion:1, ProductID:this.ProductID, ProductName:this.ProductName, SupplierID:this.SupplierID, CategoryID:this.CategoryID, QuantityPerUnit:this.QuantityPerUnit, UnitPrice:this.UnitPrice, UnitsInStock:this.UnitsInStock, UnitsOnOrder:this.UnitsOnOrder, Reorderlevel:this.Reorderlevel, Discontinued:this.Discontinued}).then(response =>{
				this.listarProducts();
			})

						this.ProductName = "";
						this.QuantityPerUnit = "";
						this.UnitPrice = "";
						this.UnitsInStock = "";
						this.UnitsOnOrder = "";
						this.Reorderlevel = "";
						this.Discontinued = "";

		},

		//EDITA LAS CELDAS, RECIBE PARAMETROS Y LOS ENVIA AL PHP
		editarProducts: function(ProductID, ProductName, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, Reorderlevel, Discontinued)
		{
			axios.post(url,{opcion:2, ProductID:ProductID, ProductName:ProductName, QuantityPerUnit:QuantityPerUnit, UnitPrice:UnitPrice, UnitsInStock:UnitsInStock, UnitsOnOrder:UnitsOnOrder, Reorderlevel:Reorderlevel, Discontinued:Discontinued}).then(response =>{
				this.listarProducts();
			})
		},

		borrarProducts: function(ProductID)
		{
			axios.post(url,{opcion:3, ProductID:ProductID}).then(response =>{
				this.listarProducts();
			});
		},

		//LLAMA E IMPRIME EN LA PANTALLA LOS DATOS DE LA BASE DE DATOS
		listarProducts: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.Products = response.data;
			});
		},	
	},
	created: function()
	{
		this.listarProducts();
	}	
})