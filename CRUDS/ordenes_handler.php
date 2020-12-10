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