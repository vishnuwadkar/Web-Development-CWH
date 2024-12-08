#FUNCTIONS/METHODS in Ruby
=begin 
Functions are block of code used to avoid writing the same code multiple times. 
They can be reused in the program. 
Functions are defined using the def keyword
Functions return a value
=end

def greet(name)   #method taking one argument
  puts "Hello, #{name}!"
end

greet("Bro")    #outputs "Hello, Bro!"

def shout   #method with no argument
  puts "I CAN HEAR YOU!"
end
shout

def info(name,roll)
  puts "Name: #{name}, Roll: #{roll}"
end
info("virat", 18)
info("Rohit", 45)