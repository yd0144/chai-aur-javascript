//There are some ways to declare string in JS
//1st way
//  let str="yogesh"
 

// console.log(str);

//2nd way
// const str2=new String("yogesh")
// console.log(str2);
      //*********string() constructor****
// const a = new String("Hello world") //Here we are created a object from String() constructor a is not any variable it is object 
//  console.log(a);
//  console.log(typeof a);

// ****************String() function()***********
// const str=String('yogesh') //here we have created str variable of type string 
// console.log(str);
// console.log(typeof str);

// //string interpolation means we can display string with another way
// let str="yogesh"
// let cmp="tcs"
// let exp=1
// console.log(`Hello everyone i am ${str} and i am in ${cmp} from last ${exp} year`);

//*************************************************String methods****************************
//1-anchor: ƒ anchor()
//2-at: ƒ at()
//3-big: ƒ big()
//4-blink: ƒ blink()
//5-bold: ƒ bold()
//6-charAt: ƒ charAt()
//7-charCodeAt: ƒ charCodeAt()
//8-codePointAt: ƒ codePointAt()
//9-concat: ƒ concat()
//10-constructor: ƒ String()
//11-endsWith: ƒ endsWith()
//12-fixed: ƒ fixed()
//13-fontcolor: ƒ fontcolor()
//14-fontsize: ƒ fontsize()
//15-includes: ƒ includes()
//16-indexOf: ƒ indexOf()
//17-isWellFormed: ƒ isWellFormed()
//18-italics: ƒ italics()
//19-lastIndexOf: ƒ lastIndexOf()
//length
//20-link: ƒ link()
//21-localeCompare: ƒ localeCompare()
//22-match: ƒ match()
//23-matchAll: ƒ matchAll()
//24-normalize: ƒ normalize()
//25-padEnd: ƒ padEnd()
//26-padStart: ƒ padStart()
//27-repeat: ƒ repeat()
//28-replace: ƒ replace()
//29-replaceAll: ƒ replaceAll()
//30-search: ƒ search()
//31-slice: ƒ slice()
//32-small: ƒ small()
//33-split: ƒ split()
//34-startsWith: ƒ startsWith()
//35-strike: ƒ strike()
//36-sub: ƒ sub()  //Deprecated Though some browsers might still support it, it may have already been removed from the relevant web standards
//37-substr: ƒ substr()
//38-substring: ƒ substring()
//39-sup: ƒ sup()
//40-toLocaleLowerCase: ƒ toLocaleLowerCase()
//41-toLocaleUpperCase: ƒ toLocaleUpperCase()
//41-toLowerCase: ƒ toLowerCase()
//42-toString: ƒ toString()
//43-toUpperCase: ƒ toUpperCase()
//44-toWellFormed: ƒ toWellFormed()
//45-trim: ƒ trim()
//46-trimEnd: ƒ trimEnd()
//47-trimRight: ƒ trimRight()
//48-trimStart: ƒ trimStart()
//49-valueOf: ƒ valueOf()
//50-Symbol(Symbol.iterator)
// let str="Yogesh Dongare"
//*********************** endswith() *********************
// console.log(str.endsWith('Dongare')); //endswith() this method is used to check string ends with our string or not and it return true or false as result
// console.log(str.endsWith('sh',6));    //in this line we take to parameters in enswith() method and that are string to be search and one is the last of character of our
                                    // string and it make that string is to be for this search as main string and then it will see for endswith method so that it will return true in output
                                    //Here we take 6 means we take substring as 0-6 and then checks for endswith character


//********************************** indexof() ********************
// console.log(str.indexOf('Dongare'));    //indexof()  This method is case-sensitivity this method is used to find index of given character if that character or string is not present then it will return -1 
// console.log(str.indexOf("")); //when we pass empty string then it will take 0 index as index of empty string
// console.log(str.indexOf('Dongare',4)); //here we take 4 as starting point as substring means it will take substring starting from 4th index and check the index of string but it will take the index from 0 index

//This program is for finding occurance of any character in string  
// const str = "To be, or not to be, that is the question.";
// let count = 0;
// let position = str.indexOf("e");

// while (position !== -1) {
//   count++;
//   position = str.indexOf("e", position + 1);
// }

// console.log(count); 

// ***************************** trim *****************
// let str="        yogesh dongare     "
//console.log(str.trim()); //trim() this method is used to remove space from starting and end of string.
// console.log(str.trimEnd());   //trimend() this metnod is used to remove space from end of string
// console.log(str.trimStart()); //trimstart() tgis method is used to remove space from start of string

//********************************* charAt() ******************
// let str="Yogesh Dongare"
// console.log(str.charAt(15)); //charAt this method is used to find character at given index when we not pass any index then it will take 0 automatically

//*****************************replace() ****************************

// let url="https//www.google.com$wfvujfbmsf663"
// let re="Wfvujfbmsf663"
// let repl="$mhbdfjdb10"
// console.log(url.replace(re,repl));   //replace() this mmethod is used to replace something with new string .1st parameter is which part from string is to replace and 2nd parameter is with what it get replaced 

// ***************** split() ***************************
// let str="Hello-foks-i-am-yogesh "
// console.log(str.split('-'));    //split() this method is used to split our string into array with given symbol like - means when our string contains any - in string then it will take as one element of array 
// console.log(str.split());   // when we are not giving any split symbol then it will take whole string as one element
//  console.log(str.split(""));   it will split our whole string into single element because we are given it as ""

// const sym = Symbol("example");
// console.log(String(sym));
// console.log(`Here we are trying to add symbol ${sym}`); //Here we are trying to add symbol in string but we cannot do this 1st we have to convert this symbol to strng and then we have to add this to our string like above

// *****************************includes() ***********
// let str="hello foks what are you doing!"
// console.log(str.includes('foks',9));   //includes() this method is return true if in contains given string otherwise it will return false and it has another 1 parameter and it is The position within the string at 
                                        //   which to begin searching for searchString. (Defaults to 0)

// *********************************** slice() *********
// let str="Hello foks i am yogesh"
// console.log(str.slice(6));  // this method is used to sub string with given index if 
                            //1.slice contain single index then that index is starting index of string and take it up to last  
                            //2.slice contain two index then 1st index is starting index of string and 2nd index is last index of string
                            //3.slice contain -ve value then take it from last  note:we are always reach to string from left to right


//*************************** toUpperCase() *****
// let str="Yogesh"
// console.log(str.toUpperCase());  //toUpperCase() this method is used to convert our string into uppercase if any letter in string is already in uppercase then it will take as it in uppercase

// *********************** toLowerCase() ******
let str="Yogesh"
console.log(str.toLowerCase());  //toLowerCase() this method is used to convert our string into lowercase if any letter in string is already in lowercase then it will take as it in lowercase

