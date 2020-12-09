<?php  
//soy inclusivo y llamo a la conexione
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

//nesesario para resivir parametros con Axios
$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

//declaro las variables para llamarlas en la base de datos
$ShipperID = (isset($_POST['ShipperID'])) ? $_POST['ShipperID'] : '';
$CompanyName = (isset($_POST['CompanyName'])) ? $_POST['CompanyName'] : '';
$Phone = (isset($_POST['Phone'])) ? $_POST['Phone'] : '';

switch ($opcion) 
     {
        case 1://alta
            $consulta = "INSERT INTO shippers (CompanyName, Phone) VALUES('$CompanyName', '$Phone')";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 2://modificacion
            $consulta = "UPDATE shippers SET CompanyName='$CompanyName', Phone='$Phone' WHERE ShipperID=$ShipperID";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;

        case 3://borrar
            $consulta = "DELETE FROM shippers WHERE ShipperID='$ShipperID'";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 4://listar
            $consulta = "SELECT ShipperID, CompanyName, Phone FROM shippers";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;
    
     }

    //enviar el array final en formato json a JS
	print json_encode($data, JSON_UNESCAPED_UNICODE); 
	$conexion = NULL;
?>