<?php

define("THRESHOLD", 1000); 

function ctable($rows, $columns){
    echo "<table width=\"150\" border=\"1\">";
    for( $i = 1; $i<=$rows; $i++ ) {
        echo "<tr>";
        for( $j = 1; $j<=$columns; $j++ ) {
            echo "<td>CELL: $i, $j</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}

function add_1($num1){
    $tot = 0;
    for( $i = 1; $i <= $num1; $i++ ){
        $tot = $tot + $i;
    }
    return $tot;
}

function add_2(&$num1, &$num2){
    $num1 = add_1($num1);
    $num2 = add_1($num2);
    
    $tot = $num1 + $num2;
        
    if ($tot > THRESHOLD){
        return $tot;
    }else{
        return THRESHOLD;
    }
}

function add_2_pbv($num1, $num2){
    $num1 = add_1($num1);
    $num2 = add_1($num2);
    
    $tot = $num1 + $num2;
        
    if ($tot > THRESHOLD){
        return $tot;
    }else{
        return THRESHOLD;
    }
}

function add_3($x, $y){
    //$result = add_2($x, $y);
    $result = add_2_pbv($x, $y);
    
    echo "input: $x , $y </br> output: $result";
}

function demo(){
    add_3(5,10); //expected output: input: 5 , 10\noutput: 1000 
    echo "<br>";
    add_3(50, 100); //expected output: input: 50 , 100\noutput: 6325 
}

demo();
?>

