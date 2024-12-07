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
    $str = "This is a string";
    echo $str;
    $lenstr = strlen($str); // returns the length of the string
    echo $lenstr;

    echo "\nThe length of the string is "."$lenstr"."Thank you!";    //concatination done with '.'

    echo "<br>The number of words in the string are ".str_word_count($str);

    echo "<br>The reverse string is ".strrev($str);
    echo "The posn of is in this string is ".strpos($str,"is");
    ?>

    </div>
</body>
</html>