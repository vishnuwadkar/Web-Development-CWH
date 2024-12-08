#IF-ELSE CONDITIONALS in Ruby

#IF conditional
if 2>1
  puts "2 is greater than 1"
end

age = 19
if age>18
  puts "You are an adult"
end

#if-else
if 2>1
  puts "2 is greater than 1"
else
  puts "2 is not greater than 1"
end

#multiple else-if
num1 = 10
num2 = 20

if num1<num2
  puts "#{num2} is greater than #{num1}"

elsif num1>num2     #elsif syntax!
  puts "#{num1} is greater than #{num2}"

else
  puts "#{num1} and #{num2} are equal"
end

#TERNARY operators also comes in conditionals


#SWITCH CASES in Ruby
#Ruby does not have a switch-case statement like other languages. Instead, we can use a hash

print "Enter a day of the week: "
day = gets.chomp

case day
when "Monday"
  puts "Today is Monday"
when "Tuesday"
  puts "Today is Tuesday"
when "Wednesday"
  puts "Today is Wednesday"
when "Thursday"
  puts "Today is Thursday"
when "Friday"
  puts "Today is Friday"
when "Saturday"
  puts "Today is Saturday"
else 
  puts "Invalid day"
end   #end is important




