let arr = []


let signup_data = () =>{

    let email = document.getElementById('sign_email_ns').value;
    let password = document.getElementById('sign_password_ns').value;
    let Cpassword = document.getElementById('sign_Cpassword_ns').value;
    let checkbox = document.getElementsByClassName("chec1_ns").value;
    

if(email == "" || password == "" || Cpassword == ""){
    alert("Please fill your input fields");

}else{
    if(password != Cpassword){
        alert("Please enter your password correctly");
    }
    if(checkbox == ""){
        alert("Please select the terms and conditions");
    }
    
let obj = {
    email : email,
    password : password,
    Cpassword : Cpassword
}

arr.push(obj);
localStorage.setItem('user_data', JSON.stringify(arr));
window.location.href="login.html"
}
    
 
}