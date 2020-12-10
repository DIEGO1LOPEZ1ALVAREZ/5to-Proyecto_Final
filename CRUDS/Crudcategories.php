<?php  
	include_once 'conexion.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();

	//nesesario para resivir parametros con Axios
$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

//declaro las variables para llamarlas en la base de datos
$CategoryID = (isset($_POST['CategoryID'])) ? $_POST['CategoryID'] : '';
$CategoryName = (isset($_POST['CategoryName'])) ? $_POST['CategoryName'] : '';
$Description = (isset($_POST['Description'])) ? $_POST['Description'] : '';


switch ($opcion) 
     {
        case 1://alta
            $consulta = "INSERT INTO categories (CategoryName, Description) VALUES ('$CategoryName, '$Description') ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 2://modificacion
            $consulta = "UPDATE categories SET CategoryName='$CategoryName', Description='$Description' WHERE CategoryID='$CategoryID' ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;

        case 3://borrar
            $consulta = "DELETE FROM categories  WHERE CategoryID='$CategoryID' ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 4://listar
            $consulta = "SELECT CategoryID, CategoryName, Description FROM categories";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;
        
     }
	print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
	$conexion = NULL;


?>