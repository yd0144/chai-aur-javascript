// function add(n1,n2){
//     const a=n1+n2       //we can take result in another variable or can directly get it with return
//     return a
//    // return n1+n2
//     console.log("hello");     //Here after return if we write anything then it will not execute because it stop after return
// }
// const a=add(1,4)             //if function return anything then we will store it in variable  
// console.log(a);

// function isLoggedIn(username="sam"){        //Here we take username as sam but when we pass through function then that value is override with passed  value from function call
//     if(!username) { 
//     return `${username} is logged in`
//     }
// }
// const a=isLoggedIn()      //if we not passed any value to function it will take it as undefined which equal to false also
// console.log(a);

//Rest operator----used for taking multiple value and convert it in array and save it 
// function rest(n1,n2,...n3){  //Here we have added after 1st two values rest of all values in array and store it in n3 variable
//     console.log(n3);
// }
// rest(1,2,3,4,5,6)

// How the Rest Operator Works in a Destructuring Assignment----
// const [firstName, lastName, ...otherInfo] = [                     //Here we are destructuring the array and after that we  
//     "Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"   
//   ];
//   console.log(otherInfo);    //here in destructure we use rest operator it behave like normal rest operator means it will take array of rest elements in array 

// const { firstName, lastName, ...otherInfo } = {   //here we destructure the array and use rest operator but it will not take in array it will take object of that rest element
//     firstName: "Oluwatobi",
//     lastName: "Sofela", 
//     companyName: "CodeSweetly",
//     profession: "Web Developer",
//     gender: "Male"
//   }
//   console.log(otherInfo);


