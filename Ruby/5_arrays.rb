#ARRAYS in Ruby
#collection of values stored in a single variable

#ways to create an array
#1. using square brackets []
arr1 = [1, 2, 3, 4, 5]
puts arr # prints: [1, 2, 3, 4, 5]
#2. using the Array.new method
arr2 = Array.new #creates an empty array
puts arr # prints: []
#3. using the Array.new method with a size and a default value
arr3 = Array.new(5, 0) #creates an array of 5 zeros

puts arr3.size
puts arr3.length
puts arr3[0] # prints: 0
puts arr3.at(3) #prints the 3rd index
puts arr3.first   #first element of array
puts arr3.last    #last element of array

#similarly there are other methods as well
#push , unshift , pop , shift , delete , delete_at , insert , replace , sort , sort_by , reverse ,
#uniq -> removes duplicates , join -> converts array to string , to_a -> converts to array ,

