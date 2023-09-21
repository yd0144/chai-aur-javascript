//there are 2 ways to declare number
//1st way 
// let num=10
// console.log(num);
//2nd way
// let num1=new Number(25)
// console.log(num1);
// console.log(typeof num);
// console.log(typeof num1);

// +++++++++++++++++++++++++ Number methods ++++++++++++++++++++=
// 1-constructor: ƒ Number()
// 2-toExponential: ƒ toExponential()
// 3-toFixed: ƒ toFixed()
// 4-toLocaleString: ƒ toLocaleString()
// 5-toPrecision: ƒ toPrecision()
// 6-toString: ƒ toString()
// 7-valueOf: ƒ valueOf()


// 1-constructor: ƒ Number()
// let a=new Number(100)
// console.log(a) // Here   a===100 is not true becausea InstanceOf Number

// 2-toExponential: ƒ toExponential()


// 3-toFixed: ƒ toFixed()
// let a=new Number(2000.1264)
// console.log(a.toFixed(2));  //tofixed this method is used to take how many digits after decimal point if our number does not have any digit after decimal then it take 0 after decimal. and roundof the remaining number


// 4-toLocaleString: ƒ toLocaleString()
// let a=1028849
// console.log(a.toLocaleString());   //this will make our nmber in , separated with number system by default it take as USA 
// console.log(a.toLocaleString("en-IN"));   // India uses thousands/lakh/crore separators
                                  
// 5-toPrecision: ƒ toPrecision()
// let a=102840
// console.log(a.toPrecision()); //The toPrecision() method of Number values returns a string representing this number to the specified precision.
                                 //this method is used to take how many digit ot number is to take if we not specify then it will take whole number to print
                                 
//6-toString: ƒ toString()
// let a= 1067
// console.log(typeof(a.toString()));  //Tostring() this method is used to make our number in string
// console.log(typeof a);


// ************************ Math object and its methods****************

//Math is working with only number not with bigint.Math object does not have constructor unlike other object like String,number,array etc All properties and methods of Math are static.

// 1.Math.abs()
// 2.Math.ceil()
// 3.Math.floor()
// 4.Math.max()
// 5.Math.min()
// 6.Math.pow()
// 7.Math.round()
// 8.Math.sign()
// 9.Math.sqrt()
// 10.Math.random()


// 1.Math.abs()
// let a=-12930
// console.log(Math.abs(a));    //This Math.abs() method is used to get only absolute value means if it is -ve then it will take as +ve and if it is +ve then it will take as it is

// 2.Math.ceil()
// let a=290.4849
// console.log(Math.ceil(a));   //Math.ceil() this method is used to take ceiling of number means round number with upper like 290 it will take 291 after decimal it is 4 then also it will take to next number.

// 3.Math.floor()
// let a=290.6849
// console.log(Math.floor(a));    // Math.floor() this method is used to take floor of number means round number with lower like 290 it will take 290 after decimal it is 6 then also it will take to same number.


// 4.Math.max()
// console.log(Math.max(1,2,69,102,5)); // math.max() this method is used to find maximum number between many numbers.

// 5.Math.min()
// console.log(Math.min(1,2,69,102,5)); // math.min() this method is used to find minimum number between many numbers.

// 6.Math.pow()
// let a=5
// console.log(Math.pow(a,3));   // Math.pow() this method is used to take number to power means here in example we take 5 as number and 3 as power meas we take it as 5*5*5*

//7.Math.round()
// let a=192.289
// let b=192.590
// console.log(Math.round(a))      //Math.round() Here we take number and round that number if digit after decimal is more than 5 then it will take as next number otherwise we take it to lower number
// console.log(Math.round(b));  

// 8.Math.sign() 
// let a=-20
// console.log(Math.sign(a));    //Math.sign() this method is used to check whether number is -ve then it will return -1 if number is +ve then it will return 1 and if number is 0 then it will return 0

// 9.Math.sqrt()
// let a=225 
// console.log(Math.sqrt(a));      // Math.sqrt() this method is used to find square root of given number

// 10.Math.random()
// console.log(Math.random());    //Math.random() this method is used to take any random nunber but it will take random number by default from 0 to 1 we want to take random number in our range then we have to use below formula
// let min=11
// let max=24
// console.log(Math.floor(Math.random()*(max-min+1)+min));  //this formula is used to find random number between given range.