<?php  
	include_once 'conexion.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();

	//nesesario para resivir parametros con Axios
$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

$id = (isset($_POST['categoriID'])) ? $_POST['categoriID'] : '';
$categoriName = (isset($_POST['categoriName'])) ? $_POST['categoriName'] : '';
$Description = (isset($_POST['Description'])) ? $_POST['Description'] : '';
$Picture= (isset($_POST['Picture'])) ? $_POST['Picture'] : '';


switch ($opcion) 
     {
        case 1://alta
            $consulta = "INSERT INTO categories (categoriName, Description, Picture) VALUES('$categoriName, '$Description', '$Picture') ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 2://modificacion
            $consulta = "UPDATE categories SET categoriName='$categoriName', Description='$Description', Picture='$Picture' WHERE categoriID='$id' ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;

        case 3://borrar
            $consulta = "DELETE FROM categories  WHERE categoriID='$id' ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 4://listar
            $consulta = "SELECT categoriID, categoriName, Description, Picture FROM categories";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;
        
     }
	print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
	$conexion = NULL;


?>