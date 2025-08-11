console.log("welcome saad boy")
console.log("welcome saad boy")
function todeg(fer) {
    return (95/5) * (fer+10);
}
let a = todeg(3)
console.log(a)
let b = "saad"
console.log(b)
const w = ["saad",18,"pakistani"]
console.log(typeof w)
let age = 28
        if (age >= 18 && age <= 60) {
            document.getElementById("demo").innerHTML = "can drive :"+ age;
        }
        else {
             document.getElementById("demo").innerHTML = "can not drive :" + age;
        }
      let char = ["doom", "kang", "thanos","galactus", "ghost","lex"]
       let text = ""
      for (let i=0; i < char.length; i++) {
        text += char[i] + "<br>"
      }
      document.getElementById("demo").innerHTML = text;

      const lis = {name:"saad", age:18, religion:"muslim", school:"kps"}
       let txt = ""
      for (let x in lis) {
        txt += lis[x] + "<br>"
      }
      document.getElementById("demo2").innerHTML = txt;

      const numbers = [45, 4, 9, 16, 25];

      let txt2 = "<ul>";
      numbers.forEach(myFunction);
      document.getElementById("demo3").innerHTML = txt2;

      function myFunction(value) {
        txt2 += "<li>" + value + "</li>" ; 
        txt2 += "</ul>"
      }
       let txt3=""
      let fruits = ['Apple', 'Banana', 'Orange'];
        for (let x of fruits) {
        txt3 += x +"<br>"
      }
      document.getElementById("demo4").innerHTML = txt3;
      let text4 = "";
      let i = 1;
      while (i < 11) {
        text4 +="8 x "+ i +" = "+ i*8 +"<br>" ;
        i++;
      }
      document.getElementById("demo5").innerHTML = text4;
function openNewPopup() {
  // Define the URL to load in the new window (can be an empty string for a blank window)
  const url = ""; // Or "" for a blank window

  // Define the name of the new window (can be used to target existing windows)
  const name = "myPopup";

  // Define window parameters (size, position, features)
  const params = "width=600,height=400,left=100,top=100,resizable=yes,scrollbars=yes";

  // Open the new window
  const newWindow = window.open(url, name, params);

  // Optional: Focus the new window if it opened successfully
  if (newWindow) {
    newWindow.focus();
  }
}
//for in loop in containing the index of array thats why we are accessing the index of array
//and for of loop is containing the value of index which can be accessed directly
let num = prompt("enter any number")
let x = num/5
if (isNaN(num)) {
  console.log("enter a number");
}
else if(num%5 === 0) {                  
      console.log("entered number is divisible by 5");
      console.log(`${x} is the answer`);

    }

else {
  console.log("entered number is not divisible by 5");
      console.log(`${x} is the answer`);
}

let result = prompt("enter your result :");
let score; 

if (result >= 85 && result<= 100) {
  console.log("your grade is A");
}
else if (result >= 70 && result<= 84) {
  console.log("your grade is B");
}
else if (result >=55 && result<=69){
  console.log("your grade is C")
}
else if (result >=40 && result<=54){
  console.log("your grade is D")
}
else {
  console.log("your grade is F")
}


 let arr = [10,20,30,40,50,60]
 let iterator = arr[Symbol.iterator]();

 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())

 const fruit = new Map([
  ["apples", "red"],
  ["mangoes", "yellow"],
  ["oranges", "orange"],
 ])
 let numb = fruit.get("mangoes");
 document.getElementById("demo6").innerHTML = "mangoes are "+ numb;

const myIterable = {
  [Symbol.iterator]() {//written [symbol.iterator](is a function) so that it can become an iterator
    let i = 2;
    return {
      next() {
        if (i < 7) {
          return { value: i++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const value of myIterable) {
  console.log(value); // 0, 1, 2
}
