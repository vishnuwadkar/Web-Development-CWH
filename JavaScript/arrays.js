//ARRAYS IN JAVASCRIPT!
//ARRAYS is a collection of items

let heroes = ["Max","Dr Strange","Odin"]

let marks = [67,78,1,2,45,90]

//when we store related information in a linear order, we use arrays

//methods of arrays
console.log(marks.length);  //length gives the count of objects in an array

//LOOPING over arrays
//consider printing all elements of arrays
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
for (let j = 0; j < heroes.length; j++) {
    console.log(heroes[j]);
}

//for of loop!
for(let hero of heroes){    //hero is any single element of the array
    console.log(hero.toUpperCase());
}

//Practice ques
let stud_marks = [86,45,82,69,55,90,92,48]
function avg(arr){  //creating a fucntion to find average
    let sum=0;
    for(let el of arr){
        sum+=el;
    }
    return sum/arr.length;  
}
console.log("The average of all marks is ",avg(stud_marks));    //printing the average 

/*Q. For a given array with prices of 5 items -> [250,645,300,900,50]
All items have of 10% OFF on them. Change the array to store final price after applying the offer*/
let prices = [250,645,300,900,50];
function off(arr){  //function to find offer applied price
    let index = 0;
    for(let el of arr){
        el -= (el*0.1);
        arr[index] = el;
        index++
        // console.log(`Value at index ${index} = ${el}`)
    }
    return arr
}

console.log(off(prices));


//ARRAY METHODS
//1. push() - adds an element at the end of the array
console.log(prices.push(1000));  //returns the new length of the array
console.log(prices)

//2. pop() - removes the last element of the array
console.log(prices.pop())
console.log(prices);

//3.toSTring() -> converts an array into string
console.log(prices.toString());

//4.concat() -> joins multiple arrays and returns a new array
//syntax = let arr_new = arr1.concat(arr2)

//unshift() -> adding element at beginning of the array

//shift() -> deletes an element at the beginning 

//slice() -> returns a piece of of the array
//syntax-> slice(strt_idx, end_idx)

//splice() -> change the original array(add,remove,replace)
//syntax-> splice(strt_idx, del_count, new_el1...)
let arrsp = [1,2,3,4,5,6,7,8,9,10]
console.log(arrsp)
arrsp.splice(2,2,101,102)   //replacing elements using splice
console.log(arrsp)
arrsp.splice(2,0,108);      //adding value
console.log(arrsp)
arrsp.splice(4,0)   //deleting an element
console.log(arrsp)
//if we pass just one index value, it acts as slice
console.log(arrsp.splice(5))