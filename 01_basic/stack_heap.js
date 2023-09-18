// we can store primitive data types in stack and when assign to another variable then we will pass copy of variable to another variable so 
// that when we change in another variable that change is not in 1st variable
// let a=10
// let b=a
// b=11
// console.log(a);
// console.log(b);  //Here we have re assign value to b  and it is only changed in b not in a because we send copy to b not reference 

// we can store non-primitive data types(reference) in heap and we can pass reference of variable to another variable so when we change one variable and when we assign that to another variable then it will also change

let obj={
    name:"yogesh",
    age:10,
    kam:"ASE"
}
let obj1=obj

console.log(obj1.name="prashant");
console.log(obj);                   //Here we can set name as yogesh but we assigned obj to obj1 so  when we change in obj1 then it will reflect in obj because we passed refernece so in obj and obj1 both have same name as prashant
console.log(obj1);