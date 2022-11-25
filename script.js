var arr=[
    {
         "name": "Johnwick",
         "age": "20"
      },
    {
         "name": "willsmith",
         "age": "21"
      },
     {
         "name": "Tomcruise",
         "age": "22"
      },
    {
         "name": "Hemsworth",
         "age": "23"
      }
 ];//JSON of array of objects with 2 key and values.

 console.log("for loop");

 for(var i = 0;i<arr.length;i++){
    console.log(arr[i].name,"-",arr[i].age);
}
console.log("for-in loop");

for(var j in arr){
    console.log(arr[j].name,"-",arr[j].age);
}

console.log("for of loop");

for(var k of arr){
    console.log(k.name,k.age);
}

// for loop
// script.js:23 Johnwick - 20
// script.js:23 willsmith - 21
// script.js:23 Tomcruise - 22
// script.js:23 Hemsworth - 23
// script.js:25 for-in loop
// script.js:28 Johnwick - 20
// script.js:28 willsmith - 21                      output for 1st question on console.
// script.js:28 Tomcruise - 22
// script.js:28 Hemsworth - 23
// script.js:31 for of loop
// script.js:34 Johnwick 20
// script.js:34 willsmith 21
// script.js:34 Tomcruise 22
// script.js:34 Hemsworth 23
//----------------------------------------------------------------------
//2nd question
var resume = {
    "Firstname": "Jayavel",
    "secondname": "Anandh",
    "Age": "21",
    "Gender": "Male",
    "qualifications" :["10th","12th","mechanical_FITTER"],
    "location" : "Tamilnadu",
    "Lanuages_speak" : ["Tamil","English","Telugu"],
    "Languages_write" : ["Tamil","English"],

}
console.log(resume);
// Age
// : 
// "21"
// Firstname
// : 
// "Jayavel"
// Gender
// : 
// "Male"
// Languages_write
// : 
// (2) ['Tamil', 'English']            output for 2nd question
// Lanuages_speak
// : 
// (3) ['Tamil', 'English', 'Telugu']
// location
// : 
// "Tamilnadu"
// qualifications
// : 
// (3) ['10th', '12th', 'mechanical_FITTER']
// secondname
// : 
// "Anandh"
// [[Prototype]]
// : 
// Object
