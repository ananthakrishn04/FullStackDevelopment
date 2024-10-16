// form validation

// Form validation
document.getElementById("register_form").addEventListener("submit",function validateForm(e) {

    e.preventDefault();

    var valid = true;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var male = document.getElementById("maleradio").checked;
    var female = document.getElementById("femaleradio").checked;


    var country = document.getElementById("country").value;


    var messageError = document.getElementById("messageError");

    var email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    switch(name){
        case "":
            valid=false;
            messageError.innerHTML = "Please enter your name";
            break;
        case " ":
            valid=false;
            messageError.innerHTML = "Please enter your name";
            break;
        default:
            if (name.length < 3) {
                valid = false;
                messageError.innerHTML = "Name must be at least 3 characters";
            } else {
                messageError.innerHTML = "";
            }
    }

    if(!valid){return false;}


    switch(email){
        case "":
            valid=false;
            messageError.innerHTML = "Please enter your email";
            break;
        case " ":
            valid=false;
            messageError.innerHTML = "Please enter your email";
            break;
        default:
            
            if (!email_pattern.test(email)) {
                console.log("email: ", email_pattern.test(email));
                messageError.innerHTML = "Wrong email format";
                valid=false;
            }else{
                messageError.innerHTML = "";
            }
    }

    if(!valid){return false;}

    switch(password){
        case "":
            valid=false;
            messageError.innerHTML = "Please enter your password";
            break;
        case " ":
            valid=false;
            messageError.innerHTML = "Please enter your password";
            break;
        default:
            if (password.length < 6) {
                valid = false;
                messageError.innerHTML = "Password must be at least 6 characters";
            } else if (password != confirmPassword && confirmPassword != ""){
                valid=false; 
                messageError.innerHTML = "Passwords do not match";
            }else if(confirmPassword == ""){
                valid=false;
                messageError.innerHTML = "Do Confirm Your Password";
            }else{
                messageError.innerHTML = "";
            }

            break;
    }

    if(!valid){return false;}


    if(male || female){
        messageError.innerHTML = "";
    }else if(male == false && female == false){
        messageError.innerHTML = "Please select your Gender";
        valid=false;
    }


    if(!valid){return false;}


    switch(country){
        case "":
            valid=false;
            messageError.innerHTML = "Please select your country";
            break;
        case " ":
            valid=false;
            messageError.innerHTML = "Please select your country";
            break;
        default:
            messageError.innerHTML = "";
    }


    if(!valid){return false;}


    e.target.submit();


    // if (email == "") {
    //     messageError.innerHTML = "Please enter your email";
    //     valid = false;
    // } else {
    //     messageError.innerHTML = "";
    // }

    // if (phone == "") {
    //     messageError.innerHTML = "Please enter your phone number";
    //     valid = false;
    // } else {
    //     messageError.innerHTML = "";
    // }

    // if (message == "") {
    //     messageError.innerHTML = "Please enter your message";
    //     valid = false;
    // } else {
    //     messageError.innerHTML = "";
    // }

    // console.log("Running validateForm");
    

    
});