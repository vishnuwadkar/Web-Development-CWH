#LOOPS in Ruby

#for loop
for i in 1..10    #1..10 is range syntax
  puts i    #prints value from 1 to 10
end

myArr = ["xyz","pqr","abc"]
for ele in myArr do   #for an array
  puts ele
end

#WHILE loop
i=1
while i<10 do
  puts i  #prints 1 to 10
  i += 1  #increment
end

#DO-WHILE loop
loop do 
  puts "Enter number: "
  num = gets.chomp.to_i
  if num > 5
    break
  end
end
#loop will end only end if user inputs num greater than 5


#UNTIL and UNLESS

#UNTIL executes the code block until the condition is true
#UNLESS executes the code block until the condition is false
i = 1
until i == 10 do
  puts i  #prints 1 to 10
  i += 1  #increment
end

x = 3
unless x == 5
  puts "x is not equal to 5"
else
  puts "x is equal to 5"
end

#BREAK and NEXT
#BREAK terminates the loop
#NEXT skips the current iteration and continues with the next one

i=1
while i<=10 do
  if i==5
    breaks    breaks the loop
  puts i  #prints numbers from 1 to 4
  i += 1  #increment
end

i=1
while i<10 do
  if i%2==0
    next    #skips this iteration
  puts i  #prints odd numbers from 1 to 10
  i += 1  #increment
end

#REDO and RETRY 
#REDO restarts the loop from the beginning
#RETRY restarts the loop from the last iteration

i=1
while i<10 do
  puts i  #prints 1 to 10
  i += 1  #increment
  redo if x==5    #also prints 5 even tho the loop condn is till 4
end

#retry statement works only between begin and rescue block

