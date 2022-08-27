
let userdata = JSON.parse(localStorage.getItem('user_data')) ;
let div_sign_Con_btn_ns = document.getElementById("div_sign_Con_btn_ns")
let sign_button = document.getElementById("div_sign_regbtn_ns")
let div_password = document.getElementById("login_input_div1")
let email = document.getElementById("Insert_email_ns")


let Con_btn_ns = () =>{
    if(email.value !="" ){
        div_sign_Con_btn_ns.style.display = "none";
        div_password.style.display = "block";
        sign_button.style.display = "block";
    }

}


let signINbtn_ns = () =>{
let email = document.getElementById("Insert_email_ns").value;
let password = document.getElementById("Insert_password_ns").value;
console.log(email, password);

    if(email == userdata[0].email && password == userdata[0].password){
        alert("login Successfull!");
        window.location.href="index.html";
    }else{
        alert("login Failured! please try again");
    }
}


