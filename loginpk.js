let data = ["saad@gmail.com"];
let emptydata = [];
function askEmail() {
  let email = "saad@gmail.com";
  let pass = "saad1234";
  if (!email.endsWith("@gmail.com") && !pass.endsWith("@gmail.com")) {
    // alert("Please enter a valid Gmail address!");
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
    //   window.open("footballshirtspk.htm","_self");
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
// accessData(multidata);
let j = 0;
let increment = setInterval(()=> {
  
  if( j >= multidata.length) {
    clearInterval(increment);
  } 
  else {
    console.log(multidata[j]);
    j++;
  }
},300)



let multiDataEmail = ["saad@gmail.com","hamza@gmail.com","hassan@gmail.com"];
let multiDataPassword = ["saad1234","hamza1234","hassan1234"]
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
// checkData(multiDataEmail);

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

function login() {
    let emailvalue = inputemail.value;
    let passvalue = inputpass.value;
    for(let i=0;i < Math.min(multiDataEmail.length, multiDataPassword.length) ;i++) {
        console.log(`${i}.${multiDataEmail[i]} & ${i}.${multiDataPassword[i]}`);
        if(multiDataEmail[i] == emailvalue && multiDataPassword[i] == passvalue ){
            console.log('email has matched',i,multiDataEmail[i]);
            found = true;
            confirm("login was successful")
            popUp.style.display = "flex";
             setTimeout(() => {
                    popUp.style.display = "none";
                    window.open("footballshirtspk.htm","_self");
                }, 3000);
            
            break;
        }
    }
        if(!found) {
            console.log("Email or password not matched")
        }
        
    }
    

// login();

let createAccEmail = document.getElementById("emailacc");
let createAccPass = document.getElementById("passacc");
function addEmail() {
    let AccEmail = createAccEmail.value;
    multiDataEmail.push(AccEmail);
    console.log(multiDataEmail)
}
