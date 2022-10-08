<?php
    $ch1 = $_POST["chart"];
    if($ch1==1){
      include ("conectar.php");
      $cons= "SELECT `High`,`Low` FROM doge order by id_dia desc";

      $res=mysqli_query($con,$cons);
      $reg=mysqli_fetch_array($res); 
      //Inicializamos la matriz
      for ($i = 0; $i < 2; $i++) {
        $datos[$i]=array();
      }
      /*    
      while ($reg= mysqli_fetch_array($res)){
        echo json_encode($reg["Open"].",");
      }
      */
      while ($reg= mysqli_fetch_array($res)) {
      array_push($datos[0],doubleval($reg["High"]));
      array_push($datos[1],doubleval($reg["Low"]));
      }    
      echo json_encode($datos);
      }
    if($ch1==2){
      include ("conectar.php");
      $cons= "SELECT `price` FROM shiba"; 
      $res=mysqli_query($con,$cons);
      $reg=mysqli_fetch_array($res); 
      //Inicializamos la matriz
      for ($i = 0; $i < 2; $i++) {
        $datos[$i]=array();
      }
      while ($reg= mysqli_fetch_array($res)) {
      array_push($datos[0],doubleval($reg["price"]));
      }    
      echo json_encode($datos);
    }
    if($ch1==3){
      include ("conectar.php");
      //Consultas
      $cons= "SELECT `Market_Cap` FROM doge where id_dia in (2575,2606,2634,2665,2695,2726) ";
      $cons2= "SELECT `market_Cap` FROM shiba where id in (141,171,230,260,291,321)";

      //Query 1
      $res=mysqli_query($con,$cons);
      //Query 2
      $res2=mysqli_query($con,$cons2);
      //Inicializamos la matriz
      for ($i = 0; $i < 2; $i++) {
        $datos[$i]=array();
      }
      //Push de Query 1
      while ($reg= mysqli_fetch_array($res)) {
      array_push($datos[0],doubleval($reg["Market_Cap"]));

      } 
      //Push de Query 2  
      while ($reg2= mysqli_fetch_array($res2)) {
        array_push($datos[1],doubleval($reg2["market_Cap"]));
      }    
      echo json_encode($datos);
    }
?>