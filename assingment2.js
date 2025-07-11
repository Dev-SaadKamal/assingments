// chapter20
// let firstNames = ["Lil", "Big"];
// let lastNames = ["Zzz", "Boom"];

// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     console.log(firstNames[i] + " " + lastNames[j]);
//   }
// }

// // If outer loop = 3 times and inner = 2 times, total inner iterations = 3 × 2 = 6.
// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     if (i !== j) {
//       console.log(firstNames[i] + " " + lastNames[j]);
//     }
//   }
// }

// chapter21
// let userInput = prompt("Enter a word:");
// let lower=userInput.toLowerCase()
// console.log(lower);

// let city = prompt("Enter your city:").toUpperCase();
// if (city === "KARACHI") {
//   alert("Welcome to Karachi!");
// }

// Changing case is important User inputs vary (e.g., “karachi”, “KARACHI”, “Karachi”) — changing case ensures consistent comparison.

// chapter 22

// let str = "JavaScriptRocks";
// console.log(str.slice(0, 5));  

// let input = prompt("Enter a string:");
// console.log(input.charAt(input.length - 1));

// let fullName = prompt("Enter your full name:");
// alert("Length: " + fullName.length);

// chapter 23
// let sentence = "The lazy dog sleeps.";
// console.log(sentence.indexOf("dog"));  

// let text = prompt("Say something:");
// if (text.toLowerCase().indexOf("hello") !== -1) {
//   alert("Hello detected!");
// }

// it return -1 

// chapter 24
// let word = "JavaScript";
// console.log(word.charAt(4));  

// let str = prompt("Enter a word:");
// let pos = +prompt("Enter position:");
// alert(str.charAt(pos));

// let name = "Ali";
// console.log(name.charAt(10));

// chapter25
// let text = "This is a bad example.";
// console.log(text.replace("bad", "good"));

// let sentence = "I love JS. JS is great!";
// console.log(sentence.replace(/JS/g, "JavaScript"));

// let message = "Hello, NAME";
// let userName = prompt("Enter your name:");
// console.log(message.replace("NAME", userName));

// chapter26
console.log(Math.round(2.6));  
console.log(Math.floor(2.6));  
console.log(Math.ceil(2.6));   

// let num = +prompt("Enter a number:");
// console.log(Math.round(num));

console.log(Math.floor(-2.9));  
console.log(Math.ceil(-2.9));  
// Math.floor always goes down, even for negatives.
// Math.ceil goes up, toward 0 for negatives.     

// chapter 27
// let a = Math.random()*6
// a = Math.ceil(a)
// console.log(a)


// let b = Math.random()
// b=Math.round(a)
// console.log(a)

// if(b == 1){
//     console.log("Heads")
// }else{
//     console.log("Tails")
// }

// let password = Math.round(Math.random() * 9000) + 1000;
// console.log(password);

// chapter 28
let str = "45.67";
let num = parseFloat(str);
console.log(num);

console.log(parseInt("123px"));  

console.log(parseInt("abc"));  

// chapter29
let a = 123;
let b = a.toString();
console.log(typeof b);  

let c = "2025";
console.log(Number(c) + 10);  

console.log(parseInt("10.5"));   
console.log(Number("10.5"));     

// chapter30
let num_deci = 163.45678;
console.log(num.toFixed(2));  

let result = Number("12.999").toFixed(1);
console.log(result);

// let input = +prompt("Enter a decimal:");
// alert(input.toFixed(3));
 
// chapter31
let date=new Date()
console.log(date)

let now = new Date();
console.log(now.getFullYear());

let hour = new Date().getHours();
if (hour < 12) {
  alert("Good Morning");
} else {
  alert("Good Afternoon");
}

// chapter32
let d = new Date()
console.log(d.getDay())
console.log(d.getMonth() + 1)
console.log(d.getFullYear())

let date1 = new Date();
console.log(now.getHours() + ":" + now.getMinutes());

let clock = new Date;
let hours=clock.getHours()
let minutes = clock.getMinutes()

console.log(`${hours}:${minutes}`)
















