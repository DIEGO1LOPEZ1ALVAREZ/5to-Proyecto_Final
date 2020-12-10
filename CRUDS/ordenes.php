<!DOCTYPE html>
<html lang="es">
    <head>

        <!-- He richy esto es importante kpo. -->
        <?php
            print('<script>const Pagina = "Listar";</script>');
        ?>
        <!-------------------------------------->

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ordenes</title>
    </head>
    <body>
        <div id="appVerOrden">
            <input type="button" value="Crear nueva orden" @click="btnAgregar">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID Orden</th>
                        <th>ID Cliente</th>
                        <th>ID Empleado</th>
                        <th>Fecha de la Orden</th>
                        <th>Fecha requerida</th>
                        <th>Tipo de envio</th>
                        <th>Costo</th>
                        <th>Nombre de embarcación</th>
                        <th>Dirección de embarcación</th>
                        <th>Ciudad de embarcación</th>
                        <th>Región de embarcación</th>
                        <th>Código postal de embarcación</th>
                        <th>Estado de embarcación</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="orden of orders">
                        <td>{{orden.OrderID}}</td>
                        <td>{{orden.CustomerID}}</td>
                        <td>{{orden.EmployeeID}}</td>
                        <td>{{orden.OrderDate}}</td>
                        <td>{{orden.RequiredDate}}</td>
                        <td>{{orden.ShipVia}}</td>
                        <td>{{orden.Freight}}</td>
                        <td>{{orden.ShipName}}</td>
                        <td>{{orden.ShipAddress}}</td>
                        <td>{{orden.ShipCity}}</td>
                        <td>{{orden.ShipRegion}}</td>
                        <td>{{orden.ShipPostalCode}}</td>
                        <td>{{orden.ShipCountry}}</td>
                        <td>
                            <input type="button" value="Ver más" @click="btnMostrar(orden.OrderID)">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- JS Para el funcionamiento correcto -->
        
        <!--jQuery-->
        <script src="jquery/jquery-3.5.1.min.js"></script>
        
        <!--Vue.JS-->
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
        
        <!--Axios-->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        
        <!--Sweetalert 2-->
        <script src="plugins/sweetaler2/sweetalert2.all.min.js"></script>
        
        <!-- Script para la página. -->
        <script type="text/javascript" src="JS/ordenes.js"></script>

    </body>
</html>