<?php  
//soy inclusivo y llamo a la conexione
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

//nesesario para resivir parametros con Axios
$_POST = json_decode(file_get_contents("php://input"), true);
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

//declaro las variables para llamarlas en la base de datos
$EmployeeID = (isset($_POST['EmployeeID'])) ? $_POST['EmployeeID'] : '';
$LastName = (isset($_POST['LastName'])) ? $_POST['LastName'] : '';
$FirstName = (isset($_POST['FirstName'])) ? $_POST['FirstName'] : '';
$Title = (isset($_POST['Title'])) ? $_POST['Title'] : '';
$TitleOfCourtesy = (isset($_POST['TitleOfCourtesy'])) ? $_POST['TitleOfCourtesy'] : '';
$BirthDate = (isset($_POST['BirthDate'])) ? $_POST['BirthDate'] : '';
$HireDate = (isset($_POST['HireDate'])) ? $_POST['HireDate'] : '';
$Address = (isset($_POST['Address'])) ? $_POST['Address'] : '';
$City = (isset($_POST['City'])) ? $_POST['City'] : '';
$Region = (isset($_POST['Region'])) ? $_POST['Region'] : '';
$PostalCode = (isset($_POST['PostalCode'])) ? $_POST['PostalCode'] : '';
$Country = (isset($_POST['Country'])) ? $_POST['Country'] : '';
$HomePhone = (isset($_POST['HomePhone'])) ? $_POST['HomePhone'] : '';
$Extension = (isset($_POST['Extension'])) ? $_POST['Extension'] : '';
$Notes = (isset($_POST['Notes'])) ? $_POST['Notes'] : '';
$ReportsTo = (isset($_POST['ReportsTo'])) ? $_POST['ReportsTo'] : '';

switch ($opcion) 
     {
        case 1://alta
            $consulta = "INSERT INTO employees (LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Notes, ReportsTo) VALUES('$LastName', '$FirstName', '$Title', '$TitleOfCourtesy', '$BirthDate', '$HireDate', '$Address', '$City', '$Region', '$PostalCode', '$Country', '$HomePhone', '$Extension', '$Notes', $ReportsTo)";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 2://modificacion
            $consulta = "UPDATE employees SET LastName='$LastName', FirstName='$FirstName', Title='$Title', TitleOfCourtesy='$TitleOfCourtesy', BirthDate='$BirthDate', HireDate='$HireDate', Address='$Address', City='$City', Region='$Region', PostalCode='$PostalCode', Country='$Country', HomePhone='$HomePhone', Extension='$Extension', Notes='$Notes', ReportsTo=$ReportsTo WHERE EmployeeID=$EmployeeID ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;

        case 3://borrar
            $consulta = "DELETE FROM employees WHERE EmployeeID=$EmployeeID";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        break;

        case 4://listar
            $consulta = "SELECT EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, Region, PostalCode, Country, HomePhone, Extension, Notes, ReportsTo FROM employees";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchALL(PDO::FETCH_ASSOC);
        break;
    
     }

    //enviar el array final en formato json a JS
	print json_encode($data, JSON_UNESCAPED_UNICODE); 
	$conexion = NULL;
?>