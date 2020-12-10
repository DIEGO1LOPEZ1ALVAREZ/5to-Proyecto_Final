<?php 
// Creamos la clase con una función de conectar.
class Conexion{	  
    public static function Conectar() {        
        // Definimos el servidor, el nombre de la base de datos, el usuario y contraseña.
        define('servidor', 'localhost');
        define('nombre_bd', 'nwind');
        define('usuario', 'root');
        define('password', '');					        
        // Le indicamos que la conexión usa uft8.
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');			
        try{
            // Intentamos hacer la conexión.
            $conexion = new PDO("mysql:host=".servidor."; dbname=".nombre_bd, usuario, password, $opciones);			

            // Si todo salio bien, se retorna la conexión.
            return $conexion;
        }catch (Exception $e){
            // Si fallo, acabara con la conexión.
            die("El error de Conexión es: ". $e->getMessage());
        }
    }
}
?>