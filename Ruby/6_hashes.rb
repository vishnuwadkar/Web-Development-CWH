#HASHES in Ruby
#Arrays storing values with keys(numerical index)
#{key => value} pair 
#Hashes are mutable
#Hashes are ordered in Ruby 1.9 and later versions

hash1 = {1 => "one", 2 => "two", 3 => "three"}  

#we can also use colon instead of arrow operator
hash2 = {1: "one", 2: "two", 3: "three",
        4: "four", 5: "five", 6: "six"} 

#we can also use symbols as keys
hash3 = {:one => "one", :two => "two", :three => "three"}

#hash with strings as keys
hash4 = { "name": "Vishnu", "uni": "Sppu", "city": "Pune"}

puts hash2.size  #prints size

#to access anything from the hashes, use keys
puts hash1[1] #prints one
puts hash4["name"]  #prints Vishnu

#accessing all the values from the hash using loop
hash1.each do |key, value|
  puts "#{key} => #{value}"
  end
#prints all the values from hash1
