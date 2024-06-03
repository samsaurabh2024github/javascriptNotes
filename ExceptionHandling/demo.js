// console.log("tinku is going to tinki home for making assignment of js");
// console.log("=====================================");
// try {
    
//     demo()
// } catch (error) {
//     console.log(error);
//     console.log("=================================");
//     console.log("execution will any how should be completed..");
//     console.log("=================================");
    
// }
// console.log("tinku reach to tinki home..");

//=======================================================================================
// console.log("tinku is going to tinki home for making assignment of js");
// console.log("=====================================");
// function demo(a) 
// {
//     console.log(a);
// }
// try {
    
//     demo(10)
// } catch (error) {
//     console.log(error);
//     console.log("=================================");
//     console.log("execution will any how should be completed..");
//     console.log("=================================");  
// }
// finally {
//     console.log("both tinku and tinki completed the task of js ");
// }

// console.log("tinku reach to tinki home..");


//==========================================================  

// console.log("tinku ghar se nikla");
// try {
//     buyChips("chips mil gaye.")
//     throw new error ("raste me mujhe bhut mil gaya but maiine fir v chips le liya.");
// } catch (error) {
//     console.log(error);
// }
// finally
// {
//     console.log("tinku tinki ke ghar phuch gaya,");
//     function buyChips(a ) {
//         console.log(a);   
//     }
// }
// console.log("tinku ar tinki ne js ki assignment complete kiya..");



//=============================================================  

// let giftPromise = new Promise((resolve,reject ) => {
//     let gift = "Nokia 1100"
//     if(gift == "Iphone")
//         {
//             resolve("tinki will became very happy")
//         }
//         else
//         {
//             reject("tinki ne tinku ko chhor diya.")
//         }
// })
// giftPromise.then((resp ) => {console.log(resp);})
// giftPromise.catch((problem ) => {console.log(problem);})



//===============================================================  

// fetch(`https://api.github.com/users`).then(Response => Response.json()).then(data => {console.log((data));})

//=============================================================== 

/*
promises are used to fetch asynchronous code.
to avoid callBack fail. (nested callback function.)
promise has 3 state
1. pending  (action)
2. resolve  (then)    
3. reject   (catch)

setTimeOut
setInterval
*/

/*setTimeOut
setTimeOut is used to execute the code after given specific time.


 let mySetTimeOut = setTimeout(() => {
    console.log("mai to 3 sec ke bad hi execute hoyunga.");
 },5000)
 */    //here 10000 is millisecond.



/*setInterval
setInterval is used to execute the code in looping statement for a given time.
here the code will execute after every 2 second.

let MySetTimeInterval = setInterval(() => {
    console.log("main bar bar execute hoyunga..");
},2000)
*/

/*
how to handle both setTimeOut and setTimeInterval  


let MySetTimeInterval = setInterval(() => {
    console.log("main bar bar execute hoyunga..");
},2000)

setTimeout(() => {
    clearInterval(MySetTimeInterval)
},10000)
*/
/*

let p= new Promise((resolve,reject) => {
    let a=10;
    setTimeout(() => {
        if(a==10)
            {
                resolve("value is 10")
            }
            else {
                reject("value is not the 10")
            }
    },3000)
})

console.log(p);

setTimeout(() => {
    console.log(p);
    
}, 6000);
*/


/*
let p= new Promise((resolve,reject) => {
    let a=10;
    setTimeout(() => {
        if(a==10)
            {
                resolve("value is 10")
            }
            else {
                reject("value is not 10.")
            }
        
    }, 3000);
}).then((resp) => {
    // console.log(resp);
    console.log("promise resolved");
}).catch((err) => {
    //console.log(err);
    console.log("promise not resolved...");
    
},6000);


*/

let fetching = async () => {
    let resp = (await fetch ("https"))
}