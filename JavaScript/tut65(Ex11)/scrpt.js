/*WRITE A PROGRAM TO CALCULATE THE FACTORIAL OF NUMBER USING REDUCE AND USING FOR LOOPS*/

    function fact(a){       //declaring factorial function that takes number as an argument
        let myarr=[]        //creating an empty array
        for(let i=a;i>0;i--){       //for loop to create an array of the desired number to 1
        // let arr = Array.from(Array(number+1).keys())    ==> SHortcut to make an array
        // let c= arr.slice(1,).reduce((a,b)=> a*b)     ==>Shortcut!
            myarr.push(i)       //inserting elements in the aray one by one
        }
        console.log(myarr)

        const fac=(a,b)=>{      //declaring fac fucntion for reduce method
            return a*b
        }

        console.log(myarr.reduce(fac))      //REDUCE method!
    }

    fact(10)     //function execution
    fact(5)
    fact(20)