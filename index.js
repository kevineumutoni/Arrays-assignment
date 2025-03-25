//QUESTION 1

let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];

let lastElementArray1 = arr1[arr1.length - 1];
let lastElementArray2 = arr2[arr2.length - 1];

console.log(lastElementArray1); 
console.log(lastElementArray2); 

//QUESTION 2

//Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];

let myPets = ["Cow", "Bird", "Snake", "Dog"];
let newPets = myPets.join(",") 
console.log(newPets)

//QUESTION 3

////Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

arr3.sort(function(a, b) {
    return a - b;
});

console.log(arr3); 

//QUESTION 4
//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates



//QUESTION 5
////let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"

let arr = ["boy", "man", "girl","school","girl", "woman"]
if(arr.includes("food")){
    console.log("food")
}
else{
    console.log("word not found")
}

 //QUESTION 6

 //let arr5 = ["the", "way", "x", 4];

 let arr5 = ["the", "way", "x", 4];

if (arr5.includes("food")) {
    console.log("food");
} else {
    console.log("the search word was not found");
}

//QUESTION 7
//Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
let newWord = word.split("").reverse().join("")
console.log(newWord)

//QUESTION 8
//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
 // Initialize an array of fruits with length 10
// Initialize an array of fruits with length 10
let fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Mango", "Peach", "Cherry", "Strawberry", "Blueberry"];

// Insert 'Tomato' at the 5th index
fruits.splice(4, 0, 'Tomato');

console.log(fruits.length);




