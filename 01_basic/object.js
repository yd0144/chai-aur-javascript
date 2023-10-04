//oject creation-we can create object with two ways 1.constructor 2.literal

//1.constructor
//Object.create()
//singleton

//2.literal
const sym=Symbol("at the rate")   //Here we created symbol for using this as key in object
// const obj={
//     name:"Yogesh",
//     [sym]:"at",
//     "full Name":"Yogesh Dongare",  //Here how we used symbol as key
//     age:24,
//     location:"Pune",
//     email:"yd@google.com",
// }
// console.log(obj.name);           // we can access the values of object using two ways one is using dot operator here we have not use double quots with key because it will automatically take it as string
// console.log(obj["full Name"]);   //Here we are taking another way to access value of object using square brackets but in this we have to use double quots to key otherwise it will give error
//console.log( obj[sym]);           //To access this we used in square bracket without double quots
//obj.name="yd"                       //Here how we change value of any element of object but if we want to do not change it then we use below method
// Object.freeze(obj)               //Here we used freeze method of object for freeze the object means we cannot change value of object it not given any error but it is not change
// obj.fun=function(){
//     console.log(`Hello buddy ${this.name}`);  //Here this keyword is used to referecing to current object.
//  }
// console.log(obj.fun);                //Here we are only referencing to this function not executing to execute use () with function name 
// console.log(obj.fun());    //Here we are executing the function

// const obj={
//     name:"yd",
//     age:24,
//     firstname:"yogi",
//     lastname:"dongare",
//     role:{
//         cmp:{
//             dept:"dev",
//             rmg:"reporter"

//         }
//     }
// }                    //this all is called as nested obect means object in object
// console.log(obj);

//1.constructor----singleton
// const obj1= new Object()      //here we created object with constructor
// obj1.id=123                   //here we added some properties
// obj1.name="yogesh"
// obj1.email="yogesh@google.com"
// // console.log(obj1);             //this obejct is also same as literal object
// const obj2={
//     id1:456,
//     name1:"dongare",
//     email:"dongare@google.com"
// console.log(obj2)
// console.log({obj1,obj2})    //This is also a way to combine two object in one object but here it will take 2 object as it is 
// // console.log(Object.assign({},obj1,obj2));      //Here is syntax of assign function Object.assign(target:{},object1,object2)  here we take target as empty object and then as many object to combine   Object.assign(target,source)  if we take it as Object.assign(obj1,obj2,obj3) then it will combine all object values and it will store it in obj1
// console.log({...obj1,...obj2});    //here we combine value of 2 object using spread operator.
//  const obj={
//     firstname:"yogesh",
//     lastname:"dongare",
//     age:24,
//     email:"yogesh@google.com",
//     isLoggedIn:"true"

// }
// console.log(Object.keys(obj));  //Here Object.keys(object name) is method is take input as object and return list of keys 
// console.log(Object.values(obj));  //Here Object.values(object name) is method is take input as object and return list of values
// console.log(Object.entries(obj));  // here is method also take input as object and return list of the lists of key values
// console.log(obj.hasOwnProperty('age'));  //this method is used to check whether entered property is present or not 

//object destructuring

// const obj={
//         firstname:"yogesh",
//         lastname:"dongare",
//         age:24,
//         email:"yogesh@google.com",
//         isLoggedIn:"true"
//     }
//    const {firstname:fN}=obj      //Here we destruture the object because every we not use objectname.property to access the property so we destructure the object and also we can give another name to that property and use it
//     console.log(fN);



// probelm statement: check wheter object is empty or non-empty
 const obj={
            firstname:"yogesh",
            lastname:"dongare",
            age:24,
            email:"yogesh@google.com",
            isLoggedIn:"true"
        }
//1st way
// function fun(check){
//     if(JSON.stringify(check)==="{}"){     //here we check wether our object is empty or not for that we use JSON.stringify() which return "{}" if our array is empty otherwise we take it to else block
//         return "empty"
//         }
//     else{
//         return "Non-empty"
//     }
// }
// a=fun(obj)
// console.log(a)

//2nd way
function fun(check){
    if(Object.keys(check).length===0){          //here  we take object.key() method to check length of keys if it will return 0 then that object is empty otherwise it is non empty
        return "empty"
        }
    else{
        return "Non-empty"
    }
}
a=fun(obj)
console.log(a)
