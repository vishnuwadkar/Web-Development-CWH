<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conditionals</title>
</head>
<body>
    <div class="container">

    <?php
    //arrays in php
    //a special variable that can hold more than one value at a time

    /*$languages = array("Python","Cpp","Javascript","PHP");
    echo $languages[0]; //prints first value from array
    echo "<br>";
    echo count($languages); //prints the number of values in the array
    */
    ?>

    <?php
    $a = 0;
    while($a<=10){
        echo "<br>Value of a is ";
        echo "$a";
        $a++;
    }

    //Iterating arrays in php
    echo "<br>WHILE LOOP ";
    $i=0;
    $languages = array("Python","Cpp","Javascript","PHP");
    while($i<4){
        echo "<br>The language is ";
        echo "$languages[$i]";
        $i++;
    }
    
    //do while loop
    echo "<br>DO-WHILE LOOP";
    $i=0;
    do{
        echo "<br>The language is ";
        echo "$languages[$i]";
        $i++;
    }while($i<4);
    
    //for loop
    echo "<br>FOR LOOP";
    $i=0;
    for($i=0;$i<4;$i++){
        echo "<br>The language is ";
        echo "$languages[$i]";
        }


    ?>

    </div>
</body>
</html>