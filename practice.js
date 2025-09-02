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

let arr = ["saad", "hamza", 'hassan', 'taha', 'zain'];
let arr2 = [1,2,3,4,5];
function calcSqr(x) {
  console.log(x*x);
}
let calcSquare = (numx) => {
  console.log(numx*numx);
}
arr2.forEach(calcSquare);

arr.forEach((val,idx) => {
  console.log(val,idx)
});
arr.map((numn) => {
  console.log(numn)
});
let evenArray = [1,2,3,4,5,6,7,8,9,10];
let even = evenArray.filter((val) => {
  return (val % 2 === 0)
});
console.log(even)

let red = evenArray.reduce((res, curr) => {
  return res + curr;
});
console.log(red)
let big = evenArray.reduce((res, curr) => {
  return res > curr ? res : curr;
});
console.log(big)

let stuMarks = [67, 90,87,39,92,96]

let checkPos = stuMarks.filter((val) => {
  return val >= 90;
})
console.log(checkPos)

let prop = prompt("enter any number :");
let emptyArray = [];
  for (let i = 1;i <= prop;i++) {
    emptyArray[i-1]=i;
  }

console.log(emptyArray)
let sum = emptyArray.reduce((res, curr) => {
  return res + curr;
})
console.log(sum)
let prod = emptyArray.reduce((res, curr) => {
  return res * curr;
})
console.log(prod)
function Time(time) {
    let d = new Date()
    let txt = d.toLocaleTimeString();
    if (time === txt.toString().padStart) {
        console.log("it matches the time")
    } else {
        console.log("not a match")
    }
    return d.toLocaleTimeString();
}
let val = Time("11:05")
console.log(val)


const d = new Date();
let nowtime = d.toLocaleTimeString();
console.log(nowtime)

const checkTime = (num) => {
    num.toString().padStart(4,"0")}
    const hour = d.getHours();
    const mins = d.getMinutes();
    
    const fix_time = `${hour}:${mins}`;
    // fix_time.padStart(4,"0")
    if (num === fix_time) {
        console.log("alarm, wake up")
    } else {
        console.log("be ready")
    }
    console.log(num," & ",fix_time)

 const chk = checkTime("11:09");
 console.log(chk)


const start = "start";
console.log(start);
setTimeout (() => {
    console.log("run after 3 seconds");
    console.log(stop);
}, 3000);
const stop = "stop";


let timeoutId = setTimeout(() => {
  console.log("Will not run");
}, 5000);


const now = new Date();

const time = now.toLocaleTimeString(); // Locale-based time format
console.log(time);

const pad = (num) => num.toString().padStart(2, '0');

const h = pad(now.getHours());
const m = pad(now.getMinutes());
const s = pad(now.getSeconds());

console.log(`${h}:${m}:${s}`);


const now1 = new Date();

const time2 = now1.toLocaleTimeString(); // Locale-based time format
console.log(time2);
const pad3 = (n) => n.padStart(3, "0");

let hours = now1.getHours();    // "07"
let minutes = now1.getMinutes();
let seconds = now1.getSeconds();  // "04"
 
let fixTime = `${hours}:${minutes}:${seconds}`;
console.log(fixTime.padStart(3,"0"));

console.log(pad3("11:08:56"))  // "07:04"

const call = (no) => no.toString().padStart(2,"0");
const num1 = call(2);
const num2 = call(5);
console.log(`${num1}:${num2}`)
// const get= new Date();
// const getTime = get.toLocaleTimeString();
// console.log(getTime)
const callAgain = (getTime) => getTime.toString().padStart(4,"7");
let value = callAgain(Date.toLocaleTimeString)
console.log(value)


const currentIndex = 0;

function updateSlide() {
    const slider = document.getElementById("slider");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

  function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlide();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
    }
  }

function Toggle() {
  const body = document.getElementById("para");
  body.classList.toggle("show")
}

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
    part.push(i);
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
let numArray2 = [80,57,21,50,71,3,94,12,18]
numArray2.sort(function(a,b){return a - b});
console.log(numArray2);
let newArr = numArray2.flat();
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
  return str.replace(/\s+/g, "");
}

console.log(removeExtraSpaces(" H e l l o   W o r l d "));
// Output: "HelloWorld"
