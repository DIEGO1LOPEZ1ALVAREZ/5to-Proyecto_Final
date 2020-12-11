<!DOCTYPE html>
<html lang="es">
    <head>
        
        <!-- He richy esto es importante kpo. -->
        <?php
            // Función para eliminar los warnings y notices del php
            error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE);

            // Incluimos la conexión para la utilización en esta página.
            include_once 'conexion.php';

            // Creamos las variables temporales para que seán eliminadas al cumplir su objetivo.
            $TempObjetoCon = new Conexion();
            $TempConexion = $TempObjetoCon->Conectar();

            // Imprimiremos en la página el valor que necesitara nuestro js, de tipo constante
            // para evitar que su valor cambie. 
            print('<script>const Pagina = "Crear";</script>'); 

            // Declaro función para poder agregar tiempo a una fecha
            function add_date($givendate,$day=0,$mth=0,$yr=0) {
                // Convierto el string a tiempo.
                $cd = strtotime($givendate);
                // retorno la nueva fecha con el tiempo dado
                return date('Y-m-d h:i:s', mktime(date('h',$cd), date('i',$cd), date('s',$cd), date('m',$cd)+$mth,
                       date('d',$cd)+$day, date('Y',$cd)+$yr));
            }
        ?>
        <!-------------------------------------->
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Crear orden</title>
    </head>
    
    <body>

        <!-- Esta página será cargada con el plugin jquery para su buen uso. -->
        <div id="appCrearOrden">
            
            <form method="post" action="" id="frmCrearOrden">
            
                <?php
                    // Código para cargar tabla con las ID's de los clientes, Empleados y Shippers.
                    // Y demás para poder cargar valores que son cargados desde otras tablas.
                    $clientes = 'SELECT C.CustomerID FROM Customers C ORDER BY C.CustomerID ASC;';
                    $empleados = 'SELECT E.EmployeeID FROM Employees E ORDER BY E.EmployeeID ASC;';
                    $shippers = 'SELECT S.ShipperID FROM Shippers S ORDER BY S.ShipperID ASC;';
                    $PName = 'SELECT P.ProductName FROM Products P ORDER BY P.ProductName ASC;';
                    $PID = 'SELECT P.ProductID FROM Products P ORDER BY P.ProductName ASC;';

                    // Preparamos la consulta y ejecutamos.
                    $RValue = $TempConexion->prepare($clientes);
                    $RValue->execute();

                    // Imprimimos un select con opciones de ID de los clientes disponibles.
                    print('<label for="optCustomers">ID de cliente:</label>
                           <select id="optCustomers" requiered>');
                    foreach ($RValue->fetchAll(PDO::FETCH_COLUMN) as $rClientes) {
                        print('<option value=\''. $rClientes .'\'>'. $rClientes .'</option>');
                    }
                    print('</select> <br>');

                    // Preparamos la consulta y ejecutamos.
                    $RValue = $TempConexion->prepare($empleados);
                    $RValue->execute();

                    // Imprimimos un select con opciones de ID de los empleados disponibles.
                    print('<label for="optEmployees">ID de empleado:</label>
                           <select id="optEmployees" requiered>');
                    foreach ($RValue->fetchAll(PDO::FETCH_COLUMN) as $rEmpleados) {
                        print('<option value=\''. $rEmpleados .'\'>'. $rEmpleados .'</option>');
                    }
                    print('</select> <br>');

                    // Preparamos la consulta y ejecutamos.
                    $RValue = $TempConexion->prepare($shippers);
                    $RValue->execute();

                    // Imprimimos un select con opciones de ID de los tipos de envios.
                    print('<label for="optShippers">ID de shippers:</label>
                           <select id="optShippers" requiered>');
                    foreach ($RValue->fetchAll(PDO::FETCH_COLUMN) as $rShippers) {
                        print('<option value=\''. $rShippers .'\'>'. $rShippers .'</option>');
                    }
                    print('</select> <br>');

                    // Imprimimos un input de tipo date, para poder obtener la fecha requerida para recibir el paquete.
                    // Con la función creada anteriormente para darle un plazo de minimo 2 días a maximo 6 meses con 2 días.
                    print('<label for="dRequired">Fecha que lo requiere</label>
                           <input type="date" id="dRequired" value='.add_date(date('Y-m-d'), 2).' min='. add_date(date('Y-m-d'), 2) .' max='. add_date(date('Y-m-d'), 2, 6) .' requiered> <br>');

                    // Creamos un arreglo donde se guardara las opciones para seleccionar los Productos.
                    $Items = [];

                    // Hacemos la consulta para Obtener la Id de los productos ordenados alfabéticamente.
                    // Y tomamos los valores y le hacemos un push al arreglo de Items con parte de la opción.
                    $RValue = $TempConexion->prepare($PID);
                    $RValue->execute();
                    foreach ($RValue->fetchAll(PDO::FETCH_COLUMN) as $rPID) {
                        array_push($Items, '<option value="'. $rPID .'">');
                    }

                    // Creamos una variable que servira para poder agregar los elementos faltantes como el nombre
                    // de los productos en donde le corresponde ya que también esta ordenando alfabéticamente.
                    // y obviamente se hace la consulta para poder completarlo con un foreach.
                    $i = 0;
                    $RValue = $TempConexion->prepare($PName);
                    $RValue->execute();
                    foreach ($RValue->fetchAll(PDO::FETCH_COLUMN) as $rPName) {
                        $Items[$i] .= $rPName .'</option>';
                        $i++;
                    }

                    // Y finalmente imprimimos los items de los productos.
                    print('<label for="optProducts">Productos: </label>
                           <select id="optProducts" multiple requiered size=5>');
                    foreach ($Items as $item) {
                        print($item);
                    }
                    print('</select> <br>');

                    // Se eliminan las variables temporales para evitar flujos.
                    unset($TempConexion);
                    unset($TempObjetoCon);
                    unset($RValue);
                ?>

                <p>Cantidades (Separadas por comas)</p>
                <textarea id="txtQuantity" cols="50" rows="3" placeholder="Items sin cantidad quedaran como 1..." requiered></textarea>
                <br>

                <p>Nombre de la empresa de envió:</p>
                <input type="text" id="txtShipName" requiered>
                <p>Dirección de la empresa de envió:</p>
                <input type="text" id="txtShipAddress" requiered>
                <p>Ciudad de la empresa de envió:</p>
                <input type="text" id="txtShipCity" requiered>
                <p>Estado de la empresa de envió:</p>
                <input type="text" id="txtShipRegion" requiered>
                <p>Código postal de la empresa de envió:</p>
                <input type="text" id="txtShipPostalCode" requiered>
                <p>País de la empresa de envió:</p>
                <input type="text" id="txtShipCountry" requiered>

                <br>

                <input type="submit" value="Crear" @click="btnAgregar">
            </form>

        </div>
        
        <!-- JS Para el funcionamiento correcto -->
        
        <!--jQuery-->
        <script src="jquery/jquery-3.5.1.min.js"></script>
        
        <!--Vue.JS-->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        
        <!--Axios-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>
        
        <!--Sweetalert 2-->
        <script src="plugins/sweetaler2/sweetalert2.all.min.js"></script>
        
        <!-- Script para la página. -->
        <script type="text/javascript" src="JS/ordenes.js"></script>

    </body>
</html>