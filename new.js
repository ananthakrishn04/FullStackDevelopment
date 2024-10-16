//validate form

function validateForm(e) {
    e.preventDefault();
    var valid = true;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var messageError = document.getElementById("messageError");

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
        
