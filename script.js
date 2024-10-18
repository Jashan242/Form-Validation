const form=document.getElementById('signUp-form');

const userContainer=document.getElementById("username-container");
const userInput=document.getElementById("username-input");
const userError=userContainer.querySelector(".user-error");

const emailContainer=document.getElementById("email-container");
const emailInput=document.getElementById("email-input");
const emailError=emailContainer.querySelector(".email-error");

const passwordContainer=document.getElementById("password-container");
const passwordInput=document.getElementById("password-input");
const passwordError=passwordContainer.querySelector(".pwd-error");

const confirmContainer=document.getElementById("confirmPassword-container");
const confirmInput=document.getElementById("confirmPassword-input");
const confirmError=confirmContainer.querySelector(".cPwd-error");

const passwordBtn=document.getElementById('password-btn');

let usernameErrors=[];
let emailErrors=[];
let passwordErrors=[];
let confirmPasswordErrors=[];

function toggle(){
    const type=passwordInput.getAttribute("type");
    if(type==="password"){
        passwordInput.setAttribute("type", "text");
        passwordBtn.textContent="Hide Password";
    }
    else{
        passwordInput.setAttribute("type", 'password');
        passwordBtn.textContent="Show Password";
    }
}

passwordBtn.addEventListener("click", toggle);

function validateUsername(value){
    if(value.length===0)
        // usernameErrors.push("Username is required");
        userError.textContent="Username is required";
    else if(value.length<5)
        userError.textContent="Atleast minimum length should be 5";
    else if(value.length>12)
        userError.textContent="Maximum length should not exceed 12 characters";
    else if(value.toLowerCase()==="username")
        userError.textContent="Username can't be taken";
    else if(value.includes('-') || value.includes('@') || value.includes('#') || value.includes('$') || 
        value.includes('%') || value.includes('^') || value.includes('&') || value.includes('*') || value.includes('(') ||
        value.includes(')') || value.includes('+') || value.includes('=') || value.includes('{') || value.includes('}') || 
        value.includes('[') || value.includes(']') || value.includes(';') || value.includes(':') || value.includes('<') || 
        value.includes('>') || value.includes('?') || value.includes('/') || value.includes(',') || value.includes('.') || 
        value.includes('`') || value.includes('~') || value.includes('|') || value.includes('!'))
        userError.textContent="Username must not contain special character";
    else{
        userError.innerText="";
        return true;
    }
    return false;
}


function validateEmail(value){
    if(value.length==0) emailError.textContent="Email is required";
    else if(!value.includes('@')) emailError.textContent="@ is required"
    else {
        emailError.textContent = "";
        return true;
    }
    return false;
}

function uppercaseCheck(value){
    for(const char of value){
        if(char===char.toUpperCase()) return true;
    }
    return false;
}

function lowercaseCheck(value){
    for(const char of value){
        if(char===char.toLowerCase()) return true;
    }
    return false;
}

function validatePassword(value) {
    const specialChars = "-@#$%^&*()_+={}[]:;<>,.?`~|!";
    const numbers = "0123456789";
    let hasSpecialChar = false;
    let hasNumber = false;
    let hasUppercase = false;
    let hasLowercase = false;

    if(value.length<8 || value.length>12) {
        passwordError.textContent = "Minimum length should be 8 and maximum length should not exceed 12 characters";
        return false;
    }

    for (let i = 0; i < value.length; i++) {
        const char = value[i];

        if (specialChars.includes(char)) {
            hasSpecialChar = true;
        }

        if (numbers.includes(char)) {
            hasNumber = true;
        }

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }

        if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        }

        if (char === ' ') {
            passwordError.textContent = "Password must not contain a space character";
            return false;
        }
    }

    if (!hasSpecialChar) {
        passwordError.textContent = "Password must include a special character";
        return false;
    }
    if (!hasNumber) {
        passwordError.textContent = "Password must contain a number";
        return false;
    }
    if (!hasUppercase) {
        passwordError.textContent = "Password must contain an uppercase character";
        return false;
    }
    if (!hasLowercase) {
        passwordError.textContent = "Password must contain a lowercase character";
        return false;
    }

    passwordError.textContent = "";
    return true;
}


// function validatePassword(value){

//     // if(value.length < 8 || value.length > 12){
//     //     passwordError.textContent="Minimum length should be 8 and maximum length should not exceed 12 characters";
//     //     return false;
//     // }

//     // const specialChars = "-@#$%^&*()_+={}[]:;<>,.?`~|!";
//     // const numbers = "0123456789";
//     // let hasSpecial = false;
//     // let hasNumber = false;
//     // let hasUpper = false;
//     // let hasLower = false;

//     // for(const char of value){

//     //     if(specialChars.includes(char)) hasSpecial=true;
//     //     else if(numbers.includes(char)) hasNumber=true;
//     //     // else if(char===char.toLowerCase()) hasLower=true;
//     //     // else if(char===char.toUpperCase()) hasUpper=true;

//     //     if (char >= 'A' && char <= 'Z') {
//     //         hasUpper = true;
//     //     }

//     //     // Check for lowercase letter
//     //     if (char >= 'a' && char <= 'z') {
//     //         hasLower = true;
//     //     }
//     // }

//     // if(hasSpecial===false)
//     //     passwordError.textContent="Password must include a special character";
//     // else if(value=" ")
//     //     passwordError.textContent="Password must not contain a space character";
//     // else if(hasNumber===false)
//     //     passwordError.textContent="Password must contain a number";
//     // else if(hasLower===false)
//     //     passwordError.textContent="Password must contain a lowercase character"
//     // else if(hasUpper===false)
//     //     passwordError.textContent="Password must contain an uppercase character"
//     // else{
//     //     passwordError.innerText="";
//     //     return true;
//     // }
//     // return false;


//     // else if(!value.includes('-') || !value.includes('@') || !value.includes('#') || !value.includes('$') || 
//     //     !value.includes('%') || !value.includes('^') || !value.includes('&') || !value.includes('*') || !value.includes('(') ||
//     //     !value.includes(')') || !value.includes('+') || !value.includes('=') || !value.includes('{') || !value.includes('}') || 
//     //     !value.includes('[') || !value.includes(']') || !value.includes(';') || !value.includes(':') || !value.includes('<') || 
//     //     !value.includes('>') || !value.includes('?') || !value.includes('/') || !value.includes(',') || !value.includes('.') || 
//     //     !value.includes('`') || !value.includes('~') || !value.includes('|') || !value.includes('!'))
//     //     passwordError.textContent="Password must include a special character";
//     // else if(value.includes(" "))
//     //     passwordError.textContent="Password must not contain a space character";
//     // else if(!value.includes(0) || !value.includes(1) || !value.includes(2) || !value.includes(3) || !value.includes(4) || 
//     //     !value.includes(5) || !value.includes(6) || !value.includes(7) || !value.includes(8) || !value.includes(9))
//     //     passwordError.textContent="Password must contain a number";
//     // else if(uppercaseCheck(value)===false) 
//     //     passwordError.textContent="Password must contain an uppercase character"
//     // else if(lowercaseCheck(value)===false)
//     //     passwordError.textContent="Password must contain a lowercase character"
//     // else{
//     //     passwordError.innerText="";
//     //     return true;
//     // }
//     // return false;
// }

function confirmPass(value){
    if(confirmInput.value=="")  
        confirmError.textContent="Confirm your password"
    else if(passwordInput.value!==confirmInput.value){
        confirmError.textContent="Passwords are mismatched";
        
    }
    else{
        confirmError.textContent=""
        return true;        
    }
    return false;
}

function handleForm(event){
    event.preventDefault();

    const isUserValid=validateUsername(userInput.value);
    const isEmailValid=validateEmail(emailInput.value);
    const isValidPassword=validatePassword(passwordInput.value);
    const isConfirm=confirmPass(confirmInput.value);
    if(isUserValid && isEmailValid && isValidPassword  && isConfirm){
        confirmError.textContent="";
        console.log("Form is submitted");
        alert("Form is submitted");
        form.reset();
    }

    // if(userInput.value.length===0) 
    //     usernameErrors.push("Username is required");
    //     userError.textContent="Username is required";

    // else if(userInput.value.toLowerCase()==="username") 
    //     userError.textContent="Username can't be taken";
    

    // else if(passwordInput.value!==confirmInput.value)
    //     confirmError.textContent="Password didn't matched";

    // else{
    //     console.log(
    //         "Username :",
    //         userInput.value,
    //         "\nEmail :",
    //         emailInput.value,
    //         "\nPassword :",
    //         passwordInput.value

    //     );
    // }
}

form.addEventListener("submit", handleForm);