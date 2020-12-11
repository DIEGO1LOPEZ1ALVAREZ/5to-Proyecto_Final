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
const appCrearOrden = Pagina != "Crear" ? null : () => {

    // Utilizaremos jquery para poder ejecutar lo necesario.
    $('#frmCrearOrden').submit( function(event) {
        // Evitamos que la función ejecute sus valores default.
        event.preventDefault();

        // Declaramos las variables y tomamos sus valores con jquery.
        var optCustomers, optEmployees, optShippers, dRequired, optProducts, txtQuantity;
        var txtShipName, txtShipAddress, txtShipCity, txtShipRegion, txtShipPostalCode, txtShipCountry;

        optCustomers = $.trim($("#optCustomers").val());
        optEmployees = $.trim($("#optEmployees").val());
        optShippers = $.trim($("#optShippers").val());
        dRequired = $.trim($("#dRequired").val());
        optProducts = $.trim($("#optProducts").val()).split(',');
        txtQuantity = $.trim($("#txtQuantity").val());

        // Debido a que la cantidad de productos es separada por una coma, es necesario esto para eliminar los espacios.
        var txtTempQuantity = "";
        for(var i = 0; i < txtQuantity.length; i++) {
            txtTempQuantity += txtQuantity[i] != " " ? txtQuantity[i] : "";
        }
        txtQuantity = txtTempQuantity.split(',');

        txtShipName = $.trim($("#txtShipName").val());
        txtShipAddress = $.trim($("#txtShipAddress").val());
        txtShipCity = $.trim($("#txtShipCity").val());
        txtShipRegion = $.trim($("#txtShipRegion").val());
        txtShipPostalCode = $.trim($("#txtShipPostalCode").val());
        txtShipCountry = $.trim($("#txtShipCountry").val());

        // Verificamos que ningún campo este vació.
        if(dRequired == "" || (optProducts[0] == "" && optProducts.length == 1) || (txtQuantity[0] == "" && txtQuantity.length == 1) || txtShipName == ""
        || txtShipAddress == "" || txtShipCity == "" || txtShipRegion == "" || txtShipPostalCode == "" || txtShipCountry == "") {
            // Si hay, notificamos con Sweet alert que aún hay campos vacíos.
            Swal.fire({
                icon: 'warning',
                type: 'warning',
                title: 'No puede haber campos vacíos.'
            });
        }
        else {
            // Si completo la verificación de cliente, ahora verificaremos del lado del servidor.
            axios.post('ordenes_handler.php', {apartado: Pagina, opcion: 'Verificar', optCustomers: optCustomers, optEmployees: optEmployees, optShippers: optShippers, 
            dRequired: dRequired, optProducts: optProducts, txtQuantity: txtQuantity, txtShipName: txtShipName, txtShipAddress: txtShipAddress, txtShipCity: txtShipCity, 
            txtShipRegion: txtShipRegion, txtShipPostalCode: txtShipPostalCode, txtShipCountry: txtShipCountry}).then(response => {
                // Verificamos que haya respuesta y que esta no sea un error.
                if(response.data != null && response.data != 'Error') {
                    // Verificamos si la respuesta indico que no hay campos vacíos.
                    if(response.data == false) {
                        // Si dice false significa que si hay campos vacíos.
                        Swal.fire({
                            icon: 'error',
                            type: 'error',
                            title: 'Datos faltantes o erroneos.'
                        });
                    }
                    else {
                        // Si indica que es true, significa que no hay campos vacíos y que puede continuar.
                        axios.post('ordenes_handler.php', {apartado: Pagina, opcion: 'Crear', optCustomers: optCustomers, optEmployees: optEmployees, optShippers: optShippers, 
                        dRequired: dRequired, optProducts: optProducts, txtQuantity: txtQuantity, txtShipName: txtShipName, txtShipAddress: txtShipAddress, txtShipCity: txtShipCity, 
                        txtShipRegion: txtShipRegion, txtShipPostalCode: txtShipPostalCode, txtShipCountry: txtShipCountry}).then(response => {
                            // Verificamos que exista la respuesta y que no venga con un error.
                            if(response.data != null && response.data != 'Error') {
                                // Indicamos que se agrego el ítem exitosamente y al cerrar la ventana del Sweet alert lo mande de nuevo a la página de las ordenes.
                                Swal.fire({
                                    icon: 'success',
                                    type: 'success',
                                    title: 'Orden agragada'
                                }).then((result) => {
                                    if(result.value) {
                                        window.location.href = 'ordenes.php';
                                    }
                                });
                            }
                            else {
                                // Si la respuesta fue nula o con errores, indicamos que hubo un fallo al procesar los datos.
                                Swal.fire({
                                    icon: 'error',
                                    type: 'error',
                                    title: 'Hubo un fallo al procesar los datos.'
                                });
                            }
                        });
                    }
                }
                else {
                    // Si la respuesta fue nula o con errores, indicamos que hubo un fallo al verificar los datos.
                    Swal.fire({
                        icon: 'error',
                        type: 'error',
                        title: 'Hubo un fallo al validar datos.'
                    });
                }
            });
        }
    });
};

// Verificamos que la constante no sea nula, y si no es, ejecutamos su función.
if(appCrearOrden != null) { appCrearOrden(); }