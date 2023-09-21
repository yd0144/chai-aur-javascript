//1.JavaScript arrays are resizable and can contain a mix of different data types. 
//2.JavaScript arrays are zero-indexed
//3.JavaScript array-copy operations create shallow copies.
   //3.1 shallow copy-means it gives the same reference to the copy of array e.g a=[1,2,3,4]; b=a then a will give the same reference to b 
   //3.2 deep copy-means it will not give same reference to the copy of array
//4.array accessed using [] brackets e.g const a=[1,2,3,4] then a[0]

// array declartion 2 ways
//1st way
// let a=[1,2,3,4]

// //2nd way
// let b=new Array(1,2,4,7)
// console.log(typeof a);
// console.log(typeof b); //both metods declare array as object

//array length
let a=[1,3,"yogesh","dongare",12.33] 
// console.log(a.length); 
console.log(Object.keys(a));    //Object.keys(object name)  this method is used to  get array of keys when we take array as object then it will by default take string of number from 0 as keys
console.log(Object.values(a));    //Object.values(object name) this method is used to take array of values of objects
-