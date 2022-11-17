// This keyword in js


// 1> when there is function inside a object then this  =  that object 
// const myObj = {
//     title: 'games',
    
//     play : function() {
//         console.log(this);
//     }
// }

// console.log(myObj.play());
//output = { title: 'games', play: [Function: play] }




// 2> when there is seperate alone function this = global window object
// const play = function(){
//     console.log(this);
// }
// console.log(play());




//3.> when there is constructor function then this refers to new object / what ever you passed during making

//  function Play(title) {

//         this.name = title;         //2 and here we are adding name property in that empty object

//         console.log(this);

// }

// const make = new Play('games');  // 1 this will make an empty object 




//4.>  always remember the function witch is passed as a callback fuction is always return global window object on printing this....
// unless and untill we pass second argument this to get him realise please consider this as actuall this object




// 5.> prototype

//Every object in JavaScript has a built-in property, which is called its prototype.

//  function Play(title) {

//         this.name = title;         //2 and here we are adding name property in that empty object

//         console.log(this);

// }

// const make = new Play('games');

// // make.gender = "male"  //we can write this 

// // Play.gender =  "males"  //we can not do this while using constructor function 

// Play.prototype.gender = "male"  //we have to use prototyoe to add method to object constructor
 
//   console.log(make.gender);

// !!!!! Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.





// const myObject = {

//   name : " teji",
//   class : "12"
// }
// const object1 = Object.create(myObject);


// console.log(  Object.getPrototypeOf(object1))