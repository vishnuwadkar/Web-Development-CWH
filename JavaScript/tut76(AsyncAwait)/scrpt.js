// async function getData() {
//     //simulating getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(4)
//         }, 4000);
//     })
// }
async function getData() {
    //simulating getting data from a server
    let x = await fetch(/*jsonplaceholder*/)  //returns a promise
    let data = await x.json()   //parsing, and then returns one more promise
    console.log(data);
    //json gives javascript object
}

async function main(){


    console.log('loading modules...');

    console.log('Do something else...');

    console.log('load data');
    let data = await getData()      //await used here! will wait for async func now
    //usually, for this function to complete it will take time
    //however, the below activities wont stop for this
    //the javascript will function according to its asynchronous behaviour
    console.log('process data');
    console.log(data)

    console.log("load data")
    console.log('task 2');
}
main()
//if we want the post fucntion activities to wait till the promise is reolved, we can
/*data.then((v)=>{
    console.log(data);
    console.log('task 3');

})*/
//this is one approach

//to write more clean code than this, we use async-await
// we make the function async function
//to wait for sync fucntion, we use await
//to use await, we have to make one more fucntion and wrap it into it


