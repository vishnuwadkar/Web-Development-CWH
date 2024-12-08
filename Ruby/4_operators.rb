#OPERATORS in Ruby

#Operators are Ruby are similar to operators in any other language
#They are used to perform operations on variables and values.
#Here are some of the most commonly used operators in Ruby:

#Arithmetic Operators
#   + (Addition) - (Subtraction) * (Multiplication) / (Division
#   % (Modulus) ** (Exponentiation) - (Negation)
#   += -= *= /= %= **= -=
puts 5 + 3 # Outputs: 8
puts 5 - 3 # Outputs: 2
puts 5 * 3 # Outputs: 15      
puts 5 / 3 # Outputs: 1.6666666666666667
puts 5 % 3 # Outputs: 2
puts 5 ** 3 # Outputs: 125

#Assignment Operators
#   = (Assignment) += -= *= /= %= **= -=
puts x = 5 # Outputs: 5
puts x += 3 # Outputs: 8
#Comparison Operators
#   == (Equal to) != (Not equal to) > (Greater than) < (
#   <= (Less than or equal to) >= (Greater than or equal to)
puts 5 == 5 # Outputs: true
puts 5 != 5 # Outputs: false
puts 5 > 3 # Outputs: true
puts 5 < 3 # Outputs: false
puts 5 <= 5 # Outputs: true
puts 5 >= 5 # Outputs: true

#Logical Operators
#   and (Logical and) or (Logical or) not (Logical not)
puts true and true # Outputs: true
puts true or false # Outputs: true
puts not true # Outputs: false

#ternary operator
a=14
b=30
c = a>b? a:b   #if a is greater than store a in c, else store b in c

puts 5 > 3 ? "5 is greater than 3" : "5 is less"   #if condn true, print 1st string, else print 2nd string

