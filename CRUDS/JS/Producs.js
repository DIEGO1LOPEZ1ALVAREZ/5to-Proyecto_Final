var url= "Crudproducts.php";

var appProducts = new Vue({
	el: "#appProducts",
	data:{
		products:[],
		ProducName:"",
		SuplierID:"",
		CategoriID:"",
		QuantityPerUnit:"",
		UnitPrice:"",
		UnitslnStock:"",
		UnitsOnOrder:"",
		ReorderLevel:"",
		Discontinued :""
	},
	methods:
	{
		//BOTONES
		btnAlta: async function()
		{
			const{value: formValues} = await Swal.fire({
				title: 'NUEVO',
				html:
				'<div class="row"><label class="col-sm-3 col-form-label">ProducName</label><div class="col-sm-7"><input id="ProducName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">SuplierID</label><div class="col-sm-7"><input id="SuplierID" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">QuantityPerUnit</label><div class="col-sm-7"><input id="QuantityPerUnit" type="number" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">UnitPrice </label><div class="col-sm-7"><input id="UnitPrice" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">UnitslnStock</label><div class="col-sm-7"><input id="UnitslnStock" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">UnitsOnOrder</label><div class="col-sm-7"><input id="UnitsOnOrder" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ReorderLevel</label><div class="col-sm-7"><input id="ReorderLevel" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Discontinued</label><div class="col-sm-7"><input id="Discontinued" type="text" class="form-control"></div></div>',
				focusConfirm: false,
				showCancelButton: true,
				confirmButtonText: 'Guardar',
				confirmButtonColor: '#1cc88a',
				cancelButtonColor: '#3085d6',
				preConfirm: () => {
					return [
						this.ProducName = document.getElementById('ProducName').value,
						//this.SuplierID = document.getElementById(' ').value,
						//this.CategoriID = document.getElementById(' ').value,
						this.QuantityPerUnit = document.getElementById('QuantityPerUnit').value,
						this.UnitPrice = document.getElementById('UnitPrice').value,
						this.UnitslnStock = document.getElementById('UnitslnStock').value,
						this.UnitsOnOrder = document.getElementById('UnitsOnOrder').value,
						this.ReorderLevel = document.getElementById('ReorderLevel').value,
						this.Discontinued = document.getElementById('Discontinued').value,
					]
				}
			})
			if (this.ProducName == "" || this.SuplierID == "" || this.CategoriID == "" || this.QuantityPerUnit == "" || UnitPrice == "" || this.UnitslnStock == "" || UnitsOnOrder == "" || ReorderLevel == "" || Discontinued == "")
			{
				Swal.fire({
					type: 'info',
					title: 'Datos incompletos',
				})
			}
			else
			{
				this.altaProducts();
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
		btnEditar: async function(id , ProducName,QuantityPerUnit,UnitPrice,UnitslnStock,ReorderLevel,Discontinued )
		{
			await Swal.fire({
				title: 'EDITAR',
				html:
				'<div class="row"><label class="col-sm-3 col-form-label">ProducName</label><div class="col-sm-7"><input id="ProducName" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">SuplierID</label><div class="col-sm-7"><input id="SuplierID" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">QuantityPerUnit</label><div class="col-sm-7"><input id="QuantityPerUnit" type="number" min="0" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">UnitPrice </label><div class="col-sm-7"><input id="UnitPrice" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">UnitslnStock</label><div class="col-sm-7"><input id="UnitslnStock" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">UnitsOnOrder</label><div class="col-sm-7"><input id="UnitsOnOrder" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ReorderLevel</label><div class="col-sm-7"><input id="ReorderLevel" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Discontinued</label><div class="col-sm-7"><input id="Discontinued" type="text" class="form-control"></div></div>',
				focusConfirm: false,
				showCancelButton: true,
			}).then((result) => {
				if (result.value) {
					this.ProducName = document.getElementById('ProducName').value,
						//this.SuplierID = document.getElementById(' ').value,
						//this.CategoriID = document.getElementById(' ').value,
						this.QuantityPerUnit = document.getElementById('QuantityPerUnit').value,
						this.UnitPrice = document.getElementById('UnitPrice').value,
						this.UnitslnStock = document.getElementById('UnitslnStock').value,
						this.UnitsOnOrder = document.getElementById('UnitsOnOrder').value,
						this.ReorderLevel = document.getElementById('ReorderLevel').value,
						this.Discontinued = document.getElementById('Discontinued').value,
					this.editarProducts(ProducName,QuantityPerUnit,UnitPrice,UnitslnStock,ReorderLevel,Discontinued);
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
					this.borrarMovil(id);
					Swal.fire(
						'!Eliminado!',
						'El registro ha sido borrado.',
						'success'
					)
				}
			})},	
		//----------------------------------------------
		// Funcion para listar productos
		listarProducts: function()
		{
			axios.post(url,{opcion:4}).then(response =>{
				this.products = response.data;
				//console.log (this.moviles);
			});
		},

		altaProducts: function()
		{
			axios.post(url,{opcion:1,ProducName:this.ProducName, QuantityPerUnit:this.QuantityPerUnit, UnitPrice:this.UnitPrice, UnitslnStock:this.UnitslnStock, ReorderLevel:this.ReorderLevel, Discontinued:this.Discontinued}).then(response =>{
				this.listarProducts();
			});
			this.ProducName="";
			this.QuantityPerUnit="";
			this.UnitPrice="";
			this.UnitslnStock="";
			this.ReorderLevel="";
			this.Discontinued="";

		},

		editarProducts: function(id,ProducName,QuantityPerUnit,UnitPrice,UnitslnStock,ReorderLevel,Discontinued)
		{
			axios.post(url,{opcion:2,ProducName:ProducName, QuantityPerUnit:QuantityPerUnit, UnitPrice:UnitPrice, UnitslnStock:UnitslnStock, ReorderLevel:ReorderLevel, Discontinued:Discontinued}).then(response =>{
				this.listarProducts();
			});
		},

		borrarProducts: function(id)
		{
			axios.post(url,{opcion:3, id:id}).then(response =>{
				this.listarProducts();
			});
		},				
	},
	created: function()
	{
		this.listarProducts(); 
	},
	computed:
	{

	}
});