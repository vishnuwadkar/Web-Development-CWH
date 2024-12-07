<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions</title>
</head>
<body>
    <div class="cont">

    <?php
    function five(){
        echo "5";
    }
    five();

    function printNum($num){
        echo "Your number is ";
        echo $num;
        echo "<br>";
    }
    printNum(10);
    printNum(45);
    printNum(4545);
    ?>

    </div>
</body>
</html>