#CLASSES AND OBJECTS in Ruby

#'class' keyword is used to create a class
#syntax: class ClassName

class Car:
  @name   #instance variable of the class
  @speed
  @color
  #@@name  class variable

  #constructor of the class
  def initialize(name,speed,color)
    @name = name
    @speed = speed
    @color = color
  end

  def getName()
    puts "The name of the Car is #{@name}!"
  end

  # def setName(uname)  no use since constructor used
  #   @name = name
  # end

end


=begin
When no const used ->
#creating an object of the class
car = Car.new
#calling the method using the object
car.getName()   #prints the string "The name of the Car is BMW!"
car.setName("Audi")  #sets the name of the car to "Audi"
car.getName()   #prints the string "The name of the Car is Audi!"
=end

#const used
myCar = car.new("Lexus",212,"Black")
myCar.getName()  #prints the string "The name of the Car is Lexus!"
puts myCar.speed  #prints the string "212"
puts myCar.color  #prints the string "Black"