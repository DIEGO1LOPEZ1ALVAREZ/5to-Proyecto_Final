<?php
    // Incluimos una vez la conexión a la base de datos.
    include_once 'conexion.php';

    // Creamos la conexión.
    $ObjetoTemp = new Conexion();
    $conexion = $ObjetoTemp->Conectar();

    // Creamos la variable que guardara el resultado que arrojara el php que indicara si termino bien.
    $data = NULL;

    // Modificamos el _POST para poder recibir la información que sea pasada por Axios.
    $_POST = json_decode(file_get_contents("php://input"), true);

    // Tomamos el apartado de Ordenes y que paso a hacer.
        // Obviamente verificamos que existan las variables.
    $apartado = (isset($_POST['apartado'])) ? $_POST['apartado'] : NULL;

    // Verificamos que tipo de apartado es.
    if($apartado == "Listar") {

        // Tomamos la opción que tiene Listar.
        $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : NULL;

        // Y utilizaremos un switch para ver que posible opción fue tomada. 
        switch ($opcion) {
            case 'Mostrar':
                // En el caso de que la opción es mostrar, entonces esto significa que viene con una ID para mostrar los demas detalles.
                $ID = (isset($_POST['ID'])) ? $_POST['ID'] : NULL;

                // Como la consulta tiene una vista, es necesario tirar la vista si es que existe para volver a crearla.
                $view = 'DROP VIEW IF EXISTS vwSubTotal;';

                // Preparamos el valor a ejecutar y ejecutamos.
                $RValue = $conexion->prepare($view);
                $RValue->execute();

                // Ahora creamos el comando con la vista.
                $view = 'CREATE VIEW vwSubTotal as
                SELECT CONCAT("(", ORDTS.ProductID, ")",PRD.ProductName, " - $", PRD.UnitPrice, " x", ORDTS.Quantity) as Producto, 
                ORDTS.UnitPrice as ImportePorProducto, (ORDTS.UnitPrice * ORDTS.Quantity) as PrecioImporteTotal,
                ((( SELECT PRD.UnitPrice FROM Products PRD WHERE ORDTS.ProductID=PRD.ProductID ) * ORDTS.Quantity) + ORDTS.UnitPrice) as PrecioProductoTotal,
                ORDTS.Discount as Descuento,
                ((ORDTS.UnitPrice * ORDTS.Quantity) + ((( SELECT PRD.UnitPrice FROM Products PRD WHERE ORDTS.ProductID=PRD.ProductID ) * ORDTS.Quantity) + ORDTS.UnitPrice) * (1 - ORDTS.Discount)) as SubTotal
                FROM nwind.`order details` ORDTS JOIN nwind.`products` PRD ON ORDTS.ProductID=PRD.ProductID WHERE ORDTS.OrderID='. $ID .';';

                // Preparamos y ejecutamos.
                $RValue = $conexion->prepare($view);
                $RValue->execute();

                // Creamos el comando de la consulta.
                $mostrar = 'SELECT ST.Producto, CONCAT("$",ST.ImportePorProducto) as ImportePorProducto, CONCAT("$",ST.PrecioImporteTotal) as PrecioImporteTotal,
                CONCAT("$",ST.PrecioProductoTotal) as PrecioProductoTotal, CONCAT(ST.Descuento * 100, "%") as Descuento, CONCAT("$",ST.SubTotal) as SubTotal,
                CONCAT("$",((SELECT SUM(ST.SubTotal) FROM vwSubTotal ST) + O.Freight)) as Total FROM vwSubTotal ST, Orders O WHERE O.OrderID='. $ID .';';

                // Creamos la variable con la conexión preparada para ejecutar el comando.
                $RValue = $conexion->prepare($mostrar);

                // Y ejecutamos la consulta.
                $RValue->execute();

                // Y guardamos el resultado en los datos a enviar al Axios.
                $data = $RValue->fetchAll(PDO::FETCH_ASSOC);

                break;
            
            case 'Listar':
                // En el caso en el que la opción es Listar, solo haremos la consulta para obtener los datos.

                // Creamos el comando de la consulta.
                $listar = 'SELECT * FROM nwind.orders;';

                // Creamos la variable con la conexión preparada para ejecutar el comando.
                $RValue = $conexion->prepare($listar);

                // Y ejecutamos la consulta.
                $RValue->execute();

                // Y guardamos el resultado en los datos a enviar al Axios.
                $data = $RValue->fetchAll(PDO::FETCH_ASSOC);

                break;

            default:
                // Si en la opción del apartado no es compatible con las establecidas, indicaremos que hay un error.
                $data = 'Error';
                break;
        }

        // Borramos la variable.
        unset($opcion);
    }
    else if($apartado == "Crear") {

        // Tomamos la opción que tiene Listar.
        $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : NULL;

        // Y utilizaremos un switch para ver que posible opción fue tomada. 
        switch($opcion) {
            case 'Crear':

                // Declaro función para poder agregar tiempo a una fecha
                function add_date($givendate,$day=0,$mth=0,$yr=0) {
                    // Convierto el string a tiempo.
                    $cd = strtotime($givendate);
                    // retorno la nueva fecha con el tiempo dado
                    return date('Y-m-d H:i:s', mktime(date('H',$cd), date('i',$cd), date('s',$cd), date('m',$cd)+$mth,
                           date('d',$cd)+$day, date('Y',$cd)+$yr));
                }
            
                // Tomamos todas las variables del Post.
                $optCustomers = (isset($_POST['optCustomers'])) ? $_POST['optCustomers'] : NULL;
                $optEmployees = (isset($_POST['optEmployees'])) ? $_POST['optEmployees'] : NULL;
                $optShippers = (isset($_POST['optShippers'])) ? $_POST['optShippers'] : NULL;
                $dRequired = (isset($_POST['dRequired'])) ? $_POST['dRequired'] : NULL;
                $optProducts = (isset($_POST['optProducts'])) ? $_POST['optProducts'] : NULL;
                $txtQuantity = (isset($_POST['txtQuantity'])) ? $_POST['txtQuantity'] : NULL;
                $txtShipName = (isset($_POST['txtShipName'])) ? $_POST['txtShipName'] : NULL;
                $txtShipAddress = (isset($_POST['txtShipAddress'])) ? $_POST['txtShipAddress'] : NULL;
                $txtShipCity = (isset($_POST['txtShipCity'])) ? $_POST['txtShipCity'] : NULL;
                $txtShipRegion = (isset($_POST['txtShipRegion'])) ? $_POST['txtShipRegion'] : NULL;
                $txtShipPostalCode = (isset($_POST['txtShipPostalCode'])) ? $_POST['txtShipPostalCode'] : NULL;
                $txtShipCountry = (isset($_POST['txtShipCountry'])) ? $_POST['txtShipCountry'] : NULL;
                
                // Establecemos las fechas ShippedDate, RequiredDate, OrderDate, con la función add_date();
                $dShipped = add_date($dRequired, -1);
                $dRequired = add_date($dRequired);
                $dToday = date('Y-m-d H:i:s', mktime(0, 0, 0, date('m'), date('d'), date('Y')));

                // Verificamos que los datos agregados a txtQuantity sean enteros, si no le establecemos 1.
                for($i = 0; $i < count($txtQuantity); $i++) {
                    if(!is_integer($txtQuantity[$i])) {
                        $txtQuantity[$i] = '1';
                    }
                }

                // Verificamos que la cantidad de datos agregados a txtQuantity sean iguales a optProducts, si no
                // le agregamos 1 producto a las cantidades hasta que tengan misma cantidad de datos.
                for($i = count($txtQuantity); $i < count($optProducts); $i++) {
                    array_push($txtQuantity, '1');
                }

                // Creamos el Freight y el precio unitario por importe.
                $Freight = 0;
                $UnitPrice = [];
                

                // usamos un for para obtener el precio del producto obtenido en optProducts, para después calcular el Freight y el precio unitario de importe.
                for($i = 0; $i < count($optProducts); $i++) {
                    $IDProducto = 'SELECT P.UnitPrice FROM Products P WHERE P.ProductID='. $optProducts[$i];

                    // preparamos la consulta para obtener el precio y usar un foreach (aún que solo retorna 1 valor la consulta)
                    $RValue = $conexion->prepare($IDProducto);
                    $RValue->execute();
                    foreach($RValue->fetchAll(PDO::FETCH_COLUMN) as $Precio) {
                        $Freight += $Precio;
                        array_push($UnitPrice, $Precio * (1 - 0.16));
                    }
                }

                // Tomaremos la ID de las ordenes y la ordenaremos de mayor a menor para obtener el primer valor
                // y posteriormente aumentarle 1 para obtener la nueva ID de la orden a crear.
                $ID = 'SELECT O.OrderID FROM Orders O ORDER BY O.OrderID DESC;';
                $RValue = $conexion->prepare($ID);
                $RValue->execute();
                $ID = $RValue->fetchAll(PDO::FETCH_COLUMN)[0] + 1;

                // Creamos la variable de descuento que tendra un 10% de asignar un descuento a un producto desde hasta 75%
                // aleatoriamente.
                $Discount = [];
                for($i = 0; $i < count($optProducts); $i++) {
                    array_push($Discount, rand(0, 100) <= 10 ? (rand(0, 75) / 100) : 0.0);
                }

                // Crearemos la consulta para crear la Orden y ejecutarla.
                $CrearOrden = 'INSERT INTO Orders (Orders.OrderID, Orders.CustomerID, Orders.EmployeeID, Orders.OrderDate, Orders.RequiredDate, Orders.ShippedDate, 
                Orders.ShipVia, Orders.Freight, Orders.ShipName, Orders.ShipAddress, Orders.ShipCity, Orders.ShipRegion, Orders.ShipPostalCode, Orders.ShipCountry)
                VALUES (\''. $ID .'\', \''. $optCustomers .'\', \''. $optEmployees .'\', \''. $dToday .'\', \''. $dRequired .'\', \''. $dShipped .'\', \''. $optShippers .'\', 
                \''. $Freight .'\', \''. $txtShipName .'\', \''. $txtShipAddress .'\', \''. $txtShipCity .'\', \''. $txtShipRegion .'\', \''. $txtShipPostalCode .'\'
                , \''. $txtShipCountry .'\');';
                $RValue = $conexion->prepare($CrearOrden);
                $RValue->execute();

                // Ya con la orden creada solo falta crearle los detalles de la orden por cada producto y estara todo listo.
                for($i = 0; $i < count($optProducts); $i++) {
                    $DetallesOrden = 'INSERT INTO nwind.`order details` (nwind.`order details`.OrderID, nwind.`order details`.ProductID, nwind.`order details`.UnitPrice,
                    nwind.`order details`.Quantity, nwind.`order details`.Discount) 
                    VALUES (\''. $ID .'\', \''. $optProducts[$i] .'\', \''. $UnitPrice[$i] .'\', \''. $txtQuantity[$i] .'\', \''. $Discount[$i] .'\');';
                    $RValue = $conexion->prepare($DetallesOrden);
                    $RValue->execute();
                }

                // Si hasta este punto se finalizo el proceso correctamente, le asignamos true a la data para indicar que funciono y termino como esperado.
                $data = true;

                break;

            case 'Verificar': 
                // Si el caso es verificar, volveremos a hacer una verificación pero con php.
            
                // Tomamos todas las variables del Post.
                $optCustomers = (isset($_POST['optCustomers'])) ? $_POST['optCustomers'] : NULL;
                $optEmployees = (isset($_POST['optEmployees'])) ? $_POST['optEmployees'] : NULL;
                $optShippers = (isset($_POST['optShippers'])) ? $_POST['optShippers'] : NULL;
                $dRequired = (isset($_POST['dRequired'])) ? $_POST['dRequired'] : NULL;
                $optProducts = (isset($_POST['optProducts'])) ? $_POST['optProducts'] : NULL;
                $txtQuantity = (isset($_POST['txtQuantity'])) ? $_POST['txtQuantity'] : NULL;
                $txtShipName = (isset($_POST['txtShipName'])) ? $_POST['txtShipName'] : NULL;
                $txtShipAddress = (isset($_POST['txtShipAddress'])) ? $_POST['txtShipAddress'] : NULL;
                $txtShipCity = (isset($_POST['txtShipCity'])) ? $_POST['txtShipCity'] : NULL;
                $txtShipRegion = (isset($_POST['txtShipRegion'])) ? $_POST['txtShipRegion'] : NULL;
                $txtShipPostalCode = (isset($_POST['txtShipPostalCode'])) ? $_POST['txtShipPostalCode'] : NULL;
                $txtShipCountry = (isset($_POST['txtShipCountry'])) ? $_POST['txtShipCountry'] : NULL;

                // Verificamos que todas al menos tengan algo.
                if($dRequired == "" || ($optProducts[0] == "" && count($optProducts) == 1) || ($txtQuantity[0] == "" && count($txtQuantity == 1)) || $txtShipName == ""
                || $txtShipAddress == "" || $txtShipCity == "" || $txtShipRegion == "" || $txtShipPostalCode == "" || $txtShipCountry == "") {
                    $data = false;
                }
                else {
                    $data = true;
                }

                break;

            default:
                // Si en la opción del apartado no es compatible con las establecidas, indicaremos que hay un error.
                $data = 'Error';
                break;
        }

        // Borramos la variable.
        unset($opcion);
    }
    else {
        // Si no es ninguna de las anteriores, entonces devolveremos un error.
        $data = 'Error';
    }

    // Le indicamos a php que devuelva el valor $data con un tipo de codificación.
    print json_encode($data, JSON_UNESCAPED_UNICODE);

    // Eliminamos variables importantes.
    unset($ObjetoTemp);
    unset($conexion);
    unset($apartado);
?>