class Account {
    constructor(Acc_no) {
        this.Acc_no = Acc_no;
    }
    show() {
        return "my Account number is "+this.Acc_no;
    }
}
class Password extends Account {
     constructor(Acc_no,Pass) {
     super(Acc_no) 
        this.Pass = Pass;
     }
     hidden() {
        return this.Acc_no + " Account password is " + this.Pass;
     }
}
myAcc = new Password("Saad Muddaser",123456)
console.log(myAcc.show())

// let arr = ["saad", "hamza", 'hassan', 'taha', 'zain'];
// let arr2 = [1,2,3,4,5];
// function calcSqr(x) {
//   console.log(x*x);
// }
// let calcSquare = (numx) => {
//   console.log(numx*numx);
// }
// arr2.forEach(calcSquare);

// arr.forEach((val,idx) => {
//   console.log(val,idx)
// });
// arr.map((numn) => {
//   console.log(numn)
// });
// let evenArray = [1,2,3,4,5,6,7,8,9,10];
// let even = evenArray.filter((val) => {
//   return (val % 2 === 0)
// });
// console.log(even)

// let red = evenArray.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(red)
// let big = evenArray.reduce((res, curr) => {
//   return res > curr ? res : curr;
// });
// console.log(big)

// let stuMarks = [67, 90,87,39,92,96]

// let checkPos = stuMarks.filter((val) => {
//   return val >= 90;
// })
// console.log(checkPos)

// let prop = prompt("enter any number :");
// let emptyArray = [];
//   for (let i = 1;i <= prop;i++) {
//     emptyArray[i-1]=i;
//   }

// console.log(emptyArray)
// let sum = emptyArray.reduce((res, curr) => {
//   return res + curr;
// })
// console.log(sum)
// let prod = emptyArray.reduce((res, curr) => {
//   return res * curr;
// })
// console.log(prod)
// function Time(time) {
//     let d = new Date()
//     let txt = d.toLocaleTimeString();
//     if (time === txt.toString().padStart) {
//         console.log("it matches the time")
//     } else {
//         console.log("not a match")
//     }
//     return d.toLocaleTimeString();
// }
// let val = Time("11:05")
// console.log(val)


// const d = new Date();
// let nowtime = d.toLocaleTimeString();
// console.log(nowtime)

// const checkTime = (num) => {
//     num.toString().padStart(4,"0")}
//     const hour = d.getHours();
//     const mins = d.getMinutes();
    
//     const fix_time = `${hour}:${mins}`;
//     // fix_time.padStart(4,"0")
//     if (num === fix_time) {
//         console.log("alarm, wake up")
//     } else {
//         console.log("be ready")
//     }
//     console.log(num," & ",fix_time)

//  const chk = checkTime("11:09");
//  console.log(chk)


// const start = "start";
// console.log(start);
// setTimeout (() => {
//     console.log("run after 3 seconds");
//     console.log(stop);
// }, 3000);
// const stop = "stop";


// let timeoutId = setTimeout(() => {
//   console.log("Will not run");
// }, 5000);


// const now = new Date();

// const time = now.toLocaleTimeString(); // Locale-based time format
// console.log(time);

// const pad = (num) => num.toString().padStart(2, '0');

// const h = pad(now.getHours());
// const m = pad(now.getMinutes());
// const s = pad(now.getSeconds());

// console.log(`${h}:${m}:${s}`);


// const now1 = new Date();

// const time2 = now1.toLocaleTimeString(); // Locale-based time format
// console.log(time2);
// const pad3 = (n) => n.padStart(3, "0");

// let hours = now1.getHours();    // "07"
// let minutes = now1.getMinutes();
// let seconds = now1.getSeconds();  // "04"
 
// let fixTime = `${hours}:${minutes}:${seconds}`;
// console.log(fixTime.padStart(3,"0"));

// console.log(pad3("11:08:56"))  // "07:04"

// const call = (no) => no.toString().padStart(2,"0");
// const num1 = call(2);
// const num2 = call(5);
// console.log(`${num1}:${num2}`)
// // const get= new Date();
// // const getTime = get.toLocaleTimeString();
// // console.log(getTime)
// const callAgain = (getTime) => getTime.toString().padStart(4,"7");
// let value = callAgain(Date.toLocaleTimeString)
// console.log(value)


// const currentIndex = 0;

// function updateSlide() {
//     const slider = document.getElementById("slider");
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

//   function nextSlide() {
//     const totalSlides = document.querySelectorAll('.slide').length;
//     if (currentIndex < totalSlides - 1) {
//       currentIndex++;
//       updateSlide();
//     }
//   }

//   function prevSlide() {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateSlide();
//     }
//   }

// function Toggle() {
//   const body = document.getElementById("para");
//   body.classList.toggle("show")
// }

// focus,button,popup search bar,setTimeout

//question 1
function numToStr(num) {
  if(isNaN(num)) {
    console.log("enter a number");
  }
  else {
    console.log(num.toString());
    console.log(typeof(num))
  }
}
let no = 54;
console.log(typeof(no.toString()))
numToStr("75");

//question 2
let array = [];
let idx = 0;
let str = "saadurrehman"
function ReturnArray(x, n) {
  for(let i=0;i <= n;i += x) {
    // console.log(i);
    array[idx] = i;
    idx++;
  }
  // array.from({length:n});
}
ReturnArray(2, 10);
console.log(array);
console.log(array.length);


function multiples(x, n) {
  return Array.from({ length: n }, (a, i) => x * (i + 1));
}

// Example usage:
console.log(multiples(12, 5)); // [3, 6, 9, 12, 15]
console.log(multiples(2, 4)); // [2, 4, 6, 8]

//question 3
let marks = [98 ,76 ,75 ,86 ,89 ,68 ,82]
let marks2 =[1,2,3,4,5]
let myScore = 90;
function calcAvg(num) {
  let score = 1;
  for(let i = 1;i < num.length ; i++) {
    let res = score += i;
    let avg = res/num.length;
    return res;
  }
}
let scr = calcAvg(marks);
console.log(scr);

function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num.length; i++) {
    result += i;
  }
  return result;
}

// let fact = factorial(marks);
// console.log(fact);

function calcSum(num) {
  let sum = 0;
  for(let i=0;i<num.length;i++) {
    sum += num[i];
  }
  let avg = sum / num.length;
  // return avg;
  if(myScore > avg) {
    console.log(`you are better than average students ${myScore}`);
    console.log(`average score is ${avg}`);
    return true
  }
  else {
    console.log("you are lower than an average student");
    return false
  }
}
let sum2 = calcSum(marks);
console.log(sum2);

//question 4
let sheep = 5;
let sheeparr = [];
function countSheep() {

  for(let i=1;i <= sheep;i++) {
    console.log(`${i} sheep...`)
  }
 
}
countSheep()

//question 5
let Array2 = [2,4,6]
function sqrSum(arr) {
  let sum = 0;
  for(let i=0;i < arr.length;i++) {
    sum += arr[i]**2;
  }
  return sum;
}
let Array_2 = sqrSum(Array2);
console.log(Array_2)

//question 6
let int = 9;
function double() {
  return int+=int;
}

let dbl = double()
console.log(dbl)

//question 7 
let somenumber = "97532";
let numArray = [];
function reverse(some) {
  for(let i of some) {
    numArray.push(i)
  }
}
reverse(somenumber)
console.log(numArray.reverse())

//question 8
let num3 = -68;
if(num3 > 0) {
  console.log(`-${num3}`);
}
if(num3 < 0) {

  console.log(num3.toString().replace('-', ''))
}

//question 8
let mixArray = [2,'4',6,'8',10,'12','15',3];
function mixSum(mixArray) {
  let sum = 0;
  mixArray.toString();
  for(let i=0;i<mixArray.length;i++) {
    sum += Number(mixArray[i]);
  }
  return sum;
}
let Array_3 = mixSum(mixArray);
console.log(Array_3)
console.log(Number(2+7+'5'+'8'+9+'12'+15))

//question 9 

function calcSummit(summitnum) {
  let sum = 0;
  for(let i=1;i<summitnum;i++) {
    console.log(sum += i );
    if(sum == summitnum) {
      // console.log()
      break;
    }
  }
  return sum
}
function calcSummit2(summitnum) {
  let sum = 0;
  let part = [];
  for(let i=1;i<=summitnum;i++) {
    console.log(i);
    part.push(i)
    sum += i;   
}
return sum;
// return(`${summitnum} -> ${sum} (${part.join("+")})`);
  }
  
// let Array_4 = 
let Array_5 = calcSummit2(5);
console.log(Array_5)
// console.log(Array_4)

//question 9 
let numArray2 = [80,57,21,50,71,3,94,12,18];
console.log(numArray2);
let newArr = numArray2.flat();
newArr.sort(function(a,b){return a - b});
let newArrStore = newArr.slice(1,newArr.length-1)
console.log(newArrStore);

function midSum(newArrStore) {
  let sum = 0;
  for(let i=0;i < newArrStore.length;i++) {
    sum += newArrStore[i];
  }
  return(`{${numArray2}} => (${sum}) sum of array except hightest and lowest numbers`)
}
let Array_6 = midSum(newArrStore)
console.log(Array_6)

//question 10
function removeAllSpaces(str) {
  return str.trim().replace(" ", "");
}

console.log(removeAllSpaces(" Hello   World  what's   up "));

//question 11
function DNATORNA(dna) {
  return dna.replaceAll("T","U");
}
let DNA = "GCATTTT";
console.log(DNATORNA(DNA))

//question 12
let Array3 = [7, 38, 87, 43, 90 ,12, 46];

function lowestNum(ar) {
  ar.sort(function(a,b){return a-b})
  return ar[0];
}
console.log(lowestNum(Array3))

//question 13
class rentingCar {
  constructor(cost, days) {
    this.cost = cost;
    this.days = days;
    
  }
  Total() {
    return this.cost * this.days;
  }
  threeDays() {
    return (this.cost * this.days) - 20;
  }
  oneWeek() {
     return (this.cost * this.days) - 50;
  }
  tenDays() {
    return (this.cost * this.days) - 70;
  }
  Price() {
    if(this.days < 7 && this.days >= 3) {
      console.log(`your total discount will be ${this.threeDays()}$`);
    }
    else if(this.days >= 7 && this.days < 10) {
        console.log(`your total discount will be ${this.oneWeek()}$`);   
      }  
    else if(this.days >= 10) {
        console.log(`your total discount will be ${this.tenDays()}$`);
      }
    
  }
}
const Car1 = new rentingCar("40","12");
console.log(`${Car1.oneWeek()}$`)
console.log(`${Car1.Total()}$`)
console.log(Car1.Price())

//question 14
let str3 = "hello! saad! how! are you !"
let str4 = "hello! saad! how! are you !"
function removeExc(str, str2) {
  return [str.replaceAll(/saad/g, "champak"),str2.replaceAll(/!/g, "")]
}
console.log(removeExc(str3, str4))

// demo
let data = ["saad@gmail.com"];
let emptydata = [];
function askEmail() {
  let email = "saad@gmail.com";
  let pass = 'saad1234';
  if (!email.endsWith("@gmail.com") ) {
    alert("Please enter a valid Gmail address!");
    // prompt("Enter your Gmail address:");
  } 
  // else {
  //   alert("Thanks! Your email: " + email);
  //   alert("Thanks! Your password: " + pass);
  // }
  if (email == data) {
    console.log("hello")
  }
  emptydata.push(email);
  emptydata.push(pass);
}
askEmail();
console.log(emptydata);
console.log(data);

let useremail = ["saad@gmail.com"];
let userpass = ["saad1234"];
let userdata = {};
let inputemail = document.getElementById("email");
let inputpass = document.getElementById("pass");
let popUp = document.getElementById("popup-div");
let underinp1 = document.getElementById("underinput1");
let underinp2 = document.getElementById("underinput2");

function openInput() {

  let text = inputemail.value;
  let text2 = inputpass.value;
  console.log(`username ${text}`,`password ${text2}`);
  if(text == useremail && text2 == userpass) {
    popUp.style.display = "flex";
    setTimeout(() => {
      popUp.style.display = "none";
    }, 3000);
  }
  if(text != useremail && text2 == userpass) {
    underinp1.style.display = "flex";
  } else {
    underinp1.style.display = "none";
  }
  if(text == useremail && text2 != userpass) {
    underinp2.style.display = "flex";
  } else {
    underinp2.style.display = "none";
  }
  userdata.email = text;
  userdata.password = text2;
}
let multidata = ["saad","hamza","hassan","taha","zain",'rabees','rehan','asher','gufran'];
function accessData(list) {
  for( let i of list) {
    console.log(i)
  }
}
// let i = 0;
// let increment = setInterval(()=> {
  
//   if( i >= multidata.length) {
//     clearInterval(increment);
//   } 
//   else {
//     console.log(multidata[i]);
//     i++;
//   }
// },500)

// accessData(multidata);

let multiDataEmail = ["saad@gmail.com","hamza@gmail.com","hassan@gmail.com"];
let userinfo = "hamza@gmail.com";
let found = false;
function checkData(list) {
  for(let i=0;i < list.length;i++) {
    console.log(`${i}.${list[i]}`);
    if(list[i] == userinfo ){
      console.log("match at index:", i);
      found = true;
      break;
    }
    if(i === list.length-1 && !found) {
      console.log("not match")
    }
  }
}
checkData(multiDataEmail);

//question 15
let arr3 = [2,-7,9,-16,-8,15,11,-4];
function ArrSum() {
  let sum = 0;
  for(let i of arr3) {  
    if(i > 0) {
      sum += i;
      
    }
  }
  console.log(sum)
}
ArrSum()

//question 16
let arr4 = [1,2,3,4,5];
function Fact() {
  let prod = 1;
  for(let i of arr4) {
    prod *= i;
    
  }
  console.log(prod)
}
Fact()

//question 17
let months = ["jan","feb","march","april","may","june","july","august","sept","octo","nov","dec"]
function getMonths() {
  let num = 0;
  while(num <= months.length-1) {
    console.log(months[num])
    num++;
    if(num <= 3) {console.log("first quadrant month")}
    else if(num <= 6) {console.log("second quadrant month")}
    else if(num <= 9) {console.log("third quadrant month")}
    else  {console.log("fourth quadrant month")}
  }
}
getMonths()

//rank up
//question 18
let numArr = [];
function getMultiple(varible) {
  let num_1 = 3;
  let num_2 = 5;
  for(let i = 1;i < varible ;i++) {
   
    if(i%num_1 === 0 || i%num_2 === 0) {
      numArr.push(i);
    }
  }
  console.log(numArr)
  let sum = 0;
  for(let j of numArr) {
    sum += j
  }
  console.log(sum)
}
getMultiple(50);

//question 19
let lista = [2,4,6,8,9,5,5];
let listb = [1,3,5,7,8,9];
let listc = []
function removeData() {
  let i = 0;
  while(i < Math.max(lista.length, listb.length)){ 
    console.log(lista[i], listb[i])
    i++;
    if(lista === listb) {
      listc.push(lista)
      console.log("hello")
    }
  }
  console.log(listc)
}
removeData()

function addToList() {
  return lista.filter((item) => !listb.includes(item))//if listb does not include the item than return it
}
console.log(addToList())

let morse = "Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript/Groovy: MORSE_CODE['.--']"
console.log(morse)

// Save array to localStorage
let fruits = JSON.parse(localStorage.getItem("fruits")) || []; // get existing or empty
// fruits.push("mango");
localStorage.setItem("fruits", JSON.stringify(fruits));
localStorage.clear()

console.log("Saved:", fruits);


  function addFruit() {
    let fruit = document.getElementById("fruitInput").value;

    // get existing array or make new
    let fruits = JSON.parse(localStorage.getItem("fruits")) || [];

    // add new fruit
    fruits.push(fruit);

    // save back
    localStorage.setItem("fruits", JSON.stringify(fruits));

    // show on page
    document.getElementById("output").innerText = fruits.join(", ");
  }
  // let prop = prompt("enter a password :")
let passwords = ["saad123", "hamza123", "zain123"];
let value2 = document.getElementById("fruitInput").value;
localStorage.setItem("passwords","taha1234");
document.getElementById("medo").innerHTML = localStorage.getItem("passwords") || [];
console.log(passwords);
//search bar which matches the title 
//addtocart & create account
//digial clock & countdown timer

function updateArray(newItem) {
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  arr.push(newItem);
  localStorage.setItem("arr", JSON.stringify(arr));
  return arr;
}

let input = updateArray(value2);
console.log(input)

