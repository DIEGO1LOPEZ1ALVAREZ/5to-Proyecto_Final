<?php  
	include_once 'conexion.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();

	//nesesario para resivir parametros con Axios
$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

$id = (isset($_POST['ProductID'])) ? $_POST['ProductID'] : '';
$ProductName = (isset($_POST['ProductName'])) ? $_POST['ProductName'] : '';
$SuplierId = (isset($_POST['SuplierId'])) ? $_POST['SuplierId'] : '';
$categoriID = (isset($_POST['categoriID'])) ? $_POST['categoriID'] : '';
$QuantityPerUnit = (isset($_POST['QuantityPerUnit'])) ? $_POST['QuantityPerUnit'] : '';
$UnitPrice = (isset($_POST['UnitPrice'])) ? $_POST['UnitPrice'] : '';
$UnitslnStock = (isset($_POST['UnitslnStock'])) ? $_POST['UnitslnStock'] : '';
$UnitsOnOrder = (isset($_POST['UnitsOnOrder'])) ? $_POST['UnitsOnOrder'] : '';
$ReorderLevel = (isset($_POST['ReorderLevel'])) ? $_POST['ReorderLevel'] : '';
$Discontinued = (isset($_POST['Discontinued'])) ? $_POST['Discontinued'] : '';

switch ($opcion) 
     {
        case 1://alta
            $consulta = "INSERT INTO Products (ProductName, QuantityPerUnit, UnitPrice, UnitslnStock, UnitsOnOrder, ReorderLevel, Discontinued) VALUES('$ProductName', '$QuantityPerUnit, '$UnitPrice', '$UnitslnStock', '$UnitsOnOrder', '$ReorderLevel', '$Discontinued') ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 2://modificacion
            $consulta = "UPDATE Products SET ProductName='$ProductName', QuantityPerUnit='$QuantityPerUnit', UnitPrice='$UnitPrice', UnitslnStock='$UnitslnStock', UnitsOnOrder='$UnitsOnOrder', ReorderLevel='$ReorderLevel',Discontinued='$Discontinued' ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;

        case 3://borrar
            $consulta = "DELETE FROM Products  WHERE productID='$id' ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 4://listar
            $consulta = "SELECT ProductName, QuantityPerUnit, UnitPrice, UnitslnStock, UnitsOnOrder, ReorderLevel, Discontinued FROM Products";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;
        
     }
	print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
	$conexion = NULL;


?>