const Letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = "0123456789" 
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const Password = document.getElementById("password");
const button = document.getElementById("Button");
function validEmail() {
const emailIs = email.value;
if (emailIs.includes("@") === false) {
  alert("on email @ has to include ");
}
}
function validPhone(){
let phoneIs = phoneNumber.value;
for(let i = 0; i < phoneIs.length; i++){
    if(numbers.includes(phoneIs[i]) == false) {
        return alert("Only number on (Phone)")
    }
}
}
function validPassWord() {
let passwordIs = Password.value;
for(let i = 0; i <passwordIs.length; i++) 
if(passwordIs.length < i++) {
return alert("must contain 8 character minimum")
}
}
button.addEventListener("click", function (){
validEmail();
validPhone();
validPassWord()
localStorage.setItem("email", email.value)
localStorage.setItem("phone", phoneNumber.value)
localStorage.setItem("password", Password.value)

window.location.href = "list.html"

    });