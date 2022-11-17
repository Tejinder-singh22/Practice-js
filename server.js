const db = require('./Database/db.js');
const dbConnection = require('./Database/db.js');
const Order = require('./Model/orderModel.js')
//  setTimeout(myGreeting, 3000);
// function myGreeting() {
//   console.log('greeetings');
// }
// console.log('haleluyiia-1');
// console.log('haleluyiia-2');
// const myTimeout2 = setTimeout(myGreeting2, 4000);
// function myGreeting2() {
//   console.log('greeetings2');
// }



//   function repeater(n){

//    for(let i=0; i<=n; i++){

//     setTimeout(()=>{
//         console.log(i);
//     }, i*3000);
//     console.log('n');
//    }
// }
// repeater(10);

// DB CONNECTION
// dbConnection.on("error", console.error.bind(console, "connection error: ")); //event listning
//   dbConnection.once("open", function () { //when a connection with a event source is open
//   console.log("MongoDB Connection successfull");
//   });

//   let myshop = new Order({
//     order_id: 122,
//     first_name: 'teji',
// })

// myshop.save();




// var http = require('http');
// //create a server object:
// http.createServer(function (req, res) {
  
//    if(req.url=='/about'){
//   res.end('hello about'); //end the response
//    }
//                                           //  link -> https://medium.com/khojchakra/a-simple-nodejs-server-without-express-js-6773122d365f
// }).listen(3000, function(){
//  console.log("server start at port 3000"); //the server object listens on port 3000
// });





// const express = require('express'); // it imports a function

// const app = express();
//  const router = require('./Routes/router.js')
// const port = 3000;
// app.use(router);

// app.get('/my',function(req,res){
 
//     res.send('myyyyyy');
// })

// app.listen(port, function(){
//      console.log(`listning at ${port}`);
// })





// call back
// async function myGreeting(name,age,callback) {
//    setTimeout(()=>{
    
//       console.log(name);
//       console.log(age);
//    }, 3000);
//    callback();

// }

// function remain(){
// console.log('haleluyiia-1');
// console.log('haleluyiia-2');
// }
// myGreeting('i will run first','36',remain);
// console.log('djdsjklj');




//  promises
// function myGreeting(name) {
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          let error  = false;
//          if(!error){
//             console.log(name);
//             resolve();
//          }
//          else
//          {
//             reject('kutch theek nhi hai');
//          }
          
//       }, 3000);
//    })
   

// }

// function remain(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          let error  = false;
//          if(!error){
//             console.log('halelfdjj-1');
//             console.log('halelfdjj-2');
//             resolve('lbbbb');
//          }
//          else
//          {
//             reject('kutch theek nhi hai');
//          }
          
//       }, 3000);
//    })
// }

// myGreeting('i will run first').then(()=>{

// remain().then(()=>{
//    console.log('i am last one');



// }).catch((error)=>{
//     console.log(error);
// });


// }).catch((error)=>{
//    console.log(error);
// });






//async await

    // function myGreeting2(name){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //            let error  = false;
    //            if(!error){
    //               console.log(name);
    //               resolve();
    //            }
    //            else
    //            {
    //               reject('kutch theek nhi hai');
    //            }
                
    //         }, 3000);
    //      })
        
    // }
    // function myGreeting(name) {
    //    return new Promise((resolve,reject)=>{
    //       setTimeout(()=>{
    //          let error  = false;
    //          if(!error){
    //             console.log(name);
    //             resolve();
    //          }
    //          else
    //          {
    //             reject('kutch theek nhi hai');
    //          }
            
    //       }, 3000);
    //    })
    

    // }

    // function remain(){
    // console.log('haleluyiia-1');
    // console.log('haleluyiia-2');
    // }

    // async function FINAL(){
    // try{
    //   const rr =  await myGreeting('i will run first');
    //   const rr2 = await myGreeting2('i will run first-2');
    //    remain();
    // }
    // catch(e){
    //    console.log(e);
    // }
    // }

    // FINAL();