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
