<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Tutorial</title>
</head>

<body>
    <div>
        This is my first php website!
        <?php   //php syntax
        echo "Hello, World using php!"; //php function to print to the screen but without user knowing it
        echo "<br>";    //break i.e new line
        ?>
        <?php
        //multi line comments in php
        /*
            This is a multi 
            line comment in php
            */
        ?>

        <?php
        //variables in php -> written by dollar '$'
        $a = 34;
        $b = 14;
        echo $a, $b; //prints 3414
        echo "<br>";    //break i.e new line

        //php is not case sensitve
        echo $a; //however, variables are case sensitive 
        echo "<br>";    //break i.e new line
        //contants in php -> variables whose values never changes
        define('PI', 3.14);     //syntax of defining contants 
        echo PI; //prints 3.14
        echo "<br>";    //break i.e new line

        ?>

        <?php
        // OPERATORS IN PHP 
        // 1. Arithmetic operators
        $x = 10;
        $y = 5;
        echo "value of x + y is ";
        echo "<br>";    //break i.e new line
        echo $x + $y; //prints 15
        echo "<br>";    //break i.e new line
        echo $x - $y; //prints 5
        echo "<br>";    //break i.e new line

        //2. Assignment operators
        $newVar = $x;
        echo $newVar; //prints 10

        //3. Comparison operators -> returns boolean values
        echo "value of 1==4 is ";
        echo "<br>";    //break i.e new line
        echo var_dump(1 == 4); //prints false {var_dumb is an inbuilt func used to know val and datatype of variable}
        //similarly !=,<=,>= also works

        //4.Increment/Decrement operator
        echo "<br>";    //break i.e new line
        $var1 = 10;
        echo $var1++;
        echo $var1;
        echo "<br>";    //break i.e new line
        $var1 = 10;
        echo $var1--;
        echo "<br>";    //break i.e new line
        $var1 = 10;
        echo --$var1;
        echo "<br>";    //break i.e new line
        $var1 = 10;
        echo ++$var1;
        echo "<br>";    //break i.e new line

        //5.Logical Operator -> AND(&&), OR(||), XOR, NOT(!)
        echo "<br>";    //break i.e new line
        $myvar = (true and true);
        echo var_dump($myvar); //prints 1
        echo "<br>";    //break i.e new line
        $myvar = (true and false);
        echo var_dump($myvar); //prints 1
        echo "<br>";    //break i.e new line
        $myvar = (true xor false);  //if diff, then xor gives true
        echo var_dump($myvar); //prints 1
        ?>

        <?php
        //DATATYPES IN PHP
        /*
        1.String
        2.Integer
        3>FLoat
        4.Boolean
        5.Array
        6.Object
        */
        echo "<br>DATA TYPES<br>";
        $myVar = "Language";
        echo var_dump($myVar);
        echo "<br>";
        $myVar = 22 ;
        echo var_dump($myVar);
        echo "<br>";
        $myVar = 22.54 ;
        echo var_dump($myVar);

        ?>
    </div>
</body>

</html>