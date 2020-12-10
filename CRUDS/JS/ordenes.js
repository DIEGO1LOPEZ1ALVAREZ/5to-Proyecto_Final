// Constante que se encargara de cargar los elementos con VueJs en ordenes.php
    // Si la variable que provee la página que carga este script, no es equivalente a "Listar", no habra ejecución.
const appVerOrden = Pagina != "Listar" ? null : new Vue({
    el: '#appVerOrden',
    
    // Aquí agregamos los datos que usa el html.
    data: {
        // Aquí agregamos la lista de los ítems.
        orders: [],
        // Y los ítems.
        OrderID: "",
        CustomerID: "",
        EmployeeID: "",
        OrderDate: "",
        RequiredDate: "",
        ShipVia: "",
        Freight: "",
        ShipName: "",
        ShipAddress: "",
        ShipCity: "",
        ShipRegion: "",
        ShipPostalCode: "",
        ShipCountry: ""
    },

    // Los métodos que cargara VueJs.
    methods: {

        // función que servira para cambiar a la página que se encargara de permitir agregar lo necesario.
        btnAgregar: function() {
            window.location.href = 'crear_ordenes.php';
        },

        // función que cargara los detalles de la orden y mostrarlos con el Sweet Alert.
        btnMostrar: function(ID) {
            var Productos = [], ImporteProducto = [], PrecioImporte = [], ProductoTotal = [], Descuento = [], SubTotal = [], Total = 0;
            axios.post('ordenes_handler.php', {apartado: Pagina, opcion: 'Mostrar', ID: ID}).then(response => {
                // Verificamos que los datos de la respuesta de axios, no sean nulos o que no haya tenido un error.
                if(response.data != 'Error' && response.data != null) {
                    // Si no tuvo ningún error, entonces es momento de tomar los valores y guardarlos en sus arreglos correspondientes.
                    for(var i = 0; i < response.data.length; i++) {
                        Productos.push(response.data[i].Producto);
                        ImporteProducto.push(response.data[i].ImportePorProducto);
                        PrecioImporte.push(response.data[i].PrecioImporteTotal);
                        ProductoTotal.push(response.data[i].PrecioProductoTotal);
                        Descuento.push(response.data[i].Descuento);
                        SubTotal.push(response.data[i].SubTotal);
                    }
                    Total = response.data[0].Total;
                    
                    // Ya guardados, es hora de imprimirlos con un poco de diseño con SweetAlert2.
                    Swal.fire({
                        icon: 'success',
                        title: 'Detalles de Orden \"'+ ID + '\"',
                        html: '<div class="row"><label class="col-sm-3 col-form-label">Productos</label><div class="col-sm-7"><textarea rows="3" cols="50" readonly>'+ Productos.join(",\n") +'</textarea></div></div><div class="row"><label class="col-sm-3 col-form-label">Costo de importe por producto</label><div class="col-sm-7"><textarea rows="3" cols="50" readonly>'+ ImporteProducto.join(",\n") +'</textarea></div></div><div class="row"><label class="col-sm-3 col-form-label">Precio total del importe</label><div class="col-sm-7"><textarea rows="3" cols="50" readonly>'+ PrecioImporte.join(",\n") +'</textarea></div></div><div class="row"><label class="col-sm-3 col-form-label">Precio total de los productos</label><div class="col-sm-7"><textarea rows="3" cols="50" readonly>'+ ProductoTotal.join(",\n") +'</textarea></div></div><div class="row"><label class="col-sm-3 col-form-label">Descuento</label><div class="col-sm-7"><textarea rows="3" cols="50" readonly>'+ Descuento.join(",\n") +'</textarea></div></div><div class="row"><label class="col-sm-3 col-form-label">Sub-Total</label><div class="col-sm-7"><textarea rows="3" cols="50" readonly>'+ SubTotal.join(",\n") +'</textarea></div></div><div class="row"><label class="col-sm-3 col-form-label">Total</label><div class="col-sm-7"><input type="text" value=\"'+Total+'\" readonly></div></div>'
                    });
                }
            });
        },

        // función que listara las ordenes.
        listarOrden: function() {
            axios.post('ordenes_handler.php', {apartado: Pagina, opcion: 'Listar'}).then(response => {
                if(response.data != 'Error' && response.data != null) {
                    this.orders = response.data;
                }
            });
        }
    },
    
    created: function() {
        this.listarOrden();
    },

    computed: {

    }
});

// Constante que se encargara de tomar y procesar los elementos de crear_ordenes.php
    // Si la variable que provee la página que carga este script, no es equivalente a "Crear", no habra ejecución.
const appCrearOrden = Pagina != "Crear" ? null : new Vue({
    el: '#appCrearOrden'
});