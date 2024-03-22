// // array length
// var names = ['Ali', 'John', 'Smith'];
// var size = names.length;
// document.getElementById('size').innerHTML = size;
// // common separated
// var common =['Ali', 'John', 'Smith'];
// document.getElementById('common').innerHTML=common.toString();
// // join method
// var join =['Ali', 'John', 'Smith'];
// document.getElementById('join').innerHTML=join.join('*')
// // pop method
// var animals =['cat' , 'dog' , 'fox'];
// document.getElementById('pop').innerHTML=animals;
// animals.pop();
// document.getElementById('pop').innerHTML=animals;
// // push method
// var menu =['biryani' ,'kabab' , 'salad' , 'soup']
// document.getElementById('push').innerHTML=menu.push('korma')
// document.getElementById('push').innerHTML=menu;
// // shift method 
// var fruits =['Apple' , 'Banana' , 'Orange' ,'Peach']
// document.getElementById('shift').innerHTML=fruits;
// fruits.shift()
// document.getElementById('shift').innerHTML=fruits
// // unshift
// var meat =['beef' ,'chicken'];
// document.getElementById('unshift').innerHTML=meat;
// meat.unshift('fish');
// document.getElementById('unshift').innerHTML=meat;


// $(document).ready(function () {
//     $("#exampleModal").draggable({
//         handle: ".modal-header" // The element used as the drag handle
//     });
// });  
$(function () {
  $("#exampleModal").draggable({
    handle: ".modal-header" // The element used as the drag handle
  });
});
// $(document).ready(function () {
//     $('#exampleModal').find('.modal-dialog:first').draggable().css({
//         "position": "absolute",
//         "top": "25%",
//         "left": "37.5%"
//     });

//     $('#exampleModal').find('.modal-dialog:first').draggable({
//         scroll: false,          
//         start: function (e) {
//             const draggable = $(this)[0];
//             const contentResizable = draggable;

//             const paddingHeight = 30;
//             const scrollTop = $(window).scrollTop();
//             const scrollLeft = $(window).scrollLeft();

//             const top = scrollTop - paddingHeight;
//             const right = $(window).width() - contentResizable.offsetWidth;
//             const bottom = scrollTop + $(window).height()- paddingHeight - contentResizable.offsetHeight;

//             $(this).draggable({
//                 containment: [scrollLeft, top, scrollLeft + right, bottom]
//             })
//         }
//     });
// });

// Length Of String
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = text.length;
// Extracting String Parts
// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)
/* JavaScript String slice()*/
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let data = "Apple,Banana,Kiwi";
let newData = data.slice(6, 12);
document.getElementById('demo1').innerHTML = newData;
let data1 = "Apple,Banana,Kiwi";
let newData1 = data1.slice(7);
document.getElementById('demo2').innerHTML = newData1;
let pets = "Cat,Dog,Parrot";
let newPets = pets.slice(-10, -6);
document.getElementById('demo3').innerHTML = newPets;
/* JavaScript String substring() */
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let data2 = "Apple,Banana,Kiwi";
let newData2 = data.substring(6, 12);
document.getElementById('demo7').innerHTML = newData2;
/* JavaScript String Search*/
// Indexof
const para = "i am good";
const newPara = para.indexOf('good');
document.getElementById('find').innerHTML = newPara;
// lastindexof
const para1 = "i am good";
const newPara1 = para.indexOf('good');
document.getElementById('find1').innerHTML = newPara1;
// Search
let text1 = "Please locate where 'locate' occurs!";
let index = text1.search("locate");
document.getElementById("demo11").innerHTML = index;
/* JavaScript Array Methods*/
// length
const fruits = ['Banana', 'Apple', 'kiwi', 'Mango']
const size = fruits.length
document.getElementById('length').innerHTML = size;
// Pop
const fruits1 = ['Banana', 'Apple', 'kiwi', 'Mango']
fruits.pop()
document.getElementById('length').innerHTML = fruits;
// push
const items = ['laptop', 'computer', 'mobile'];
items.push('airPods');
document.getElementById('push').innerHTML = items;
// shift
const item = ['laptop', 'computer', 'mobile'];
item.shift();
document.getElementById('push1').innerHTML = item;
// unshift
const item1 = ['laptop', 'computer', 'mobile'];
item1.unshift('airPod');
document.getElementById('push11').innerHTML = item1;
// sort
var x = ['doll', 'ball', 'cat', 'king']
x.sort()
document.getElementById('sort').innerHTML = x;
// if and Else 
var age = 25
if (age >= 25) {
  console.log("hello");
}
else {
  console.log("hello1");
}
// switch
let animals = 'cow';
switch (animals) {
  case 'dog':
    console.log('dog');
  case 'cat':
    console.log('cat');
  case 'parrot':
    console.log('parrot');
  case 'cow':
    console.log('cow');
  default:
    console.log('none of this');
}
// For Each Loop
var car = ['volvo', 'bmw', 'audi', 'tesla', 'saab']
var textCar = "";
for (let i = 0; i < car.length; i++) {
  textCar += car[i] + "<br>";
}
document.getElementById("demo12344").innerHTML = textCar;
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;
  // some code (try to change x to 5)
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
myPromise.then(
  function (value) { myDisplayer(value); },
  function (error) { myDisplayer(error); }
);
// function
let z = myFunction(2, 5);
document.getElementById('plusNumber').innerHTML = z;
function myFunction(a, b) {
  return a + b;
}
// slice
let dish = "Biryani , Korma , Kabab , Pasta , Kheer"
let newDish = dish.slice(0, 6)
document.getElementById('newDishName').innerHTML = newDish;
// Array Method
length
var car = ['cra1', 'car2', 'car3'];
car.pop();
document.getElementById('car').innerHTML = car;
// if an Else Condition
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo31").innerHTML = greeting;
switch (new Date().getDay()) {
  case 0:
    day = 'saturday';
    break;
  case 1:
    day = 'sunday';
    break;
  case 2:
    day = 'monday';
    break;
  case 3:
    day = 'tuesday';
    break;
  case 4:
    day = 'wednesday';
    break;
  case 5:
    day = 'thursday';
    break;
  case 6:
    day = 'friday';
    break
}
document.getElementById('demo90').innerHTML = "Today is " + day;
// function sayHi(){
//   alert('Hey')
// }
// setTimeout(sayHi,1000)

// function slow(x) {
//   // there can be a heavy CPU-intensive job here
//   alert(`Called with ${x}`);
//   return x;
// }
function myDisplay(some) {
  document.getElementById("text").innerHTML = some;
}
function myCal(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let result = myCal(1, 8);
myDisplay(result);

// Map , Filter and Reduce function
// Array Map Method
let array = [12, 23, 44, 56, 14]
let a = array.map((value, index, array) => {
  console.log(value, index, array)
  return value + 1;
})
console.log(a);
// Array Filter Method
let array1 = [10, 20, 30, 40, 50, 60]
let b = array1.filter((value) => {
  return value > 10
})
console.log(b);

// Array Reduce Method

let array2 = [1, 3, 4, 6, 7, 8];
let c = array2.reduce((h1, h2) => {
  return h1 - h2
})
console.log(c);

// JSON PARSE
// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.


const txt = '{"name":"John", "age":30, "city":"New York"}'
const txt1 = JSON.parse(txt)
document.getElementById('demo901').innerHTML = txt1.name + "," + txt1.age;

// JSON Stringify

const txt11 = { name: "John", age: "30", city: "New York" }
const txt12 = JSON.stringify(txt11)
document.getElementById('demo90000').innerHTML = txt12;

let value = "Madam";
const revValue = () => {
  let myReValue = value.toString().split("").reverse().join("");
  let myStrVal = value.toString();
  if (myStrVal == myReValue) {
    console.log('Palindrome');
  } else{
    console.log('Not Palindrome');
  } 
};
revValue();



// test Script 
// Palindrome Program 
let palindrome = "madam";
const palindromefunction = () => {
    let palindromeText = palindrome.toString("").split("").reverse("").join("")
    if (palindromeText === palindrome) {
        console.log('madam is palindrome');
    } else {
        console.log('madam is not a palindrome');
    }
}
palindromefunction();
// prime Number 
function primeNum(num) {
    if (num <= 1);
    return false;
    for (let i = 2; i < num; i++)
        if (num % i == 0) {
            return false
        }
    return true
}
primeNum(40) ? console.log('40 is a prime Number') : console.log('40 is not a prime Number');
// factorial 
function myFunction(num) {
    if (num <= 1) {
        return false;
    }

    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            return false;
        }
    }

    return true;
}

myFunction(4) ? console.log("is a primeNumber") : console.log("is not a primeNumber");



