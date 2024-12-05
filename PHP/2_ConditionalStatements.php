<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conditional Statements</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .container{
            width: 80%;
            background: paleturquoise;
            margin: auto;
            padding: 5%;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Lets learn about PHP if-else Conditionals!</h1>

        <?php
        $age = 16;
        if($age>=18 and $age<60){
            echo "You are an adult";
        }
        else if($age>=60){
            echo "You are a senior citizen";
        }
        else{
            echo "You are a child";
        }
        echo "<br>";
        echo "Your age is ";
        echo "$age";
        ?>

    </div>
</body>
</html>