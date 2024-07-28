let arr = [1 , 2 , 3 , 4 , 5]
//index    0   1   2   3   4

function display(arr){
    for(i=0;i<(arr.length);i++){    //printing the array with for loop
    console.log(arr[i])
    }
}

console.log(arr.length)     //prints the length
console.log(arr[1])
display(arr)

arr[4]=9   //this will change the array and thus arrays are mutable
console.log(arr[4])
console.log(arr.toString()) //converts the array to string(comma seperated string)
console.log(arr.join(" and "))    //uses parameter instead of comma
console.log(arr.pop())    //returns last element
arr.push(10)    //inserts parameter in the array
arr.push("vishnu")
display(arr)

let nam = ["vishnu","prakash","wadkar"]
display(nam)
nam.shift()     //method that removes the first element
display(nam)
nam.unshift("vish")     //method that inserts at first place
display(nam)

let b= arr.splice(1,3)
console.log(b)
display(arr)

//FOR EACH loop in arrays
arr.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

//FOR IN loop

let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}    

//FOR OF loop
const abc= [1,2,3]
for (const value of abc) {
    console.log(value)
}

//map() ->creates new array by performing some operation on each element of array
//removes the use of for loop to iterate through each element

let oarr = [1,20,13,19,13]      //old array
let narr = oarr.map((element)=>{        //new array
    return element**2  //performs square root operation
})
console.log(narr)

//FILTER function
myarr = [14,2,5,24,10,4,6,7,90]
const greaterthanseven = (e)=>{     //defined function that detects number greater than seven
    if(e>7){
        return true
    }
    return false
}
console.log(myarr.filter(greaterthanseven))     //prints values only greater than seven


//REDUCE function
const red =(a,b)=>{
    return(a+b)
}
myarr2 = [1,2,5,2]
console.log(myarr2.reduce(red))

//arry.from method-> to convert array from any object
console.log(Array.from("Vishnu"))
