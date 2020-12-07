<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="CSS/reportes.css">
        <title>Report Employees</title>
    </head>
    <body>
        <center><h1>E M P L O Y E E S</h1></center>
        <hr class="inicio"><br>
        <div class="tit">
            <table>
                <tr>
                    <td class="tdId">Id</td>
                    <td class="tdTitle">Title</td>
                    <td class="tdName">Name</td>
                    <td class="tdCountry">Country</td>
                    <td class="tdOrder">Orders</td>
                    <td class="tdAmount">Amount</td>
                </tr>
            </table>
        </div>
        <?php
            //Esta lina solo elimina los posibles warnings y notices en el codigo
			error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE);

			//Como el nombre indica, asigna un host tu determinado
			$db_host = "localhost";
			//En esta linea se le asigna el nombre de tu base de datos 
			$db_nombre = "nwind";
			//Como el nombre indica, asigna un usuario, normalmente el por defecto es root
			$db_usuario = "root";
			//Asigna la contrase de tu BD, en mi caso, no tiene por lo tanto se deja en blanco
			$db_contra="";

			//Se crear una variable que almacena los datos de conexión, que son los datos de arriba
			$conexion = mysqli_connect($db_host, $db_usuario, $db_contra);

			//Si no se llega a conectar correctamente a la base de datos, muestra un mensaje indicandotelo y termina el proceso
			if (mysqli_connect_errno()) {
				echo "Fallo al conectar con la BBDD";
				exit();
			}
			//Asiganra la base de datos con la que se va a trabajar y en caso que no se encuentra la base de datos mostrar un mensaje
			mysqli_select_db($conexion, $db_nombre) or die ("No se encuentra la BBDD");

			//Inidica con en que variable se va a trabajar y con el utf8 indicara que usa caracteres especiales
			mysqli_set_charset($conexion, "utf8");

			//Se crea una variable que indica cual sera la consulta para mostrar los datos
			$consulta = "SELECT e.employeeid, e.title, concat(e.firstname, ' ', e.lastname) as Nombre, e.country,
            (
                select count(*) from orders o where o.employeeid=e.employeeid
            ) as Ordenes,
            (
                select round( sum(od.quantity*od.unitprice - od.quantity*od.unitprice*od.Discount), 2)
                from `order details` od join orders o
                on o.orderid=od.orderid where o.EmployeeID=e.employeeid
            ) as Monto
            FROM employees e;";

			//Se crea una variable en donde va a almacenar toda la informacion de la base de datos, con su respectiva conexión
			$resultados = mysqli_query($conexion, $consulta);

			//SE crea un ciclo while, que su respectiva condicion es que si la variable fila, que servira para almacenar la variable resultados que es donde se encuentran todos los datos de la BD, si esta ejecucion cuenta con información entonces la condición se va a complir 
			while (($fila = mysqli_fetch_row($resultados))==true) {
                //Va imprimir la información pero dentro de una tabla para ordenarla mejor
				echo "<center><div class='datos'><table><tr><td class='id'>";

                //Imprime la información de la BD, indicando que posición en la que se encuentra dicha información
                echo $fila[0] . "</td><td class='titulo'> ";

                //Imprime la información de la BD, indicando que posición en la que se encuentra dicha información
                echo $fila[1] . "</td><td class='nombre'> ";

                //Imprime la información de la BD, indicando que posición en la que se encuentra dicha información
                echo $fila[2] . "</td><td class='pais'> ";

                //Imprime la información de la BD, indicando que posición en la que se encuentra dicha información
                echo $fila[3] . "</td><td class='ordenes'> ";

                //Imprime la información de la BD, indicando que posición en la que se encuentra dicha información
                echo $fila[4] . "</td><td class='monto'> ";

                //Imprime la información de la BD, indicando que posición en la que se encuentra dicha información
                echo $fila[5] . "</td></tr></table></div></center>";
			}
        ?>
    </body>
</html>