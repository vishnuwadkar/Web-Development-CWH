#STRINGS in Ruby

str1 = "This is a string in single quote"
str2 = "This is a string in double quote"

puts str1, str2
# Output: This is a string in single quoteThis is a string in double quote

#multiline string
str3 = "This is a multiline
string in double quote"
puts str3
# Output: This is a multiline
#string in double quote

#another way to write to multiline strings
str4 = %/This is also
a multiline string/
puts str4
# Output: This is also
# a multiline string/

#String interpolation
puts "My string is  #{str4}"    #this is interpolation of string
# Output: My string is  This is also
# a multiline string/

#STRING METHODS

str5 = "Hello"
#size and length -> both does the same thing
puts str5.size  #prints 5
puts str5.length  #prints 5

#upcase and downcase
str5.upcase   #convert entire string to uppercase
str5.downcase   #convert entire string to downcase

str5.reverse  #reverse the string
str5.upcase.reverse   #we can use two methods simultaneously
str5.include? "Hello"   #prints true if the arg string is present, else false

#STRING CONCATINATION
puts "Hello" "How are you?"
# Output: HelloHow are you?
#this even works with a + in between

#FREEZING a string
str6 = "Hi"
str6 = str6 << "there!"   #appending a string
#thus the string is modified
str6.freeze   #freezing a string
#thus the string cannot be modified further

#comparison of strings
puts "abc" == "abc"   #Outputs true
puts "abc" == "xyz"   #Outputs false

#similarly, we can use 
puts "abc".eql? "abc" #Outputs true

#Using indexes in string
puts "Hello"[0]   #prints H
msg = "This is a message"
puts msg[0]   #prints T
puts msg[0,4]   #prints first 4 chars
puts msg[0,msg.length]  #entire string
puts msg[-4]    #fourth char from reverse

