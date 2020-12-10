<!DOCTYPE html>
<html lang="es">
    <head>
        
        <!-- He richy esto es importante kpo. -->
        <?php
            // Incluimos la conexión para la utilización en esta página.
            include_once 'conexion.php';

            // Creamos las variables temporales para que seán eliminadas al cumplir su objetivo.
            $TempObjetoCon = new Conexion();
            $TempConexion = $TempObjetoCon->Conectar();

            // Imprimiremos en la página el valor que necesitara nuestro js, de tipo constante
            // para evitar que su valor cambie. 
            print('<script>const Pagina = "Crear";</script>'); 
        ?>
        <!-------------------------------------->
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>

        <div id="appCrearOrden">
            
            <?php
                // Código para cargar tabla con las ID's de los clientes y Empleados
            ?>

            <input type="button" value="Crear" @click="btnAgregar">

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